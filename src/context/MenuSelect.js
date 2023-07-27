import React, {createContext, useState} from 'react';

const GlobalState = createContext()

export function GlobalProvider({children}) {
  const [selectItem, setSelectItem] = useState("01,存款業務,A,存款業務及開戶審查")
  const [loginContext, setLoginContext] = useState(false)
  const changeItem = (selectValue) => {
    // setItems((prevState) => [...prevState, {name, price}])
    setSelectItem(selectValue)
  }

  const changeLogin = () => {
    setLoginContext(true)
  }

  return (
    <GlobalState.Provider value={{selectItem, changeItem, loginContext,changeLogin}}>
      {children}
    </GlobalState.Provider>
  )
}

export default GlobalState;
