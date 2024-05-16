import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { ProjectResponse } from '@/types/project.types';
import Image from 'next/image';
import React, { FC } from 'react';

interface ProjectCardI {
  data: ProjectResponse;
}

const ProjectCard: FC<ProjectCardI> = ({ data }) => {
  const { projectName, projectDescription, projectImg } = data;

  return (
    <div className="p-2 hover:shadow-md hover:bg-slate-50 rounded-md shadow-sm">
      <Card className="h-36 flex items-center justify-around">
        <div className="relative w-full h-36 rounded-lg overflow-hidden">
          <Image
            src={projectImg || '/pensieve-icon.svg'}
            layout="fill"
            objectFit="cover"
            alt="Pensieve"
            className="rounded-lg"
          />
        </div>
      </Card>
      <h1 className="text-xl font-semibold leading-tight mt-2 line-clamp-2">{projectName}</h1>
      <p className="text-xs line-clamp-3 leading-tight">{projectDescription}</p>
      <div className="flex justify-between items-center mt-4">
        <p className="text-xs text-slate-600">2 min ago</p>
        <div className="flex">
          <Avatar className="h-6 w-6 -mr-3 border border-white">
            <AvatarImage src="https://avatar.iran.liara.run/public/boy" alt="@shadcn" height={20} width={20} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="h-6 w-6 border border-white">
            <AvatarImage src="https://avatar.iran.liara.run/public/boy" alt="@shadcn" height={20} width={20} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
