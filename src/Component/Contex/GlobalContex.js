import React,{createContext} from 'react' 
export const GlobalContex=createContext()
const GlobalContexProvider=(props)=>{
    return(
        <GlobalContex.Provider value="hello">
            {props.children}
            
        </GlobalContex.Provider>
    )
}
export default GlobalContexProvider



