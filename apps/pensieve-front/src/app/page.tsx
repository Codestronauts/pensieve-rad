'use client';
import TypewriterText from '@/components/Typewriter';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const { data } = useSession();

  return (
    <div className="min-h-screen">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <Image src="/pensieve-text.svg" width={320} height={200} alt="Pensieve" className="mx-auto mb-2" />
        <p className="mb-4 font-light">
          <span className="text-green-700">Elevate you thoughts,</span>{' '}
          <span className="text-blue-600">Empowered by AI ✨</span>
        </p>
        <TypewriterText />
        {data === null ? (
          <button className="bg-slate-800 text-white px-4 py-2 rounded-md mt-8" onClick={() => signIn('auth0')}>
            Login
          </button>
        ) : (
          <Link href={'/dashboard'}>
            <button className="bg-slate-800 text-white px-4 py-2 rounded-md mt-8">Get Started</button>
          </Link>
        )}
      </div>
    </div>
  );
}
