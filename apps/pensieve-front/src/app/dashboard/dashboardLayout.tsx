'use client';

import { useGetProjects } from '@/api/project';
import CreateProjectCard from '@/components/CreateProjectCard';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import Searchbox from '@/components/Searchbox';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import React from 'react';

const DashboardLayout = () => {
  const { data: projectsData, refetch: projectsRefetch, isLoading: projectsIsLoading } = useGetProjects();

  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-6">
        <div className="w-full flex items-center justify-between mt-4">
          <h3 className="text-2xl leading-none font-semibold">Projects</h3>

          <div className="flex space-x-2">
            <Tabs defaultValue="organization">
              <TabsList>
                <TabsTrigger value="organization">Organization</TabsTrigger>
                <TabsTrigger value="personal">Personal</TabsTrigger>
              </TabsList>
            </Tabs>
            <Searchbox />
          </div>
        </div>

        <Separator className="mt-4 mb-8" />

        <section className={cn(!projectsIsLoading && 'grid gap-4 sm:grid-cols-3 cursor-pointer')}>
          {projectsIsLoading ? (
            <div className="w-full flex items-center justify-center">
              <Loader className="align-middle" />
            </div>
          ) : (
            <>
              {projectsData?.map((project) => <ProjectCard key={project.id} data={project} />)}
              <CreateProjectCard refetch={() => projectsRefetch()} />
            </>
          )}
        </section>
      </main>
    </>
  );
};

export default DashboardLayout;
