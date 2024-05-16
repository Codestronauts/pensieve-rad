'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDownIcon } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  const { data } = useSession();
  return (
    <nav className="bg-white shadow flex items-center justify-around">
      <div className="max-w-5xl w-full flex items-center justify-between px-4 py-2">
        <Image src="/pensieve-logo-x.svg" width={160} height={100} alt="Pensieve" />

        <div className="flex items-center">
          <Avatar className="mx-4">
            <AvatarImage src={data?.user?.image || ''} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="cursor-pointer flex gap-1 items-center">
                <p className="font-bold leading-tight">{data?.user?.name || ''}</p>
                <ChevronDownIcon className="ml-1" size={16} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mt-2">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => signOut()}>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
