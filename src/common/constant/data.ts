export const PROFILE = {
  name: 'Rizki Arbiansyah',
  handle: '@rizkiarbiansyah',
  role: 'Web Developer & IT Support',
  location: 'Jakarta Barat, Indonesia 🇮🇩',
  availability: 'Tersedia untuk Peluang Kerja (Full-time / Remote / Hybrid / On-site)',
  gpa: '3.58',
  bio: 'Lulusan S1 Sistem Informasi Universitas Gunadarma dengan keahlian pengembangan web full stack (Laravel, MySQL, Tailwind CSS) dan IT Support & Networking.',
  aboutNarrative: [
    'Saya adalah lulusan Sarjana (S1) Sistem Informasi Universitas Gunadarma dengan IPK 3.58 / 4.00, memiliki dasar keilmuan kuat dalam Rekayasa Perangkat Lunak, Basis Data Relasional, Analisis & Perancangan Sistem Informasi, serta Jaringan Komputer.',
    'Memiliki keahlian teruji dalam pengembangan aplikasi web full stack modern menggunakan ekosistem PHP/Laravel, MySQL, Tailwind CSS, dan RESTful API, serta berpengalaman dalam penyusunan arsitektur sistem komprehensif (UML, Use Case, Sequence Diagram, dan ERD).',
    'Didukung oleh sertifikasi dan pemahaman mendalam pada IT Support, troubleshooting hardware/software, administrasi sistem operasi (Windows/Linux), perawatan PC & periferal, serta konfigurasi jaringan (Cisco LAN/WAN), saya siap memberikan kontribusi teknis optimal bagi organisasi Anda.',
  ],
  resumeUrl: '/cv-rizki-arbiansyah.pdf',
};

export const SOCIAL_MEDIA = {
  email: 'mailto:rizkiarbi65@gmail.com',
  github: 'https://github.com/greedykid',
  linkedin: 'https://linkedin.com/in/rizkiarbiansyah',
  whatsapp: 'https://wa.me/6282112619691',
};

export const STATS = [
  { number: '3.58', label: 'IPK Kelulusan S1 Sistem Informasi (Skala 4.00)' },
  { number: '7', label: 'Sertifikasi Kompetensi & Jaringan Komputer' },
  { number: '100%', label: 'Penyelesaian Proyek E-Commerce & Katalog Live' },
  { number: '2026', label: 'Tahun Kelulusan Sarjana Universitas Gunadarma' },
];

export const TECH_STACK = [
  'PHP',
  'Laravel',
  'MySQL',
  'Tailwind CSS',
  'Bootstrap',
  'JavaScript (ES6+)',
  'RESTful API',
  'Git',
  'GitHub',
  'Docker',
  'Figma',
  'Postman',
  'Cisco',
  'Linux',
  'Go-Lang',
];

export const SERVICES = [
  {
    title: 'Pengembangan Web (Front-End)',
    description:
      'Membangun antarmuka modern, responsif, dan cepat dengan Tailwind CSS, Bootstrap, dan JavaScript ES6+ — fokus pada pengalaman pengguna yang mulus.',
    icon: 'layout',
  },
  {
    title: 'Pengembangan Back-End',
    description:
      'Arsitektur backend MVC dengan Laravel, RESTful API, dan pengelolaan database relasional MySQL yang terstruktur dan aman.',
    icon: 'code',
  },
  {
    title: 'Analisis & Perancangan Sistem',
    description:
      'Pemodelan UML, ERD, Use Case, Activity, hingga Sequence Diagram untuk memastikan sistem dirancang dengan benar sejak awal.',
    icon: 'cpu',
  },
  {
    title: 'IT Support & Troubleshooting',
    description:
      'Perawatan hardware/software, instalasi OS (Windows/Linux), konfigurasi jaringan LAN/Wi-Fi, dan dukungan helpdesk yang responsif.',
    icon: 'server',
  },
];

export const SKILL_CATEGORIES = [
  {
    category: 'Pengembangan Web & Database',
    icon: 'layout',
    skills: [
      'PHP',
      'Laravel',
      'MySQL',
      'Tailwind CSS',
      'Bootstrap',
      'Blade Engine',
      'HTML5 & CSS3',
      'JavaScript (ES6+)',
      'RESTful API',
    ],
  },
  {
    category: 'Analisis & Perancangan Sistem',
    icon: 'cpu',
    skills: [
      'Pemodelan UML',
      'Entity Relationship Diagram (ERD)',
      'Use Case Diagram',
      'Activity Diagram',
      'Sequence Diagram',
      'Flowchart Sistem',
      'UI/UX Design (Figma)',
      'Database Architecture',
    ],
  },
  {
    category: 'IT Support, OS & Troubleshooting',
    icon: 'server',
    skills: [
      'Hardware & Software Troubleshooting',
      'Instalasi & Setup OS (Windows/Linux)',
      'Perawatan PC, Laptop & Printer/Periferal',
      'IT Helpdesk & User Support',
      'Koneksi LAN & Wi-Fi Configuration',
      'Pengaturan IP Dasar & Subnetting',
    ],
  },
  {
    category: 'Jaringan, Tools & Platform',
    icon: 'cloud',
    skills: [
      'Cisco Router LAN / WAN',
      'Git & GitHub Version Control',
      'Docker Container Basics',
      'Postman API Testing',
      'VS Code',
      'Microsoft Office (Word, Excel, PowerPoint)',
      'Go-Lang Basics',
    ],
  },
];

