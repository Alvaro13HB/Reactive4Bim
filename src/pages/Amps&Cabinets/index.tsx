import { SAandC } from "./style"
import { ComponentCard } from "../../components"
import { ampsandcabinetsData } from "../../services/dados"

export function AandC(){
    const marcas = [{
        name: "hartke",
        id: "hartke",
        titulo: "Hartke"
    }, {
        name: "orange",
        id: "orange",
        titulo: "Orange"
    }, {
        name: "ampeg",
        id: "ampeg",
        titulo: "Ampeg"
    }]

    return (
        <SAandC>
            <section className="esquerdo">
                <h3>AMPS & CABINETS</h3>
                <aside className="filtros">
                    <p> Filters </p>
                        <h5> Brand </h5>
                        <div className="checkers">
                            { marcas.map((item) => 
                                <div>
                                    <input type="checkbox" name={item.name} id={item.id} /> <label htmlFor={item.id}>{item.titulo}</label>
                                </div>                           
                            )}
                    </div>
                </aside>
            </section>

            <section className="principal">
                <div className="searchbar">
                    <form action="" className="bar">
                        <input type="text" placeholder="What you're looking for?" name="q" />
                        <button type="submit"><img src="src/assets/search-icon.svg" /></button>
                    </form>
                </div>

                { ampsandcabinetsData.map((item) => 
                    <ComponentCard 
                        key={item.id}
                        nome={item.nome}
                        image={item.image}
                    />
                )}
            </section>
        </SAandC>
    )
}