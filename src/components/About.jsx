const About = () => {

    // const aboutItems = [
    //     {
    //       label: 'Project done',
    //       number: 45
    //     },
    //     {
    //       label: 'Years of experience',
    //       number: 10
    //     }
    //   ];

  return (
    <section
    id="about"
    className="section"
    >
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl">
                <p className="text-zinc-300 mb-4 md:text-lg md:max-w-[80ch]">
                Hi there! I&apos;m a full stack web developer with a strong desire to create aesthetically pleasing and extremely useful websites that combine technical skill with creativity. I turn ideas into digital masterpieces that are both beautiful and functional.                
                </p>
                <p className="text-zinc-300 md:text-lg md:max-w-[80ch]">
                I&apos;m currently in my Final Year of engineering from Dr D Y Patil Institute of Technology, Pune in Electronics and Telecommunication Engineering
                </p>
                CGPA - 8.7

                {/* <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({label, number}, key) =>(
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                </div>

                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))
                    }
                </div> */}
            </div>

        </div>

    </section>
  )
}

export default About
