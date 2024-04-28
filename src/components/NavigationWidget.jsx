import { useState } from "react";
const NavigationWidget = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const collapse = () => {
    setIsCollapsed((el) => !el);
  };

  return (
    <div className={`widget-collapse ${isCollapsed ? "small" : ""}`}>
      <button className="collapse-btn" onClick={collapse}>
        <i
          className={`fas ${isCollapsed ? "fa-arrow-right" : "fa-arrow-left"}`}
        ></i>
      </button>
      <div className="item">
        <div className="circle">
          <img src="images/down-arrow.png" alt="" />
        </div>
        <h5 className={isCollapsed ? "hidden-text" : ""}>WHAT WE DO</h5>
      </div>
      <div className="item">
        <div className="circle">
          <img src="images/down-arrow.png" alt="" />
        </div>
        <h5 className={isCollapsed ? "hidden-text" : ""}>WHAT WE DO</h5>
      </div>
      <div className="item">
        <div className="circle">
          <img src="images/down-arrow.png" alt="" />
        </div>
        <h5 className={isCollapsed ? "hidden-text" : ""}>
          WHAT ARE YOU HELPING US TO ACHIEVE
        </h5>
      </div>
    </div>
  );
};

export default NavigationWidget;
