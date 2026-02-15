'use client';

import { useState, useEffect } from 'react';
import { Card } from './UI';
import { useLanguage } from '@/context/LanguageContext';

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

export default function HomeAssistantSensors() {
  const [sensors, setSensors] = useState<SensorData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { t } = useLanguage();

  const getTranslatedName = (name: string): string => {
    // Mappa de engelska namnen från API:t till våra översättningsnycklar
    if (name === "EMMA PV output power") return t.showcase.liveData.sensors.solar;
    if (name === "EMMA State of capacity") return t.showcase.liveData.sensors.battery;
    if (name === "Ngenic Controller Temperature") return t.showcase.liveData.sensors.temp;
    return name;
  };

  useEffect(() => {
    async function fetchSensors() {
      try {
        setLoading(true);
        const response = await fetch('/api/sensors');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        const order = ['pv_output', 'capacity', 'temperature'];
        const sortedData = data.sort((a: SensorData, b: SensorData) => {
            const aIndex = order.findIndex(key => a.id.includes(key));
            const bIndex = order.findIndex(key => b.id.includes(key));
            return aIndex - bIndex;
        });
        setSensors(sortedData);
        setError(null);
      } catch (err) {
        setError('Kunde inte ladda live-data.'); // Detta kan också översättas om vi vill skicka in t.showcase.liveData.error
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchSensors();
    const interval = setInterval(fetchSensors, 60000);

    return () => clearInterval(interval);
  }, []);

  const SensorRow = ({ sensor }: { sensor: SensorData }) => (
    <div className="flex items-center justify-between py-3 border-b border-white/5 last:border-b-0">
      <div className="flex items-center">
        <span className="mr-4 text-xl">{getSensorIcon(sensor.id)}</span>
        <span className="text-zinc-300">{getTranslatedName(sensor.name)}</span>
      </div>
      <p className="text-lg font-mono text-zinc-100">
        {parseFloat(sensor.state).toFixed(1)}
        <span className="ml-2 text-zinc-400">{sensor.unit}</span>
      </p>
    </div>
  );

  const LoadingSkeleton = () => (
      <div className="space-y-2">
          {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center justify-between py-4 border-b border-white/5 last:border-b-0">
                  <div className="h-6 bg-zinc-700 rounded w-1/3"></div>
                  <div className="h-6 bg-zinc-700 rounded w-1/4"></div>
              </div>
          ))}
      </div>
  );

  return (
    <Card title={t.showcase.liveData.title} subtitle={t.showcase.liveData.subtitle}>
        {error && (
            <div className="my-2 p-4 bg-red-900/30 border border-red-500/40 rounded-md text-center">
                <p className="text-red-300 text-sm">{t.showcase.liveData.error}</p>
            </div>
        )}
        {!error && (
            <div className="mt-4">
                {loading ? <LoadingSkeleton /> : sensors.map(sensor => <SensorRow key={sensor.id} sensor={sensor} />)}
            </div>
        )}
    </Card>
  );
}
