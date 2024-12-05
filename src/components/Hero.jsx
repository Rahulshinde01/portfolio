import { ButtonPrimary, ButtonOutline } from './Button'

function Hero() {
  return (
    <section 
    id = "home"
    className='pt-28 lg:pt-36'
    >
        <div className='container items-center lg:grid lg:grid-cols-2 lg:gap-10'>
            <div>
                <div className='flex items-center gap-3'>
                        <figure className='img-box w-9 h-9 rounded-lg'>
                            <img src='/images/icon12.jpg' 
                            width={40}
                            height={40}
                            alt='Rahul Shinde portfolio' 
                            className='img-cover'
                            />
                        </figure>

                        <div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide'>
                            <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                                <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping'></span>

                            </span>
                            Available for work

                        </div>
                </div>

                <h2 className='headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10'>
                Developing Innovative and Scalable Full Stack Solutions for the Modern Web
                </h2>

                <div className='flex items-center gap-3'>
                    <ButtonPrimary 
                    label='Download CV'
                    icon='download'
                    ></ButtonPrimary> 

                    <ButtonOutline
                    href="#about"
                    label="Scroll down"
                    icon="arrow_downward"
                    ></ButtonOutline>

                </div>
            </div>

            <div className='hidden lg:block'>
                <figure className="w-full max-w-[480] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 40 to-65% rounded-[60px] overflow-hidden">
                    <img 
                        src='/images/image11.png'
                        width={600}
                        height={700} 
                        alt='Rahul Shinde' 
                        className='w-full' 
                    />

                </figure>
            </div>
        </div>

    </section>
  )
}

export default Hero