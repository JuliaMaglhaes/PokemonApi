import Link from 'next/link';
import React from "react";

export function Header(){
    return(
        <div className="">
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Início</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/pokemons">
                            <a>Pokémons</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}