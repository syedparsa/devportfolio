export const siteConfig = {
  name: "Muhammad Zeeshan",
  title: "Software Engineer",
  description: "Portfolio website of Muhammad Zeeshan",
  accentColor: "#f5cb5c",
  social: {
    email: "syedzeshan786512@gmail.com",
    linkedin: "https://www.linkedin.com/in/syed-zeeshan-2066a4190/",
    github: "https://github.com/syedparsa",
  },
  aboutMe:
    "I’m a DevOps & Cloud Engineer with over 3 years of hands-on experience building automated, reliable, and scalable infrastructure. My passion lies in turning complex technical problems into simple, elegant workflows whether that’s through Python scripting, Ansible automation, or end-to-end CI/CD pipelines. I’m also Red Hat certified (RHCSA, RHCE, OpenShift Containers, OpenShift Administrator), which means you’re getting someone who understands enterprise-grade infrastructure, automation, and best practices at a deep level. I work across a wide technical spectrum, which includes",
  skills: ["Python", "Linux", "Openshift", "OpenStack", "Ansible", "Podman/Docker", "K8s", "Jenkins CI/CD", "Git", "Gerrit", "GitLab", "Jira", "Redhat"],
  projects: [
    {
      name: "Social Media API",
      description:
        "This API is created with the FASTAPI framework, which has many cool features like auto-update for the API documentation. Authentication, CRUD operations, Validation, SQL database (PostgreSQL), Documentation, CI/CD Jenkins pipeline, Deployment, update user",
      link: "https://github.com/syedparsa/Social_Media_API",
      skills: ["Python", "Docker", "PGSQL", "FastAPI"],
    },
    {
      name: "Advance OCR",
      description:
        "It's an Android app to convert a picture directly from the Camera to Text. It can translate to 59 different languages",
      link: "https:/ /github.com/syedparsa/advance_OCR",
      skills: ["Java", "Kotlin"],
    },
    {
      name: "University finder APP",
      description:
        "It's a user-friendly Android app to find a dream university",
      link: "https://github.com/syedparsa/Social_Media_API",
      skills: ["Dart", "Android Studio", "Firebase"],
    },

  ],
  experience: [
    {
      company: "Red Hat",
      title: "Software Engineer",
      dateRange: "Jan 2024 - Present",
      bullets: [
        "DevSecOps role and operations",
        "Development, deploying, and managing cloud native applications",
        "Writing Ansible playbooks and shell/bash Scripts for automation",
        "Autoscaling setup",
        "Containerization",
        "OpenShift objects (Routes, BuildConfigs, ImageStreams)",
        "RBAC & security best practices",
        "Implementing CI/CD pipeline to reduce deployment times",
      ],
    },
    {
      company: "Nokia",
      title: "Software Developer",
      dateRange: "Jul 2022 - Dec 2023",
      bullets: [
        "DevSecOps role and operations",
        "Writing Ansible playbooks and shell/bash Scripts for automation",
        "Implementing CI/CD pipeline to reduce deployment times",
        "Implementing security best practices",
      ],
    },
  ],
  education: [
    {
      school: "University of Debrecen, Hungary",
      degree: "Bachelor of Science in Computer Science Engineering",
      dateRange: "2018 - 2022",
      achievements: [
        "Graduated with 4.65/5.00 CGPA",
        "Stipendium Hungaricum Scholarship Mentor",
        "Google Developer Student Club Relations Lead UniDeb",
      ],
    },
  ],
  certifications: [
    {
      name: "Red Hat Certified Engineer",
      date: "Jun 18, 2025",
      issuer: "Red Hat",
      link: "https://rhtapps.redhat.com/verify?certId=250-016-359",
    },
    {
      name: "Red Hat Certified OpenShift Administrator",
      date: "Oct 17, 2025",
      issuer: "Red Hat",
      link: "https://rhtapps.redhat.com/verify?certId=250-016-359",
    },
    {
      name: "Red Hat Certified System Administrator",
      date: "Feb 19, 2025",
      issuer: "Red Hat",
      link: "https://rhtapps.redhat.com/verify?certId=250-016-359",
    },
    {
      name: "Red Hat Certified Specialist in Containers",
      date: "Jul 18, 2025",
      issuer: "Red Hat",
      link: "https://rhtapps.redhat.com/verify?certId=250-016-359",
    },
  ],
};
