"use client"

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Footer from "./footer";
import globals from "../app/globals.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


function Nosotros() {

    const [isOpen, setIsOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const subMenuRef = useRef(null); // Referencia para el submenú

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
        if (isSubMenuOpen) {
            setIsSubMenuOpen(false); // Cierra el submenú si se abre/cierra el menú principal
        }
    };

    // Función para alternar el submenú (abrir/cerrar)
    const toggleSubMenu = (e) => {
        e.preventDefault();
        setIsSubMenuOpen(prev => !prev);  // Alternar el estado del submenú
    };

    // Manejo del clic fuera del submenú
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (subMenuRef.current && !subMenuRef.current.contains(event.target)) {
                setIsSubMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    const handleClick = () => {
        window.location.href = "/contacto";
    };

    return (
        <div className="div-nosotros">
            <nav className="navbar">
                <div className="navbar-header">
                    <h1 className="h1-inicial">E</h1>
                    <h1 className="h1-linea">|</h1>
                    <h2 className="h2-nav">
                        <span className="span-1">Dra. Erika Romero</span>
                        <span className="span-2">Médica Clínica Estética | Reparadora</span>
                    </h2>
                </div>
                <button className="navbar-toggle" onClick={toggleMenu}>
                    &#9776;
                </button>
                <ul className={`ul-nav ${isOpen ? 'open' : ''}`}>
                    <li>
                        <Link href="/page" className="a-nav">Inicio</Link>
                    </li>
                    <li className="ul">
                        <a href="#" className="a-nav" onClick={toggleSubMenu}>
                            Tratamientos <span className="arrow">&#9662;</span>
                        </a>
                        <ul ref={subMenuRef} className={`ul-menu ${isSubMenuOpen ? 'open' : ''}`}>
                            <li className="li-nav"><Link href="/nutricion-calidad-de-piel">Nutrición y calidad de piel</Link></li>
                            <li className="li-nav"><Link href="/peeling">Peeling</Link></li>
                            <li className="li-nav"><Link href="/despigmentacion">Despigmentación</Link></li>
                            <li className="li-nav"><Link href="/plasma-rico-en-plaquetas">Plasma Rico en Plaquetas</Link></li>
                            <li className="li-nav"><Link href="/toxina-botulinica">Toxina botulínica</Link></li>
                            <li className="li-nav"><Link href="/fillers-con-acido-hialuronico">Fillers con Ácido Hialurónico</Link></li>
                            <li className="li-nav"><Link href="/alopecia-androgenetica">Alopecia Androgenética</Link></li>
                            <li className="li-nav"><Link href="/tratamientos">Todos nuestros tratamientos</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/nosotros" className="nosotros">Acerca de Nosotros</Link>
                    </li>
                    <li>
                        <Link className="a-nav" href="#">
                            <span onClick={handleClick} className="a-nav-contacto">Contáctanos</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="contenido-nosotros">
                <img className="img-nosotros" src="/doctora.jpg" alt="Doctora Erika Romero" />
                <div className="texto-nosotros">
                    <h2 className="h2-nosotros">Dra Erika Romero</h2>
                    <hr className="hr-nosotros" />
                    <h3 className="h3-nosotros">Sobre Mi</h3>
                    <p className="p-nosotros">
                        <FontAwesomeIcon icon={faCircle} style={{ color: '#632f2469', fontSize: '15px' }} /> Soy una <strong>profesional</strong> comprometida con el cuidado de la salud.
                        <br />
                        <br />
                        En el camino de mi formación de grado y post grado en la <strong>Universidad de Buenos Aires</strong>, en la <strong>Universidad Austral</strong>, y en <strong>Avicena</strong>, me he desarrollado en áreas de la clínica médica, la medicina estética y reparadora y en la comunicación profesional, para obtener herramientas de transformación para mí y para los pacientes, con el fin de alcanzar con éxito los objetivos planteados en el camino de cada uno.
                        <br />
                        <br />
                        <FontAwesomeIcon icon={faCircle} style={{ color: '#632f2469', fontSize: '15px' }} /> Me propongo la búsqueda continua de desafíos donde pueda formarme para brindar todo mi conocimiento a favor de la mejora de la <strong>calidad de vida</strong> de las personas.
                        <br />
                        <br />
                        Son algunos de nuestros <strong>valores</strong> el cuidado de la salud de <strong>cada persona</strong>; el profesionalismo en cada tratamiento; la amabilidad en cada encuentro; la escucha activa, y la <strong>empatía</strong> entre otras.
                    </p>
                    <p className="p-nosotros">Tenemos como visión a futuro convertirnos en un <strong>centro de estética médica </strong>de vanguardia</p>
                </div>
            </div>
            <Footer />
        </div >
    )
}


export default Nosotros;