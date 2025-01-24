import { SHome } from "./style"

export function Home(){
    return (
        <SHome>
            <section>

                <aside className="bloco1">
                    <img src="src/assets/effects-icon.png" alt="effects-icon"></img>
                    <a href="/effects"><h3> EFFECTS </h3></a>
                    <p>Look what crazy stuff people are doing with their effect pedals and grow some inspiration!</p>
                </aside>

                <aside className="bloco2">
                    <img src="src/assets/instruments_icon.png" alt="instruments-icon"></img>
                    <a href="/instruments"> <h3> INSTRUMENTS </h3></a>
                    <p>Search for famous instruments and see what people are saying about them!</p>
                </aside>

                <aside className="bloco3">
                    <img src="src/assets/amps-and-cabinets-icon.png" alt="amps-and-cabinets-icon"></img>
                    <a href="/amps-and-cabinets"><h3> AMPS & CABINETS </h3> </a>
                    <p>For eletric lovers, a good amp with a monstrous cabinet is the way to a powerful and bright sound!</p>
                </aside>

            </section>
        </SHome>
    )
}