import { motion } from 'motion/react';
import { Code } from 'lucide-react';
import { useGitHubData } from './hooks/useGitHubData';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorState } from './components/ErrorState';
import { Header } from './components/Header';
import { ProjectCard } from './components/ProjectCard';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';

export default function App() {
  const username = 'PLNastalli';
  const { user, repos, loading, error } = useGitHubData(username);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !user) {
    return <ErrorState message={error || 'Não foi possível carregar os dados do GitHub.'} />;
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-emerald-500/30">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        <Header user={user} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Main Content - Left Column (2/3) */}
          <div className="md:col-span-2 space-y-16">
            
            {/* Projects Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Code className="w-6 h-6 text-emerald-500" />
                <h3 className="text-2xl font-semibold text-zinc-100">Projetos Recentes</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {repos.map((repo, index) => (
                  <ProjectCard key={repo.id} repo={repo} index={index} />
                ))}
              </div>
            </motion.section>

            <ExperienceTimeline />

          </div>

          {/* Sidebar - Right Column (1/3) */}
          <Sidebar user={user} />

        </div>
        
        <Footer user={user} />
      </div>
    </div>
  );
}
