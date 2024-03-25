import React from "react";

function NavBar() {
    return(
        <div>
            <header>
                <div className="container_header">
                <div className="logo">
                    <img className="animate__animated animate__jackInTheBox" src="images/R.png" alt="Logo RetainRacer"/>
                </div>
                <div className="title">
                    <h1>etainRacer • Devine le nom de la marque</h1>
                </div>
                <nav>
                    <div className="container_nav">
                        <ul>
                            <li><a href="#">Accueil</a></li>
                            <li><a href="#">Jeux</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="icon_pencil">
                    <img src="images/icons8-crayon-65.png" alt="Icone Crayon"/>
                </div>
                </div>
            </header>
        </div>
    )
}

export default NavBar;