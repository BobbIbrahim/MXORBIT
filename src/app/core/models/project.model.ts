export interface Project {
  id: string;
  key: string;
  name: string;
  description: string;
  repositoryUrl: string;
  defaultBranch: string;
  jiraProjectKey?: string;
  pegaAppId?: string;
  stack: string[];
  authorizedAgentIds: string[];
  healthScore: number;
  lastActivity: string;
}