import { GitHubUser } from '../types';

interface FooterProps {
  user: GitHubUser;
}

export function Footer({ user }: FooterProps) {
  return (
    <footer className="mt-20 pt-8 border-t border-zinc-800/50 text-center text-sm text-zinc-500 flex flex-col items-center justify-center gap-2">
      <p>© {new Date().getFullYear()} {user.name || user.login}. Todos os direitos reservados.</p>
      <p className="flex items-center gap-1">
        Desenvolvido com React & Tailwind CSS
      </p>
    </footer>
  );
}
