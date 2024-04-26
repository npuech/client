import React from "react";

function Footer() {
    return(
        <footer>
        <div className="container_footer">
           <div className="social">
            <h3>Suivez-nous sur les réseaux sociaux : </h3>
                <a href="#" target="_blank"><img src="images/icons8-twitter-60 (1).png" alt="Icone Twitter"/></a>
                <a href="#" target="_blank"><img src="images/icons8-tic-tac-60.png" alt="Icone TikTok"/></a>
                <a href="#" target="_blank"><img src="images/icons8-instagram-60.png" alt="Icone Instagram"/></a>
           </div>
           <div className="mentions">
            <a href="#">Mentions Légales</a>
           </div>
           <div className="text">
            <p>© 2024 RetainRacer. Tous droits réservés. By NP</p>
           </div>
        </div>
    </footer>
    )
}

export default Footer;