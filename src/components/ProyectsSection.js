function ProyectsSection() {

  const proyects = [
    {
      "id": "1",
      "name": "Sportify app",
      "description": "Website that compiles and displays the latest soccer results, statistics and data.",
      "image": "sportify-mockup",
      "demo": "https://josedanielromero.github.io/Sportify-app/",
      "repo": "https://github.com/JoseDanielRomero/Sportify-app",
      "techStack": ['React', 'JavaScript', 'Router', 'Formik', 'Axios'], 
      "className": "h-52 w-full bg-[#ff5050] flex flex-col items-center justify-end pt-4 px-1 rounded-t-2xl mb-4",
    },
    {
      "id": "2",
      "name": "Pharmacy E-commerce",
      "description": "Online store of a local Veterinary Pharmacy in Babahoyo, Ecuador.",
      "image": "farmavet-mockup",
      "demo": "https://josedanielromero.github.io/Farmavet-Alina/",
      "repo": "https://github.com/JoseDanielRomero/Farmavet-Alina",
      "techStack": ['React', 'JavaScript', 'Router', 'Formik'], 
      "className": "h-52 w-full bg-[#ffc600] flex flex-col items-center justify-end pt-4 px-1 rounded-t-2xl mb-4"
    },
    {
      "id": "3",
      "name": "Countries Finder",
      "description": "REST Countries API with color theme switcher.",
      "image": "countries-mockup",
      "demo": "https://josedanielromero.github.io/Countries-Finder-API/",
      "repo": "https://github.com/JoseDanielRomero/Countries-Finder-API",
      "techStack": ['React', 'JavaScript', 'Router', 'Axios'], 
      "className": "h-52 w-full bg-[#2b3945] flex flex-col items-center justify-end pt-4 px-1 rounded-t-2xl mb-4"
    },
    {
      "id": "4",
      "name": "Space Tourism Website",
      "description": "Multi-page and fully mobile friendly website about space tourism.",
      "image": "space-mockup",
      "demo": "https://josedanielromero.github.io/Space-Tourism-website/",
      "repo": "https://github.com/JoseDanielRomero/Space-Tourism-website",
      "techStack": ['React', 'JavaScript', 'Router'], 
      "className": "h-52 w-full bg-[#151c27] flex flex-col items-center justify-end pt-4 px-1 rounded-t-2xl mb-4"
    },
    {
      "id": "5",
      "name": "Multi-step Form",
      "description": "Multi-step form based on a gaming subscription platform.",
      "image": "form-mockup",
      "demo": "https://josedanielromero.github.io/Multi-step-Form/",
      "repo": "https://github.com/JoseDanielRomero/Multi-step-Form",
      "techStack": ['JavaScript', 'jQuery', 'HTML', 'CSS'], 
      "className": "h-52 w-full bg-[#6259ff] flex flex-col items-center justify-end pt-4 px-1 rounded-t-2xl mb-4"
    },
    {
      "id": "6",
      "name": "Splitter, tip calculator",
      "description": "Simple but useful web application for calculating and dividing tips.",
      "image": "splitter-mockup",
      "demo": "https://josedanielromero.github.io/Tip-calculator/",
      "repo": "https://github.com/JoseDanielRomero/Tip-calculator",
      "techStack": ['React', 'JavaScript', 'HTML', 'CSS'], 
      "className": "h-52 w-full bg-[#34b7a5] flex flex-col items-center justify-end pt-4 px-1 rounded-t-2xl mb-4"
    }
  ]

  return (
    <article className="h-auto w-full flex flex-col items-start justify-start gap-2 md:gap-0">
      <h3 className="font-poppins font-bold text-[25px] md:text-[35px] leading-[2.3rem] md:leading-[55px] mt-5 md:mt-14 text-gray-800">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-0 mb-5 md:my-5">
        {proyects.map(proyect => {
          return (
            <section key={proyect.id} className="h-auto w-full rounded-xl flex flex-col items-center justify-between bg-white shadow-lg pb-6" >
              <div className="h-auto w-full flex flex-col mb-6">
                <div className={proyect.className} >
                  <img src={require(`../images/${proyect.image}.png`)} className="object-contain max-h-full max-w-full" />
                </div>
                <div className="w-full flex flex-col px-5 items-start gap-3">
                  <p className="font-poppins text-lg font-medium text-gray-800">{proyect.name}</p>
                  <div className="w-full grid grid-cols-3 xl:grid-cols-4 gap-1">
                    {proyect.techStack.map(tech => (
                      <div className="h-auto w-auto py-1 px-2 rounded-lg bg-violet-50 flex flex-col items-center justify-center">
                        <p className="font-medium text-xs text-violet-500">{tech}</p>
                      </div>
                    ))}
                  </div>
                  <p className="font-poppins text-sm font-normal text-slate-500">{proyect.description}</p>
                </div>
              </div>
              <div className="flex flex-row h-auto w-full gap-2 px-5">
                <a href={proyect.demo} target="_blank" className="h-8 w-1/2 px-3 rounded-full bg-violet-500 hover:bg-violet-600 flex flex-col items-center justify-center cursor-pointer">
                  <p className="font-semibold text-sm text-white">View Demo</p>
                </a>
                <a href={proyect.repo} target="_blank" className="h-8 w-1/2 px-3 rounded-full bg-violet-500 hover:bg-violet-600 flex flex-col items-center justify-center cursor-pointer">
                  <p className="font-semibold text-sm text-white">View Repo</p>
                </a>
              </div>
            </section>
          )
        })}
      </div>
    </article>
  )
}

export default ProyectsSection;