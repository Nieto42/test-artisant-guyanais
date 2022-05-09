import React, { useState, useEffect } from "react";
import Cards from "./Cards";

export default function Form({ artisans }) {
  const [proData, setProData] = useState([]);
  console.log(artisans);
  useEffect(() => {
    setProData(artisans);
  }, []);

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="search"
            name="data-art"
            id="seach-input"
            placeholder="Entrez un besoin"
          />
          <button type="submit" className="btn">
            Rechercher
          </button>
        </form>
        {/* bouton pour trier du meilleur au pire */}
        <div className="btn-sort-container">
          <button className="btn-sort" id="goodTobad">
            Top <span>→</span>
          </button>
          <button className="btn-sort" id="badToGood">
            Flop <span>→</span>
          </button>
        </div>
      </div>
      <div className="result">
        {proData.slice(0, 12).map((info) => (
          <Cards key={info.id} info={info}></Cards>
        ))}
      </div>
    </div>
  );
}

{
  /* {artisans.map((artisan, pro) => (
 
    <div className="test">

      <h3>hello</h3>
      <p key={artisan.id}> {artisan.name}</p> 
    </div>
 
))} */
}
