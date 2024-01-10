import RegisterTest from '@/components/pages/register-test';
import { Skeleton } from '@/components/ui/skeleton';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Register',
};

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-normal">
      <Suspense fallback={<Skeleton />}>
        <RegisterTest />
      </Suspense>
    </div>
  );
}
