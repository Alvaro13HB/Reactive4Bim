import { SInstruments } from "./style";
import { ComponentCard } from "../../components";
import { instrumentsData } from "../../services/dados";

export function Instruments(){
    const marcas = [{
        name: "rick",
        id: "rick",
        titulo: "Rickenbacker"
    }, {
        name: "fender",
        id: "fender",
        titulo: "Fender"
    },
    {
        name: "ibanez",
        id: "ibanez",
        titulo: "Ibanez",
    },
    {
        name: "gibson",
        id: "gibson",
        titulo: "Gibson"
    },
    {
        name: "spector",
        id: "spector",
        titulo: "Spector"
    },
    {
        name: "aria",
        id: "aria",
        titulo: "Aria"
    }]

    return (
        <SInstruments>
            <section className="esquerdo">
                <h3>INSTRUMENTS</h3>
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

                { instrumentsData.map((item) => 
                    <ComponentCard 
                        key={item.id}
                        nome={item.nome}
                        image={item.image}
                    />
                )}
            </section>
        </SInstruments>
    )
}