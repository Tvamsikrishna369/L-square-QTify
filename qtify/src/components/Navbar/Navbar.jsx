import React from "react";
import Logo from "../Logo/Logo";
import Styles from "./Navbar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";


const Navbar=()=>{
    return(
        <>
            <nav className={Styles.navbar}>
                <Logo/>
                <SearchBar search={"Search a song of you choice"}/>
                <Button children={"Give Feedback"}/>
            </nav>
        </>
    )
}

export default Navbar;