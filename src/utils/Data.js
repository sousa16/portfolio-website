import React from 'react';
import { FaPython } from 'react-icons/fa';
import { IoFlagSharp } from "react-icons/io5";
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { SiCisco } from "react-icons/si";

import ChessLabPrev from '../assets/chesslabprev.png'
import PlinkoPrev from '../assets/plinkoprev.png';

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
        project_name: 'CTF Writeup Repository',
        project_desc: `This repository is a growing collection of writeups for various Capture The Flag (CTF) challenges I've solved - mainly in the web exploitation area. It serves as a personal reference and a resource for others looking to learn from my experiences in solving CTF challenges.`,
        tech_stack: ['Web Exploitation', 'Python'],
        project_img: null,
        project_url: 'https://github.com/sousa16/ctf-writeups',
        reverse: false,
    },
    {
        id: 1,
        project_name: 'ChessLab',
        project_desc: `ChessLab is an in-progress project that helps chess players improve their opening repertoire through Spaced Repetition System (SRS) training.`,
        tech_stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Neon', 'Prisma'],
        project_img: ChessLabPrev,
        reverse: false,
        //button_text: 'Visit Repository',
        //button_url: 'http://www.chesslab.pt'
    },
    {
        id: 2,
        project_name: 'Plinko',
        project_desc: `Developed a mobile Plinko Progressive Web App for a consulting firm to support interactive prize giveaways at promotional events. The application features an administrative interface that allows event staff to manage available products and monitor prize distribution in real time throughout the event. This solution was tailored for use by the firm's end client and is adaptable for various event scenarios, providing both engaging user experiences and robust inventory tracking for organizers.`,
        tech_stack: ['React', 'TypeScript', 'Cloudflare Solutions'],
        project_img: PlinkoPrev,
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