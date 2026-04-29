"use client";
import { useMemo } from "react";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import Card from "@/app/components/Card";
import CtaStrip from "@/app/components/CtaStrip";
import DevelopmentProcess from "@/app/components/DevelopmentProcess";
import BoxCard from "@/app/components/BoxCard";

const features = [
    {
      number: "",
      title: "React.js",
      description: "Component-based UI library for scalable and dynamic applications.",
      icon: `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor" class="text-zinc-900 transition group-hover:text-white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path fill-rule="nonzero" d="M14.448 16.24a21.877 21.877 0 0 1-1.747 2.175c1.672 1.623 3.228 2.383 4.09 1.884.864-.498.983-2.225.414-4.484-.853.19-1.78.334-2.757.425zm-1.31.087a27.512 27.512 0 0 1-2.276 0c.377.492.758.948 1.138 1.364.38-.416.76-.872 1.138-1.364zm5.04-7.894c2.665.764 4.405 2.034 4.405 3.567 0 1.533-1.74 2.803-4.405 3.567.67 2.69.441 4.832-.886 5.598-1.328.767-3.298-.105-5.292-2.03-1.994 1.925-3.964 2.797-5.292 2.03-1.327-.766-1.557-2.908-.886-5.598-2.665-.764-4.405-2.034-4.405-3.567 0-1.533 1.74-2.803 4.405-3.567-.67-2.69-.441-4.832.886-5.598 1.328-.767 3.298.105 5.292 2.03 1.994-1.925 3.964-2.797 5.292-2.03 1.327.766 1.557 2.908.886 5.598zm-.973-.248c.57-2.26.45-3.986-.413-4.484-.863-.499-2.419.261-4.09 1.884.591.643 1.179 1.374 1.746 2.175.978.09 1.904.234 2.757.425zm-10.41 7.63c-.57 2.26-.45 3.986.413 4.484.863.499 2.419-.261 4.09-1.884a21.877 21.877 0 0 1-1.746-2.175 21.877 21.877 0 0 1-2.757-.425zm4.067-8.142a27.512 27.512 0 0 1 2.276 0A20.523 20.523 0 0 0 12 6.31c-.38.416-.76.872-1.138 1.364zm-1.31.087A21.877 21.877 0 0 1 11.3 5.585C9.627 3.962 8.07 3.202 7.209 3.701c-.864.498-.983 2.225-.414 4.484.853-.19 1.78-.334 2.757-.425zm4.342 7.52A25.368 25.368 0 0 0 15.787 12a25.368 25.368 0 0 0-1.893-3.28 25.368 25.368 0 0 0-3.788 0A25.368 25.368 0 0 0 8.213 12a25.368 25.368 0 0 0 1.893 3.28 25.368 25.368 0 0 0 3.788 0zm1.284-.131c.615-.08 1.2-.183 1.75-.304a20.523 20.523 0 0 0-.612-1.667 27.512 27.512 0 0 1-1.138 1.97zM8.822 8.85c-.615.08-1.2.183-1.75.304.17.536.374 1.094.612 1.667a27.512 27.512 0 0 1 1.138-1.97zm-1.75 5.994c.55.121 1.135.223 1.75.304a27.512 27.512 0 0 1-1.138-1.97c-.238.572-.442 1.13-.612 1.666zm-.978-.245c.261-.834.6-1.708 1.01-2.6-.41-.892-.749-1.766-1.01-2.6-2.242.637-3.677 1.604-3.677 2.6s1.435 1.963 3.677 2.6zm10.834-5.445c-.55-.121-1.135-.223-1.75-.304a27.511 27.511 0 0 1 1.138 1.97c.238-.572.442-1.13.612-1.666zm.978.245c-.261.834-.6 1.708-1.01 2.6.41.892.749 1.766 1.01 2.6 2.242-.637 3.677-1.604 3.677-2.6s-1.435-1.963-3.677-2.6zM12 13.88a1.88 1.88 0 1 1 0-3.76 1.88 1.88 0 0 1 0 3.76z"></path> </g> </g></svg>`,
    },
    {
      number: "",
      title: "Next.js",
      description: "SSR, SSG, and performance-optimized React framework.",
      icon: `<svg width="24px" height="24px" viewBox="0 0 15 15" fill="currentColor" class="text-zinc-900 transition group-hover:text-white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.5 4.5L4.90534 4.20725C4.77836 4.03144 4.55252 3.95753 4.34617 4.02425C4.13981 4.09098 4 4.28313 4 4.5H4.5ZM7.5 14C3.91015 14 1 11.0899 1 7.5H0C0 11.6421 3.35786 15 7.5 15V14ZM14 7.5C14 11.0899 11.0899 14 7.5 14V15C11.6421 15 15 11.6421 15 7.5H14ZM7.5 1C11.0899 1 14 3.91015 14 7.5H15C15 3.35786 11.6421 0 7.5 0V1ZM7.5 0C3.35786 0 0 3.35786 0 7.5H1C1 3.91015 3.91015 1 7.5 1V0ZM5 12V4.5H4V12H5ZM4.09466 4.79275L10.5947 13.7927L11.4053 13.2073L4.90534 4.20725L4.09466 4.79275ZM10 4V10H11V4H10Z" fill="currentColor" class="text-zinc-900 transition group-hover:text-white"></path> </g></svg>`,
    },
    {
      number: "",
      title: "Vue.js",
      description: "Lightweight reactive framework for fast UI development.",
      icon: `<svg width="24px" height="24px" viewBox="0 0 24 24" class="text-zinc-900 transition group-hover:text-white" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M3.316 3L12 18l8.684-15H23L12 22 1 3h2.316zm4.342 0L12 10.5 16.342 3h2.316L12 14.5 5.342 3h2.316z"></path> </g> </g></svg>`,
    },
    {
      number: "",
      title: "Angular",
      description: "Enterprise-grade framework for large-scale applications.",
      icon: `<svg width="24px" height="24px" viewBox="0 0 24 24" class="text-zinc-900 transition group-hover:text-white" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>angular_outlined</title> <rect width="24" height="24" fill="none"></rect> <path d="M12,2.5l8.84,3.15L19.5,17.35,12,21.5,4.5,17.35,3.16,5.65,12,2.5m0,2L5,7l1.08,9.22L12,19.5l5.92-3.28L19,7,12,4.5m0,1.22L16.58,16H14.87l-.93-2.28H10L9.12,16H7.41L12,5.72m1.34,6.58L12,9.07,10.66,12.3Z"></path> </g></svg>`,
    },
    {
      number: "",
      title: "TypeScript",
      description: "Typed JavaScript for scalable and maintainable code.",
      icon: `<svg width="24px" height="24px" viewBox="0 0 16 16" fill="none" class="text-zinc-900 transition group-hover:text-white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="nonzero" clip-rule="nonzero" d="M0 1.75C0 0.783501 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V3.75C16 4.16421 15.6642 4.5 15.25 4.5C14.8358 4.5 14.5 4.16421 14.5 3.75V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H1.75C0.783501 16 0 15.2165 0 14.25V1.75ZM4.75 6.5C4.75 6.08579 5.08579 5.75 5.5 5.75H9.25C9.66421 5.75 10 6.08579 10 6.5C10 6.91421 9.66421 7.25 9.25 7.25H8.25V12.5C8.25 12.9142 7.91421 13.25 7.5 13.25C7.08579 13.25 6.75 12.9142 6.75 12.5V7.25H5.5C5.08579 7.25 4.75 6.91421 4.75 6.5ZM11.2757 6.58011C11.6944 6.08164 12.3507 5.75 13.25 5.75C14.0849 5.75 14.7148 6.03567 15.1394 6.48481C15.4239 6.78583 15.4105 7.26052 15.1095 7.54505C14.8085 7.82958 14.3338 7.81621 14.0493 7.51519C13.9394 7.39898 13.7204 7.25 13.25 7.25C12.7493 7.25 12.5306 7.41836 12.4243 7.54489C12.2934 7.70065 12.25 7.896 12.25 8C12.25 8.104 12.2934 8.29935 12.4243 8.45511C12.5306 8.58164 12.7493 8.75 13.25 8.75C13.3257 8.75 13.3988 8.76121 13.4676 8.78207C14.1307 8.87646 14.6319 9.17251 14.9743 9.58011C15.3684 10.0493 15.5 10.604 15.5 11C15.5 11.396 15.3684 11.9507 14.9743 12.4199C14.5556 12.9184 13.8993 13.25 13 13.25C12.1651 13.25 11.5352 12.9643 11.1106 12.5152C10.8261 12.2142 10.8395 11.7395 11.1405 11.4549C11.4415 11.1704 11.9162 11.1838 12.2007 11.4848C12.3106 11.601 12.5296 11.75 13 11.75C13.5007 11.75 13.7194 11.5816 13.8257 11.4551C13.9566 11.2993 14 11.104 14 11C14 10.896 13.9566 10.7007 13.8257 10.5449C13.7194 10.4184 13.5007 10.25 13 10.25C12.9243 10.25 12.8512 10.2388 12.7824 10.2179C12.1193 10.1235 11.6181 9.82749 11.2757 9.41989C10.8816 8.95065 10.75 8.396 10.75 8C10.75 7.604 10.8816 7.04935 11.2757 6.58011Z" fill="currentColor"></path> </g></svg>`,
    },
    {
      number: "",
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development.",
      icon: `<svg fill="currentColor" width="24px" height="24px" viewBox="0 0 24 24" role="img" class="text-zinc-900 transition group-hover:text-white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Tailwind CSS icon</title><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path></g></svg>`,
    },
    {
      number: "",
      title: "Redux",
      description: "Predictable state management for complex apps.",
      icon: `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" class="text-zinc-900 transition group-hover:text-white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.6295 16.563C17.5152 16.4705 18.1871 15.6997 18.1565 14.7748C18.126 13.8499 17.3624 13.1099 16.4462 13.1099H16.3851C15.4384 13.1408 14.7054 13.9424 14.7359 14.8981C14.7665 15.3606 14.9497 15.7614 15.2246 16.0389C14.1862 18.1046 12.5981 19.6153 10.2159 20.8794C8.59718 21.7426 6.91742 22.0509 5.23767 21.8351C3.86332 21.6501 2.79439 21.0335 2.12249 20.0161C1.14517 18.5054 1.05355 16.8713 1.87816 15.2373C2.45844 14.0657 3.37467 13.2024 3.95495 12.7708C3.83278 12.37 3.64954 11.6917 3.55791 11.1984C-0.870533 14.4357 -0.412419 18.8137 0.931386 20.8794C1.93924 22.4209 3.98549 23.3767 6.24552 23.3767C6.85634 23.3767 7.46716 23.315 8.07798 23.1609C11.9872 22.3901 14.9497 20.0469 16.6295 16.563ZM22.0047 12.7399C19.6836 9.99598 16.263 8.48525 12.3537 8.48525H11.8651C11.5902 7.93029 11.0099 7.56032 10.3686 7.56032H10.3075C9.3607 7.59115 8.62772 8.39276 8.65826 9.34853C8.6888 10.2735 9.45233 11.0134 10.3686 11.0134H10.4296C11.1015 10.9826 11.6818 10.5509 11.9261 9.96515H12.4759C14.797 9.96515 16.996 10.6434 18.9811 11.9692C20.5082 12.9866 21.6076 14.3123 22.2185 15.9155C22.7377 17.2105 22.7071 18.4745 22.1574 19.5536C21.3022 21.1877 19.8668 22.0818 17.9733 22.0818C16.7516 22.0818 15.5911 21.7118 14.9803 21.4343C14.6443 21.7426 14.0335 22.2359 13.6059 22.5442C14.9192 23.1609 16.263 23.5 17.5457 23.5C20.4776 23.5 22.646 21.866 23.4706 20.2319C24.3563 18.4437 24.2953 15.3606 22.0047 12.7399ZM6.48985 17.0871C6.52039 18.0121 7.28392 18.752 8.20015 18.752H8.26123C9.208 18.7212 9.94098 17.9196 9.91044 16.9638C9.8799 16.0389 9.11638 15.2989 8.20015 15.2989H8.13906C8.07798 15.2989 7.98636 15.2989 7.92528 15.3298C6.6731 13.2332 6.1539 10.9517 6.33714 8.48525C6.45931 6.63539 7.07013 5.03217 8.13906 3.70643C9.02475 2.56568 10.735 2.01072 11.8956 1.97989C15.133 1.91823 16.5073 5.98794 16.5989 7.62198C16.996 7.71448 17.6679 7.93029 18.126 8.08445C17.7595 3.08981 14.7054 0.5 11.7734 0.5C9.02475 0.5 6.48985 2.50402 5.482 5.46381C4.07711 9.41019 4.99334 13.2024 6.70364 16.193C6.55093 16.4088 6.45931 16.748 6.48985 17.0871Z" fill="currentColor"></path> </g></svg>`,
    },
    {
      number: "",
      title: "GraphQL",
      description: "Efficient API querying for frontend applications.",
      icon: `<svg fill="currentColor" width="24px" height="24px" viewBox="0 0 32 32" version="1.1" class="text-zinc-900 transition group-hover:text-white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>graphql</title> <path d="M7.696 22.798h16.611l-8.305 4.794zM17.736 5.409l8.305 4.796v9.59zM14.269 5.409l-8.304 14.386v-9.59zM16.003 4.946l9.572 16.583h-19.147zM16.003 2.945l-11.308 6.528v13.056l11.308 6.528 11.305-6.528v-13.056zM5.328 7.166c-1.476 0-2.672 1.196-2.672 2.672s1.196 2.672 2.672 2.672c1.476 0 2.672-1.196 2.672-2.672 0-0.492-0.133-0.953-0.365-1.349l0.007 0.013c-0.471-0.804-1.33-1.336-2.314-1.336 0 0 0 0 0 0v0zM5.328 19.491c0 0.852 0.691 1.542 1.543 1.542s1.543-0.691 1.543-1.543-0.691-1.543-1.543-1.543c-0.852 0-1.542 0.69-1.543 1.542v0zM16.002 25.652c0 0 0 0 0 0-1.476 0-2.672 1.196-2.672 2.672s1.196 2.672 2.672 2.672c1.476 0 2.672-1.196 2.672-2.672 0-0.492-0.133-0.953-0.365-1.349l0.007 0.013c-0.471-0.804-1.33-1.336-2.314-1.336v0zM26.674 19.49c-1.476 0-2.672 1.196-2.672 2.672s1.196 2.672 2.672 2.672c1.476 0 2.672-1.196 2.672-2.672 0-0.492-0.133-0.953-0.365-1.349l0.007 0.013c-0.471-0.804-1.33-1.336-2.314-1.336 0 0-0 0-0 0v0zM26.674 7.166c-1.476 0-2.672 1.196-2.672 2.672s1.196 2.672 2.672 2.672c1.476 0 2.672-1.196 2.672-2.672 0-0.492-0.133-0.953-0.365-1.349l0.007 0.013c-0.471-0.804-1.33-1.336-2.314-1.336-0 0-0 0-0 0v0zM16.002 1.004c0 0 0 0 0 0-1.476 0-2.672 1.196-2.672 2.672s1.196 2.672 2.672 2.672c1.476 0 2.672-1.196 2.672-2.672 0-0.492-0.133-0.953-0.365-1.349l0.007 0.013c-0.471-0.804-1.33-1.336-2.314-1.336v0z"></path> </g></svg>`,
    },
  ];

