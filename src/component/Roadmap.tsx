import { useState } from "react"
import { Badge } from "../components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Beaker, CheckCircle2, Code2, Coins, FileText, Globe, LockKeyhole, Network, Rocket, Users } from "lucide-react"

type Phase = {
  id: string
  title: string
  timeline: string
  status: "completed" | "in-progress" | "upcoming"
  description: string
  milestones: {
    title: string
    description: string
    icon: JSX.Element
    completed?: boolean
  }[]
}

export function Roadmap() {
  const [activePhase, setActivePhase] = useState("phase1")

  const phases: Phase[] = [
    {
      id: "phase1",
      title: "Phase 1: Foundation",
      timeline: "Q1-Q2 2025",
      status: "completed",
      description: "Establishing the core infrastructure and team to build our decentralized platform.",
      milestones: [
        {
          title: "Whitepaper Release",
          description: "Comprehensive documentation outlining the project's vision, technology, and tokenomics.",
          icon: <FileText className="h-5 w-5 text-blue-400" />,
          completed: true,
        },
        {
          title: "Core Team Formation",
          description: "Assembling a team of blockchain developers, cryptographers, and business strategists.",
          icon: <Users className="h-5 w-5 text-blue-400" />,
          completed: true,
        },
        {
          title: "Smart Contract Development",
          description: "Creating and auditing the foundational smart contracts for the platform.",
          icon: <Code2 className="h-5 w-5 text-blue-400" />,
          completed: true,
        },
        {
          title: "Seed Funding Round",
          description: "Initial capital raise from strategic investors and venture capital firms.",
          icon: <Coins className="h-5 w-5 text-blue-400" />,
          completed: true,
        },
      ],
    },
    {
      id: "phase2",
      title: "Phase 2: Development",
      timeline: "Q3-Q4 2025",
      status: "in-progress",
      description: "Building and testing the core protocol and platform features.",
      milestones: [
        {
          title: "Testnet Launch",
          description: "Deployment of the protocol on a test network for initial validation and bug fixing.",
          icon: <Beaker className="h-5 w-5 text-purple-400" />,
          completed: true,
        },
        {
          title: "Security Audit",
          description: "Comprehensive third-party security audit of all smart contracts and platform code.",
          icon: <LockKeyhole className="h-5 w-5 text-purple-400" />,
          completed: true,
        },
        {
          title: "Community Building",
          description: "Growing our community through educational content and ambassador programs.",
          icon: <Users className="h-5 w-5 text-purple-400" />,
          completed: false,
        },
        {
          title: "Private Beta",
          description: "Limited access release to early adopters and strategic partners for feedback.",
          icon: <CheckCircle2 className="h-5 w-5 text-purple-400" />,
          completed: false,
        },
      ],
    },
    {
      id: "phase3",
      title: "Phase 3: Launch",
      timeline: "Q1-Q2 2026",
      status: "upcoming",
      description: "Official launch of the platform and token to the public.",
      milestones: [
        {
          title: "Mainnet Launch",
          description: "Deployment of the fully functional protocol on the main blockchain network.",
          icon: <Rocket className="h-5 w-5 text-green-400" />,
          completed: false,
        },
        {
          title: "Token Generation Event",
          description: "Public distribution of tokens through various allocation mechanisms.",
          icon: <Coins className="h-5 w-5 text-green-400" />,
          completed: false,
        },
        {
          title: "Exchange Listings",
          description: "Listing of the token on major centralized and decentralized exchanges.",
          icon: <Globe className="h-5 w-5 text-green-400" />,
          completed: false,
        },
        {
          title: "Governance Implementation",
          description: "Transition to community governance through the DAO structure.",
          icon: <Users className="h-5 w-5 text-green-400" />,
          completed: false,
        },
      ],
    },
    {
      id: "phase4",
      title: "Phase 4: Expansion",
      timeline: "Q3 2026 - Beyond",
      status: "upcoming",
      description: "Scaling the ecosystem and implementing advanced features.",
      milestones: [
        {
          title: "Cross-Chain Integration",
          description: "Expanding functionality to support multiple blockchain networks.",
          icon: <Network className="h-5 w-5 text-orange-400" />,
          completed: false,
        },
        {
          title: "Enterprise Partnerships",
          description: "Strategic collaborations with traditional finance and tech companies.",
          icon: <Users className="h-5 w-5 text-orange-400" />,
          completed: false,
        },
        {
          title: "Layer 2 Scaling",
          description: "Implementation of layer 2 solutions to improve throughput and reduce costs.",
          icon: <Rocket className="h-5 w-5 text-orange-400" />,
          completed: false,
        },
        {
          title: "Global Expansion",
          description: "Targeted growth initiatives in key markets around the world.",
          icon: <Globe className="h-5 w-5 text-orange-400" />,
          completed: false,
        },
      ],
    },
  ]

  const getStatusColor = (status: Phase["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      case "in-progress":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20"
      case "upcoming":
        return "bg-gray-500/10 text-gray-400 border-gray-500/20"
    }
  }

  const getStatusText = (status: Phase["status"]) => {
    switch (status) {
      case "completed":
        return "Completed"
      case "in-progress":
        return "In Progress"
      case "upcoming":
        return "Upcoming"
    }
  }

  return (
    <div className="space-y-8 w-2/3 justify-center align-middle">
     
      <div className="relative">
        <div className="absolute left-0 right-0 h-1 top-4 bg-gray-800 rounded-full">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
            style={{
              width:
                activePhase === "phase1"
                  ? "25%"
                  : activePhase === "phase2"
                    ? "50%"
                    : activePhase === "phase3"
                      ? "75%"
                      : "100%",
            }}
          />
        </div>

        <Tabs defaultValue="phase1" value={activePhase} onValueChange={setActivePhase} className="pt-8">
          <TabsList className="grid grid-cols-4 bg-transparent">
            {phases.map((phase, index) => (
              <TabsTrigger
                key={phase.id}
                value={phase.id}
                className="relative data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                <div className="flex flex-col items-center space-y-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center z-10 border-2 ${
                      phase.status === "completed"
                        ? "bg-blue-500 border-blue-600"
                        : phase.status === "in-progress"
                          ? "bg-purple-500 border-purple-600"
                          : "bg-gray-800 border-gray-700"
                    }`}
                  >
                    {phase.status === "completed" ? (
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    ) : (
                      <span className="text-xs text-white">{index + 1}</span>
                    )}
                  </div>
                  <span className="text-xs text-gray-400 hidden md:block">{phase.timeline}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {phases.map((phase) => (
            <TabsContent key={phase.id} value={phase.id} className="mt-8">
              <Card className="bg-gray-900/50 border border-gray-800">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl md:text-2xl">{phase.title}</CardTitle>
                      <CardDescription className="text-gray-400 mt-1">{phase.timeline}</CardDescription>
                    </div>
                    <Badge className={`${getStatusColor(phase.status)} px-3 py-1 text-xs`}>
                      {getStatusText(phase.status)}
                    </Badge>
                  </div>
                  <p className="text-gray-300 mt-2">{phase.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {phase.milestones.map((milestone, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border ${
                          milestone.completed ? "border-blue-500/20 bg-blue-500/5" : "border-gray-800 bg-gray-800/30"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-1">{milestone.icon}</div>
                          <div>
                            <h3 className="font-medium text-white flex items-center gap-2">
                              {milestone.title}
                              {milestone.completed && <CheckCircle2 className="h-4 w-4 text-green-500" />}
                            </h3>
                            <p className="text-sm text-gray-400 mt-1">{milestone.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Progress summary */}
      <div className="mt-12 bg-gray-900/50 border border-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Project Progress</h2>
        <div className="space-y-4">
          {phases.map((phase) => {
            const completedMilestones = phase.milestones.filter((m) => m.completed).length
            const totalMilestones = phase.milestones.length
            const progressPercentage = Math.round((completedMilestones / totalMilestones) * 100)

            return (
              <div key={phase.id} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">{phase.title}</span>
                  <span className="text-gray-400">
                    {completedMilestones}/{totalMilestones} ({progressPercentage}%)
                  </span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
