import React from 'react'
import "./menu.scss"

export default function Menu({menuOpen}) {
    return (
        <div className={"menu " + (!menuOpen && 'active')}>
            <ul>
                <li>
                    <a href="#intro">Home</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
            </ul>
        </div>
    )
}
