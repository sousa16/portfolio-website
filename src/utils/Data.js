import React from 'react';
import { FaReact, FaPython } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import ChessLabPrev from '../assets/chesslabprev.png'

export const Skills = [
    {
        id: 0, 
        tech: 'React JS',
        icon: <FaReact />
    },
    {
        id: 1, 
        tech: 'JavaScript',
        icon: <SiJavascript />
    }, 
    {
        id: 2, 
        tech: 'Python',
        icon: <FaPython />
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
        project_name: 'ChessLab',
        project_desc: `ChessLab offers a comprehensive training experience that enables you to study and refine your openings, as well as sharpen your tactical prowess. 
        This user-friendly mobile app provides a platform to create and edit your personalized opening repertoires, in addition to a multitude of puzzles of varying levels of difficulty. 
        By integrating the Spaced Repetition System (SRS), ChessLab ensures that your training adapts to your progress, maximizing memory retention and skill improvement.`,
        tech_stack: ['Flutter', 'Python', 'Firebase'],
        project_img: ChessLabPrev,
        // project_url: '#',
        reverse: false,
        button_text: 'Visit Website',
        button_url: 'http://www.chesslab.pt'
    }
]

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
        name: 'My Projects',
        to: 'projects' 
    }

]