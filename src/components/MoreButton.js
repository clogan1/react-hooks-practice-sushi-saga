import React from "react";

function MoreButton({setDisplayIndex, displayIndex}) {

  return <button onClick={() => setDisplayIndex(displayIndex = displayIndex+4)}>More sushi!</button>;
}

export default MoreButton;
