import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

export function ExperienceTimeline() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="flex items-center gap-3 mb-8">
        <Briefcase className="w-6 h-6 text-emerald-500" />
        <h3 className="text-2xl font-semibold text-zinc-100">Experiência</h3>
      </div>
      
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
        
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-zinc-950 bg-emerald-500 text-zinc-950 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
          <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/50">
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-semibold text-zinc-200">Desenvolvedor Freelancer / PJ</h4>
              <span className="text-xs font-mono text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">Atual</span>
            </div>
            <div className="text-sm text-zinc-400 mb-3">Projetos Independentes</div>
            <p className="text-sm text-zinc-500">Desenvolvimento de soluções sob medida, automações e aplicações web para clientes diversos. Foco em entregas ágeis e código de qualidade.</p>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
