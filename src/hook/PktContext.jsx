import React from "react";
import { useState,createContext} from "react";

const PktContext = createContext({
  notes: [],
  setNotes: () => {},
  selected: "",
  setSelected: () => {},
});

const Provider = ({ child }) => {
  const [selected, setSelected] = useState("");
  const [notes, setNotes] = useState([]);

  const detailsToShare = {
    notes,
    setNotes,
    selected,
    setSelected,
  };

  return (
    <PktContext.Provider value={detailsToShare}>{child}</PktContext.Provider>
  );
};

export default PktContext;

export { Provider };


