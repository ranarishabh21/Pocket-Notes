import usePktContext from "../../hook/usePktContext";
import "../NotesTitle/NotesTitle.css";

function NotesTitle({ title }) {
  const { selected, setSelected } = usePktContext();
  const nameInitals = title[0].name
    // .map((word) => word.charAt(0))
    // .join("")
    // .toUpperCase();

  const newTitle = title[0].name
    // .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    // .join(" ");

  const handleTitleClick = () => {
    setSelected(title[0].name);
  };

  return (
    <>
      <div
        onClick={handleTitleClick}
        className={`group_title_logo ${
          selected === title[0].name ? "picked_title" : null
        }`}
      >
        <div className="title_logo" style={{ backgroundColor: title[0].color }}>
          {nameInitals}
        </div>
        <div className="group_title">{newTitle}</div>
      </div>
    </>
  );
}

export default NotesTitle;
