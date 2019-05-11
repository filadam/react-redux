import React from 'react'
import {Link} from 'react-router-dom'

const styledNav = {
    height:"100px",
    width:"100%",
    backgroundColor:"black",
}

const styledMenuComp = {
    color:"white",
    textDecotration:"none",
    padding:"10px",
}

class Header extends React.Component {
    render() {
        return (
            <div style={styledNav}>
                <li>
                    <ul>
                        <a href="/Contact">Contact</a>
                        <Link style={styledMenuComp} to ="/home">Home</Link>
                        <Link style={styledMenuComp} to ="/Contact">Contact</Link>
                        <Link style={styledMenuComp} to ="/About">About</Link>
                    </ul>
                </li>
            </div>
        )
    }
}

export default Header;