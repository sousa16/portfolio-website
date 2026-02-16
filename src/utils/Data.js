import React from 'react';
import { FaPython } from 'react-icons/fa';
import { IoFlagSharp } from "react-icons/io5";
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { SiCisco } from "react-icons/si";

export const Skills = [
    {
        id: 0, 
        tech: 'Cisco Networking',
        icon: <SiCisco />
    },
    {
        id: 1, 
        tech: 'Python',
        icon: <FaPython />
    }, 
    {
        id: 2, 
        tech: 'Capture The Flag',
        icon: <IoFlagSharp />
    }, 
    {
        id: 3, 
        tech: 'And More...',
        icon: <AiOutlinePlusCircle />
    },
];

export const projectDetails = [
    {
        id: 0,
        project_name: 'CTF Write-ups & Web Security Labs',
        project_desc: `Comprehensive collection of write-ups for Capture The Flag (CTF) challenges and PortSwigger Web Security Academy labs. Primarily focused on web exploitation techniques with detailed explanations of methodology, tools, payloads, and thought processes. Includes solutions from multiple CTF events (LIT CTF, CRHC CTF, Script25, and more) plus extensive PortSwigger lab documentation covering web vulnerabilities from fundamentals to advanced attack vectors.`,
        tech_stack: ['Web Exploitation', 'Python', 'JavaScript', 'OWASP', 'Security Research'],
        project_img: null,
        project_url: 'https://github.com/sousa16/ctf-writeups',
        reverse: false,
    },
    {
        id: 1,
        project_name: 'ChessLab',
        project_desc: `Full-stack chess opening repertoire builder and training platform (deploying soon). Enables players to construct, organize, and practice opening lines using an interactive chess board with spaced repetition learning methodology. Features secure authentication via email verification and Google OAuth, comprehensive repertoire management with branching line support, and progress tracking. Built with modern web technologies for a responsive, performant training experience.`,
        tech_stack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'NextAuth.js'],
        project_img: null,
        reverse: false,
        project_url: 'https://github.com/sousa16/chesslab',
        //button_text: 'Visit Repository',
        //button_url: 'http://www.chesslab.pt'
    },
    {
        id: 2,
        project_name: 'Interactive Minigames Platform',
        project_desc: `Progressive Web App designed for large-scale promotional events featuring multiple interactive minigames. Includes comprehensive administrative dashboard for real-time event management, prize inventory tracking, and player engagement analytics. Built for high-traffic retail scenarios with responsive mobile-first interface, robust state management, and intuitive controls for event staff. Deployed in premium enterprise environments with proven scalability and reliability.`,
        tech_stack: ['React', 'TypeScript', 'Tailwind CSS', 'Cloudflare Pages', 'PWA'],
        project_img: null,
        reverse: false,
        button_text: 'Visit Web App',
        button_url: 'https://plinko-2ha.pages.dev/'
    },
];

export const navLinks = [
    {
        id: 0,
        name: 'Home',
        to: 'home' 
    },

    {
        id: 1,
        name: 'My Skills',
        to: 'skills' 
    },

    {
        id: 2,
        name: 'Work Experience',
        to: 'experience'
    },

    {
        id: 3,
        name: 'My Projects',
        to: 'projects' 
    }

]