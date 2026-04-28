"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import Card from "@/app/components/Card";
import CtaStrip from "@/app/components/CtaStrip";
import DevelopmentProcess from "@/app/components/DevelopmentProcess";
import BoxCard from "@/app/components/BoxCard";

const marqueeItems = [
    "Node.js & Server-Side JavaScript",
    "RESTful API Development",
    "GraphQL APIs",
    "Authentication (JWT / OAuth)",
    "Database Design & Architecture",
    "SQL (PostgreSQL / MySQL)",
    "NoSQL (MongoDB / Redis)",
    "ORMs (Prisma / Sequelize)",
    "Microservices Architecture",
    "Serverless Functions",
    "API Security & Encryption",
    "Caching (Redis / CDN)",
    "Queue Systems (BullMQ / Kafka)",
    "WebSockets & Realtime Systems",
    "File Storage (AWS S3 / Cloudinary)",
    "Cloud Platforms (AWS / GCP / Azure)",
    "Docker & Containerization",
    "CI/CD Pipelines",
    "Logging & Monitoring",
    "Scalability & Load Balancing",
    "Performance Optimization",
    "Backend Testing (Jest / Mocha)",
];

const technologie = [
    "Node.js & Server-Side JavaScript",
    "RESTful API Development",
    "GraphQL APIs",
    "Authentication (JWT / OAuth)",
    "Database Design & Architecture",
    "SQL (PostgreSQL / MySQL)",
    "NoSQL (MongoDB / Redis)",
    "ORMs (Prisma / Sequelize)",
    "Microservices Architecture",
    "Serverless Functions",
    "API Security & Encryption",
];

