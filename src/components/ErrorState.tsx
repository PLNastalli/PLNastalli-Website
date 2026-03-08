import { User } from 'lucide-react';

interface ErrorStateProps {
  message: string;
}

export function ErrorState({ message }: ErrorStateProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-zinc-400 p-4 text-center">
      <User className="w-12 h-12 text-red-500 mb-4" />
      <h1 className="text-xl font-medium text-zinc-200 mb-2">Erro ao carregar perfil</h1>
      <p>{message}</p>
    </div>
  );
}
