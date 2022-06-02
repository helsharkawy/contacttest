import {FaBars} from 'react-icons/fa'
import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
    const showHideMenu = () => {
        if (!document.querySelector(".main-nav").classList.contains("open")){
            document.querySelector(".main-nav").classList.add("open");
            let overlay = document.createElement("div");
            overlay.className = "overlay";
            document.getElementById("root").appendChild(overlay);
            return
        }
        if (document.querySelector(".main-nav").classList.contains("open")){
            document.querySelector(".main-nav").classList.remove("open")
            document.querySelector(".overlay").remove();
        }
    }

    return (
        <header>
            <div className="container">
            <div className="toggle-menu" onClick={showHideMenu}>
                <FaBars/>
            </div>
            <Logo/>
            <Nav/>
            <a className='contact-us' href="">تواصل معنا</a>
            <div className="lang">
                <span>Eng</span>
            </div>
            </div>

        </header>
    )
}

export default Header;