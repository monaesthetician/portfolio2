
import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuresPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";


export default function Portfolio() {

    const [selected, setSelected] = useState("features");
    const [data, setData] = useState([]);
   
  const list = [

    {
      id: "features",
      title: "Features"
    },

    {
      id: "web",
      title: "Web App"
    },

    {
      id: "mobile",
      title: "Mobile"
    },

    {
      id: "design",
      title: "Design"
    },

    {
      id: "content",
      title: "Content"
    },

  ];

    useEffect (() => {
      switch(selected) {

        case "features": 
              setData(featuresPortfolio);
              break;

        case "web":
          setData(webPortfolio);
          break;
        
        case "mobile": 
          setData(mobilePortfolio);
          break;

        case "design":
          setData(designPortfolio);
          break;
          
        case "content":
          setData(contentPortfolio);
          break;
          default:
             setData(featuresPortfolio);
      }
    }, [selected])

    return (
        <div className="portfolio" id="portfolio">
          <h1>Porfolio</h1>

          <ul>
              {list.map((item) => (
                <PortfolioList 
                title = {item.title} 
                active = {selected === item.id} 
                setSelected = {setSelected}
                id={item.id}
                />
              ))}
          </ul>

          <div className="container">
                {data.map((d) => (
            <div className="item">
              <img 
              src={d.img}
              alt="" 

              />
              <h3>{d.title}</h3>
            </div>
            ))}

            {/* <div className="item">
              <img src="./assets/flashcard_app.png" alt="" />
              <h3>Banking App</h3>
            </div>  */}

             {/* <div className="item">
              <img src="./assets/flashcard_app.png" alt="" />
              <h3>Banking App</h3>
            </div>

            <div className="item">
              <img src="./assets/flashcard_app.png" alt="" />
              <h3>Banking App</h3>
            </div>

            <div className="item">
              <img src="./assets/flashcard_app.png" alt="" />
              <h3>Banking App</h3>
            </div>

            <div className="item">
              <img src="./assets/flashcard_app.png" alt="" />
              <h3>Banking App</h3>
            </div>  */}

          </div>
        </div>
    )
}
