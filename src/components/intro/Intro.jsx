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
                      <img src="https://images.unsplash.com/photo-1588026193712-31163b26c043?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZyUyMHdvbWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60" alt="" />
                      
                   
                </div>

           </div>
           <div className="right">
               <div className="wrapper">
                   <h2>Hi there, I am</h2>
                   <h1>Adrian</h1>
                   <h3>Web Developer<span ref={ textRef }> Front-End engineer</span></h3>
               </div>
               <a href="#portfolio">
                   <img className="arrow" src="https://i0.wp.com/meritocracy.is/blog/wp-content/uploads/2019/01/grey-down-arrow-icon-png-1.png?fit=385%2C233&ssl=1" alt=""/>
               </a>
           </div>
        </div>
    )
}
