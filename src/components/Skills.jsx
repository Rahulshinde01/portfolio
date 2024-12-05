import SkillCard from "./SkillCard"

const Skills = () => {

    const skillItem = [
        {
          imgSrc: '/images/html.svg',
          label: 'HTML',
          desc: 'Structure'
        },
        {
          imgSrc: '/images/css3.svg',
          label: 'CSS',
          desc: 'User Interface'
        },
        {
          imgSrc: '/images/javascript.svg',
          label: 'JavaScript',
          desc: 'Interaction'
        },
        {
            imgSrc: '/images/typescript.svg',
            label: 'TypeScript',
            desc: 'Typed JavaScript'
        },
        {
          imgSrc: '/images/nodejs.svg',
          label: 'NodeJS',
          desc: 'Web Server'
        },
        {
          imgSrc: '/images/expressjs.svg',
          label: 'ExpressJS',
          desc: 'Node Framework'
        },
        {
          imgSrc: '/images/mongodb.svg',
          label: 'MongoDB',
          desc: 'Database'
        },
        {
          imgSrc: '/images/react.svg',
          label: 'React',
          desc: 'Framework'
        },
        {
          imgSrc: '/images/tailwindcss.svg',
          label: 'TailwindCSS',
          desc: 'User Interface'
        },
        {
            imgSrc: '/images/docker.svg',
            label: 'Docker',
            desc: 'Containerization'
        },
        {
            imgSrc: '/images/sql.svg',
            label: 'SQL',
            desc: 'Database Query Language'
        },
        {
            imgSrc: '/images/java.svg',
            label: 'Java',
            desc: 'Programming Language'
        }
      ];


  return (
    <section id="skills" className="section">
        <div className="container">

            <h2 className="headline-2">
                Skills
            </h2>
            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
            Here are the tools and technology I use to build amazing and powerful websites.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc, label, desc}, key) =>(
                        <SkillCard
                        key={key}
                        imgSrc={imgSrc}
                        label={label}
                        desc={desc}
                        >

                        </SkillCard>
                    ))
                }
            </div>

        </div>

    </section>

  )
}

export default Skills;
