import React, { useState } from "react";
import Close from "../assets/close.svg";

const PortfolioItem = ({ img, title, details }) => {
  const [model, setModel] = useState(false);

  const toggleModel = () => {
    setModel(!model);
  };
  return (
    <>
      <div className="portfolio__item">
        <img src={img} alt="" className="portfolio__img" />

        <div className="portfolio__hover" onClick={toggleModel}>
          <h3 className="portfolio__title">{title}</h3>
        </div>
        
        {model && (
          <div className="portfolio__model">
            <div className="portfolio-model-content">
              <img src={Close} alt="model" className="model__close" onClick={toggleModel}/>
              <h3 className="model__title">{title}</h3>

              <ul className="model_list grid">
                {details.map(({ icon, title, desc }, index) => {
                  return (
                    <li key={index} className="model__item">
                      <span className="item__icon">{icon}</span>
                      <div>
                        <span className="item__title">{title}</span>
                        <span className="item__details">{desc}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <img src={img} className="model__img" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PortfolioItem;
