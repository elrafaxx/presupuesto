import Image from 'next/image';
import Inicio from '@/components/component/Inicio';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Inicio />
    </main>
  );
}

