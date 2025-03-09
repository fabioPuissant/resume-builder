// server.js
const example = require('./example.json')
const express = require('express');
const app = express();
const cors = require('cors');

// Use CORS so that your React app (on a different port) can request this API
app.use(cors());

// This structure matches the attached JSON file. You can also import/require it from a separate JSON file.
const resumeData = [
  {
    resume: {
      resumeSections: {
        personalInfo: {
          name: "Fabio N. Puissant",
          email: "fabio.puissant@example.com",
          phone: "+32 123 456 789",
          linkedin: "https://www.linkedin.com/in/fabio-puissant",
          location: "Brussels, Belgium"
        },
        summary: "I am a passionate Software Engineer ...",
        workExperience: [
          {
            jobTitle: "Software Engineer Technical Consultant",
            company: "ACA Consulting",
            location: "Brussels, Belgium",
            startDate: "01/2024",
            endDate: "Present",
            achievements: [
              "Led the design and development ...",
              "Integrated Kafka for asynchronous communications..."
            ]
          },
          {
            jobTitle: "Azure Developer Technical Consultant",
            company: "Delaware Consulting",
            location: "Brussels, Belgium",
            startDate: "01/2022",
            endDate: "12/2023",
            achievements: [
              "Drove the development of an insurance claims portal ...",
              "Implemented automated CI/CD pipelines ..."
            ]
          },
          {
            jobTitle: "Full Stack Engineer Intern",
            company: "BeWired",
            location: "Hasselt, Belgium",
            startDate: "06/2021",
            endDate: "09/2021",
            achievements: [
              "Contributed to the development of an internal platform..."
            ]
          }
        ],
        education: [
          {
            degree: "Master of Science in Computer Science (Major in Software Engineering)",
            institution: "Open University",
            location: "Heerlen, NL (Remote)",
            graduationDate: "12/2023",
            relevantCoursework: [
              "Advanced Software Development",
              "Cloud Computing",
              "DevOps Practices"
            ]
          },
          {
            degree: "Bachelor of Applied Informatics",
            institution: "PXL University of Applied Sciences",
            location: "Hasselt, Belgium",
            graduationDate: "06/2021",
            relevantCoursework: [
              "Software Development",
              "Database Management",
              "Systems Analysis"
            ]
          }
        ],
        skills: {
          technical: [
            "C#",
            "Java (up to Java 17)",
            "Python",
            "TypeScript",
            ".NET Core (6)",
            "Spring Boot",
            "ReactJS",
            "Redux",
            "Angular",
            "Jenkins",
            "Azure DevOps",
            "Terraform",
            "Kubernetes",
            "AWS",
            "Google Cloud Platform"
          ],
          professional: [
            "Agile Methodologies",
            "Cross-Functional Collaboration",
            "Problem-Solving",
            "Effective Communication"
          ]
        },
        certifications: [
          {
            name: "CKAD – Certified Kubernetes Application Developer",
            issuer: "Linux Foundation",
            dateEarned: "05/2024"
          },
          {
            name: "Microsoft Azure Fundamentals",
            issuer: "Microsoft",
            dateEarned: "01/2024"
          },
          {
            name: "Azure Developer Associate",
            issuer: "Microsoft",
            dateEarned: "11/2023"
          },
          {
            name: "Azure DevOps Solutions Expert",
            issuer: "Microsoft",
            dateEarned: "06/2023"
          }
        ],
        languages: [
          {
            language: "Dutch",
            proficiency: "Native"
          },
          {
            language: "English",
            proficiency: "Proficient"
          },
          {
            language: "French",
            proficiency: "Intermediate"
          }
        ],
        projects: [
          {
            name: "Cross-Platform Aquaponics Mobile App",
            description: "Designed and built a mobile application ...",
            techStack: ["Flutter", "ASP.NET Core", "ReactJS", "Redux"],
            dates: "01/2022 - 04/2022"
          },
          {
            name: "Insurance Claims Portal",
            description: "Architected a cloud-based portal for processing insurance claims ...",
            techStack: [".NET Core", "ReactJS", "Azure", "Terraform"],
            dates: "06/2022 - 02/2023"
          }
        ],
        achievements: [
          "Recipient of the Best Intern Award ...",
          "Published a paper on cloud-native application design ..."
        ],
        optionalSections: {
          volunteerWork: [
            "Volunteer tutor for coding and computer science topics ..."
          ],
          professionalAffiliations: [
            "Member of the Belgian Computer Society",
            "Participant in local DevOps meetups ..."
          ],
          interests: [
            "Cloud-native technologies",
            "Open-source contributions",
            "Mentoring young developers"
          ]
        }
      }
    }
  }
];

app.get('/api/resume', (req, res) => {
  // res.json(resumeData);
  res.json(example)
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

