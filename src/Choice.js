

import restaurant from "./restaurant.jpeg";

function Choice() {
  return (
    <div className="choice">
      <img src={restaurant} alt="restaurant"/>
      <div className="footer">
        <h5 className="restaurant_title">New Holland Brewing</h5>
        <h5 className="restaurant_title">Grand Rapids, Michigan</h5>
      </div>
    </div>
  );
}

export default Choice;