import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-full">
      <header className="bg-slate-300 p-4 ">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </header>

      <main
        className="
        container flex h-full items-center justify-center bg-gradient-to-r
       from-indigo-300 from-10% via-sky-200 via-30% to-emerald-400 to-90%"
      >
        {children}
      </main>
    </div>
  );
}
