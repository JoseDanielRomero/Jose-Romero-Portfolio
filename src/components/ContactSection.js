function ContactSection() {

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <article className="h-auto w-full flex flex-col items-start justify-start gap-2">
      <h3 className="font-poppins font-bold text-[25px] md:text-[35px] leading-[2.3rem] md:leading-[55px] mt-5 md:mt-14 text-gray-800">Contact</h3>
      <p className="font-poppins text-base font-normal text-slate-600">
        Feel free to contact me with any inquiries or project requests. I'm always happy to discuss potential collaborations or answer any questions you may have. My inbox is always open for new opportunities 🚀.  
      </p>
      <div className="h-auto w-full flex flex-col items-center justify-center my-5 gap-4">
        <a href="mailto:danyrome12.dev@gmail.com" target="_blank" className="h-10 w-auto px-10 rounded-full bg-violet-500 hover:bg-violet-600 flex flex-col items-center justify-center cursor-pointer hover:scale-110 hover:-translate-y-1 transition ease-in-out">
          <p className="font-semibold text-lg text-white">Get In Touch</p>
        </a>
        <button onClick={handleScrollTop} className="h-10 w-auto px-10 rounded-full bg-white border-[1px] border-violet-500 hover:bg-violet-100 flex flex-col items-center justify-center cursor-pointer transition ease-in-out">
          <p className="font-semibold text-lg text-violet-500">Back To Top</p>
        </button>
      </div>

    </article>
  )
}

export default ContactSection;