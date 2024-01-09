'use client';
import Image from 'next/image';

export default function RegisterPage() {
  return (
    <section>
      <h3>Register Page</h3>
      <div className="w-[450px]">
        <Image
          width={200}
          height={300}
          src="/images/california.jpg"
          alt="Landscape photograph by Tobias Tullius"
          className="rounded-md object-cover"
        />
      </div>
    </section>
  );
}
