import React,{useContext} from 'react'
import ThemeContext from "../Context/theamContext"
import AppTheme from "../colour"

const HeroSection =()=>{
    const theme = useContext(ThemeContext)[0]
    const currentTheme=AppTheme[theme]
return(
    <div style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColour}`,
        color:`${currentTheme.textColour}`,
        border:`${currentTheme.border}`,
        textAlign:'center'
        
    }} >
        <h1>context Api tjeme toggler</h1>
        <p>This is a nice paragraph</p>
        
    </div>

)

}

export default HeroSection;