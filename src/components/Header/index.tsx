import { SHeader, SNav } from "./style";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { GrLogout } from "react-icons/gr";

export function Header(){
    const { user, signOut } = useContext(AuthContext)
        async function logout() {
            await signOut()
        }
    return (
        <SHeader>
            <figure>
                <a href="/">
                    <img src="src/assets/equip-check-logo.svg" alt="logo"></img> 
                </a> 
            </figure>
            <SNav>
                {
                    user ? (
                        <ul>
                        <li>
                            <Link to="/adm">Administrativo</Link>
                        </li>
                        <li>
                            <button onClick={logout}>{user.nome} <GrLogout /></button>
                        </li>
                        </ul>
                    ) : (
                        <nav>
                            <ul> 
                                <li><a href="/login">Login</a></li>
                                <li><a href="/cadastro">Cadastrar</a></li>
                            </ul>
                        </nav>
                    )
                }
            </SNav>
        </SHeader>
    )
}