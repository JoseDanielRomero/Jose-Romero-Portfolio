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
    <article className="h-auto w-full flex flex-col items-start justify-start gap-2">
      <h3 className="font-poppins font-bold text-[25px] md:text-[35px] leading-[2.3rem] md:leading-[55px] mt-3 md:mt-8 text-gray-800">About me</h3>
      <p className="font-poppins text-base font-normal text-slate-600">Since 2022 I am fully involved in <b>Software Development</b> and the IT world. I am also a <b>Dentist</b> by profession, a career which has given me immensely both personally and professionally. Being a healthcare personnel has given me a great capacity for <b>resolution</b> and <b>adaptability</b>.</p>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 w-full my-5">
        {techStack.map(tech => (
          <div key={tech.id} className="h-14 bg-violet-50 shadow-md rounded-2xl p-3 flex flex-row items-center justify-center gap-2">
            <img src={require(`../images/${tech.image}.png`)} className="object-cover max-h-full max-w-full" alt={tech.name} />
            <p className="font-poppins text-sm font-medium text-gray-800">{tech.name}</p>
          </div>
        ))}
      </section>
    </article>
  )
}

export default AboutSection;