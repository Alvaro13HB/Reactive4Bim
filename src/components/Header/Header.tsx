import { SHeader } from "./style";

export function Header(){
    return (
        <SHeader>
            <figure>
                <a href="/index.html">
                    <img src="../../assets/equip-check-logo.svg" alt="logo"></img> 
                </a> 
            </figure>
            <nav>
                <div> 
                    <img src="/images/equip-check-dropdown.svg" alt="dropdown"></img>
                </div>
            </nav>
        </SHeader>
    )
}