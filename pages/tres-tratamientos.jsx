'use client'


function TresTratamientos() {

    return (
        <div className="div-tres-tratamientos">
            <h2 className="h2-tres-tratamientos">Algunos de nuestros Tratamientos</h2>
            <figure className="container-tres-tratamientos">
                <img src="/filler-labios.webp" alt="Imagen de filler para labios" className="img-1" height={300} width={350} />
                <img src="/plasma-rico-en-plaquetas.webp" alt="Imagen de plasma rico en plaquetas" className="img-2" height={300} width={350} />
                <img src="toxina-botulinica.jpg" alt="Imagen con toxina botulinica" className="img-3" height={300} width={350} />
            </figure>
            <div className="div-a">
                <a href="/plasma-rico-en-plaquetas" className="a-1">Filler para labios</a>
                <a href="/fillers-con-acido-hialuronico" className="a-2">Plasma rico en Plaquetas</a>
                <a href="toxina-botulinica" className="a-3">Toxina Botulínica</a>
            </div>
        </div>
    )
}


export default TresTratamientos;