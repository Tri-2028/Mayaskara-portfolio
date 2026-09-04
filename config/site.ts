import { Brain, Lightbulb, Rocket } from "lucide-react";

export const siteConfig = {
  name: "Mayaskara Bhat",
  description: "Official student portfolio of Mayaskara Bhat, student of Sri Venkatramana P.U. College, Kundapura and proud student of 3 Stack Academy.",
  navItems: [
    { label: "About", href: "#about" },
    { label: "Journey", href: "#journey" },
    { label: "Chess", href: "#chess" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Academy", href: "#academy" },
    { label: "Contact", href: "#contact" },
  ],
  socials: {
    instagram: "#",
    linkedin: "#",
    github: "#",
    email: "mailto:#",
  },
  skills: [
    "Python",
    "Logical Thinking",
    "Problem Solving",
    "Strategic Thinking",
    "Communication",
    "Creativity",
    "Teamwork",
    "Learning Mindset"
  ],
  aboutHighlights: [
    {
      num: "01",
      title: "STRATEGIC THINKER",
      desc: "Chess has helped develop patience, planning and decision-making.",
      icon: Brain
    },
    {
      num: "02",
      title: "CURIOUS LEARNER",
      desc: "Always exploring new ideas, technologies and ways to improve.",
      icon: Lightbulb
    },
    {
      num: "03",
      title: "FUTURE BUILDER",
      desc: "Learning today to create meaningful possibilities tomorrow.",
      icon: Rocket
    }
  ],
  journeyTimeline: [
    {
      year: "2026",
      title: "Beginning the next chapter of my learning journey",
      isFuture: true
    },
    {
      year: "CURRENT",
      title: "3 STACK ACADEMY",
      desc: "Learning technology and building practical skills"
    },
    {
      year: "CURRENT",
      title: "SRI VENKATRAMANA P.U. COLLEGE",
      desc: "Growing academically while exploring interests beyond the classroom"
    }
  ]
}
