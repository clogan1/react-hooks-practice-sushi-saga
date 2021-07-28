import React, { useState} from "react";

function Sushi({ sushi, balance, setBalance }) {

  const [isEaten, setIsEaten] = useState(false)

  function handleSushiClick(){
    if (sushi.price > balance) return null;
    else {
      setIsEaten(true);
      setBalance(balance - parseInt(sushi.price))
    }
  }


  return (
    <div className="sushi">
      <div className="plate" onClick={handleSushiClick}>
        {isEaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
