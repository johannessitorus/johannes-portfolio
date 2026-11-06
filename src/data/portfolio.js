
export const portfolio = {
  name: "Johannes Christian Pratama Sitorus",
  headline: "D3 Teknologi Informasi",

  github: "https://github.com/johannessitorus",

  shortBio:
    "Information Technology student exploring software development, practical projects, and continuous learning.",

  about:
    "I am Johannes Christian Pratama Sitorus, a Diploma III (D3) Information Technology student with a strong interest in technology and software development. " +
    "I am continuously expanding my knowledge through academic learning, practical projects, and professional development programs. " +
    "I enjoy exploring new technologies, understanding how systems work, and applying what I learn to solve real-world problems. " +
    "Through this portfolio, I share my learning journey, projects, and certifications as I continue developing my technical skills and professional experience.",

  education: {
    program: "D3 Teknologi Informasi",
    institution: "Institute of Technology Del",
  },

  profileImage: "/images/profile.jpg",

  // ===========================
  // SKILLS & TECHNOLOGIES
  // ===========================

  skills: [
    {
      category: "Programming Languages",
      technologies: [
        "Python",
        "JavaScript",
        "Java",
        "PHP",
        "C",
        "Go",
        "SQL",
        "Dart",
        "TypeScript",
      ],
    },
    {
      category: "Frontend Development",
      technologies: [
        "React",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "RESTful API",
        "TypeScript",
        "Bootstrap",
      ],
    },
    {
      category: "Backend Development",
      technologies: [
        "Node.js",
        "Express.js",
      ],
    },
    {
      category: "Database",
      technologies: [
        "MySQL",
        "PostgreSQL",
        "SQLite",
      ],
    },
    {
      category: "Data & AI",
      technologies: [
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "Scikit-learn",
        "NLTK",
        "TensorFlow",
      ],
    },
    {
      category: "Tools & DevOps",
      technologies: [
        "Git",
        "GitHub",
        "Docker",
        "Linux",
        "AWS",
        "Docker Compose",
      ],
    },
  ],

  // ===========================
  // FEATURED PROJECTS
  // ===========================

  projects: [
    {
      slug: "cafe-management",
      title: "Café Management Platform",
      description:
        "A multi-component café application featuring mobile ordering, table reservations, payment integration, and an administrative dashboard.",
      category: "Full Stack",
      technologies: [
        "Flutter",
        "Dart",
        "React",
        "Laravel",
        "PHP",
        "Go",
        "Docker Compose",
      ],
      images: [
        {
          src: "/images/projects/cafe-management/admin-dashboard.png",
          alt: "Admin dashboard of the café management platform",
          label: "Admin Dashboard",
        },
        {
          src: "/images/projects/cafe-management/user-login.png",
          alt: "User login screen of the café management platform",
          label: "User Login",
        },
        {
          src: "/images/projects/cafe-management/user-dashboard.png",
          alt: "User dashboard of the café management platform",
          label: "User Dashboard",
        },
      ],
      github:
        "https://github.com/johannessitorus/proyek_akhir_II",
      repositoryUrl:
        "https://github.com/johannessitorus/proyek_akhir_II",
      visibility: "private",
      demo: "",
    },

    {
      slug: "student-organization-management",
      title: "Student Organization Management",
      description:
        "A mobile-based student organization management application with organization registration, event management, announcements, and role-based access.",
      category: "Mobile Development",
      technologies: [
        "Flutter",
        "Dart",
        "Laravel",
        "PHP",
      ],
      images: [
        {
          src: "/images/projects/student-organization/login.png",
          alt: "Login screen of the UMKM mobile application",
          label: "Login",
        },
        {
          src: "/images/projects/student-organization/dashboard-mahasiswa.png",
          alt: "Student dashboard of the UMKM mobile application",
          label: "Student Dashboard",
        },
        {
          src: "/images/projects/student-organization/dashboard-pengurus.png",
          alt: "Organization management dashboard of the UMKM mobile application",
          label: "Organization Dashboard",
        },
        {
          src: "/images/projects/student-organization/dashboard-admin.png",
          alt: "Administrator dashboard of the UMKM mobile application",
          label: "Admin Dashboard",
        },
      ],
      github:
        "https://github.com/johannessitorus/UMKM",
      repositoryUrl:
        "https://github.com/johannessitorus/UMKM",
      visibility: "private",
      demo: "",
    },

    {
      slug: "sipa-academic-management",
      title: "SIPA — Academic Project Management",
      description:
        "A web-based academic project management system supporting title submissions, supervision requests, document reviews, and role-based dashboards.",
      category: "Web Development",
      technologies: [
        "Laravel",
        "PHP",
        "Blade",
      ],
      images: [
        {
          src: "/images/projects/sipa/home.png",
          alt: "Home page of the SIPA academic management system",
          label: "Home Page",
        },
      ],
      github:
        "https://github.com/johannessitorus/PA-1-SIPA",
      repositoryUrl:
        "https://github.com/johannessitorus/PA-1-SIPA",
      visibility: "public",
      demo: "",
    },
  ],

  // ===========================
  // CERTIFICATIONS
  // ===========================

  certifications: [
    {
      id: "oracle-agentic-ai",
      provider: "Oracle",
      title: "Agentic AI Certified Foundations Associate",
      issued: "2026-09-21",
      expires: "2028-09-21",
      type: "Professional Certification",
      credentialUrl: "",
      image:
        "/images/portofolio/oracle-agentic-ai.webp",
    },
    {
      id: "oracle-oci-ai",
      provider: "Oracle",
      title:
        "Oracle Cloud Infrastructure Certified AI Foundations Associate",
      issued: "2026-09-29",
      expires: "2028-09-29",
      type: "Professional Certification",
      credentialUrl: "",
      image:
        "/images/portofolio/oracle-oci-ai.webp",
    },
    {
      id: "ibm-ai-literacy",
      provider: "IBM SkillsBuild",
      title: "AI Literacy",
      issued: "2026-11-05",
      type: "Digital Badge",
      credentialUrl:
        "https://www.credly.com/go/TOxWG3CY",
      image:
        "/images/portofolio/ibm-ai-literacy.webp",
    },
    {
      id: "aws-generative-ai",
      provider: "AWS Academy",
      title: "Generative AI Foundations",
      issued: "2026-11-03",
      type: "Training Badge",
      credentialUrl:
        "https://www.credly.com/badges/80872d2e-cbb8-4d08-9604-a25a5daa8010",
      image:
        "/images/portofolio/aws-generative-ai.webp",
    },
    {
      id: "aws-ai-practice-exam",
      provider: "AWS Training & Certification",
      title:
        "Official Practice Exam: AWS Certified AI Practitioner (AIF-C01)",
      issued: "2026-11-04",
      type: "Practice Exam Completion",
      credentialUrl: "",
      image:
        "/images/portofolio/aws-ai-practice-exam.webp",
    },
    {
      id: "dicoding-cloud-genai",
      provider: "Dicoding",
      title: "Belajar Dasar Cloud dan Gen AI di AWS",
      issued: "2026-10-12",
      expires: "2029-10-12",
      type: "Course Completion",
      credentialUrl:
        "https://www.dicoding.com/certificates/2VX3VRL2QPYQ",
      image:
        "/images/portofolio/dicoding-cloud-genai.webp",
    },
    {
      id: "dicoding-machine-learning",
      provider: "Dicoding",
      title: "Belajar Machine Learning untuk Pemula",
      issued: "2026-10-13",
      expires: "2029-10-13",
      type: "Course Completion",
      credentialUrl:
        "https://www.dicoding.com/certificates/81P2KN6GQXOY",
      image:
        "/images/portofolio/dicoding-machine-learning.webp",
    },
    {
      id: "dicoding-python",
      provider: "Dicoding",
      title: "Memulai Pemrograman dengan Python",
      issued: "2026-10-12",
      expires: "2029-10-12",
      type: "Course Completion",
      credentialUrl:
        "https://www.dicoding.com/certificates/L4PQW19L4PO1",
      image:
        "/images/portofolio/dicoding-python.webp",
    },
    {
      id: "dicoding-kiro",
      provider: "Dicoding",
      title: "Spec-Driven Development dengan Kiro",
      issued: "2026-09-18",
      expires: "2029-09-18",
      type: "Course Completion",
      credentialUrl:
        "https://www.dicoding.com/certificates/ERZR7KNVMZYV",
      image:
        "/images/portofolio/dicoding-kiro.webp",
    },
    {
      id: "myskill-frontend",
      provider: "MySkill",
      title: "Frond-End Development Introduction",
      issued: "2025-06-17",
      type: "Course Completion",
      credentialUrl: "",
      image:
        "/images/portofolio/myskill-frontend.webp",
    },
    {
      id: "myskill-internet",
      provider: "MySkill",
      title: "Internet Introduction",
      issued: "2025-06-17",
      type: "Course Completion",
      credentialUrl: "",
      image:
        "/images/portofolio/myskill-internet.webp",
    },
  ],

  // ===========================
  // CONTACT INFORMATION
  // ===========================


linkedin: "https://www.linkedin.com/in/johannes-christian-pratama-sitorus-861986310/",
instagram: "https://www.instagram.com/xhcrstj/",
email: "",

};
