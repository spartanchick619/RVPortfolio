import { useEffect } from 'react';
import img1 from '../assets/Project1.png';
import img2 from '../assets/Project2.png';
import img3 from '../assets/Project3.png';
import img4 from '../assets/Project4.png';
import Aos from 'aos';

const Projects = () => {
  useEffect(()=> {
    Aos.init({duration: 1000});
  }, [])
  return (
    <div id="Projects" className="p-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Projects</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
        <a href="https://github.com/spartanchick619/stunning-guacamole"><img data-aos="fade-up" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={img1} alt="" /></a>
        <a href="https://github.com/spartanchick619/Catch-Me-Outside-Weather-Dashboard"><img data-aos="fade-down" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={img2} alt="" /></a>
        <a href="https://github.com/spartanchick619/YourWorkDayScheduler"><img data-aos="fade-up" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={img3} alt="" /></a>
        <a href="https://github.com/spartanchick619/ThisIsFine"><img data-aos="fade-down" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={img4} alt="" /></a>
      </div>
    </div>
  );
};

export default Projects;