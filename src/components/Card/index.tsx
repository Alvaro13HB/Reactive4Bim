import { SCard } from "./style"

export interface ICard {
    nome: string
    image: string
} 

export const Card = ({nome, image}: ICard) => {
    return (
        <SCard>
            <a href="">
                <aside>
                    <figure>
                        <img src={image} alt=""></img>
                    </figure>
                    <h5> {nome} </h5>
                </aside>
            </a>
        </SCard>
    )
}