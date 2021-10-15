import { useState } from "react";
import "./works.scss";



export default function Works() {
    const  [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: 1,
            icon: "https://clipartart.com/images/smartphone-clipart-black-and-white-9.jpg",
            title: "Social Media App",
            desc:
               "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, qui.",
            img: "https://cdn.dribbble.com/users/78433/screenshots/16590015/media/90246bd4399c733b2c5bb12515d37e9b.png?compress=1&resize=1600x1200"
        },
   
        {
           id: 2,
           icon: "https://www.vhv.rs/dpng/d/493-4932122_free-transparent-weather-cliparts-download-free-clip-hd.png",
           title: "Weather App",
           desc:
               "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, qui.",
           img: "https://cdn.dribbble.com/users/33073/screenshots/16590601/media/1a997f3af4177d534b5e278419ed0d8f.png"
       },
   
       {
           id: 3,
           icon: "http://cdn.xl.thumbs.canstockphoto.com/canstock2647671.jpg",
           title: "Counter App",
           desc:
               "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, qui.",
           img: "https://cdn.dribbble.com/users/7417866/screenshots/16586594/media/4ae8522b9a4aa7461104f809061cb519.png?compress=1&resize=1600x1200" 
       },
    ];

    const handleClick = (way) => {
        way === "left" 
              ? setCurrentSlide (currentSlide > 0 ? currentSlide-1 : 2) 
              : setCurrentSlide( currentSlide < data.length -1 ? currentSlide +1: 0 );
    };
    return (
        <div className="works" id="works">
            <div 
               className="slider" 
               style= {{ transform: `translateX (-${ currentSlide * 100 } vw)` }}
               >

                {data.map((d) => (
                 <div className="container">
                    <div className="item">
                        <div className="left">
                           <div className="leftContainer">
                               <div className="imgContainer">
                                   <img src={d.icon} alt="" />
                               </div>
                               <h2>{d.title}</h2>
                               <p>
                                  {d.desc}
                               </p>
                               <span>Projects</span>
                           </div>
                        </div>
                        <div className="right">
                            <img src="https://cdn.dribbble.com/users/3812993/screenshots/16586390/media/4b0bfdb36077b68f6c490135ad07f6c3.png" 
                            alt="" 
                            />
                        </div>
                        
                    </div>
                    
                </div>
                ))}  
            </div>
            <img src="http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Arrow-PNG-Transparent-Image-1.png"  className="arrow left" alt="" onClick= {() => handleClick("left")}/>
            <img src="http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Arrow-PNG-Transparent-Image-1.png"  className="arrow right" alt="" onClick= {()=> handleClick()} />
        </div>
    );
};
