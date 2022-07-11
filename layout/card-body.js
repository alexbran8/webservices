import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
const CardBody = () => {
    return (
        <div className="grid-card-container">
            <div className="grid-item">
                <h3>SITE PREZENTARE</h3>
                <ul>
                    <li><FontAwesomeIcon className="icon" icon={faCircleCheck} />Design modern, tema personalizata</li>
                    <li><FontAwesomeIcon className="icon" icon={faCircleCheck} />o singura pagina prezinta toate componentele site-ului </li>
                    <li><FontAwesomeIcon className="icon" icon={faCircleCheck} />deployment gratuit, doar cu achizitionarea unui domeniu</li>
                    <li><FontAwesomeIcon className="icon" icon={faCircleCheck} />compatibil cu telefoane mobile / tablete / pc / laptop</li>
                    <li> <FontAwesomeIcon className="icon" icon={faCircleCheck} />SEO FRIENDLY (trafic organic / performante / site ranking)</li>
                    <li> <FontAwesomeIcon className="icon" icon={faCircleXmark} />nu necesita stocare date</li>
                </ul>
            </div>
            <div className="grid-item">
                <h3>SITE BASIC</h3>
                <ul>
                    <li><FontAwesomeIcon className="icon" icon={faCircleCheck} />Design modern, tema personalizata</li>
                    <li><FontAwesomeIcon className="icon" icon={faCircleCheck} />pagini dedicate fiecaror sectiuni ale site-ului (prezentare, produse, servicii, contact, etc.)</li>
                    <li><FontAwesomeIcon className="icon" icon={faCircleCheck} />necesita stocare date</li>
                    <li><FontAwesomeIcon className="icon" icon={faCircleCheck} />solutii diverse pentru deployment</li>
                    <li><FontAwesomeIcon className="icon" icon={faCircleCheck} />compatibil cu toate tipurile de device (telefoane mobile / tablete / pc / laptop / etc.)</li>
                    <li><FontAwesomeIcon className="icon" icon={faCircleCheck} />SEO FRIENDLY (trafic organic / performante / site ranking)</li>
                    <li> <FontAwesomeIcon className="icon" icon={faCircleXmark} />nu necesita autentificare</li>
                </ul>
            </div>
            <div className="grid-item">
                <h3>SITE PREMIUM</h3>
                <ul>
                    <li><FontAwesomeIcon className="icon" icon={faCircleCheck} />Design modern, tema personalizata, animatii</li>
                    <li><FontAwesomeIcon className="icon" icon={faCircleCheck} />pagini dedicate fiecaror sectiuni ale site-ului (prezentare, produse, servicii, preturi, contact, etc.)</li>
                    <li><FontAwesomeIcon className="icon" icon={faCircleCheck} />necesita stocare date</li>
                    <li><FontAwesomeIcon className="icon" icon={faCircleCheck} />solutii diverse pentru deployment</li>
                    <li><FontAwesomeIcon className="icon" icon={faCircleCheck} />compatibil cu toate tipurile de device (telefoane mobile / tablete / pc / laptop / etc.)</li>
                    <li><FontAwesomeIcon className="icon" icon={faCircleCheck} />TOP SEO PERFORMANCE (trafic organic / performante / site ranking)</li>
                    <li><FontAwesomeIcon className="icon" icon={faCircleCheck} />PWA - compatibil cu toate platformele, poate fi instalat</li>
                </ul>
            </div>
            <div className="grid-item">
                <h3>E-COMMERCE</h3>

                <ul>
                    <li><FontAwesomeIcon className="icon" icon={faCircleCheck} /> Design modern, tema personalizata</li>
                    <li><FontAwesomeIcon className="icon" icon={faCircleCheck} />mentenanta usoara si rapida</li>
                    <li><FontAwesomeIcon className="icon" icon={faCircleCheck} />compatibil cu toate tipurile de device (telefoane mobile / tablete / pc / laptop / etc.)</li>
                    <li><FontAwesomeIcon className="icon" icon={faCircleCheck} />experienta utilizator imbunatatita datorita folosirii tehnologiilor moderne de programare</li>
                    <li><FontAwesomeIcon className="icon" icon={faCircleCheck} />seo friendly (trafic organic / performante / site ranking)</li>
                </ul>
            </div>
            <div className="grid-item">
                <h3>STYLING</h3>
            </div>
            <div className="grid-item">
                <h3>CONSULTANTA</h3>
            </div>
            <div className="grid-item">
                <h3>APLICATII COMPLEXE</h3>
                <ul>
                    <li><FontAwesomeIcon className="icon" icon={faCircleCheck} />automatizare procese</li>
                    <li><FontAwesomeIcon className="icon" icon={faCircleCheck} />digitalizare procese</li>
                    <li><FontAwesomeIcon  className="icon"icon={faCircleCheck} />servicii pentru programare online</li>
                </ul>
            </div>
            <div className="grid-item">
                <h3>SOLUTII INFRASTRUCTURA</h3>
                <ul>
                    <li><FontAwesomeIcon className="icon" icon={faCircleCheck} />configurare masini virtuale</li>
                    <li><FontAwesomeIcon className="icon" icon={faCircleCheck} />migrare aplicatii in containere</li>
                </ul>
            </div>
        </div>
    );
}

export default CardBody;