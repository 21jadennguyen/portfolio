import './topbar.scss'
import {Mail, Phone, LinkedIn} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className = {"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
                <div className="right"> 
                    <div className="logo">
                        <a href="#intro" classname="logo">Jaden Nguyen</a>
                    </div>
                    <div className="itemContainer">
                        <Mail className='icon'/>
                        <span>21jadennguyen@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                        <Phone className='icon'/>
                        <span>845-287-9234</span>
                    </div>
                    <div className="itemContainer">
                        <LinkedIn className='icon'/>
                        <span>https://www.linkedin.com/in/jaden-nguyen-b1876b220/</span>
                    </div>
                </div>
            </div>   
        </div>
    )
}
