import React, { useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import SushiWallet  from "./SushiWallet";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiList, setSushiList] = useState([])
  const [balance, setBalance] = useState(100)

  useEffect( () => {
    fetch('http://localhost:3001/sushis')
    .then(res => res.json())
    .then(data => setSushiList(data))
  }, [])


  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} balance={balance} setBalance={setBalance}/>
      <Table balance={balance}/>
      <SushiWallet balance={balance} setBalance={setBalance}/>
    </div>
  );
}

export default App;
