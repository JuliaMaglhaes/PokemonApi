import Link from 'next/link';
import React from "react";
import styles from "./styles.module.scss"

export function Header(){
    return(
        <div className={styles.headerContainer}>
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