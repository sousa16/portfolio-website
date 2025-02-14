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
        project_desc: `ChessLab was a mobile app I began developing to help chess players improve their openings and tactical skills through a personalized training experience.
        The app aimed to allow users to create and edit opening repertoires and practice puzzles. Although the project isn't completed, it gave me valuable experience in mobile app development and sparked my interest in integrating advanced learning features like Spaced Repetition.`,
        tech_stack: ['React Native', 'Python', 'Firebase'],
        project_img: ChessLabPrev,
        reverse: false,
        // button_text: 'Visit Website',
        // button_url: 'http://www.chesslab.pt'
    }
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