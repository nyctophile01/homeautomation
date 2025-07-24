import { useState } from "react";
import DeviceCard from "./components/DeviceCard";

export default function App() {
  const [devices, setDevices] = useState({
    Light: false,
    Fan: false,
    AC: false,
  });

  const toggleDevice = (device: keyof typeof devices) => {
    setDevices((prev) => ({ ...prev, [device]: !prev[device] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">🏠 Home Automation</h1>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {Object.entries(devices).map(([device, isOn]) => (
          <DeviceCard
            key={device}
            name={device}
            isOn={isOn}
            onToggle={() => toggleDevice(device as keyof typeof devices)}
          />
        ))}
      </div>
    </div>
  );
}
