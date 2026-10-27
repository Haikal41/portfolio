export const portfolioData = {
  personal: {
    name: "Alif Auliya' Haikal",
    nickname: "DevAlif",
    role: "Backend Developer",
    specialization: "Database & SQL Architecture, Data & GenAI Systems",
    education: "S1 Universitas Darul 'Ulum Jombang",
    graduationStatus: "Fresh Graduate (Baru Lulus)",
    location: "Jombang, Jawa Timur, Indonesia",
    email: "alifhaikal41@gmail.com",
    cvUrl: "/cv.pdf",
    availability: "Available for Full-time & Projects",
    availabilitySub: "Open to Junior Backend Developer, Database Administrator, and SQL / Data Specialist roles.",
    aboutBio: "Saya adalah lulusan baru S1 dari Universitas Darul 'Ulum Jombang dengan fokus mendalam pada Backend Development, arsitektur Database Relasional (SQL), serta implementasi Data Science & Generative AI berbasis Cloud (Microsoft Fabric & Microsoft Azure). Terbiasa merancang skema database ternormalisasi (3NF), mengoptimalkan query berkinerja tinggi, indexing, transaksi ACID, serta membangun RESTful API dan integrasi AI yang aman, terstruktur, dan skalabel.",
    shortBio: "Dedicated Backend Developer & SQL Specialist bridging complex business logic with high-performance database architectures, Cloud Data Science, and scalable REST APIs.",
    socials: {
      github: "https://github.com/Haikal41",
      linkedin: "https://www.linkedin.com/in/alif-auliya-haikal-7705bb433",
      instagram: "https://www.instagram.com/alifhaikl41",
      whatsapp: "https://wa.me/6289502646082",
      email: "mailto:alifhaikal41@gmail.com"
    }
  },

  typewriterRoles: [
    "Database & SQL Specialist",
    "Backend Developer",
    "Azure GenAI & Microsoft Fabric",
    "Fresh Graduate S1 UNDAR Jombang"
  ],

  stats: [
    {
      id: 1,
      title: "DATABASE & API",
      subtitle: "Innovative backend solutions crafted",
      value: "10+",
      icon: "Database"
    },
    {
      id: 2,
      title: "CERTIFICATES",
      subtitle: "Dicoding & Microsoft Certified",
      value: "Verified",
      icon: "Award"
    },
    {
      id: 3,
      title: "S1 UNDAR JOMBANG",
      subtitle: "Academic foundation completed",
      value: "Fresh",
      icon: "GraduationCap"
    }
  ],

  academicFoundation: {
    title: "Academic Foundation",
    subtitle: "Education and technical growth journey",
    degree: "Sarjana Komputer (S1) - Teknik Informatika / Sistem Informasi",
    major: "Fokus Studi: Backend Development & Database Systems",
    institution: "Universitas Darul 'Ulum Jombang (UNDAR)",
    timeline: [
      {
        year: "FIRST YEAR",
        title: "The Foundations",
        subtitle: "Logic & Fundamental Programming",
        concepts: "Algoritma Pemrograman, Struktur Data Dasar, Logika Komputasi, OOP",
        techStack: ["Java", "C++", "HTML5", "CSS3"],
        project: "Basic Management System — Implementasi algoritma logika dasar dan struktur data CLI."
      },
      {
        year: "SECOND YEAR",
        title: "The Systems",
        subtitle: "Database Architecture & SQL Core",
        concepts: "Relational Database Design, Normalisasi (1NF-3NF), DDL/DML, Entity Relationship Diagram (ERD)",
        techStack: ["MySQL", "SQL Server", "PHP", "Git"],
        project: "Academic Information Database — Perancangan skema database terintegrasi untuk portal akademik."
      },
      {
        year: "THIRD YEAR",
        title: "The Modern Stack",
        subtitle: "Backend Engineering & API Design",
        concepts: "RESTful API Architecture, Transaction Management (ACID), Indexing & Query Tuning, JWT Auth",
        techStack: ["PostgreSQL", "Node.js", "Express.js", "Postman"],
        project: "Enterprise Transaction Engine — API backend dengan manajemen transaksi database dan proteksi data."
      },
      {
        year: "FINAL YEAR",
        title: "Capstone & Graduation",
        subtitle: "Skripsi & Cloud Data Integration",
        concepts: "Database Optimization, High-Volume Data Handling, Microsoft Fabric, Azure AI, SQA",
        techStack: ["PostgreSQL", "MySQL", "Microsoft Fabric", "Azure AI", "Docker", "DBeaver"],
        project: "Skripsi S1 UNDAR — Rancang bangun sistem backend terintegrasi dengan optimasi performa query database dan analitik data."
      }
    ]
  },

  projects: [
    {
      id: 1,
      title: "High-Throughput Inventory & Transaction Engine",
      description: "Sistem backend dan database transaksional tingkat enterprise yang dirancang untuk menangani ribuan transaksi inventaris dengan kepatuhan ACID penuh, stored procedures, dan query optimization.",
      tags: ["PostgreSQL", "SQL DDL/DML", "Node.js", "ACID"],
      status: "COMPLETED",
      statusColor: "emerald",
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      highlights: [
        "Skema database 3NF dengan integritas referensial ketat",
        "Penerapan indexing B-Tree & query analysis menurunkan latency 65%",
        "Manajemen concurrency locking untuk menghindari race condition transaksi"
      ]
    },
    {
      id: 2,
      title: "Academic Portal RESTful API & Database Architecture",
      description: "Layanan REST API backend komprehensif untuk pengelolaan data mahasiswa, dosen, KRS, dan transkrip nilai dengan relasi multi-tabel yang kompleks dan autentikasi berbasis JWT.",
      tags: ["MySQL", "Express.js", "JWT", "REST API"],
      status: "DEPLOYED",
      statusColor: "cyan",
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      highlights: [
        "Autentikasi role-based access control (RBAC) aman",
        "Complex aggregation queries untuk kalkulasi IPK dan histori nilai",
        "Automated database seeding dan migration scripts"
      ]
    },
    {
      id: 3,
      title: "End-to-End Data Analytics & GenAI RAG Pipeline",
      description: "Implementasi arsitektur analitik data menggunakan Microsoft Fabric dan integrasi solusi Retrieval-Augmented Generation (RAG) berbasis Azure AI Foundry untuk question answering cerdas terhadap dataset korporat.",
      tags: ["Microsoft Fabric", "Azure AI", "RAG", "Prompt Flow", "SQL"],
      status: "SHOWCASE",
      statusColor: "purple",
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      highlights: [
        "Pipeline eksplorasi dan preprocessing data dengan Data Wrangler & Fabric Notebook",
        "Integrasi Azure AI Search indexing untuk grounding LLM berbasis RAG",
        "Penerapan Responsible AI dan evaluasi performa model secara terstruktur"
      ]
    }
  ],

  certificates: [
    {
      id: "01",
      code: "JMZVOY9N3XN9",
      title: "Belajar Penerapan Data Science dengan Microsoft Fabric",
      issuer: "Dicoding Indonesia & Microsoft",
      year: "2026",
      validUntil: "29 Juli 2029",
      verifyUrl: "https://dicoding.com/certificates/JMZVOY9N3XN9",
      desc: "Kompetensi analitik end-to-end dengan Microsoft Fabric, eksplorasi data science menggunakan Notebook, preprocessing dengan Data Wrangler, MLflow model tracking, dan batch prediction deployment.",
      verified: true
    },
    {
      id: "02",
      code: "MEPJO8VRLZ3V",
      title: "Membangun Aplikasi Gen AI dengan Microsoft Azure",
      issuer: "Dicoding Indonesia & Microsoft",
      year: "2026",
      validUntil: "29 Juli 2029",
      verifyUrl: "https://dicoding.com/certificates/MEPJO8VRLZ3V",
      desc: "Kompetensi perancangan AI Solution di Azure, deployment LLM di Azure AI Foundry, Azure AI Foundry SDK, Prompt Flow, implementasi RAG dengan Azure AI Search, Fine-Tuning LLM, dan Responsible AI.",
      verified: true
    },
    {
      id: "03",
      code: "UNDAR-S1-KOMP",
      title: "Ijazah Sarjana Komputer (S1)",
      issuer: "Universitas Darul 'Ulum Jombang",
      year: "2024",
      validUntil: "Seumur Hidup",
      verifyUrl: "#",
      desc: "Gelar akademik Sarjana Komputer dengan fokus rekayasa perangkat lunak, arsitektur basis data relasional (SQL), dan rekayasa backend.",
      verified: true
    },
    {
      id: "04",
      code: "SQL-DB-ARCH",
      title: "Database Administration & SQL Optimization",
      issuer: "Professional Data Engineering Competency",
      year: "2024",
      validUntil: "Aktif",
      verifyUrl: "#",
      desc: "Validasi keahlian perancangan skema relasional, optimasi indeks, query tuning, normalisasi 3NF, dan manajemen transaksi ACID.",
      verified: false
    }
  ],

  techStack: {
    database: [
      { name: "MySQL", color: "#00758F", bg: "rgba(0, 117, 143, 0.15)", border: "rgba(0, 117, 143, 0.4)", level: "Advanced" },
      { name: "PostgreSQL", color: "#336791", bg: "rgba(51, 103, 145, 0.15)", border: "rgba(51, 103, 145, 0.4)", level: "Advanced" },
      { name: "SQL Server", color: "#CC292B", bg: "rgba(204, 41, 43, 0.15)", border: "rgba(204, 41, 43, 0.4)", level: "Intermediate" },
      { name: "SQLite", color: "#003B57", bg: "rgba(0, 59, 87, 0.15)", border: "rgba(0, 59, 87, 0.4)", level: "Proficient" },
      { name: "Redis", color: "#DC382D", bg: "rgba(220, 56, 45, 0.15)", border: "rgba(220, 56, 45, 0.4)", level: "Caching" }
    ],
    backend: [
      { name: "Node.js", color: "#5FA04E", bg: "rgba(95, 160, 78, 0.15)", border: "rgba(95, 160, 78, 0.4)", level: "Primary" },
      { name: "Express.js", color: "#FFFFFF", bg: "rgba(255, 255, 255, 0.1)", border: "rgba(255, 255, 255, 0.3)", level: "Framework" },
      { name: "REST APIs", color: "#06B6D4", bg: "rgba(6, 182, 212, 0.15)", border: "rgba(6, 182, 212, 0.4)", level: "Core Architecture" },
      { name: "PHP / Laravel", color: "#FF2D20", bg: "rgba(255, 45, 32, 0.15)", border: "rgba(255, 45, 32, 0.4)", level: "Competent" },
      { name: "JWT Auth", color: "#D63AFF", bg: "rgba(214, 58, 255, 0.15)", border: "rgba(214, 58, 255, 0.4)", level: "Security" }
    ],
    cloudData: [
      { name: "MS Fabric", color: "#0078D4", bg: "rgba(0, 120, 212, 0.15)", border: "rgba(0, 120, 212, 0.4)", level: "Certified" },
      { name: "Azure AI", color: "#0089D6", bg: "rgba(0, 137, 214, 0.15)", border: "rgba(0, 137, 214, 0.4)", level: "Certified" },
      { name: "RAG / LLM", color: "#10B981", bg: "rgba(16, 185, 129, 0.15)", border: "rgba(16, 185, 129, 0.4)", level: "GenAI Solution" },
      { name: "Data Wrangler", color: "#F59E0B", bg: "rgba(245, 158, 11, 0.15)", border: "rgba(245, 158, 11, 0.4)", level: "Preprocessing" },
      { name: "MLflow", color: "#0194E2", bg: "rgba(1, 148, 226, 0.15)", border: "rgba(1, 148, 226, 0.4)", level: "Model Tracking" }
    ],
    tools: [
      { name: "DBeaver", color: "#74513D", bg: "rgba(116, 81, 61, 0.15)", border: "rgba(116, 81, 61, 0.4)", level: "DB Client" },
      { name: "Postman", color: "#FF6C37", bg: "rgba(255, 108, 55, 0.15)", border: "rgba(255, 108, 55, 0.4)", level: "API Testing" },
      { name: "Git & GitHub", color: "#F05032", bg: "rgba(240, 80, 50, 0.15)", border: "rgba(240, 80, 50, 0.4)", level: "Version Control" },
      { name: "Docker", color: "#2496ED", bg: "rgba(36, 150, 237, 0.15)", border: "rgba(36, 150, 237, 0.4)", level: "Container" },
      { name: "pgAdmin", color: "#326690", bg: "rgba(50, 102, 144, 0.15)", border: "rgba(50, 102, 144, 0.4)", level: "Admin Tool" }
    ],
    frontend: [
      { name: "HTML5", color: "#E34F26", bg: "rgba(227, 79, 38, 0.15)", border: "rgba(227, 79, 38, 0.4)", level: "Basic" },
      { name: "CSS3", color: "#1572B6", bg: "rgba(21, 114, 182, 0.15)", border: "rgba(21, 114, 182, 0.4)", level: "Basic" },
      { name: "JavaScript", color: "#F7DF1E", bg: "rgba(247, 223, 30, 0.15)", border: "rgba(247, 223, 30, 0.4)", level: "Competent" },
      { name: "Tailwind CSS", color: "#38B2AC", bg: "rgba(56, 178, 172, 0.15)", border: "rgba(56, 178, 172, 0.4)", level: "Styling" },
      { name: "React.js", color: "#61DAFB", bg: "rgba(97, 218, 251, 0.15)", border: "rgba(97, 218, 251, 0.4)", level: "UI Basics" }
    ]
  }
};
