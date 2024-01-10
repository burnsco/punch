import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-y-4">
      <header className="bg-slate-300 ">
        <SignedIn>
          {/* Mount the UserButton component */}
          <UserButton />
        </SignedIn>
        <SignedOut>
          {/* Signed out users get sign in button */}
          <SignInButton />
        </SignedOut>
      </header>

      <main className="container">{children}</main>
    </div>
  );
}
