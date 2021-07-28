import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({ sushiList, balance, setBalance }) {
  const [displayIndex, setDisplayIndex] = useState(1)

  const displaySushi = sushiList.filter(sushi => sushi.id <= displayIndex + 3 && sushi.id >= displayIndex)

  return (
    <div className="belt">
      {displaySushi.map(sushi => {
        return (
          <Sushi key={sushi.id} sushi={sushi} balance={balance} setBalance={setBalance}/>
        )
      })
      }
      <MoreButton setDisplayIndex={setDisplayIndex} displayIndex={displayIndex}/>
    </div>
  );
}

export default SushiContainer;
