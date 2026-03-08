import { motion } from 'motion/react';
import { Github, MapPin, Link as LinkIcon, User } from 'lucide-react';
import { GitHubUser } from '../types';

interface HeaderProps {
  user: GitHubUser;
}

export function Header({ user }: HeaderProps) {
  return (
    <motion.header 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-16"
    >
      <div className="relative">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-zinc-800 p-1">
          <img 
            src={user.avatar_url} 
            alt={user.name || user.login} 
            className="w-full h-full rounded-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.15)] -z-10"></div>
      </div>
      
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-2">
          {user.name || user.login}
        </h1>
        <h2 className="text-xl text-emerald-400 font-medium mb-4 flex items-center gap-2">
          <Github className="w-5 h-5" />
          @{user.login}
        </h2>
        
        {user.bio && (
          <p className="text-zinc-400 text-lg max-w-2xl mb-6 leading-relaxed">
            {user.bio}
          </p>
        )}
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400 mb-6">
          {user.location && (
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>{user.location}</span>
            </div>
          )}
          {user.blog && (
            <a href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
              <LinkIcon className="w-4 h-4" />
              <span>{user.blog.replace(/^https?:\/\//, '')}</span>
            </a>
          )}
          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4" />
            <span>{user.followers} seguidores · {user.following} seguindo</span>
          </div>
        </div>
        
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Disponível para oportunidades PJ / Freelance
        </div>
      </div>
    </motion.header>
  );
}
