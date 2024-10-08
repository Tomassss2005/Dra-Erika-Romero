'use client'

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h3 className="footer-h3">Enlaces Rápidos</h3>
                    <ul className="ul-footer">
                        <li className="li-footer">
                            <a className="a-footer-ul" href="/page">
                                <FontAwesomeIcon className="logo-home" icon={faHome} size="2x" />HOME
                            </a>
                        </li>
                        <li className="li-footer">
                            <a className="a-footer-ul" href="/tratamientos">
                                <FontAwesomeIcon className="logo-med" icon={faStethoscope} size="2x" />SERVICIOS
                            </a>
                        </li>
                        <li className="li-footer">
                            <a className="a-footer-ul" href="https://wa.me/91137742782" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="logo-wpp" icon={faWhatsapp} size="2x" />TURNOS
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 className="footer-h3">Contacto</h3>
                    <p className="footer-p3"><a href="mailto:erikaromero.salud@gmail.com" className="a-p-footer">EMAIL: erikaromero.salud@gmail.com</a></p>
                    <p className="footer-p3"><a href="https://wa.me/91137742782" className="a-p-footer-2">TELÉFONO: +54 9 11 3774-2782</a></p>
                    <p className="footer-p3"><a href="https://www.google.com/maps/place/Av.Triunvirato+3785,+C1431FDO+CABA" className="a-p-footer-3">DIRECCIÓN: Av.Triunvirato 3785,1°A.</a></p>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="copy-footer">Todos los derechos reservados <strong>&copy;</strong>{new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer;
