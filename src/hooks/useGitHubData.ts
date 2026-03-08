import { useState, useEffect } from 'react';
import { GitHubUser, GitHubRepo } from '../types';

interface UseGitHubDataResult {
  user: GitHubUser | null;
  repos: GitHubRepo[];
  loading: boolean;
  error: string | null;
}

export function useGitHubData(username: string): UseGitHubDataResult {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (!userRes.ok) {
          throw new Error('Usuário não encontrado');
        }
        const userData = await userRes.json();
        setUser(userData);

        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        if (!reposRes.ok) {
          throw new Error('Repositórios não encontrados');
        }
        const reposData = await reposRes.json();
        setRepos(reposData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Falha ao buscar dados');
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchGitHubData();
    }
  }, [username]);

  return { user, repos, loading, error };
}