const technologie = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Responsive Design",
    "Animations",
    "State Management",
    "API Integration",
    "Web Performance",
  ];

const marqueeItems = [
    "HTML5 & Semantic Markup",
    "CSS3 & Modern Layouts",
    "JavaScript (ES6+)",
    "TypeScript for Frontend",
    "React.js & Hooks",
    "Next.js (App Router)",
    "Client Components",
    "Responsive Web Design",
    "Tailwind CSS",
    "SASS / SCSS",
    "UI Libraries (ShadCN / MUI)",
    "Animations (Framer Motion / GSAP)",
    "State Management (Zustand / Redux)",
    "API Integration (REST / GraphQL)",
    "Frontend Performance Optimization",
    "Lazy Loading & Code Splitting",
    "Accessibility (a11y)",
    "Cross-Browser Compatibility",
    "SEO for Frontend",
    "Web Vitals Optimization",
    "PWA (Progressive Web Apps)",
    "Frontend Testing (Jest / Cypress)",
];

const steps = [
    {
        num: "01",
        title: "UI/UX Planning",
        body: "We analyze requirements, define user flows, and create wireframes to ensure a seamless and intuitive user experience.",
    },
    {
        num: "02",
        title: "Design System",
        body: "We build scalable design systems with reusable components, consistent styles, and modern UI patterns.",
    },
    {
        num: "03",
        title: "Frontend Architecture",
        body: "We structure the application using modern frameworks, component-based architecture, and clean code practices.",
    },
    {
        num: "04",
        title: "Development",
        body: "We develop responsive, accessible, and high-performance interfaces using modern frontend technologies.",
    },
    {
        num: "05",
        title: "Optimization",
        body: "We optimize performance with lazy loading, code splitting, and Core Web Vitals improvements.",
    },
    {
        num: "06",
        title: "Testing & Launch",
        body: "We ensure cross-browser compatibility, responsiveness, and smooth deployment for a production-ready frontend.",
    },
];

