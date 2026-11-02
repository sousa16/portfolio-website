// All site content. Blank optional fields don't render, so a TODO(João) here never reaches the page.

export const profile = {
    name: 'João Sousa',
    headline: 'Software Engineer',
    subtitle: 'Backend and distributed systems',
    intro: `I work on production incidents at Cisco TAC, on the Data Center AI Compute team. I've built full-stack applications running in production. I'm doing an MSc at Instituto Superior Técnico, specializing in distributed systems and cybersecurity.`,
};

export const contactLinks = [
    { name: 'Download CV', url: '/Joao-Sousa-CV.pdf', download: true },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/joao-p-c-sousa/' },
    { name: 'GitHub', url: 'https://github.com/sousa16' },
    { name: 'Email', url: 'mailto:jpcsousa@outlook.pt' },
];

export const navLinks = [
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Education', to: 'education' },
];

export const experience = [
    {
        role: 'Technical Consulting Engineer, TAC Data Center AI Compute',
        company: 'Cisco',
        dates: 'Sep 2025 – Present',
        note: 'Promoted from TAC intern in April 2026.',
        // TODO(João): case volume or severity, and the internal tools' usage or time saved, if shareable.
        bullets: [
            'Resolve critical production incidents for enterprise customers across UCS hardware, fabric interconnects and data center switching.',
            'Root-cause performance bottlenecks across compute, ESXi clusters and cloud-managed server virtualization using logs, captures and telemetry.',
            'Built an event-driven defect audit in Python and an LLM that produces a scored compliance summary against quality guidelines, sends key findings to the submitter over Webex and publishes a detailed report.',
            'Built internal lookup tools for defect reviews and RMA status: lightweight web frontends on Python backends that call internal APIs in parallel, cache in MongoDB and use an LLM to produce reviewable reports.',
        ],
    },
    {
        role: 'Digital Business Engineer',
        company: 't_insight',
        dates: 'Sep 2024 – Feb 2025',
        // TODO(João): a concrete result, and the client's name if you confirm it can be shared.
        bullets: [
            'Built and fixed high-traffic, responsive web platforms using TypeScript and ASP.NET MVC.',
        ],
    },
    {
        role: 'QA Automation Engineer',
        company: 'Sky Portugal',
        dates: 'Jul 2024 – Aug 2024',
        note: 'Summer internship.',
        bullets: [
            'Built a prototype RAG Slack bot in Python with Azure OpenAI that classifies Jira bug tickets and routes them to the right team.',
        ],
    },
];

export const projects = [
    {
        name: 'raft-kv',
        status: 'In progress',
        purpose: 'Replicated key-value store in Go on the Raft consensus algorithm.',
        role: 'Sole author',
        // TODO(João): the rest of the stack once decided.
        stack: ['Go'],
        // TODO(João): first concrete result once something runs.
        result: null,
        links: [{ name: 'Code', url: 'https://github.com/sousa16/raft-kv' }],
    },
    {
        name: 'ChessLab',
        purpose: 'Chess training app for building an opening repertoire and drilling it with spaced repetition, with tactics training on top.',
        role: 'Main developer, with one co-developer',
        stack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma', 'NextAuth', 'Vercel'],
        // TODO(João): usage numbers if you get them.
        result: 'Running in production, with email and Google sign-in and a pool of 10k+ Lichess puzzles.',
        links: [
            { name: 'Live app', url: 'https://chesslab.pt' },
            { name: 'Code', url: 'https://github.com/sousa16/chesslab' },
        ],
    },
    {
        name: 'Playkit',
        status: 'Case study',
        purpose: 'Progressive web app of minigames for live promotional events, with admin controls for event staff.',
        // TODO(João): sole developer or part of a team?
        role: 'Built as a consultant',
        stack: ['React', 'TypeScript', 'Tailwind CSS', 'Cloudflare Pages', 'Service workers'],
        result: 'Used by thousands of users at tens of live events, and works offline through service workers.',
        links: [],
    },
];

export const skills = [
    { group: 'Languages', items: 'Go, Python, TypeScript, C, SQL' },
    { group: 'Backend & tools', items: 'PostgreSQL, Docker, gRPC, Linux, Git, Next.js, React' },
    { group: 'Networking & data center', items: 'BGP, OSPF, EVPN, VXLAN, Cisco UCS, ESXi' },
    {
        group: 'Security',
        items: 'Web exploitation, CTF',
        link: { name: 'write-ups', url: 'https://github.com/sousa16/ctf-writeups' },
    },
];

export const certifications = [
    { name: 'Cisco Certified Network Professional Data Center (CCNP Data Center)', date: 'May 2026' },
    { name: 'Cisco AI Technical Practitioner (AITECH)', date: 'Feb 2026' },
    { name: 'Cisco Certified Network Associate Automation (CCNA Automation)', date: 'Nov 2025' },
    { name: 'Cisco Certified Network Associate (CCNA)', date: 'Nov 2025' },
];

export const education = [
    {
        degree: 'MSc in Computer Science and Engineering',
        detail: 'Specializing in distributed systems and cybersecurity.',
        school: 'Instituto Superior Técnico',
        dates: 'Sep 2026 – Present',
    },
    {
        degree: 'BSc in Computer Science and Engineering',
        school: 'Instituto Superior Técnico',
        dates: '2021 – 2025',
    },
];
