import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Element } from "react-scroll";

const teamMembers = [
  {
    name: "Daniel Antolinez",
    role: "Scrum Master, Frontend Developer, Backend Developer",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Felipe Lopez",
    role: "Frontend Developer, Backend Developer",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Sofia Sanchez",
    role: "Frontend Developer, Backend Developer",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Juan Giraldo",
    role: "Frontend Developer, Backend Developer",
    avatar: "/placeholder.svg?height=100&width=100",
  },
];

export default function Team() {
  return (
    <Element name="team">
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
          Nuestro Equipo
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center">
              <CardHeader>
                <Avatar className="w-24 h-24 mx-auto">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </CardHeader>
              <CardContent>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Element>
  );
}
