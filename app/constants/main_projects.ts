import { TMainProjects } from "./type";
import rbacImage from "../../public/projects/rbac.png";
import wagaCommerce from "../../public/projects/wagaCommerce.png";
import projectManagementImage from "../../public/projects/pm.png";
import collabCodingImage from "../../public/projects/c-c.png";
import alumniImage from "../../public/projects/waa.png";
import harariMassMediaImage from "../../public/projects/mm.png";
import hintaAiImage from "../../public/projects/hinta2.png";
import portfolioImage from "../../public/projects/clinet-port.png";
import feedbackSystemImage from "../../public/projects/mint.png";

export const mainProjects: TMainProjects[] = [
  {
    name: "Waga Commerce Platform",
    description:
      "A role-based commercial platform built with Next.js, Redux, and Tailwind CSS, allowing businesses to register, manage, and showcase products or services for local and global users.",
    tags: [
      { name: "Next.js", color: "blue" },
      { name: "Redux", color: "purple" },
      { name: "Tailwind CSS", color: "teal" },
      { name: "Role-Based Access Control", color: "green" },
      { name: "E-commerce", color: "orange" },
    ],
    image: {
      src: wagaCommerce,
      alt: "Waga Commerce Platform Screenshot",
    },
    remote_url: "https://test.waga365.com/home",
  },
  {
    name: "RBAC Dashboard Template",
    description:
      "A scalable Role-Based Access Control dashboard built with Next.js, Redux, and Tailwind CSS, supporting multi-language and responsive design.",
    tags: [
      { name: "Next.js", color: "blue" },
      { name: "Redux", color: "purple" },
      { name: "Tailwind CSS", color: "teal" },
      { name: "Role-Based Access Control", color: "green" },
    ],
    image: {
      src: rbacImage,
      alt: "RBAC Dashboard Screenshot",
    },
    github_repo: "https://github.com/AbeDevSaga/rbac-dashboard",
    remote_url: "https://next-rbac-dashboard.vercel.app/",
  },
  {
    name: "Project Management System",
    description:
      "Comprehensive project management tool with task tracking, milestones, real-time chat, and Gantt chart integration, built with Next.js and Express.js.",
    tags: [
      { name: "Next.js", color: "blue" },
      { name: "Express.js", color: "gray" },
      { name: "Socket.io", color: "orange" },
      { name: "MongoDB", color: "green" },
    ],
    image: {
      src: projectManagementImage,
      alt: "Project Management System Screenshot",
    },
    github_repo: "https://github.com/AbeDevSaga/project-management",
    remote_url: "https://project-management-pi-roan.vercel.app/",
  },
  {
    name: "Collaborative Coding Platform",
    description:
      "Microservices-based platform enabling real-time code collaboration with video calls, multi-user editing, and project management features.",
    tags: [
      { name: "Next.js", color: "blue" },
      { name: "Node.js", color: "green" },
      { name: "Socket.io", color: "orange" },
      { name: "Docker", color: "gray" },
    ],
    image: {
      src: collabCodingImage,
      alt: "Collaborative Coding Platform Screenshot",
    },
    github_repo: "https://github.com/AbeDevSaga/codecollab-web-editor",
    remote_url: "https://landing-page-weld-two-68.vercel.app/",
  },
  {
    name: "Adventist Alumni Website (Aluminia)",
    description:
      "Responsive alumni website with SSR for SEO, alumni data management, and event registration using Next.js and Tailwind CSS.",
    tags: [
      { name: "Next.js", color: "blue" },
      { name: "Tailwind CSS", color: "teal" },
      { name: "SSR", color: "purple" },
      { name: "REST API", color: "green" },
    ],
    image: {
      src: alumniImage,
      alt: "Aluminia Alumni Website Screenshot",
    },
    remote_url: "https://abedevsaga.github.io/waa-aluminia/",
    github_repo: "https://github.com/AbeDevSaga/waa-aluminia",
  },
  {
    name: "Harari Mass Media",
    description:
      "Laravel-based platform for accessing Harari news, events, and cultural archives. Styled with Tailwind CSS and powered by MySQL for reliable community engagement.",
    tags: [
      { name: "Laravel", color: "red" },
      { name: "Tailwind CSS", color: "teal" },
      { name: "MySQL", color: "orange" },
    ],
    image: {
      src: harariMassMediaImage,
      alt: "Harari Mass Media Platform Screenshot",
    },
    remote_url: "https://massmediaagency.infinityfreeapp.com/",
  },
  {
    name: "Hinta AI",
    description:
      "Laravel web platform digitalizing services for the Harari Innovation & Technology Agency. Features an AI-powered chatbot for automated responses and service delivery.",
    tags: [
      { name: "Laravel", color: "red" },
      { name: "AI Integration", color: "purple" },
      { name: "Chatbot", color: "blue" },
    ],
    image: {
      src: hintaAiImage,
      alt: "Hinta AI Platform Screenshot",
    },
    remote_url: "https://hinta.great-site.net/",
  },
  {
    name: "Feedback and Corruption Suggestion System",
    description:
      "A web-based platform for the Ministry of Innovation and Technology, enabling users to submit feedback and report corruption-related suggestions.",
    tags: [
      { name: "MongoDB", color: "green" },
      { name: "Express.js", color: "gray" },
      { name: "React.js", color: "blue" },
      { name: "Node.js", color: "teal" },
    ],
    image: {
      src: feedbackSystemImage,
      alt: "Feedback and Corruption Suggestion System Screenshot",
    },
    remote_url: "https://feedback-website.onrender.com/homepage",
  },
  {
    name: "Portfolio Websites for Clients",
    description:
      "Developed personalized, SEO-optimized portfolio websites using Next.js and Tailwind CSS with SSR. Integrated dynamic client data via APIs and custom layouts.",
    tags: [
      { name: "Next.js", color: "blue" },
      { name: "Tailwind CSS", color: "teal" },
      { name: "SSR", color: "purple" },
      { name: "REST API", color: "green" },
    ],
    image: {
      src: portfolioImage,
      alt: "Client Portfolio Websites Screenshot",
    },
    remote_url: "https://lalisa-personal-portfolio.vercel.app/",
    github_repo: "https://github.com/AbeDevSaga/client-portfolio",
  },
];
