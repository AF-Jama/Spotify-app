import { useEffect, useState } from "react"
import './Footer.css'

function Footer(props){ // component takes no props nor has state
    const [date,setDate] = useState(new Date().getFullYear())

    // use effects triggered on initial render and subsequent renders when data dependency changes
    useEffect(()=>{
        setDate(new Date().getFullYear())
    },[date]) // dependencies 

    return (
        <footer>
            <div id="logo-container">
                <a href="#" style={{color:"white"}}>My Spotify Stats <span>&copy;{date}</span></a>
            </div>

            <div id="footer-nav-containers">
                <a href="#" className="footer-nav-links">ESG</a>
                <a href="#" className="footer-nav-links">Developers</a>
                <a href="#" className="footer-nav-links">Blog</a>
                <a href="#" className="footer-nav-links">Legal</a>
            </div>

        </footer>
    )
}

export default Footer;