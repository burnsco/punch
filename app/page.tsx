import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <main className="flex h-full border-2 border-red-500">
      <nav>
        <menu>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/dashboard">Dash</Link>
          </li>
          <li>
            <Link href="folder">Folder</Link>
          </li>
        </menu>
      </nav>

      <Button size="lg" variant="destructive">
        Click ME
      </Button>
      <Button size="lg" variant="ghost">
        Press Me
      </Button>
    </main>
  );
}
