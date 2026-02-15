'use client';

import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
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
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
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
        setError('Kunde inte ladda live-data.'); 
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchSensors();
    const interval = setInterval(fetchSensors, 60000);
    return () => clearInterval(interval);
  }, []);

  const SensorBlock = ({ sensor, index }: { sensor: SensorData, index: number }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col items-center justify-center p-6 bg-zinc-900/40 border border-zinc-800 rounded-xl relative overflow-hidden group hover:border-zinc-700 transition-colors"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <span className="text-3xl mb-3 filter grayscale group-hover:grayscale-0 transition-all duration-500">{getSensorIcon(sensor.id)}</span>
      <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-1">{getTranslatedName(sensor.name)}</h4>
      <p className="text-2xl font-display font-medium text-white">
        {parseFloat(sensor.state).toFixed(1)}
        <span className="text-sm ml-1 text-zinc-400 font-normal">{sensor.unit}</span>
      </p>
    </motion.div>
  );

  if (error) return null; // Hide completely on error for cleaner look, or show minimal error

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6 px-1">
        <h3 className="text-sm font-mono uppercase tracking-widest text-zinc-400">
          {t.showcase.liveData.title}
        </h3>
        <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs text-zinc-600 font-mono hidden md:inline-block">LIVE</span>
        </div>
      </div>
      
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
           {[...Array(3)].map((_, i) => (
             <div key={i} className="h-32 bg-zinc-900/20 rounded-xl animate-pulse border border-zinc-800/50" />
           ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sensors.map((sensor, i) => (
            <SensorBlock key={sensor.id} sensor={sensor} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
