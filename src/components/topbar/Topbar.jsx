import "./topbar.scss";
import { Smartphone, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
           <div className="wrapper">
               <div className="left">
                   <a href="#intro" className="logo">mona.</a>

                        <div className="itemContainer">
                          <Smartphone className="icons"/>
                          <span>513-429-6322</span>
                        </div>
     
                        <div className="itemContainer">
                          <Mail className="icons"/>
                          <span>emonearth915@gmail.com</span>
                        </div>

                        

               </div>

                  

               <div className="right">
                       <div className="hamburger" onClick={() =>setMenuOpen(!menuOpen)}>
                           <span className="line1"></span>
                           <span className="line2"></span>
                           <span className="line3"></span>
                       </div>
               </div>
           </div>

        </div>
    )
}
