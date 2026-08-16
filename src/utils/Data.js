import React from 'react';
import { FaPython } from 'react-icons/fa';
import { IoFlagSharp } from "react-icons/io5";
import { MdCloud } from "react-icons/md";
import { MdSmartToy } from "react-icons/md";

export const Skills = [
    {
        id: 0, 
        tech: 'Network & Data Center Engineering',
        icon: <MdCloud />
    },
    {
        id: 1, 
        tech: 'Python Scripting & Automation',
        icon: <FaPython />
    },
    {
        id: 2, 
        tech: 'Cybersecurity & CTF',
        icon: <IoFlagSharp />
    }, 
    {
        id: 3, 
        tech: 'AI Infrastructure & Tools',
        icon: <MdSmartToy />
    },
];

export const projectDetails = [
    {
        id: 0,
        project_name: 'XDP/eBPF DDoS Mitigator (Ongoing)',
        project_desc: `Ongoing project building a kernel-bypass packet filtering and DDoS mitigation system. An XDP/eBPF data plane drops malicious traffic at the NIC driver level, before packets ever reach the Linux networking stack, while a Go control plane manages the BPF maps at runtime and reconciles state across network namespaces and attached programs, auto-detecting and repairing configuration drift. Built from the verifier up, with planned modules for BGP-based anycast routing with BFD failover and kernel-level observability exported to Prometheus and Grafana.`,
        tech_stack: ['eBPF', 'XDP', 'Go', 'C', 'Linux Kernel', 'Netlink', 'BGP', 'Prometheus'],
        project_img: null,
        project_url: 'https://github.com/sousa16/xdp-ebpf-mitigator',
        reverse: false,
    },
    {
        id: 1,
        project_name: 'CTF Write-ups & Web Security Labs',
        project_desc: `Comprehensive collection of write-ups for Capture The Flag (CTF) challenges and PortSwigger Web Security Academy labs. Primarily focused on web exploitation techniques with detailed explanations of methodology, tools, payloads, and thought processes. Includes solutions from multiple CTF events (LIT CTF, CRHC CTF, Script25, and more) plus extensive PortSwigger lab documentation covering web vulnerabilities from fundamentals to advanced attack vectors.`,
        tech_stack: ['Web Exploitation', 'Python', 'JavaScript', 'OWASP', 'Security Research'],
        project_img: null,
        project_url: 'https://github.com/sousa16/ctf-writeups',
        reverse: false,
    },
    {
        id: 2,
        project_name: 'ChessLab',
        project_desc: `Chess Opening repertoire builder and training platform. Includes a Tactics training feature. Enables players to construct, organize, and practice opening lines using an interactive chess board with spaced repetition learning methodology. Features secure authentication via email verification and Google OAuth, comprehensive repertoire management with branching line support, and progress tracking. Built with modern web technologies for a responsive, performant training experience.`,
        tech_stack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'NextAuth.js'],
        project_img: null,
        reverse: false,
        project_url: 'https://github.com/sousa16/chesslab',
        button_text: 'Visit Repository',
        button_url: 'http://www.chesslab.pt'
    },
    {
        id: 3,
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
        name: 'Work Experience',
        to: 'experience'
    },

    {
        id: 1,
        name: 'My Projects',
        to: 'projects' 
    },

    {
        id: 2,
        name: 'My Skills',
        to: 'skills' 
    },

    {
        id: 3,
        name: 'Certifications',
        to: 'certifications'
    },

    {
        id: 4,
        name: 'Education',
        to: 'education'
    }

]