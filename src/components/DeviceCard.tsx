import { motion } from "framer-motion";

interface Props {
  name: string;
  isOn: boolean;
  onToggle: () => void;
}

export default function DeviceCard({ name, isOn, onToggle }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={\`rounded-2xl p-6 shadow-lg cursor-pointer transition-colors duration-300 \${isOn ? "bg-green-100" : "bg-red-100"}\`}
      onClick={onToggle}
    >
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="mt-2 text-lg">
        Status: <span className="font-semibold">{isOn ? "ON" : "OFF"}</span>
      </p>
    </motion.div>
  );
}
