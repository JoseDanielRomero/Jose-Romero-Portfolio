function ProyectsSection() {

  const proyects = [
    {
      "id": "1",
      "name": "Sportify app",
      "image": "sportify-mockup",
      "className": "h-52 w-full bg-[#ff5050] flex flex-col items-center justify-end pt-4 px-1 rounded-t-2xl mb-4"
    },
    {
      "id": "2",
      "name": "Farmacia Veterinaria Alina",
      "image": "farmavet-mockup",
      "className": "h-52 w-full bg-[#ff5050] flex flex-col items-center justify-end pt-4 px-1 rounded-t-2xl mb-4"
    }
  ]

  return (
    <article className="h-auto w-full flex flex-col items-start justify-start gap-2">
      <h3 className="font-poppins font-bold text-[25px] md:text-[35px] leading-[2.3rem] md:leading-[55px] mt-10 md:mt-14 text-gray-800">Portfolio</h3>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
        {proyects.map(proyect => {
          return (
            <div key={proyect.id} className="h-[350px] w-full md:h-[370px] rounded-xl flex flex-col items-center justify-start bg-white shadow-lg" >
              <div className={proyect.className} ><img src={require(`../images/${proyect.image}.png`)} className="object-contain max-h-full max-w-full" /></div>
              <p className="font-poppins text-base font-medium text-gray-800">José Romero</p>
              <p className="font-poppins text-sm font-normal text-slate-500">Guayaquil, Ecuador 🇪🇨</p>
            </div>
          )
        })}
      </section>
    </article>
  )
}

export default ProyectsSection;