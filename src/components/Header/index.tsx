import { SHeader, SNav } from "./style";

export function Header(){
    return (
        <SHeader>
            <figure>
                <a href="/">
                    <img src="src/assets/equip-check-logo.svg" alt="logo"></img> 
                </a> 
            </figure>
            <SNav>
                <nav>
                    <ul className="navitems"> 
                        <li><a href="/login">Login</a></li>
                        <li><a href="/cadastrar">Cadastrar</a></li>
                    </ul>
                </nav>
            </SNav>
        </SHeader>
    )
}