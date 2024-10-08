'use client'

import { useState } from "react";
import emailjs from 'emailjs-com';
import Inicio from "../pages/inicio";
import Footer from "../pages/footer";
import globals from "../app/globals.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Ícono de ubicación 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';  // Ícono de correo
import { faPhone } from '@fortawesome/free-solid-svg-icons';  // Ícono de teléfono
import { faClock } from '@fortawesome/free-solid-svg-icons';  // Ícono de reloj
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';  // Ícono de calendario (día)


function Contacto() {

  const initialState = {
    nombre: '',
    apellido: '',
    email: '',
    mensaje: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);



  const manejoErrores = (e) => {

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value

    });
  }

  const validacion = () => {

    let isValid = true;
    const errors = {};

    if (!formData.nombre.trim()) {
      errors.nombre = 'El nombre es obligatorio';
      isValid = false;
    }

    if (!formData.apellido.trim()) {
      errors.apellido = 'El apellido es obligatorio';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'El email es obligatorio';
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'El email no es válido';
      isValid = false;
    }

    if (!formData.mensaje.trim()) {
      errors.mensaje = 'Escribe un mensaje'
      isValid = false
    }

    setErrors(errors);
    return isValid;
  };


  const manejarEnvio = (e) => {
    e.preventDefault();
    if (validacion()) {
      emailjs.sendForm('akin2020', 'template_mipm04l', e.target, 'F8Oqn7KxbdL8tEBx0')
        .then((result) => {
          setMessage('Mensaje enviado correctamente!');
          setFormData({
            nombre: '',
            apellido: '',
            email: '',
            mensaje: '',
          });

          // Hace que el mensaje desaparezca después de 3 segundos
          setTimeout(() => {
            setMessage('');
          }, 3000); // 3000 milisegundos = 3 segundos

        }, (error) => {
          setMessage('Error al enviar el mensaje. Inténtalo de nuevo.');
          // Hace que el mensaje desaparezca después de 3 segundos
          setTimeout(() => {
            setMessage('');
          }, 3000); // 3000 milisegundos = 3 segundos

        });
    }
  };

  const cargandoEnvio = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simula envío
    setTimeout(() => {
      setIsSubmitting(false);
      // Resto del código
    }, 2000);
  }


  return (

    <div>
      <div>
        <Inicio />
      </div>
      <div className="div-contacto">
        <div className="form-section">
          <form className="form" onSubmit={manejarEnvio}>
            <h1 className="h1-form">Consulta</h1>
            <div className="div-form">
              <label className="label-form" htmlFor="nombre">Nombre</label>
              <input className="input-form" type="text" id="nombre" name="nombre" value={formData.nombre} onChange={manejoErrores} />
              {errors.nombre && <p class="p-form">{errors.nombre}</p>}
            </div>

            <div className="div-form">
              <label className="label-form" htmlFor="apellido">Apellido</label>
              <input className="input-form" type="text" name="apellido" id="apellido" value={formData.apellido} onChange={manejoErrores} />
              {errors.apellido && <p class="p-form">{errors.apellido}</p>}
            </div>

            <div className="div-form">
              <label className="label-form" htmlFor="email">Email</label>
              <input className="input-form" type="text" name="email" id="email" value={formData.email} onChange={manejoErrores} />
              {errors.email && <p class="p-form">{errors.email}</p>}
            </div>

            <div className="div-form">
              <label className="label-form" htmlFor="mensaje">Mensaje</label>
              <textarea className="textarea-form" name="mensaje" id="mensaje" value={formData.mensaje} onChange={manejoErrores}></textarea>
              {errors.mensaje && <p class="p-form">{errors.mensaje}</p>}
            </div>

            <button className="button-reset" type="reset" onClick={() => setFormData(initialState)}>Eliminar datos</button>
            <button className="button-form" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
            {message && <p className="message-form">{message}</p>}
          </form>
        </div>


        <div className="detalles-mapa-section">
          <div className="div-info-contacto">
            <h2 className="h2-contacto">Detalles</h2>
            <a className="a-info-contacto" href="https://www.google.com/maps/place/Av.Triunvirato+3785,+C1431FDO+CABA" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon class="logo-contacto" icon={faMapMarkerAlt} /> Av.Triunvirato 3785,1°A
            </a>
            <a className="a-info-contacto-telefono" href="https://wa.me/91137742782">
              <FontAwesomeIcon className="logo-contacto" icon={faPhone} /> +54 9 11 3774-2782
            </a>
            <a className="a-info-contacto-email" href="mailto:erikaromero.salud@gmail.com">
              <FontAwesomeIcon className="logo-contacto-email" icon={faEnvelope} /> erikaromero.salud@gmail.com
            </a>
            <h3 className="h3-contacto">Horarios de atención</h3>
            <p className="p-contacto"><FontAwesomeIcon className="logo-contacto" icon={faCalendarDay} /> Lunes - Viernes</p>
            <p className="p-contacto"><FontAwesomeIcon className="logo-contacto" icon={faClock} /> 8:00 - 20:00 hs</p>
          </div>

          <div className="div-mapa">
            <iframe className="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.9269341187883!2d-58.474570299999996!3d-34.5807153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb66d8aff4e9b%3A0x828a3e4924a04559!2sAv%20Triunvirato%203785%2C%20C1431%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1728318556761!5m2!1ses!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>


      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Contacto;