const benefits = [
    {
        no: "01",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>`,
        title: "Lightning-Fast User Interfaces",
        body: "We build highly optimized frontends with fast load times, smooth transitions, and minimal latency to deliver seamless user experiences.",
    },
    {
        no: "02",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet-icon lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>`,
        title: "Responsive Across All Devices",
        body: "Our interfaces adapt perfectly across desktops, tablets, and mobile devices—ensuring consistent design and usability everywhere.",
    },
    {
        no: "03",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings2-icon lucide-settings-2"><path d="M14 17H5"/><path d="M19 7h-9"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>`,
        title: "Scalable Component Architecture",
        body: "We create reusable UI components and structured frontend systems that scale easily as your product grows.",
    },
    {
        no: "04",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-handshake-icon lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>`,
        title: "SEO & Performance Optimized",
        body: "We ensure your frontend is optimized for Core Web Vitals, accessibility, and search engine visibility for maximum reach.",
    },
];

export default function Page() {

    const stats = useMemo(
        () => [
            { num: "200+", label: "Projects Delivered" },
            { num: "8+", label: "Years Experience" },
            { num: "98%", label: "Retention" },
            { num: "50+", label: "Experts" },
        ],
        []
    );

  return (
    <>

    {/* Hero section */}
    <section className="relative flex min-h-[88vh] flex-col overflow-hidden bg-white">
        <div className="grid-bg absolute inset-0 opacity-45" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.15)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,255,255,0.16))]" />

        <div className="relative mx-auto grid w-full max-w-7xl py-14 sm:py-20 flex-1 grid-cols-1 items-center gap-10 px-4 lg:grid-cols-[1fr_390px] z-10">
            {/* Left Column */}
            <div className="space-y-5">
                <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                <span className="h-[2px] w-7 bg-red-600" />Frontend Technologies Services
                </div>

                <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-zinc-950 sm:text-[118px] md:text-[140px] lg:text-[168px]">
                <span>HIRE </span>
                <span className="text-red-600">Frontend</span>
                <span className="hero-outline block outline-black">Developer</span>
                </h1>

                <p className="max-w-xl text-[15px] leading-8 text-zinc-500">Build high-performance, scalable, and visually stunning SaaS applications using modern frontend technologies.</p>

                <div className="flex flex-wrap items-center gap-4">
                    <Link href="/" className="flex w-fit items-center justify-between rounded-[4px] bg-red-600 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition">
                        Start Your Project
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>
                    <Link href="/" className="flex w-fit items-center justify-between rounded-[4px] bg-zinc-950 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition">
                        View Portfolio
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-4 pt-7 sm:grid-cols-4">
                {stats.map((item) => {
                    const numberOnly = item.num.replace(/[+%]/g, "");
                    const suffix = item.num.includes("+") ? "+" : item.num.includes("%") ? "%" : "";
                    return (
                    <div key={item.label}>
                        <div className="font-bebas-neue text-5xl leading-none text-zinc-950">
                        {numberOnly}
                        <span className="text-red-600">{suffix}</span>
                        </div>
                        <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-950">{item.label}</div>
                    </div>
                    );
                })}
                </div>
            </div>

            {/* Right Column */}
            <div className="relative mx-auto hidden aspect-square w-full max-w-[440px] lg:block" aria-hidden="true">
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 hero-ring" />
                <div className="absolute inset-[42px] rounded-full border border-red-500/25 hero-ring-2" />
                <div className="absolute inset-[86px] rounded-full border border-dashed border-zinc-500 hero-ring-3" />
                
                <div className="absolute inset-[116px] flex flex-col items-center justify-center gap-2 shadow-xl rounded-full border border-white/10 bg-zinc-900/90 text-center">
                    <div className="bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-6xl font-black text-transparent">
                        &lt;/&gt;
                    </div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">Modern Frontend Engineering</div>
                </div>

                <div className="absolute right-8 top-16 rounded-lg border border-white/10 bg-zinc-900/90 px-4 py-2 text-xs font-bold text-blue-400 hero-float">⚛️ React 18</div>
                <div className="absolute bottom-16 left-2 rounded-lg border border-white/10 bg-zinc-900/90 px-4 py-2 text-xs font-bold text-red-500 hero-float [animation-delay:1.6s]">🔥 Next.js 16</div>
                <div className="absolute bottom-36 right-3 rounded-lg border border-white/10 bg-zinc-900/90 px-4 py-2 text-xs font-bold text-emerald-400 hero-float [animation-delay:0.8s]">✅ TypeScript</div>
            </div>
        </div>
    </section>

    {/* Marquee Section */}
    <Marquee items={marqueeItems} />

    {/* ABOUT */}
    <section className="relative overflow-hidden border-y border-white/[0.04] bg-[linear-gradient(180deg,#141414,#121212)] py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:100%_44px] opacity-20" />
        <div className="relative mx-auto w-full max-w-7xl px-4">
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
                {/* left column */}
                <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden rounded-md border border-white/[0.07] bg-[linear-gradient(135deg,rgba(26,86,219,0.09),rgba(224,32,32,0.09))] p-[32px]">
                    <span className="absolute left-0 top-0 h-6 w-6 rounded-tl-md border-l-2 border-t-2 border-white/70" />
                    <span className="absolute bottom-0 right-0 h-6 w-6 rounded-br-md border-b-2 border-r-2 border-white/70" />
                    <div className="w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#0f0f0f] shadow-2xl">
  
                    {/* Header (Editor Style) */}
                    <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2">
                        <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-red-500" />
                        <span className="h-3 w-3 rounded-full bg-yellow-500" />
                        <span className="h-3 w-3 rounded-full bg-green-500" />
                        </div>
                        <span className="text-[11px] text-zinc-500">Card.jsx</span>
                    </div>

                    {/* Body */}
                    <div className="grid md:grid-cols-2">
                        
                        {/* Code Block */}
                        <div className="border-r border-white/[0.06] p-4">
                            <pre className="overflow-x-auto text-xs leading-6 text-zinc-300 md:text-sm">
{`// React Component UI
export default function Card() {
return (
    <div className="p-4 rounded-xl bg-white shadow-md">
    <h2 className="text-lg font-semibold">
        Frontend UI
    </h2>
    <p className="text-sm text-gray-500">
        Clean & responsive design
    </p>
    <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg">
        Get Started
    </button>
    </div>
);
}`}
                            </pre>
                        </div>

                        {/* Output Preview */}
                        <div className="flex items-center justify-center bg-[#0c0c0c] p-6">
                        <div className="w-full max-w-[220px] rounded-xl bg-white p-4 shadow-xl">
                            <div className="text-sm font-semibold text-gray-900">Frontend UI</div>
                            <p className="text-xs text-gray-500">Clean & responsive design</p>
                            <button className="mt-3 w-full rounded-md bg-red-600 px-3 py-1.5 text-xs font-medium text-white">Get Started</button>
                        </div>
                        </div>

                    </div>
                    </div>
                </div>
                {/* right column */}
                <div className="relative space-y-4">
                    <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                        <span className="h-[2px] w-7 bg-red-600" />
                        Frontend Overview
                    </div>
                    <h2 className="text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[70px] lg:text-[80px]">Modern <span className="text-red-600">Frontend</span></h2>
                    
                    <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]"><strong className="text-white">Frontend development is the visual and interactive layer</strong>{" "} of web applications—where design meets functionality. It focuses on building fast, responsive, and engaging user interfaces that deliver seamless user experiences across all devices.</p>

                    <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">Using technologies like <strong className="text-white">HTML, CSS, JavaScript, and modern frameworks</strong>,{" "} we craft dynamic interfaces with reusable components, smooth animations, and scalable architectures that enhance usability and performance.</p>

                    <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">Our approach ensures <strong className="text-white">pixel-perfect design, accessibility, and optimization</strong>{" "} — delivering high-performing frontends that are SEO-friendly, lightning-fast, and built for real-world scalability.</p>

                    <div id="technologies" className="mt-7 flex flex-wrap gap-2">
                    {technologie.map((item) => (
                        <span key={item} className="rounded-full border border-blue-500/35 bg-blue-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-blue-200">{item}</span>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* CORE CAPABILITIES */}
    <Card
      label="Technologies"
      title={
        <>
          Frontend<br />
          <span className="text-red-600">Technologies</span>
        </>
      }
      description=""
      items={features}
      gridClassName="grid border-2 border-zinc-950 md:grid-cols-2 xl:grid-cols-4"
    />

    {/* frontend Development Process */}
    <DevelopmentProcess
        steps={steps}
        label="Frontend Development Process"
        title={
            <>
            FROM DESIGN TO <span className="text-red-600">INTERACTIVE EXPERIENCES</span>
            </>
        }
        description="We transform ideas into modern, high-performance user interfaces through a structured frontend workflow—combining UX strategy, scalable component architecture, and pixel-perfect development to deliver fast, responsive, and engaging digital experiences."
    />

    {/* BUSINESS BENEFITS */}
    <BoxCard
        items={benefits}
        label="Frontend Benefits"
        title={
            <>
            WHY MODERN APPS NEED
            <br />
            <span className="text-red-600">POWERFUL FRONTEND</span>
            </>
        }
        description="We combine modern UI design, performance optimization, and scalable architecture to build frontends that are fast, responsive, and designed for real-world users."
        headerClassName="mb-12 text-left"
    />

    {/* CTA STRIP */}
    <CtaStrip
        title={
            <>
              GOT A PROJECT
              <br />
              IN <span className="text-black">MIND?</span>
            </>
          }
          description="Let&apos;s turn your vision into a production-grade Frontend application. Our team is ready when you are — no project too small, no challenge too large."
          buttonText="Get a Free Quote →"
          buttonHref="/"
    />

    </>
  );
}