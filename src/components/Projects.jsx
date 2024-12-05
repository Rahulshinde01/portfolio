import ProjectCard from "./ProjectCard";

const Projects = () => {
    const works = [
        {
            imgSrc: '/images/project1_1.png',
            title: 'SwiftPay - a Digital Payment Platform',
            tags: ['React','Express.js','Node.js','MongoDB'],
            projectLink: 'https://swift-pay-app.vercel.app/'
        },
        {
            imgSrc: '/images/project2_2.jpg',
            title: 'InsightVault - a Tech Blogging Web app',
            tags: ['MERN stack', 'PostgreSQL', 'Prisma', 'Serverless Deployment'],
            projectLink: 'https://github.com/Rahulshinde01/blog-app'
        },
        {
          imgSrc: '/images/myproject3.png',
          title: 'Planify - a task management app',
          tags: ['Frontend', 'React', 'TailwindCSS'],
          projectLink: 'https://planify-psi.vercel.app/'
        },
      ];

  return (
    <section
    id="projects"
    className="section">
        <div className="container">
            <h2 className="headline-2 mb-8">
            Projects
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc, title, tags, projectLink}, key) =>(
                    <ProjectCard
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}
                    ></ProjectCard>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Projects