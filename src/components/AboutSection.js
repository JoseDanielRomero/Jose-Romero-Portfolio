import aboutmeImage from '../images/about-photo-jr.png'

function AboutSection() {

  const techStack = [
    {
      "id": "1",
      "name": "React",
      "image": "react-logo"
    },
    {
      "id": "2",
      "name": "JavaScript",
      "image": "js-logo"
    },
    {
      "id": "3",
      "name": "Tailwind",
      "image": "tailwind-logo"
    },
    {
      "id": "4",
      "name": "jQuery",
      "image": "jquery-logo"
    },
    {
      "id": "5",
      "name": "HTML",
      "image": "html-logo"
    },
    {
      "id": "6",
      "name": "CSS",
      "image": "css-logo"
    },
    {
      "id": "7",
      "name": "Astro",
      "image": "astro-logo"
    },
    {
      "id": "8",
      "name": "Git",
      "image": "git-logo"
    },
    {
      "id": "9",
      "name": "Vite",
      "image": "vite-logo"
    }
  ]

  return (
    <>
      <article className="h-auto w-full flex flex-col items-start justify-start gap-2">
        <h3 className="font-poppins font-bold text-[25px] md:text-[35px] leading-[2.3rem] md:leading-[55px] mt-3 md:mt-8 text-gray-800">
          About Me
        </h3>
        <section className="h-auto md:h-[400px] w-full flex flex-col md:flex-row gap-4">
          <div className="h-auto w-full md:h-full md:w-1/2 lg:w-1/3 flex flex-col gap-3">
            <p className="font-poppins text-base font-normal md:pr-10 text-slate-600">
              Since 2022, I've been fully involved in <b>Software Development</b> and the IT world. I've had the opportunity to create software independently, I have also had the privilege of collaborating with companies and businesses to provide solutions as a <b>freelancer</b>.
            </p>
            <p className="font-poppins text-base font-normal md:pr-10 text-slate-600">
              In my free time when I'm not designing websites, I usually design smiles through dentistry.
            </p>
          </div>
          <div className="h-[300px] w-full rounded-2xl bg-cover md:bg-auto md:h-full md:w-1/2 lg:w-2/3 bg-right-top bg-no-repeat mb-5 md:mb-0" style={{backgroundImage: `url(${aboutmeImage})`}} />
        </section>
      </article>
      <article className="h-auto w-full flex flex-col items-start justify-start gap-2 md:gap-0">
        <h3 className="font-poppins font-bold text-[25px] md:text-[35px] leading-[2.3rem] md:leading-[55px] mt-5 md:mt-14 text-gray-800">
          Tech Stack
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 w-full mt-0 mb-5 md:my-5">
          {techStack.map(tech => (
            <section key={tech.id} className="h-14 bg-violet-50 shadow-md rounded-2xl p-3 flex flex-row items-center justify-center gap-2">
              <img src={require(`../images/${tech.image}.png`)} className="object-cover h-[32px] w-[32px]" alt={tech.name} />
              <p className="font-poppins text-sm font-medium text-gray-800">{tech.name}</p>
            </section>
          ))}
        </div>
      </article>
    </>
  )
}

export default AboutSection;