export const PROJECTS = [
  {
    id: 'gegares',
    title: 'Platform E-Commerce GEGARES',
    description:
      'Aplikasi e-commerce fungsional produk kuliner tradisional sebagai luaran Penulisan Ilmiah. Backend MVC Laravel, database MySQL, dan dokumentasi UML/ERD.',
    image: '/images/gegares-live.png',
    stacks: ['Laravel 12', 'MySQL', 'Tailwind CSS', 'PHP', 'Blade'],
    is_featured: true,
    demoUrl: 'https://gegares.shop',
    githubUrl: 'https://github.com/greedykid',
  },
  {
    id: 'berkah-mulia',
    title: 'Katalog Digital Berkah Mulia',
    description:
      'Website katalog digital aktif produk pakaian bayi & anak berbasis Laravel dan MySQL, dengan klasifikasi kategori bertingkat dan UI/UX responsif.',
    image: '/images/berkahmulia-live.png',
    stacks: ['Laravel', 'MySQL', 'Tailwind CSS', 'Blade', 'Responsive'],
    is_featured: true,
    demoUrl: 'https://bmberkahmulia.com',
    githubUrl: 'https://github.com/greedykid/berkahmulia',
  },
];

export const EXPERIENCES = [
  {
    role: 'Pengembang Web & Peneliti (Proyek Penulisan Ilmiah)',
    company: 'Universitas Gunadarma',
    company_legal_name: 'GEGARES',
    location: 'Jakarta',
    start_date: '2025-09-01',
    end_date: '2026-02-01',
    type: 'Academic Project',
    location_type: 'On-site',
    responsibilities: [
      'Merancang dan membangun aplikasi e-commerce fungsional GEGARES sebagai luaran Penulisan Ilmiah tingkat sarjana.',
      'Mengembangkan arsitektur backend MVC menggunakan Laravel dan skema database relasional MySQL.',
      'Membangun antarmuka modern dan responsif dengan Tailwind CSS.',
      'Menyusun dokumentasi perancangan sistem (Use Case, Activity, Sequence Diagram, dan ERD).',
    ],
  },
  {
    role: 'Pengembang Web (Katalog Digital Aktif)',
    company: 'Berkah Mulia',
    company_legal_name: 'bmberkahmulia.com',
    location: 'Jakarta',
    start_date: '2026-06-01',
    end_date: null,
    type: 'Freelance',
    location_type: 'Remote',
    responsibilities: [
      'Merancang, membangun, dan mendeploy website katalog digital aktif (bmberkahmulia.com).',
      'Menyusun perancangan kebutuhan sistem dan arsitektur navigasi katalog kategori bertingkat.',
      'Mengoptimalkan performa loading, efisiensi aset, dan responsivitas UI/UX.',
      'Mengelola repositori kode dan version control di GitHub.',
    ],
  },
];

export const EDUCATION = [
  {
    degree: 'Sarjana (S1) Sistem Informasi',
    institution: 'Universitas Gunadarma',
    start_date: '2022-09-01',
    end_date: '2026-02-01',
    score: 'IPK 3.58 / 4.00',
    bullets: [
      'IPK 3.58 / 4.00 dengan mata kuliah utama Pemrograman Web, Basis Data Relasional, dan Rekayasa Perangkat Lunak.',
      'Menyelesaikan proyek Penulisan Ilmiah berupa aplikasi E-Commerce fungsional (GEGARES) berbasis Laravel & MySQL.',
    ],
  },
];

export const CERTIFICATES = [
  { title: 'Application Development Design', issuer: 'Universitas Gunadarma', credentialId: '359981', date: '2025' },
  { title: 'JavaScript Programming Language Fundamental', issuer: 'Universitas Gunadarma', credentialId: '250364', date: '2025' },
  { title: 'Wide Area Network (WAN) Using Cisco Router', issuer: 'Universitas Gunadarma', credentialId: '949696', date: '2025' },
  { title: 'Go-Lang for Beginner', issuer: 'Universitas Gunadarma', credentialId: '561586', date: '2024' },
  { title: 'Local Area Network (LAN) Using Cisco Router', issuer: 'Universitas Gunadarma', credentialId: '519006', date: '2024' },
  { title: 'Fundamental Web Programming', issuer: 'Universitas Gunadarma', credentialId: '393074', date: '2023' },
  { title: 'Fundamental Networking', issuer: 'Universitas Gunadarma', credentialId: '661257', date: '2023' },
];

export const LANGUAGES = [
  { name: 'Bahasa Indonesia', level: 'Penutur Asli / Native' },
  { name: 'Bahasa Inggris', level: 'Profesional Kerja' },
];

export const SKILL_LEVELS = [
  { name: 'Laravel', level: 90, category: 'Web' },
  { name: 'MySQL', level: 88, category: 'Web' },
  { name: 'Tailwind CSS', level: 92, category: 'Web' },
  { name: 'PHP', level: 85, category: 'Web' },
  { name: 'JavaScript (ES6+)', level: 80, category: 'Web' },
  { name: 'IT Support', level: 95, category: 'IT' },
  { name: 'Networking (Cisco)', level: 85, category: 'IT' },
  { name: 'Linux', level: 78, category: 'IT' },
  { name: 'Git & GitHub', level: 86, category: 'Tools' },
  { name: 'Docker', level: 65, category: 'Tools' },
  { name: 'Figma', level: 72, category: 'Tools' },
];
