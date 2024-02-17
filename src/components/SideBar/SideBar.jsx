import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import NotesTitle from "../NotesTitle/NotesTitle";

function SideBar() {
  const [title, setTitle] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [groupParent, setGroupParent] = useState(
    localStorage.getItem("groupNames") || []
  );

  useEffect(() => {
    const data = localStorage.getItem("groupNames");
    if (data) {
      setGroupParent(JSON.parse(data));
    } else {
      setGroupParent([]);
    }
  }, []);

  useEffect(() => {
    if (groupParent.length > 0) {
      const obj = JSON.parse(localStorage.getItem("groupNames"));
      const result = Object.keys(obj).map((key) => [obj[key]]);
      setTitle(result);
    }
  }, [groupParent]);

  const handleClick = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="sidebar">
        <div className="sidebar_heading">Pocket Notes</div>
        <div className="sidebar_add_btn">
          <button onClick={handleClick}>+</button>
        </div>

        <div className="sidebar_notes_title">
          {title.length > 0 ? (
            title.map((title, index) => <NotesTitle key={index} title={title} />)
          ) : (
            <div className="desktop__sidebar__notes__title__empty">
              <p>No Notes </p>
            </div>
          )}
        </div>

        {openModal && (
          <div className="sidebar_modal_overlay">
            <Modal
              groupParent={groupParent}
              setGroupParent={setGroupParent}
              onClose={handleClose}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default SideBar;

///----------------------------------------------------------------------------------------------------------//
