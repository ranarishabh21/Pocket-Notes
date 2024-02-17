import React, { useState } from "react";
import "./Modal.css";

function Modal({ groupParent, setGroupParent, onClose }) {
  const [groupName, setGroupName] = useState("");
  const [bgColor, setBgColor] = useState("");

  const color = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];

  const handleGroupName = (e) => {
    setGroupName(e.target.value);
  };

  const handleColor = (e) => {
    const div = e.target;
    setBgColor(getComputedStyle(div).backgroundColor);
  };

  const handleSaveName = () => {
    const newGroup = { name: groupName, color: bgColor };
    setGroupParent([...groupParent, newGroup]);
    localStorage.setItem(
      "groupNames",
      JSON.stringify([...groupParent, newGroup])
    );
    onClose();
  };

  return (
    <>
      <div className="modal">
        <div className="modal_heading">Create New group</div>
        <div className="modal_input">
          <label>GroupName</label>
          <input
            value={groupName}
            onChange={handleGroupName}
            type="text"
            placeholder="Enter Group Name..."
          />
        </div>
        <div className="modal_color_input">
          <label>Choose colour</label>
          {/* {color.map((color, index) => (
                <button
                  className={`${styles.colorButton} ${
                    formData.color === color ? 'selected' : ''
                  }`}
                  name="color"
                  color={color}
                  key={index}
                  id={color}
                  style={{
                    height: '40px',
                    width: '40px',
                    background: color,
                    borderRadius: '25px',
                    border: 'none',
                    marginRight: '10px',
                  }}
                  onClick={handleChangeColor}
                ></button>
              ))} */}

          {color.map((color, index) => (
            <button
              className={`colorButton ${bgColor.color === color ? 'selected' : ""}`}
              name="color"
              color={color}
              key={index}
              id={color}
              style={{
                height: "30px",
                width: "30px",
                backgroundColor: color,
                borderRadius: "25px",
                border: "none",
                marginRight: "10px",
              }}
              onClick={handleColor}
            ></button>
          ))}
        </div>
        <div className="modal_close">
          <button onClick={handleSaveName} disabled={groupName.length === 0}>
            Create
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;



//-----------------------------------------------------------------------------------------------------------------------///

