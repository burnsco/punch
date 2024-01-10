'use client';
import { useUser } from '@clerk/nextjs';

export default function DashboardPage() {
  const { isLoaded, user } = useUser();

  console.log(isLoaded);
  console.log(user);
  if (!user) {
    return <>...loading</>;
  }
  return (
    <section className="flex flex-col">
      <h3 className="text-bold">Dashboard Page</h3>
      <p>user - {user.firstName}</p>
      <p>fullname - {user.fullName}</p>
    </section>
  );
}
