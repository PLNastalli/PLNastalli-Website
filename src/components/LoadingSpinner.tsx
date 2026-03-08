import { motion } from 'motion/react';
import { Code } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-zinc-400">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      >
        <Code className="w-8 h-8 text-emerald-500" />
      </motion.div>
    </div>
  );
}
