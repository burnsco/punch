import { Button } from '@/components/ui/button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <main className="flex border-2">
      <Button size="lg" variant="destructive">
        Click ME
      </Button>
      <Button size="lg" variant="ghost">
        Press Me
      </Button>
    </main>
  );
}
