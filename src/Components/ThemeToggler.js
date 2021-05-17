import React,{useContext} from 'react'
import ThemeContext from "../Context/theamContext"

const ThemeToggler=()=>{
   const [themeMode,setThemeMode]=useContext(ThemeContext)
   return(
       <div >
           <button onClick={()=>{
           setThemeMode(themeMode=="light"?"dark":"light")
       }}>Click</button>
           <p>{themeMode ==="light"? "Turn Off":"lights On"}</p>
       </div>
   ) 
}
export default ThemeToggler;




