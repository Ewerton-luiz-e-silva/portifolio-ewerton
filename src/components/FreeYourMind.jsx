import React from "react";
import "./css/freeYourMind.css"; // Importe o CSS correspondente
import "./css/style.css";
import "./css/clash-grotesk.css"; 

const FreeYourMind = () => {
return (
    <section id="free-your-mind" className="free-your-mind">
    <div className="container-free-your-mind" data-aos="fade-up" data-aos-duration="1000">
        {/* Linha 1 */}
        <div className="line-container" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
        <span>Desenvolva,</span>
        <span className="line"></span>
        </div>

        {/* Linha 2 */}
        <div className="line-container center" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
        <span className="line"></span>
        <span>Aprenda,</span>
        <span className="line"></span>
        </div>

        {/* Linha 3 */}
        <div className="line-container right" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
        <span className="line"></span>
        <span>Cresça!</span>
        </div>
    </div>
    </section>
);
};

export default FreeYourMind;