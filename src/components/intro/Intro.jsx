import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() { 

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            backDelay: 1500,
            backSpeed: 60,
            showCursor: true,
            strings: [ ' HTML', ' CSS', ' JavaScript', ' Boostrap', ' React-Redux' ],
    });
    }, [])

    return (
        <div className="intro" id="intro">
           <div className="left">
                <div className="imgContainer">
                      <img src="assets/image2.png" alt="" />
                   
                </div>

           </div>
           <div className="right">
               <div className="wrapper">
                   <h2>Hi there, I am</h2>
                   <h1>Mona</h1>
                   <h3>Web Developer<span ref={ textRef }> Front-End engineer</span></h3>
               </div>
               <a href="#portfolio">
                   <img className="arrow" src="assets/down_arrw.png" alt=""/>
               </a>
           </div>
        </div>
    )
}
