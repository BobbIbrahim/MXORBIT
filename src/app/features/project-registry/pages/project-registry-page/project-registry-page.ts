import { Component, inject } from '@angular/core';

import { ProjectService } from '../../../../core/services/project.service';
import { PageHeader } from '../../../../shared/components/page-header/page-header';
import { ProjectCard } from '../../components/project-card/project-card';

@Component({
  selector: 'app-project-registry-page',
  imports: [PageHeader, ProjectCard],
  templateUrl: './project-registry-page.html',
  styleUrl: './project-registry-page.scss',
})
export class ProjectRegistryPage {
  private readonly projectService = inject(ProjectService);

  readonly projects = this.projectService.getProjects();

  onCreateProject(): void {
    console.log('New Project clicked');
  }
}