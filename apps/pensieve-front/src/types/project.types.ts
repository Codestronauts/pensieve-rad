import { Nullable } from '@/api/apiService';

export interface CreateProjectBody {
  projectName: string;
  projectDescription: string;
  projectImg?: Nullable<string>;
}

export interface ProjectResponse extends CreateProjectBody {
  id: string;
  createdAt: string;
}