const features = [
    {
      number: "",
      title: "Node.js",
      description: "Event-driven runtime for building scalable and high-performance backend services.",
      icon: `<svg fill="currentColor" version="1.1" class="text-zinc-900 transition group-hover:text-white" width="24px" height="24px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="5151e0c8492e5103c096af88a51f0aa3"> <path display="inline" fill-rule="evenodd" clip-rule="evenodd" d="M115.889,151.885l-24.053-13.773 c-1.512-0.891-2.451-2.499-2.451-4.244v-29.306c0-1.745-0.928-3.364-2.443-4.232l-10.239-5.899 c-0.742-0.444-1.601-0.662-2.432-0.662c-0.854,0-1.689,0.218-2.451,0.662l-10.246,5.899c-1.516,0.869-2.44,2.488-2.44,4.232v29.306 c0,1.745-0.928,3.342-2.446,4.244l-24.061,13.773c-0.747,0.458-1.675,0.458-2.429,0c-0.766-0.421-1.22-1.234-1.22-2.107 l-0.089-62.733c0-1.759,0.938-3.375,2.447-4.247L71.819,59.5c0.695-0.403,1.46-0.61,2.232-0.643c0.06,0,0.352,0,0.422,0 c0.776,0.033,1.541,0.24,2.229,0.643l40.48,23.299c1.52,0.873,2.443,2.488,2.443,4.247l-0.078,62.733 c0,0.873-0.469,1.686-1.216,2.107C117.586,152.344,116.643,152.344,115.889,151.885z M271.617,135.07V88.317 c0-1.748,0.932-3.36,2.443-4.232l40.503-23.373c1.508-0.873,3.371-0.876,4.887-0.004l10.136,5.844c0.532,0.307,1.187,0.307,1.715,0 c0.525-0.307,0.854-0.872,0.854-1.482V2.943c0-0.869,0.459-1.667,1.205-2.11c0.751-0.437,1.675-0.444,2.433-0.022l24.098,13.448 c1.552,0.861,2.51,2.499,2.51,4.27V135.07c0,1.749-0.932,3.36-2.447,4.236l-40.502,23.388c-1.512,0.88-3.379,0.88-4.895,0 l-40.495-23.388C272.549,138.43,271.617,136.818,271.617,135.07z M301.781,119.711c0,0.436,0.232,0.839,0.609,1.057l13.906,8.014 c0.377,0.214,0.843,0.214,1.22,0l13.906-8.014c0.377-0.218,0.609-0.621,0.609-1.057v-16.058c0-0.436-0.232-0.843-0.609-1.057 l-13.902-8.033c-0.381-0.218-0.847-0.218-1.228,0l-13.906,8.033c-0.373,0.214-0.605,0.621-0.605,1.057V119.711z M480.675,83.449 l-40.235-23.365c-1.513-0.88-3.383-0.883-4.898-0.004l-40.487,23.369c-1.512,0.873-2.443,2.488-2.443,4.236v46.738 c0,1.759,0.946,3.378,2.47,4.251l40.232,22.921c1.481,0.851,3.304,0.854,4.794,0.03L464.44,148.1 c0.772-0.433,1.253-1.242,1.257-2.122c0.007-0.88-0.462-1.697-1.228-2.137l-40.738-23.384c-0.758-0.436-1.228-1.246-1.228-2.122 v-14.645c0-0.873,0.466-1.682,1.224-2.122l12.679-7.312c0.754-0.433,1.686-0.433,2.439,0l12.687,7.312 c0.758,0.44,1.224,1.25,1.224,2.122v11.525c0,0.873,0.469,1.682,1.227,2.118c0.758,0.433,1.689,0.433,2.447-0.004l24.245-14.095 c1.512-0.876,2.437-2.487,2.437-4.232V87.678C483.111,85.933,482.187,84.321,480.675,83.449z M152.783,138.441l40.48,23.387 c1.516,0.873,3.378,0.873,4.894,0l40.495-23.387c1.512-0.876,2.443-2.488,2.443-4.236V87.434c0-1.745-0.932-3.364-2.447-4.236 l-40.491-23.365c-1.516-0.876-3.378-0.876-4.891,0l-40.483,23.365c-1.516,0.873-2.447,2.492-2.447,4.236v46.771 C150.336,135.954,151.268,137.565,152.783,138.441z M393.945,246.323l-124.834-72.14c-7.833-4.465-18.338-4.465-26.237,0 l-124.838,72.14c-8.088,4.658-13.093,13.396-13.093,22.755v144.073c0,9.353,5.005,18.102,13.093,22.767l32.732,18.856 c15.861,7.807,21.547,7.807,28.759,7.807c23.477,0,36.968-14.202,36.968-38.969V281.373c0-2.012-1.641-3.597-3.618-3.597h-15.832 c-2.011,0-3.626,1.585-3.626,3.597v142.239c0,10.979-11.363,21.905-29.916,12.639l-34.199-19.769 c-1.205-0.654-1.971-1.948-1.971-3.331V269.078c0-1.367,0.766-2.728,1.978-3.423l124.764-72.015c1.156-0.673,2.694-0.673,3.844,0 l124.79,71.996c1.193,0.714,1.937,2.029,1.937,3.441v144.073c0,1.383-0.743,2.706-1.907,3.371l-124.841,72.06 c-1.068,0.65-2.706,0.65-3.867,0l-32.022-19.015c-0.953-0.547-2.173-0.754-3.098-0.229c-8.864,5.031-10.542,5.692-18.845,8.576 c-2.055,0.717-5.09,1.948,1.128,5.419l41.682,24.663c3.992,2.313,8.535,3.504,13.093,3.504c4.624,0,9.152-1.19,13.145-3.504 l124.834-72.078c8.084-4.705,13.114-13.414,13.114-22.767V269.078C407.06,259.719,402.029,250.999,393.945,246.323z M299.448,399.408c-37.253,0-45.448-9.359-48.194-27.886c-0.318-1.978-2.012-3.453-4.044-3.453h-18.202 c-2.255,0-4.065,1.804-4.065,4.07c0,23.705,12.904,51.983,74.506,51.983c44.605,0,70.182-17.559,70.182-48.231 c0-30.415-20.553-38.503-63.809-44.232c-43.719-5.785-48.161-8.768-48.161-19.007c0-8.436,3.763-19.717,36.144-19.717 c28.918,0,39.578,6.231,43.962,25.716c0.385,1.837,2.056,3.176,3.948,3.176h18.271c1.135,0,2.211-0.488,2.979-1.294 c0.772-0.854,1.183-1.967,1.075-3.135c-2.827-33.579-25.143-49.226-70.236-49.226c-40.14,0-64.078,16.94-64.078,45.333 c0,30.813,23.819,39.334,62.333,43.134c46.092,4.525,49.67,11.256,49.67,20.327C341.729,392.703,329.105,399.408,299.448,399.408z M438.328,101.044c-0.288-0.17-0.646-0.17-0.935,0l-7.767,4.484c-0.292,0.167-0.47,0.477-0.47,0.81v8.979 c0,0.333,0.178,0.644,0.47,0.81l7.767,4.484c0.288,0.167,0.646,0.167,0.935,0l7.773-4.484c0.293-0.166,0.47-0.477,0.47-0.81v-8.979 c0-0.333-0.177-0.643-0.47-0.81L438.328,101.044z"> </path> </g> </g></svg>`,
    },
    {
      number: "",
      title: "Express.js",
      description: "Minimal and flexible Node.js framework for APIs and web applications.",
      icon: `<svg fill="currentColor" width="24px" height="24px" viewBox="0 0 24 24" role="img" class="text-zinc-900 transition group-hover:text-white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"></path></g></svg>`,
    },
    {
      number: "",
      title: "Laravel",
      description: "Elegant PHP framework with MVC architecture and built-in tools for rapid development.",
      icon: `<svg fill="currentColor" width="24px" height="24px" viewBox="0 0 32 32" version="1.1" class="text-zinc-900 transition group-hover:text-white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>laravel</title> <path d="M13.143 23.585l10.46-5.97-4.752-2.736-10.453 6.019zM24.084 11.374l-4.757-2.736v5.417l4.758 2.737zM24.559 5.078l-4.756 2.736 4.756 2.736 4.755-2.737zM9.911 18.928l2.76-1.589v-11.934l-4.758 2.738v11.934zM7.437 1.846l-4.756 2.737 4.756 2.737 4.753-2.737zM2.204 5.406v18.452l10.464 6.022v-5.471l-5.472-3.096c-0.018-0.013-0.032-0.027-0.051-0.039-0.014-0.013-0.030-0.023-0.044-0.034l-0.001-0.003c-0.015-0.015-0.028-0.031-0.039-0.049l-0.001-0.001c-0.014-0.013-0.025-0.028-0.035-0.045l-0.001-0.001h-0.003c-0.008-0.015-0.016-0.035-0.024-0.055l-0.001-0.004c-0.007-0.015-0.015-0.032-0.022-0.051l-0.001-0.003c-0.004-0.020-0.008-0.045-0.010-0.070l-0-0.002c-0.003-0.015-0.006-0.033-0.008-0.051l-0-0.001v-12.759l-2.757-1.59zM24.085 23.857v-5.422l-10.464 5.974v5.47zM29.789 14.055v-5.417l-4.756 2.737v5.417zM30.725 7.69c0.011 0.038 0.018 0.081 0.018 0.126v0 6.513c-0 0.176-0.095 0.329-0.237 0.411l-0.002 0.001-5.468 3.149v6.241c-0 0.175-0.095 0.328-0.236 0.411l-0.002 0.001-11.416 6.57c-0.024 0.013-0.052 0.025-0.081 0.033l-0.003 0.001-0.030 0.013c-0.036 0.011-0.078 0.017-0.121 0.017s-0.085-0.006-0.125-0.018l0.003 0.001c-0.015-0.004-0.027-0.009-0.039-0.016l0.001 0.001c-0.031-0.011-0.057-0.021-0.082-0.033l0.004 0.002-11.413-6.57c-0.144-0.084-0.239-0.237-0.239-0.412v0-19.548c0-0.044 0.007-0.087 0.019-0.127l-0.001 0.003c0.004-0.015 0.013-0.025 0.018-0.040 0.009-0.029 0.019-0.053 0.030-0.076l-0.001 0.003c0.008-0.016 0.018-0.030 0.029-0.042l-0 0 0.042-0.057 0.047-0.034c0.018-0.015 0.034-0.030 0.052-0.043h0.001l5.708-3.285c0.068-0.040 0.15-0.064 0.237-0.064s0.169 0.024 0.239 0.065l-0.002-0.001 5.71 3.285c0.019 0.013 0.035 0.027 0.051 0.042l-0-0 0.048 0.034c0.016 0.018 0.025 0.038 0.042 0.057 0.012 0.012 0.022 0.026 0.031 0.041l0.001 0.001c0.010 0.020 0.020 0.044 0.029 0.069l0.001 0.004 0.016 0.040c0.011 0.035 0.018 0.076 0.018 0.118 0 0.002 0 0.004-0 0.006v-0 12.208l4.756-2.737v-6.241c0-0.001 0-0.002 0-0.002 0-0.043 0.006-0.085 0.017-0.125l-0.001 0.003c0.004-0.013 0.013-0.025 0.016-0.040 0.010-0.030 0.020-0.054 0.032-0.078l-0.002 0.004c0.009-0.015 0.023-0.025 0.032-0.042 0.015-0.019 0.027-0.038 0.042-0.054 0.014-0.013 0.029-0.025 0.045-0.035l0.001-0.001c0.018-0.013 0.033-0.029 0.052-0.040h0.001l5.708-3.286c0.068-0.040 0.15-0.064 0.237-0.064s0.169 0.024 0.239 0.065l-0.002-0.001 5.708 3.286c0.020 0.013 0.034 0.027 0.053 0.039 0.015 0.013 0.032 0.023 0.046 0.035 0.016 0.018 0.028 0.038 0.043 0.056 0.011 0.012 0.021 0.026 0.030 0.040l0.001 0.001c0.012 0.022 0.022 0.047 0.030 0.073l0.001 0.003c0.008 0.012 0.014 0.025 0.019 0.039l0 0.001z"></path> </g></svg>`,
    },
    {
      number: "",
      title: "Django",
      description: "High-level Python framework focused on security, scalability, and clean design.",
      icon: `<svg fill="currentColor" version="1.1" class="text-zinc-900 transition group-hover:text-white" width="24px" height="24px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="5151e0c8492e5103c096af88a51f62ed"> <path display="inline" d="M321.38,0.5h-83.553v127.405c-12.483-3.253-22.786-4.338-36.354-4.338 c-87.349,0-143.781,55.34-143.781,140.52c0,88.441,53.176,134.556,155.181,134.556c34.165,0,65.639-3.254,108.508-11.392V0.5z M237.827,329.203c-11.938,1.623-19.533,2.162-28.755,2.162c-42.865,0-66.197-24.409-66.197-68.904 c0-45.573,24.413-71.616,66.743-71.616c10.303,0,18.437,1.084,28.209,4.338V329.203z M454.309,0.949v85.726h-83.557V0.949H454.309z M370.752,129.532h83.557v193.699c0,66.735-4.889,98.743-19.537,126.417c-13.56,26.59-31.466,43.403-68.365,61.852l-77.589-36.896 c36.889-17.359,54.81-32.542,66.197-55.883c11.934-23.874,15.737-51.544,15.737-124.252V129.532z"> </path> </g> </g></svg>`,
    },
    {
      number: "",
      title: "Spring Boot",
      description: "Java-based framework for building production-ready microservices and APIs.",
      icon: `<svg fill="currentColor" width="24px" height="24px" viewBox="0 0 24 24" class="text-zinc-900 transition group-hover:text-white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.493 1.424a5.28 5.28 0 0 1-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059 1.916-.736 3.747-.332 5.818-.825 2.208-.525 4.766-2.18 5.805-4.344 1.165 3.458 2.565 8.866.054 12.21zm.042-13.28a9.212 9.212 0 0 1-1.065 1.89 9.982 9.982 0 0 0-7.167-3.031C6.492 1.971 2 6.463 2 11.985a9.983 9.983 0 0 0 3.205 7.334l.22.194a.856.856 0 1 1 .001.001l.149.132A9.96 9.96 0 0 0 12.015 22c5.278 0 9.613-4.108 9.984-9.292.274-2.539-.476-5.763-1.752-9.596"></path></g></svg>`,
    },
    {
      number: "",
      title: "MongoDB",
      description: "NoSQL database designed for scalability and flexible data structures.",
      icon: `<svg fill="currentColor" width="24px" height="24px" viewBox="0 0 32 32" version="1.1" class="text-zinc-900 transition group-hover:text-white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>mongodb</title> <path d="M15.821 23.185s0-10.361 0.344-10.36c0.266 0 0.612 13.365 0.612 13.365-0.476-0.056-0.956-2.199-0.956-3.005zM22.489 12.945c-0.919-4.016-2.932-7.469-5.708-10.134l-0.007-0.006c-0.338-0.516-0.647-1.108-0.895-1.732l-0.024-0.068c0.001 0.020 0.001 0.044 0.001 0.068 0 0.565-0.253 1.070-0.652 1.409l-0.003 0.002c-3.574 3.034-5.848 7.505-5.923 12.508l-0 0.013c-0.001 0.062-0.001 0.135-0.001 0.208 0 4.957 2.385 9.357 6.070 12.115l0.039 0.028 0.087 0.063q0.241 1.784 0.412 3.576h0.601c0.166-1.491 0.39-2.796 0.683-4.076l-0.046 0.239c0.396-0.275 0.742-0.56 1.065-0.869l-0.003 0.003c2.801-2.597 4.549-6.297 4.549-10.404 0-0.061-0-0.121-0.001-0.182l0 0.009c-0.003-0.981-0.092-1.94-0.261-2.871l0.015 0.099z"></path> </g></svg>`,
    },
    {
      number: "",
      title: "MySQL",
      description: "Reliable relational database for structured data and transactions.",
      icon: `<svg fill="currentColor" width="24px" height="24px" viewBox="0 0 24 24" class="text-zinc-900 transition group-hover:text-white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m24.129 23.412-.508-.484c-.251-.331-.518-.624-.809-.891l-.005-.004q-.448-.407-.931-.774-.387-.266-1.064-.641c-.371-.167-.661-.46-.818-.824l-.004-.01-.048-.024c.212-.021.406-.06.592-.115l-.023.006.57-.157c.236-.074.509-.122.792-.133h.006c.298-.012.579-.06.847-.139l-.025.006q.194-.048.399-.109t.351-.109v-.169q-.145-.217-.351-.496c-.131-.178-.278-.333-.443-.468l-.005-.004q-.629-.556-1.303-1.076c-.396-.309-.845-.624-1.311-.916l-.068-.04c-.246-.162-.528-.312-.825-.435l-.034-.012q-.448-.182-.883-.399c-.097-.048-.21-.09-.327-.119l-.011-.002c-.117-.024-.217-.084-.29-.169l-.001-.001c-.138-.182-.259-.389-.355-.609l-.008-.02q-.145-.339-.314-.651-.363-.702-.702-1.427t-.651-1.452q-.217-.484-.399-.967c-.134-.354-.285-.657-.461-.942l.013.023c-.432-.736-.863-1.364-1.331-1.961l.028.038c-.463-.584-.943-1.106-1.459-1.59l-.008-.007c-.509-.478-1.057-.934-1.632-1.356l-.049-.035q-.896-.651-1.96-1.282c-.285-.168-.616-.305-.965-.393l-.026-.006-1.113-.278-.629-.048q-.314-.024-.629-.024c-.148-.078-.275-.171-.387-.279-.11-.105-.229-.204-.353-.295l-.01-.007c-.605-.353-1.308-.676-2.043-.93l-.085-.026c-.193-.113-.425-.179-.672-.179-.176 0-.345.034-.499.095l.009-.003c-.38.151-.67.458-.795.84l-.003.01c-.073.172-.115.371-.115.581 0 .368.13.705.347.968l-.002-.003q.544.725.834 1.14.217.291.448.605c.141.188.266.403.367.63l.008.021c.056.119.105.261.141.407l.003.016q.048.206.121.448.217.556.411 1.14c.141.425.297.785.478 1.128l-.019-.04q.145.266.291.52t.314.496c.065.098.147.179.241.242l.003.002c.099.072.164.185.169.313v.001c-.114.168-.191.369-.217.586l-.001.006c-.035.253-.085.478-.153.695l.008-.03c-.223.666-.351 1.434-.351 2.231 0 .258.013.512.04.763l-.003-.031c.06.958.349 1.838.812 2.6l-.014-.025c.197.295.408.552.641.787.168.188.412.306.684.306.152 0 .296-.037.422-.103l-.005.002c.35-.126.599-.446.617-.827v-.002c.048-.474.12-.898.219-1.312l-.013.067c.024-.063.038-.135.038-.211 0-.015-.001-.03-.002-.045v.002q-.012-.109.133-.206v.048q.145.339.302.677t.326.677c.295.449.608.841.952 1.202l-.003-.003c.345.372.721.706 1.127 1.001l.022.015c.212.162.398.337.566.528l.004.004c.158.186.347.339.56.454l.01.005v-.024h.048c-.039-.087-.102-.157-.18-.205l-.002-.001c-.079-.044-.147-.088-.211-.136l.005.003q-.217-.217-.448-.484t-.423-.508q-.508-.702-.969-1.467t-.871-1.555q-.194-.387-.375-.798t-.351-.798c-.049-.099-.083-.213-.096-.334v-.005c-.006-.115-.072-.214-.168-.265l-.002-.001c-.121.206-.255.384-.408.545l.001-.001c-.159.167-.289.364-.382.58l-.005.013c-.141.342-.244.739-.289 1.154l-.002.019q-.072.641-.145 1.318l-.048.024-.024.024c-.26-.053-.474-.219-.59-.443l-.002-.005q-.182-.351-.326-.69c-.248-.637-.402-1.374-.423-2.144v-.009c-.009-.122-.013-.265-.013-.408 0-.666.105-1.308.299-1.91l-.012.044q.072-.266.314-.896t.097-.871c-.05-.165-.143-.304-.265-.41l-.001-.001c-.122-.106-.233-.217-.335-.335l-.003-.004q-.169-.244-.326-.52t-.278-.544c-.165-.382-.334-.861-.474-1.353l-.022-.089c-.159-.565-.336-1.043-.546-1.503l.026.064c-.111-.252-.24-.47-.39-.669l.006.008q-.244-.326-.436-.617-.244-.314-.484-.605c-.163-.197-.308-.419-.426-.657l-.009-.02c-.048-.097-.09-.21-.119-.327l-.002-.011c-.011-.035-.017-.076-.017-.117 0-.082.024-.159.066-.223l-.001.002c.011-.056.037-.105.073-.145.039-.035.089-.061.143-.072h.002c.085-.055.188-.088.3-.088.084 0 .165.019.236.053l-.003-.001c.219.062.396.124.569.195l-.036-.013q.459.194.847.375c.298.142.552.292.792.459l-.018-.012q.194.121.387.266t.411.291h.339q.387 0 .822.037c.293.023.564.078.822.164l-.024-.007c.481.143.894.312 1.286.515l-.041-.019q.593.302 1.125.641c.589.367 1.098.743 1.577 1.154l-.017-.014c.5.428.954.867 1.38 1.331l.01.012c.416.454.813.947 1.176 1.464l.031.047c.334.472.671 1.018.974 1.584l.042.085c.081.154.163.343.234.536l.011.033q.097.278.217.57.266.605.57 1.221t.57 1.198l.532 1.161c.187.406.396.756.639 1.079l-.011-.015c.203.217.474.369.778.422l.008.001c.368.092.678.196.978.319l-.047-.017c.143.065.327.134.516.195l.04.011c.212.065.396.151.565.259l-.009-.005c.327.183.604.363.868.559l-.021-.015q.411.302.822.57.194.145.651.423t.484.52c-.114-.004-.249-.007-.384-.007-.492 0-.976.032-1.45.094l.056-.006c-.536.072-1.022.203-1.479.39l.04-.014c-.113.049-.248.094-.388.129l-.019.004c-.142.021-.252.135-.266.277v.001c.061.076.11.164.143.26l.002.006c.034.102.075.19.125.272l-.003-.006c.119.211.247.393.391.561l-.004-.005c.141.174.3.325.476.454l.007.005q.244.194.508.399c.161.126.343.25.532.362l.024.013c.284.174.614.34.958.479l.046.016c.374.15.695.324.993.531l-.016-.011q.291.169.58.375t.556.399c.073.072.137.152.191.239l.003.005c.091.104.217.175.36.193h.003v-.048c-.088-.067-.153-.16-.184-.267l-.001-.004c-.025-.102-.062-.191-.112-.273l.002.004zm-18.576-19.205q-.194 0-.363.012c-.115.008-.222.029-.323.063l.009-.003v.024h.048q.097.145.244.326t.266.351l.387.798.048-.024c.113-.082.2-.192.252-.321l.002-.005c.052-.139.082-.301.082-.469 0-.018 0-.036-.001-.054v.003c-.045-.044-.082-.096-.108-.154l-.001-.003-.081-.182c-.053-.084-.127-.15-.214-.192l-.003-.001c-.094-.045-.174-.102-.244-.169z"></path></g></svg>`,
    },
    {
      number: "",
      title: "GraphQL",
      description: "Efficient query language for flexible and optimized API communication.",
      icon: `<svg fill="currentColor" width="24px" height="24px" viewBox="0 0 32 32" version="1.1" class="text-zinc-900 transition group-hover:text-white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>graphql</title> <path d="M7.696 22.798h16.611l-8.305 4.794zM17.736 5.409l8.305 4.796v9.59zM14.269 5.409l-8.304 14.386v-9.59zM16.003 4.946l9.572 16.583h-19.147zM16.003 2.945l-11.308 6.528v13.056l11.308 6.528 11.305-6.528v-13.056zM5.328 7.166c-1.476 0-2.672 1.196-2.672 2.672s1.196 2.672 2.672 2.672c1.476 0 2.672-1.196 2.672-2.672 0-0.492-0.133-0.953-0.365-1.349l0.007 0.013c-0.471-0.804-1.33-1.336-2.314-1.336 0 0 0 0 0 0v0zM5.328 19.491c0 0.852 0.691 1.542 1.543 1.542s1.543-0.691 1.543-1.543-0.691-1.543-1.543-1.543c-0.852 0-1.542 0.69-1.543 1.542v0zM16.002 25.652c0 0 0 0 0 0-1.476 0-2.672 1.196-2.672 2.672s1.196 2.672 2.672 2.672c1.476 0 2.672-1.196 2.672-2.672 0-0.492-0.133-0.953-0.365-1.349l0.007 0.013c-0.471-0.804-1.33-1.336-2.314-1.336v0zM26.674 19.49c-1.476 0-2.672 1.196-2.672 2.672s1.196 2.672 2.672 2.672c1.476 0 2.672-1.196 2.672-2.672 0-0.492-0.133-0.953-0.365-1.349l0.007 0.013c-0.471-0.804-1.33-1.336-2.314-1.336 0 0-0 0-0 0v0zM26.674 7.166c-1.476 0-2.672 1.196-2.672 2.672s1.196 2.672 2.672 2.672c1.476 0 2.672-1.196 2.672-2.672 0-0.492-0.133-0.953-0.365-1.349l0.007 0.013c-0.471-0.804-1.33-1.336-2.314-1.336-0 0-0 0-0 0v0zM16.002 1.004c0 0 0 0 0 0-1.476 0-2.672 1.196-2.672 2.672s1.196 2.672 2.672 2.672c1.476 0 2.672-1.196 2.672-2.672 0-0.492-0.133-0.953-0.365-1.349l0.007 0.013c-0.471-0.804-1.33-1.336-2.314-1.336v0z"></path> </g></svg>`,
    },
];

