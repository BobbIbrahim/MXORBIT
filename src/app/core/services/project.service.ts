import { Injectable, signal } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly projectsSignal = signal<Project[]>([
    {
      id: 'project-001',
      key: 'CORE',
      name: 'Core Banking Platform',
      description: 'Main banking services platform with account, transaction, and workflow modules.',
      repositoryUrl: 'https://github.com/company/core-banking-platform',
      defaultBranch: 'main',
      jiraProjectKey: 'CORE',
      stack: ['Angular', 'Spring Boot', 'PostgreSQL'],
      authorizedAgentIds: ['agent-001', 'agent-002'],
      healthScore: 94,
      lastActivity: '12 minutes ago',
    },
    {
      id: 'project-002',
      key: 'OPS',
      name: 'Operations Console',
      description: 'Internal dashboard used to monitor incidents, deployments, and operational workflows.',
      repositoryUrl: 'https://github.com/company/operations-console',
      defaultBranch: 'develop',
      jiraProjectKey: 'OPS',
      pegaAppId: 'OPS-PEGA-01',
      stack: ['Angular', 'Node.js', 'Redis'],
      authorizedAgentIds: ['agent-001', 'agent-003'],
      healthScore: 88,
      lastActivity: '1 hour ago',
    },
  ]);

  readonly projects = this.projectsSignal.asReadonly();

  getProjects() {
    return this.projects;
  }
}