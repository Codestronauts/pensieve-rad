import { useMutation, useQuery } from '@tanstack/react-query';

import { CreateProjectBody, ProjectResponse } from '@/types/project.types';
import { ApiServiceErr, MutOptions, axiosApi } from './apiService';

export const useCreateProject = (opt?: MutOptions<ProjectResponse>) =>
  useMutation<ProjectResponse, ApiServiceErr, CreateProjectBody>(async (data) => {
    const response = await axiosApi.post('projects', data);
    return response.data;
  }, opt);

export const useGetProjects = () =>
  useQuery<ProjectResponse[], ApiServiceErr>(['projects'], async () => {
    const response = await axiosApi.get('projects');
    return response.data;
  });
