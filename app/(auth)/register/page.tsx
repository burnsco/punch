'use client';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import Image from 'next/image';

export default function RegisterPage() {
  const { toast } = useToast();
  return (
    <section>
      <h3 className="text-xl font-semibold">Register Page</h3>
      <div className="w-[450px]">
        <Image
          width={200}
          height={300}
          src="/images/california.jpg"
          alt="Landscape photograph by Tobias Tullius"
          className="rounded-md object-cover"
        />
      </div>
      <Button
        onClick={() => {
          toast({
            title: 'Scheduled: Catch up',
            description: 'Friday, February 10, 2023 at 5:57 PM',
          });
        }}
      >
        Show Toast
      </Button>
    </section>
  );
}