const steps = [
    {
      num: "01",
      title: "Requirement Analysis",
      body: "We analyze business logic, data flow, and system requirements to define a solid backend foundation.",
    },
    {
      num: "02",
      title: "System Architecture",
      body: "We design scalable backend architecture including services, APIs, and database structure for long-term growth.",
    },
    {
      num: "03",
      title: "Database Design",
      body: "We create optimized schemas, relationships, and indexing strategies to ensure efficient data handling.",
    },
    {
      num: "04",
      title: "API Development",
      body: "We build secure and scalable APIs (REST/GraphQL) to enable seamless communication between systems.",
    },
    {
      num: "05",
      title: "Security & Optimization",
      body: "We implement authentication, authorization, caching, and performance optimizations for reliability.",
    },
    {
      num: "06",
      title: "Testing & Deployment",
      body: "We test backend systems, ensure stability, and deploy using modern CI/CD and cloud infrastructure.",
    },
];

const benefits = [
    {
        no: "01",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>`,
        title: "High Performance & Reliability",
        body: "We build backend systems that handle heavy traffic, process data efficiently, and ensure stable performance for end users at all times.",
    },
    {
        no: "02",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet-icon lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>`,
        title: "Scalable Infrastructure",
        body: "Our backend architecture is designed to scale seamlessly as your application grows—supporting more users, data, and features without breaking.",
    },
    {
        no: "03",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings2-icon lucide-settings-2"><path d="M14 17H5"/><path d="M19 7h-9"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>`,
        title: "Secure Data Handling",
        body: "We implement strong authentication, authorization, and data protection mechanisms to keep your system safe and secure.",
    },
    {
        no: "04",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-handshake-icon lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>`,
        title: "Efficient API Communication",
        body: "We design fast and well-structured APIs that enable smooth communication between frontend, mobile apps, and third-party services.",
    },
    {
        no: "05",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20v-6M6 20v-4M18 20v-8"/></svg>`,
        title: "Developer-Friendly Architecture",
        body: "Clean code structure, modular services, and proper documentation make the backend easy to maintain, extend, and collaborate on.",
    },
    {
        no: "06",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l7 7-7 7-7-7z"/></svg>`,
        title: "Future-Ready & Maintainable",
        body: "We use modern backend technologies and best practices to ensure long-term scalability, easy upgrades, and system flexibility.",
    },
];

