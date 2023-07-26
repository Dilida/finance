import React, {createContext, useState} from 'react';

const GlobalState = createContext()

export function GlobalProvider({children}) {
  const [selectItem, setSelectItem] = useState("01,存款業務,A,存款業務及開戶審查")
  const changeItem = (selectValue) => {
    // setItems((prevState) => [...prevState, {name, price}])
    console.log('changeValue', selectValue)
    setSelectItem(selectValue)
  }

  return (
    <GlobalState.Provider value={{selectItem, changeItem}}>
      {children}
    </GlobalState.Provider>
  )
}

export default GlobalState;
