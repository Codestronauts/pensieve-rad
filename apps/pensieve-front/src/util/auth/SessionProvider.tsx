'use client';
import { SessionProvider as NextSession, useSession } from 'next-auth/react';
import { redirect, usePathname } from 'next/navigation';
import { FC, PropsWithChildren } from 'react';

const AuthCheck: FC<PropsWithChildren> = ({ children }) => {
  const { data } = useSession();
  const pathname = usePathname();
  if (pathname !== '/' && data === null) {
    redirect('/');
  }

  return <>{children}</>;
};

const SessionProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <NextSession>
      <AuthCheck>{children}</AuthCheck>
    </NextSession>
  );
};

export default SessionProvider;
