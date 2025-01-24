import { SEffects } from "./style"
import { ComponentCard } from "../../components"
import { effectsData } from "../../services/dados"

export function Effects(){
    const marcas = [{
        name: "boss",
        id: "boss",
        titulo: "BOSS"
    }, {
        name: "mxr",
        id: "mxr",
        titulo: "MXR"
    }]

    return (
        <SEffects>
            <section className="esquerdo">
                <h3>EFFECTS</h3>
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

                { effectsData.map((item) => 
                    <ComponentCard 
                        key={item.id}
                        nome={item.nome}
                        image={item.image}
                    />
                )}
            </section>
        </SEffects>
    )
}