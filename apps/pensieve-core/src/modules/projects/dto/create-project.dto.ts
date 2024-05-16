import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateProjectDto {
  @IsNotEmpty()
  projectName: string;

  @IsNotEmpty()
  projectDescription: string;

  @IsOptional()
  projectImg?: string;
}
