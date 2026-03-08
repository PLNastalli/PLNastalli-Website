import { motion } from 'motion/react';
import { Github, MessageSquare, Code, GraduationCap } from 'lucide-react';
import { GitHubUser } from '../types';

interface SidebarProps {
  user: GitHubUser;
}

const SKILLS = [
  'JavaScript', 'TypeScript', 'React', 'Node.js', 
  'Tailwind CSS', 'Git', 'HTML/CSS', 'SQL', 'Next.js', 'Python'
];

export function Sidebar({ user }: SidebarProps) {
  return (
    <div className="space-y-12">
      {/* Contact / Links */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800/50"
      >
        <h3 className="text-lg font-semibold text-zinc-100 mb-6">Contato</h3>
        <div className="space-y-4">
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-400 hover:text-emerald-400 transition-colors p-2 -mx-2 rounded-lg hover:bg-zinc-800/50">
            <Github className="w-5 h-5" />
            <span>Perfil no GitHub</span>
          </a>
          <div className="flex items-center gap-3 text-zinc-400 p-2 -mx-2 rounded-lg">
            <MessageSquare className="w-5 h-5" />
            <span>Discord: plnastalli</span>
          </div>
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="text-lg font-semibold text-zinc-100 mb-6 flex items-center gap-2">
          <Code className="w-5 h-5 text-emerald-500" />
          Habilidades e Tech
        </h3>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((skill) => (
            <span key={skill} className="px-3 py-1.5 text-sm font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-emerald-500/50 hover:text-emerald-400 transition-colors cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h3 className="text-lg font-semibold text-zinc-100 mb-6 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-emerald-500" />
          Formação
        </h3>
        <div className="space-y-6">
          <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-emerald-500 before:rounded-full">
            <h4 className="font-medium text-zinc-200">Desenvolvedor Autodidata</h4>
            <div className="text-sm text-zinc-400 mb-1">Estudos independentes e documentação</div>
            <div className="text-xs font-mono text-zinc-500">Contínuo</div>
          </div>
          <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-zinc-700 before:rounded-full">
            <h4 className="font-medium text-zinc-200">Cursos Livres e Bootcamps</h4>
            <div className="text-sm text-zinc-400 mb-1">Plataformas online</div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
