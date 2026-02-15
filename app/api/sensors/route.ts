import { NextResponse } from 'next/server';

const SENSOR_IDS = [
  'sensor.emma_pv_output_power',
  'sensor.emma_state_of_capacity',
  'sensor.ngenic_controller_temperature',
];

export async function GET() {
  const haUrl = process.env.HOME_ASSISTANT_URL;
  const haToken = process.env.HOME_ASSISTANT_TOKEN;

  if (!haUrl || !haToken) {
    return NextResponse.json(
      { error: 'Home Assistant URL or Token is not configured.' },
      { status: 500 }
    );
  }

  try {
    const sensorPromises = SENSOR_IDS.map(entityId =>
      fetch(`${haUrl}/api/states/${entityId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${haToken}`,
          'Content-Type': 'application/json',
        },
      }).then(res => {
        if (!res.ok) {
          // Return a specific error structure for this sensor
          return { entity_id: entityId, error: true, status: res.status };
        }
        return res.json();
      })
    );

    const results = await Promise.all(sensorPromises);
    
    const data = results.map(result => {
      if (result.error) {
        return {
          id: result.entity_id,
          name: result.entity_id.split('.').pop()?.replace(/_/g, ' ') || 'Unknown Sensor',
          state: 'Error',
          unit: `(status ${result.status})`,
        };
      }
      return {
        id: result.entity_id,
        name: result.attributes.friendly_name || 'Unknown Sensor',
        state: result.state,
        unit: result.attributes.unit_of_measurement || '',
      };
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to fetch from Home Assistant:', error);
    return NextResponse.json(
      { error: 'Failed to connect to Home Assistant.' },
      { status: 500 }
    );
  }
}
