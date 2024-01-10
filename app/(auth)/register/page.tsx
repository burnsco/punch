'use client';
import { Button } from '@/components/ui/button';
import { BeakerIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { toast } from 'sonner';

export default function RegisterPage() {
  return (
    <section>
      <h3 className="text-xl font-black leading-loose tracking-wider">
        Register Page
      </h3>
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
          toast('My Toast', {
            className: 'description',
            description: 'My description',
            duration: 5000,
            icon: <BeakerIcon className="h-6 w-6 text-blue-500" />,
          });
        }}
      >
        Show Toast
      </Button>
    </section>
  );
}
