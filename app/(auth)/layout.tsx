import { Toaster } from '@/components/ui/toaster';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-y-4">
      <nav className="p-2 bg-red-500">Auth Layout Navbar</nav>
      <main className="container">{children}</main>
      <Toaster />
    </div>
  );
}
