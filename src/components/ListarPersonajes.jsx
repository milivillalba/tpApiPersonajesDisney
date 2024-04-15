import React, { useState} from "react";
import axios from "axios"


export const ListarPersonajes = ()=>{
    const[ListPersonajes, setList]= useState([]);

    //Funcioin para obtener los personajes desde la api

    const ConsumirAPI = async()=>{
       try {
        const response= await axios.get("https://api.disneyapi.dev/character")
        setList(response.data.data)
       } catch (error) {
        console.error("Error al consumir la api del Personajes de disney")
       }
    }

    // Función para eliminar un personaje de la lista
  const eliminarPersonaje = (personajeId) => {
    const nuevaListaPersonajes = ListPersonajes.filter(
      (personaje) => personaje._id !== personajeId
    );
    setList(nuevaListaPersonajes);
  };
   
 
    return(
        <>
        <div>
            <h1>Personajes de Disney</h1>
            <button onClick={ConsumirAPI} className="btn btn-outline-danger">Mostra personaje</button>

            {/* LISTA DE PERSONAJES */}
            <ul>
                {ListPersonajes.map((personaje) => (
                <li key={personaje.name}>
                    {/* para mostra el nombre del personaje*/}
                    <p>{personaje.name}</p>
                    {/* para mostra las imagenes de los personajes */}
                    {personaje.imageUrl && (
                        <img
                            src={personaje.imageUrl}
                            alt={personaje.name || "Imagen de personaje"}
                            style={{ maxWidth: "200px", maxHeight: "200px" }} // Ajusta el tamaño máximo de la imagen
                        />
                    )}
                    {/* boton para eliminar */}
                     <button onClick={() => eliminarPersonaje(personaje._id)}className="btn btn-danger  botonEliminar">eliminar </button>
                </li>
                ))}
            </ul>
        </div>
        
        </>
    )
    
}