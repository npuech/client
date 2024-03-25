import React from 'react'

function Accueil() {
    return(
        <div>
        <main>
            <div className="container_main animate__animated animate__zoomIn">
                <div className="container_accueil">
                    <section className="intro">
                        <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Winking%20Face%20with%20Tongue.png" alt="Winking Face with Tongue" width="25" height="25" />
                        <h2>Bienvenue sur RetainRacer</h2>
                        <p>Testez vos connaissances sur différentes marques de luxe à travers nos jeux captivants. Que vous soyez un passionné de luxe ou simplement à la recherche d'un divertissement amusant, RetainRacer a quelque chose pour vous.</p>
                    </section>
                    <section className="features">
                        <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Glowing%20Star.png" alt="Glowing Star" width="25" height="25" />
                        <h2>Nos jeux</h2>
                        <p>Découvrez une variété de jeux de devinettes sur les marques de luxe. Devenez un expert et défiez vos amis.</p>
                        <a href="#">Commencer à jouer</a>
                    </section>
                    <section className="contact">
                        <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Thought%20Balloon.png" alt="Thought Balloon" width="25" height="25" />
                        <h2>Contactez-nous</h2>
                        <p>Si vous avez des questions, des suggestions ou si vous avez besoin d'aide, n'hésitez pas à nous contacter. Vous pouvez nous envoyer un email à support@retainracer.com ou remplir le formulaire de contact sur notre page Contact.</p>
                        <a href="#">Nous contacter</a>
                    </section>
                </div>
            </div>
        </main>
        </div>
    )
}

export default Accueil;