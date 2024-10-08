import Inicio from "./inicio";
import Footer from "./footer";

import Nosotros from "./nosotros";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import TresTratamientos from "./tres-tratamientos";

function Home() {

  return (

    <div>
      <Inicio />
      <TresTratamientos />
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
          <p className="p-nosotros"><FontAwesomeIcon icon={faCircle} style={{ color: '#632f2469', fontSize: '15px' }} /> Desde la medicina algunos de nuestros <strong>objetivos</strong> son acompañar a cada persona en el camino del cuidado de su <strong>salud estética</strong> y el encuentro de su <strong>mejor versión</strong>.</p>
          <p className="p-nosotros">Tenemos como visión a futuro convertirnos en un <strong>centro de estética médica </strong>de vanguardia con altos estándares de calidad en la región, donde las personas elijan llevar el <strong>cuidado de su salud
          </strong> en el paso del tiempo, para cada momento especial, y para cada etapa de sus <strong>vidas</strong>.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home;