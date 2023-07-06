import React, {createContext, useState} from "react";


export const ClassContext = createContext()
const ClassContextProvider = (props) => {
  const [saveItem, setSaveItem] = useState(["", "", "", ""])

  const saveClassItem = (firstID, firstName, secondID, secondName) => {
    setSaveItem([firstID, firstName, secondID, secondName])
  }


  return (
    <ClassContext.Provider value={{saveItem, saveClassItem}}>
      {props.children}
    < /ClassContext.Provider>
  );
}

export default ClassContextProvider;
