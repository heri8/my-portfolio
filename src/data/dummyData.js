export const personalInfo = {
  name: "Heri Setiawan",
  title: "Fullstack Developer",
  description:
    "I am a passionate web developer dedicated to creating innovative and efficient digital solutions using the latest technologies.",
  location: "Jakarta, Indonesia",
  email: "herisetiawan.dev@gmail.com",
  phone: "+62 877 7547 7657",
  website: "www.herisetiawan.com",
  experience: "5+ Years",
  freelance: "Available",
  languages: "Indonesian, English",
};

export const technicalSkills = [
  { name: "HTML/CSS", percentage: 90 },
  { name: "JavaScript", percentage: 85 },
  { name: "React.js", percentage: 80 },
  { name: "Node.js", percentage: 78 },
  { name: "PostgreSQL", percentage: 80 },
];

export const professionalSkills = [
  { name: "Communication", percentage: 85 },
  { name: "Teamwork", percentage: 90 },
  { name: "Project Management", percentage: 85 },
  { name: "Problem Solving", percentage: 90 },
  { name: "Creativity", percentage: 88 },
];

export const technologies = [
  { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500" },
  { name: "CSS3", icon: "fab fa-css3-alt", color: "text-blue-500" },
  { name: "JavaScript", icon: "fab fa-js-square", color: "text-yellow-500" },
  { name: "Laravel", icon: "fab fa-laravel", color: "text-orange-500" },
  { name: "React.js", icon: "fab fa-react", color: "text-blue-400" },
  { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500" },
  { name: "PostgreSQL", icon: "fas fa-database", color: "text-blue-600" },
  { name: "Git", icon: "fab fa-git-alt", color: "text-orange-600" },
];

import kanianfoodLandingPage from "../../public/img/projects/kanianfood_landingpage.png";
import kanianfoodAdminside from "../../public/img/projects/kanianfood_adminside.png";

export const projects = [
  {
    id: 1,
    title: "WhatsApp E-Catalog & Transaction Router for Frozen Food Retail",
    description:
      "Developed a high-conversion landing page and ordering system for a frozen food retailer using Laravel. The key innovation is a Transaction Router that automatically directs the customer checkout to the WhatsApp of the relevant branch admin based on product stock availability, creating a highly efficient and cost-effective sales pipeline. This project focused on accelerating conversions and improving operational efficiency through a custom branch-specific admin dashboard.",
    fullDescription:
      "Development of a unique landing page and ordering system for a frozen food store built on Laravel. The project's core focus was creating an efficient conversion funnel by integrating a product catalog, shopping cart, and a checkout system that directs customers to the correct branch administrator's WhatsApp link. <br> This system employs a Transaction Routing algorithm, where orders are automatically allocated to the branch admin with product stock availability, ensuring service speed. It is equipped with a Custom Admin Dashboard implementing RBAC (Role-Based Access Control), allowing each administrator to manage only the transaction statuses specific to their branch. This project demonstrates the ability to create cost-effective e-commerce solutions and manage branch-based operational workflows.",
    image: kanianfoodLandingPage,
    technologies: ["PHP", "Laravel", "MySQL"],
    githubLink: "#",
    demoLink: "#",
    featured: true,
    category: "Web Development",
    client: "Kanian Frozen Food",
    duration: "4 Months",
    challenges: [
      "Allocation Complexity of Orders",
      "Branch Admin Data Security",
      "Shopping Cart Stability",
    ],
    solutions: [
      "Optimized Branch Routing Logic",
      "Role-Based Access Control (RBAC)",
      "State Management via Session",
    ],
    features: [
      "High-Conversion Landing Page",
      "Intuitive Shopping Cart System",
      "Automated Transaction Routing",
      "Branch-Specific Admin Dashboard",
      "Role-Based Access Control (RBAC)",
    ],
    gallery: [kanianfoodLandingPage, kanianfoodAdminside],
  },
  // {
  //   id: 2,
  //   title: "Task Management App",
  //   description:
  //     "Task management application with team collaboration features, notifications, and progress tracking.",
  //   fullDescription:
  //     "Collaborative task management application that enables teams to coordinate effectively. Equipped with real-time updates, file attachments, timeline tracking, and calendar integration. Increased team productivity by 35% based on user feedback.",
  //   image:
  //     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  //   technologies: ["Vue.js", "Express.js", "PostgreSQL", "Socket.io", "JWT"],
  //   githubLink: "#",
  //   demoLink: "#",
  //   featured: true,
  //   category: "Web Development",
  //   client: "Indonesian Tech Startup",
  //   duration: "4 Months",
  //   challenges: [
  //     "Real-time synchronization between multiple users",
  //     "Complex permission management",
  //     "Database query optimization for performance",
  //   ],
  //   solutions: [
  //     "WebSocket implementation for real-time features",
  //     "Role-based access control system",
  //     "Database indexing and query optimization",
  //   ],
  //   gallery: [
  //     "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1139&q=80",
  //     "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  //   ],
  // },
  // {
  //   id: 3,
  //   title: "Analytics Dashboard",
  //   description:
  //     "Analytics dashboard with interactive data visualization for business and e-commerce.",
  //   fullDescription:
  //     "Analytics dashboard that provides business insights through interactive data visualization. Integrated with multiple data sources and provides custom reports, predictive analytics, and automated reporting. Helps clients in data-driven decision making.",
  //   image:
  //     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1115&q=80",
  //   technologies: ["React", "Firebase", "Chart.js", "D3.js", "Python"],
  //   githubLink: "#",
  //   demoLink: "#",
  //   featured: true,
  //   category: "Web Development",
  //   client: "FinTech Company",
  //   duration: "5 Months",
  //   challenges: [
  //     "Processing large datasets efficiently",
  //     "Creating responsive and interactive charts",
  //     "Data security and privacy concerns",
  //   ],
  //   solutions: [
  //     "Web Workers implementation for data processing",
  //     "Custom chart components with D3.js",
  //     "Encryption and access control systems",
  //   ],
  //   gallery: [
  //     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  //     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1115&q=80",
  //   ],
  // },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    icon: "fab fa-linkedin-in",
    url: "https://www.linkedin.com/in/herisetiawan8/",
    color: "bg-blue-500",
  },
  {
    name: "GitHub",
    icon: "fab fa-github",
    url: "https://github.com/heri8",
    color: "bg-gray-800",
  },
  {
    name: "Instagram",
    icon: "fab fa-instagram",
    url: "https://www.instagram.com/herisetiawan8",
    color: "bg-pink-500",
  },
];

export const projectCategories = ["All", "Web Development"];
