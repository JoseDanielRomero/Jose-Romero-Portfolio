function AboutSection() {

  const techStack = [
    {
      "name": "React",
      "image": "react-logo"
    },
    {
      "name": "JavaScript",
      "image": "js-logo"
    },
    {
      "name": "Tailwind",
      "image": "tailwind-logo"
    },
    {
      "name": "jQuery",
      "image": "jquery-logo"
    },
    {
      "name": "HTML",
      "image": "html-logo"
    },
    {
      "name": "CSS",
      "image": "css-logo"
    },
    {
      "name": "Astro",
      "image": "astro-logo"
    },
    {
      "name": "Git",
      "image": "git-logo"
    },
    {
      "name": "Vite",
      "image": "vite-logo"
    }
  ]

  return (
    <article className="h-auto w-full flex flex-col items-start justify-start gap-2">
      <h3 className="font-poppins font-bold text-[25px] md:text-[35px] leading-[2.3rem] md:leading-[55px] mt-3 md:mt-8 text-gray-800">About me</h3>
      <p className="font-poppins text-base font-normal text-slate-600">Since 2022 I am fully involved in <b>Software Development</b> and the IT world. I am also a <b>Dentist</b> by profession, a career which has given me immensely both personally and professionally. Being a healthcare personnel has given me a great capacity for <b>resolution</b> and <b>adaptability</b>.</p>
      <section className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full my-5">
        {techStack.map(tech => (
          <div className="h-14 bg-violet-50 shadow-lg rounded-full p-3 flex flex-row items-center justify-center gap-2">
            <img src={require(`../images/${tech.image}.png`)} className="object-cover max-h-full max-w-full" alt={tech.name} />
            <p className="font-poppins text-sm font-medium text-gray-800">{tech.name}</p>
          </div>
        ))}
      </section>
    </article>
  )
}

export default AboutSection;