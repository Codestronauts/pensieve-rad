import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { PROJECT_MESSAGE } from '../../utils/responseMessages';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  create(createProjectDto: CreateProjectDto) {
    return this.prisma.project.create({ data: createProjectDto });
  }

  findAll() {
    return this.prisma.project.findMany();
  }

  findOne(id: string) {
    return this.prisma.project.findFirst({ where: { id } });
  }

  async update(id: string, updateProjectDto: UpdateProjectDto) {
    const project = await this.findOne(id);

    if (!project) {
      throw new BadRequestException(PROJECT_MESSAGE.NOT_FOUND);
    }

    return this.prisma.project.update({ where: { id }, data: updateProjectDto });
  }

  async remove(id: string) {
    const project = await this.findOne(id);

    if (!project) {
      throw new BadRequestException(PROJECT_MESSAGE.NOT_FOUND);
    }

    return this.prisma.project.delete({ where: { id } });
  }
}
