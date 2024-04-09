import React from "react";

import SubNavigation from "@/components/subNavigation";
import AgentCard from "@/components/agentCard";

import { agentsData } from "@data/agent-data"

function Agents() {
  return (
    <div className="h-auto">
      <SubNavigation title="Medarbejdere i Roskilde" />
      <div className="flex flex-wrap justify-between mx-96 mb-12">
        {agentsData.map((agent, index) => (
          <AgentCard key={index} agent={agent} />
        ))}
      </div>
    </div>
  );
}

export default Agents;
