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
                    <div className="navitems"> 
                        <img src="src/assets/equip-check-dropdown.svg" alt="dropdown"></img>
                    </div>
                </nav>
            </SNav>
        </SHeader>
    )
}