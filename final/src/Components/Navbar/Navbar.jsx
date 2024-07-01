import React, {useState} from "react";
import './navbar.css';
import { MdTravelExplore } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import './navbar.scss';


const Navbar = () => {
    const [active, setActive] = useState('navBar')

    const showNav = () =>{
        setActive('navBar activeNavbar')
    }
    const removeNavbar = () =>{
        setActive('navBar')
    }

    return(
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex"><h1><MdTravelExplore className="icon"/>Travel.</h1></a>                
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem"><a href="#" className="navLink">Home</a></li>
                            
                        <li className="navItem"><a href="#" className="navLink">Packages</a></li>
                            
                        <li className="navItem"><a href="#" className="navLink">Shop</a> </li>
                            
                        <li className="navItem"><a href="#" className="navLink">About</a>  </li>
                            
                        <li className="navItem"><a href="#" className="navLink">Pages</a> </li>
                        
                        <li className="navItem"> <a href="#" className="navLink">News</a> </li>
                           
                        <li className="navItem"><a href="#" className="navLink">Contact</a>   </li>
                            
                        <button className="btn"><a href="#" >BOOK NOW</a></button>
                    </ul>

                    <div onClick={removeNavbar} className="closeNavbar">
                        <IoCloseSharp className="icon"/>
                    </div>
                </div>

                <div onClick={showNav}  className="toggleNavbar">
                    <BsThreeDotsVertical className="icon" />
                </div>

            </header>
        </section>
    )
}

export default Navbar;