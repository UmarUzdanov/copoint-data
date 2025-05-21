import Image from "next/image"
import { Linkedin } from "lucide-react"
import { TeamMember } from "@/lib/team"

interface TeamMemberCardProps {
  member: TeamMember
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="p-8">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-6">
          <div className="relative h-32 w-32 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={member.image || "/placeholder.svg?height=400&width=400"}
              alt={member.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-basin-slate">{member.name}</h3>
            <p className="text-lg text-carolina-blue mb-2">{member.role}</p>
            {member.linkedin && (
              <a 
                href={member.linkedin}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-navy hover:text-carolina-blue"
              >
                <Linkedin className="h-5 w-5 mr-1" />
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        </div>
        <div className="prose max-w-none">
          {member.bio.split("\n\n").map((paragraph, idx) => (
            <p key={idx} className="mb-4 text-black">
              {paragraph.trim()}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
