import React from "react";
import { useEffect } from "react";
import Inicio from "../pages/inicio";
import Footer from "../pages/footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';



function Peeling() {

    useEffect(() => {
        // Este código solo se ejecutará en el cliente
        const faqButtons = document.querySelectorAll('.button-preg-frec');
        faqButtons.forEach(button => {
            button.addEventListener('click', () => {
                const answer = button.nextElementSibling;
                answer.classList.toggle('show');
            });
        });

        // Cleanup: eliminar event listeners al desmontar el componente
        return () => {
            faqButtons.forEach(button => {
                button.removeEventListener('click', () => {
                    const answer = button.nextElementSibling;
                    answer.classList.toggle('show');
                });
            });
        };
    }, []); // El array vacío significa que este efecto solo se ejecuta al montar


    return (
        <div className="div-nosotros">
            <Inicio />
            <div className="peeling-container">
                <div className="container-descripcion">
                    <h2 className="h2-peeling">Peeling Facial</h2>
                    <img className="img-peeling" src="/peeling.avif" alt="Imagen de peeling" />
                    <p className="p-peeling">
                        <FontAwesomeIcon className="icon-circle" icon={faCircle} />
                        El peeling facial es un tratamiento que a través de la combinación de ácidos de diferentes tipos, elegidos según cada paciente, mejora notablemente la textura, las arrugas finas y las capas superficiales de la piel mediante una exfoliación eliminando las células dañadas y envejecidas.
                        Disminuyen el diámetro de los poros, atenúa las manchas y las cicatrices. Es un tratamiento personalizado, ya que cada persona es diferente y así cada peeling elegido para cada una de ellas.
                    </p>
                    <a href="https://wa.me/91137742782" className="btn-agendar">Agendar Cita</a>
                </div>
                <div className="container-beneficios">
                    <h3 className="h3-beneficios">Beneficios</h3>
                    <ul className="beneficios-peeling">
                        <li className="li-peeling">Mejora notablemente la textura de la piel.</li>
                        <li className="li-peeling">Reduce las arrugas finas y manchas.</li>
                        <li className="li-peeling">Disminuye el diámetro de los poros.</li>
                        <li className="li-peeling">Atenúa cicatrices superficiales.</li>
                        <li className="li-peeling">Tratamiento personalizado para cada paciente.</li>
                    </ul>
                </div>
            </div>

            <div className="container-antes-despues">
                <h3 className="h3-peeling">Antes y Después</h3>
                <div className="container-peeling-img">
                    <img className="img-antes" src="" alt="Antes del tratamiento" />
                    <img className="img-despues" src="" alt="Después del tratamiento" />
                </div>
            </div>

            <div className="preg-frecuentes">
                <h2 className="preg-frec-title">Preguntas Frecuentes</h2>
                <div className="preg-frec-items">
                    <div className="preg-frec-item">
                        <button className="button-preg-frec">¿Qué es el peeling facial?</button>
                        <div className="preg-respuesta">
                            <p>El peeling facial es un tratamiento que utiliza ácidos para exfoliar las capas superficiales de la piel y mejorar su textura, reducir arrugas y manchas.</p>
                        </div>
                    </div>

                    <div className="preg-frec-item">
                        <button className="button-preg-frec">¿Cuántas sesiones necesito?</button>
                        <div className="preg-respuesta">
                            <p>El número de sesiones varía según el tipo de piel y los objetivos del tratamiento, pero generalmente se recomiendan entre 3 y 6 sesiones.</p>
                        </div>
                    </div>

                    <div className="preg-frec-item">
                        <button className="button-preg-frec">¿El tratamiento es doloroso?</button>
                        <div className="preg-respuesta">
                            <p>Puede haber una sensación de picazón o escozor leve, pero el tratamiento generalmente es bien tolerado.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>

    )
}


export default Peeling;