'use client';

import { useState, useEffect } from 'react';

interface SensorData {
  id: string;
  name: string;
  state: string;
  unit: string;
}

const getSensorIcon = (id: string) => {
  if (id.includes('pv_output') || id.includes('solar')) return '☀️';
  if (id.includes('capacity') || id.includes('battery')) return '🔋';
  if (id.includes('temperature')) return '🌡️';
  return '📡';
};

const formatSensorName = (name: string): string => {
    const replacements: { [key: string]: string } = {
        "EMMA PV output power": "Produktion Solceller",
        "EMMA State of capacity": "Batteri",
        "Ngenic Controller Temperature": "Utomhustemperatur"
    };
    return replacements[name] || name;
};


export default function HomeAssistantSensors() {
  const [sensors, setSensors] = useState<SensorData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSensors() {
      try {
        setLoading(true);
        const response = await fetch('/api/sensors');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setSensors(data);
        setError(null);
      } catch (err) {
        setError('Kunde inte ladda live-data.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchSensors();
    const interval = setInterval(fetchSensors, 60000); // Uppdatera varje minut

    return () => clearInterval(interval);
  }, []);

  if (error) {
    return (
      <div className="my-8 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-center">
        <p className="text-red-400">{error}</p>
      </div>
    );
  }
  
    if (loading) {
    return (
      <div className="my-8">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl mb-4">Live från mitt smarta hem</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-zinc-800/50 p-4 rounded-lg animate-pulse">
              <div className="h-6 bg-zinc-700 rounded w-3/4 mb-2"></div>
              <div className="h-8 bg-zinc-700 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }


  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl mb-4">Live från mitt smarta hem</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sensors.map(sensor => (
          <div key={sensor.id} className="bg-zinc-800/50 p-4 rounded-lg border border-transparent hover:border-teal-500/50 transition-colors duration-300">
            <p className="text-sm text-zinc-400">{formatSensorName(sensor.name)}</p>
            <p className="text-2xl font-semibold text-zinc-100">
              <span className="mr-2">{getSensorIcon(sensor.id)}</span>
              {parseFloat(sensor.state).toFixed(1)}
              <span className="text-lg ml-1 text-zinc-300">{sensor.unit}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
