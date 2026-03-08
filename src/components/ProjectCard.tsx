import { motion } from 'motion/react';
import { ExternalLink, Star, GitFork } from 'lucide-react';
import { GitHubRepo } from '../types';
import React from 'react';

interface ProjectCardProps {
  repo: GitHubRepo;
  index: number;
  key?: React.Key;
}

export function ProjectCard({ repo, index }: ProjectCardProps) {
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
      className="group block p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-emerald-500/30 hover:bg-zinc-900 transition-all"
    >
      <div className="flex justify-between items-start mb-3">
        <h4 className="text-lg font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors truncate pr-4">
          {repo.name}
        </h4>
        <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 opacity-0 group-hover:opacity-100 transition-all" />
      </div>
      <p className="text-sm text-zinc-500 mb-4 line-clamp-2 h-10">
        {repo.description || 'Nenhuma descrição fornecida.'}
      </p>
      <div className="flex items-center gap-4 text-xs text-zinc-500 font-mono">
        {repo.language && (
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            {repo.language}
          </div>
        )}
        <div className="flex items-center gap-1">
          <Star className="w-3.5 h-3.5" />
          {repo.stargazers_count}
        </div>
        <div className="flex items-center gap-1">
          <GitFork className="w-3.5 h-3.5" />
          {repo.forks_count}
        </div>
      </div>
    </motion.a>
  );
}
