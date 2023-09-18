import profilePhoto from '../images/profile-photo-jr.jpg'
import reactLogo from '../images/react-logo.png'
import jsLogo from '../images/js-logo.png'
import tailwindLogo from '../images/tailwind-logo.png'

function HeroSection() {
  return (
    <div className="h-full w-full gap-4 md:gap-0 flex flex-col md:flex-row ">
      <div className="h-auto md:h-[400px] w-full md:w-1/2 md:pr-10 flex flex-col items-start justify-start md:justify-center gap-4 ">
        <h1 className="font-poppins font-bold text-[30px] md:text-[50px] leading-[2.3rem] md:leading-[55px] text-gray-800">Hi 👋, I’m José Daniel</h1>
        <p className="font-poppins text-base font-normal text-slate-600"><b>Front-end Developer</b> specialized in <b>React</b>, as well as in the technologies needed to create dynamic and highly interactive web applications.</p>
        <p className="hidden font-poppins text-base font-normal md:block text-slate-600">I consider myself enthusiastic about learning new technologies, finding solutions to work challenges and being part of a collaborative environment.</p>
      </div>
      <div className="h-[400px] w-full md:w-1/2 flex items-center justify-center ">
        <div className="h-[200px] w-[200px] md:h-[220px] md:w-[270px] rounded-xl flex flex-col items-center justify-center bg-white shadow-lg">
          <div className="h-28 w-28 bg-white rounded-full mb-4"><img src={profilePhoto} className="shadow-md object-contain max-h-full max-w-full rounded-full" /></div>
          <p className="font-poppins text-base font-medium text-gray-800">José Romero</p>
          <p className="font-poppins text-sm font-normal text-slate-500">Guayaquil, Ecuador 🇪🇨</p>
        </div>
        <div className="hover:scale-110 hover:-translate-y-1 transition ease-in-out h-12 w-14 absolute shadow-lg rounded-2xl mb-32 md:mb-36 mr-52 md:mr-64 bg-teal-100 flex items-center justify-center p-3">
          <img src={reactLogo} alt="React" className="object-cover max-h-full max-w-full" />
        </div>
        <div className="hover:scale-110 hover:-translate-y-1 transition ease-in-out h-12 w-14 absolute shadow-lg rounded-2xl mb-[-40px] md:mb-[-50px] ml-[14rem] md:ml-[18rem] bg-yellow-100 flex items-center justify-center p-3">
          <img src={jsLogo} alt="JavaScript" className="object-cover max-h-full max-w-full" />
        </div>
        <div className="hover:scale-110 hover:-translate-y-1 transition ease-in-out h-12 w-14 absolute shadow-lg rounded-2xl mb-52 md:mb-56 ml-32 md:ml-44 bg-sky-100 flex items-center justify-center p-3">
          <img src={tailwindLogo} alt="Tailwind CSS" className="object-cover max-h-full max-w-full" />
        </div>
        <div className="hover:scale-110 hover:-translate-y-1 transition ease-in-out h-12 w-auto absolute shadow-lg rounded-2xl mb-[-90px] md:mb-[-100px] mr-[260px] md:mr-[320px] bg-white flex flex-row items-center justify-center gap-2 p-3">
          <p className="font-poppins text-sm font-normal text-slate-500">🔀</p><p className="font-poppins text-sm font-normal text-slate-500">Git</p>
        </div>
        <div className="hover:scale-110 hover:-translate-y-1 transition ease-in-out h-12 w-auto absolute shadow-lg rounded-2xl mb-[330px] md:mb-[350px] ml-40 md:ml-56 bg-white flex flex-row items-center justify-center gap-2 p-3">
          <p className="font-poppins text-sm font-normal text-slate-500">🔍</p><p className="font-poppins text-sm font-normal text-slate-500">API Integration</p>
        </div>
        <div className="hover:scale-110 hover:-translate-y-1 transition ease-in-out h-12 w-auto absolute shadow-lg rounded-2xl mb-[-280px] md:mb-[-300px] ml-28 md:ml-32 bg-white flex flex-row items-center justify-center gap-2 p-3">
          <p className="font-poppins text-sm font-normal text-slate-500">🚀</p><p className="font-poppins text-sm font-normal text-slate-500">React Router</p>
        </div>
        <div className="hover:scale-110 hover:-translate-y-1 transition ease-in-out h-12 w-auto absolute shadow-lg rounded-2xl mb-[270px] md:mb-[290px] ml-[-120px] md:ml-[-160px] bg-white flex flex-row items-center justify-center gap-2 p-3">
          <p className="font-poppins text-sm font-normal text-slate-500">📝</p><p className="font-poppins text-sm font-normal text-slate-500">Formik</p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;