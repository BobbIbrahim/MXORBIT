import { Component, inject } from '@angular/core';
import { AgentService } from '../../../../core/services/agent.service';
import { PageHeader } from '../../../../shared/components/page-header/page-header';
import { AgentCard } from '../../components/agent-card/agent-card';

@Component({
  selector: 'app-agent-registry-page',
  imports: [PageHeader, AgentCard],
  templateUrl: './agent-registry-page.html',
  styleUrl: './agent-registry-page.scss',
})
export class AgentRegistryPage {
  private readonly agentService = inject(AgentService);

  readonly agents = this.agentService.getAgents();

  onCreateAgent(): void {
    console.log('New Agent clicked');
  }
}