import {
    certifications,
    contactLinks,
    education,
    experience,
    navLinks,
    profile,
    projects,
    skills,
} from './utils/Data';

const Section = ({ id, title, children }) => (
    <section id={id} aria-labelledby={`${id}-title`}>
        <h2 id={`${id}-title`}>{title}</h2>
        {children}
    </section>
);

const LinkRow = ({ links, label }) => (
    <ul className="links" aria-label={label}>
        {links.map((link) => (
            <li key={link.url}>
                <a href={link.url} download={link.download}>{link.name}</a>
            </li>
        ))}
    </ul>
);

const Project = ({ project }) => (
    <li>
        <h3>
            {project.name}
            {project.status && <span className="tag"> {project.status}</span>}
        </h3>
        <p>{project.purpose}</p>
        {project.result && (
            <dl>
                <dt>Result</dt>
                <dd>{project.result}</dd>
            </dl>
        )}
        <ul className="stack" aria-label={`${project.name} stack`}>
            {project.stack.map((tech) => <li key={tech}>{tech}</li>)}
        </ul>
        {project.links.length > 0 && <LinkRow links={project.links} label={`${project.name} links`} />}
    </li>
);

export default function App() {
    return (
        <>
            <a className="skip" href="#main">Skip to content</a>
            <header>
                <p className="name">{profile.name}</p>
                <h1>{profile.headline}</h1>
                <p className="subtitle">{profile.subtitle}</p>
                <p>{profile.intro}</p>
                <LinkRow links={contactLinks} label="Contact" />
                <nav aria-label="Sections">
                    <ul className="links">
                        {navLinks.map((link) => (
                            <li key={link.to}><a href={`#${link.to}`}>{link.name}</a></li>
                        ))}
                    </ul>
                </nav>
            </header>

            <main id="main">
                <Section id="experience" title="Experience">
                    <ol className="timeline">
                        {experience.map((job) => (
                            <li key={job.company}>
                                <p className="meta">{job.dates}</p>
                                <h3>{job.role}</h3>
                                <p className="org">{job.company}</p>
                                <ul className="bullets">
                                    {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                                </ul>
                                {job.note && <p className="note">{job.note}</p>}
                            </li>
                        ))}
                    </ol>
                </Section>

                <Section id="projects" title="Projects">
                    <ul className="rows">
                        {projects.map((project) => <Project key={project.name} project={project} />)}
                    </ul>
                </Section>

                <Section id="skills" title="Skills">
                    <dl className="skills">
                        {skills.map((skill) => (
                            <div key={skill.group}>
                                <dt>{skill.group}</dt>
                                <dd>
                                    {skill.items}
                                    {skill.link && <> (<a href={skill.link.url}>{skill.link.name}</a>)</>}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </Section>

                <Section id="certifications" title="Certifications">
                    <ul className="plain">
                        {certifications.map((cert) => (
                            <li key={cert.name}>
                                <p className="meta">{cert.date}</p>
                                <p>{cert.name}</p>
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section id="education" title="Education">
                    <ul className="plain">
                        {education.map((item) => (
                            <li key={item.degree}>
                                <p className="meta">{item.dates}</p>
                                <h3>{item.degree}</h3>
                                <p className="org">{item.school}</p>
                                {item.detail && <p className="note">{item.detail}</p>}
                            </li>
                        ))}
                    </ul>
                </Section>
            </main>
        </>
    );
}