export default function BackendTechnologiesPage() {

    const stats = useMemo(
        () => [
            { num: "150+", label: "APIs BUILT" },
            { num: "8+", label: "Years Experience" },
            { num: "98%", label: "Uptime" },
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
                    <span className="h-[2px] w-7 bg-red-600" />Backend Technologies Services
                    </div>

                    <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-zinc-950 sm:text-[118px] md:text-[140px] lg:text-[168px]">
                    <span>HIRE </span>
                    <span className="text-red-600">Backend</span>
                    <span className="hero-outline block outline-black">Developer</span>
                    </h1>

                    <p className="max-w-xl text-[15px] leading-8 text-zinc-500">Build secure, scalable, and high-performance backend systems using modern server-side technologies.</p>

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
                        <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">Modern BAckend Engineering</div>
                    </div>

                    <div className="absolute right-8 top-16 rounded-lg border border-white/10 bg-zinc-900/90 px-4 py-2 text-xs font-bold text-blue-400 hero-float">⚛️ Laravel</div>
                    <div className="absolute bottom-16 left-2 rounded-lg border border-white/10 bg-zinc-900/90 px-4 py-2 text-xs font-bold text-red-500 hero-float [animation-delay:1.6s]">🔥 NodeJS</div>
                    <div className="absolute bottom-36 right-3 rounded-lg border border-white/10 bg-zinc-900/90 px-4 py-2 text-xs font-bold text-emerald-400 hero-float [animation-delay:0.8s]">✅ Django</div>
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

                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2">
                        <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-red-500" />
                            <span className="h-3 w-3 rounded-full bg-yellow-500" />
                            <span className="h-3 w-3 rounded-full bg-green-500" />
                        </div>
                        <span className="text-[11px] text-zinc-500">api/users.ts</span>
                        </div>

                        {/* Body */}
                        <div className="grid md:grid-cols-2">
                        
                        {/* Code Block (Backend API) */}
                        <div className="border-r border-white/[0.06] p-4">
                            <pre className="overflow-x-auto text-xs leading-6 text-zinc-300 md:text-sm">
{`// Next.js API Route
export async function GET() {
const users = [
    { id: 1, name: "Aman", role: "Admin" },
    { id: 2, name: "John", role: "User" }
];

return Response.json({
    success: true,
    data: users
});
}`}
                            </pre>
                        </div>

                        {/* Output Preview (JSON Response) */}
                        <div className="bg-[#0c0c0c] p-4 text-xs text-green-400 md:text-sm">
                            <pre className="overflow-x-auto">
{`{
"success": true,
"data": [
    { "id": 1, "name": "Aman", "role": "Admin" },
    { "id": 2, "name": "John", "role": "User" }
]
}`}
                            </pre>
                        </div>

                        </div>
                    </div>
                    </div>
                    {/* right column */}
                    <div className="relative space-y-4">
                        <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                            <span className="h-[2px] w-7 bg-red-600" />
                            Backend Overview
                        </div>
                        <h2 className="text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[70px] lg:text-[80px]">Modern <span className="text-red-600">Backend</span></h2>
                        
                        <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]"><strong className="text-white">Backend development is the engine behind web applications</strong>{" "} — handling business logic, data processing, and server-side operations. It ensures that applications are secure, scalable, and capable of managing complex workflows efficiently.</p>

                        <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">Using technologies like <strong className="text-white">Node.js, databases, and API architectures</strong>,{" "} we build robust systems that manage data, integrate services, and power seamless communication between frontend and server.</p>

                        <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">Our approach focuses on <strong className="text-white">performance, security, and scalability</strong>{" "} — delivering reliable backend infrastructures that support high traffic, real-time operations, and long-term product growth.</p>

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
                Backend<br />
                <span className="text-red-600">Technologies</span>
                </>
            }
            description=""
            items={features}
            gridClassName="grid border-2 border-zinc-950 md:grid-cols-2 xl:grid-cols-4"
        />

        {/* Backend Development Process */}
        <DevelopmentProcess
            steps={steps}
            label="Backend Development Process"
            title={
                <>
                FROM LOGIC TO <span className="text-red-600">SCALABLE SYSTEMS</span>
                </>
            }
            description="We build robust backend systems through a structured process—combining architecture design, database optimization, and secure API development to deliver scalable, high-performance, and reliable server-side solutions."
        />

        {/* BUSINESS BENEFITS */}
        <BoxCard
            items={benefits}
            label="Backend  Benefits"
            title={
                <>
                  WHY MODERN APPS NEED
                  <br />
                  <span className="text-red-600">STRONG BACKEND</span>
                </>
            }
            description="We build powerful backend systems that ensure performance, security, and scalability—helping both users enjoy seamless experiences and developers maintain efficient, future-ready architectures."
            headerClassName="mb-12 text-left"
            gridClassName="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
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
            description="Let&apos;s turn your vision into a production-grade Backend application. Our team is ready when you are — no project too small, no challenge too large."
            buttonText="Get a Free Quote →"
            buttonHref="/"
        />

    </>
    );
}