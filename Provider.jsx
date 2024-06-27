import { useState } from "react"
import MyContext from "./HookContext"

const ContextProvider = ({children})=>{
    const [TheUser, setUser] = useState(null)

    return (
        <MyContext.Provider value={{TheUser, setUser}}>
            {children}
        </MyContext.Provider>
    )
}
export default ContextProvider;