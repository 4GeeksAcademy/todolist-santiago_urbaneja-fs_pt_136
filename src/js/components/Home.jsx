import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [list, setList] = useState(["horacio", "luis", "daniel", "maria", "jose"]);
    const [input, setInput] = useState("");

    function handleClick() {
        if (input.trim() !== "") {
            setList([...list, input]);
            setInput("");
        }
    }

    function borrarUsuario(indice) {
        const nuevaLista = list.filter((user, i) => i !== indice);
        setList(nuevaLista);
    }

    return (
        <div className="contenedor-principal">
            <div className="text-center">
                <h1>Lista de usuarios</h1>

                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Nombre..."
                />
                
                <button className="btn-agregar" onClick={handleClick}>
                    <FontAwesomeIcon icon={faPlus}/>
                </button>

                {
                    list.map((user, i) => {
                        return (
                            <div className="caja-usuario" key={i}>
                                <p>{user}</p>
                                
                                <button className="btn-eliminar" onClick={() => borrarUsuario(i)}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                            </div>
                        )
                    })
                }
                
                <div className="contador">{list.length} usuarios en la lista</div>
            </div>
        </div>
    );
};

export default Home;