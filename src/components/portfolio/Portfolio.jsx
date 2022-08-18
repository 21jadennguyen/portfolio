import './portfolio.scss'

export default function Portfolio() {
    return (
        <div className = 'portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Featured</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="assets/game.jpg" alt=""/>
                    <h3>Unity Game</h3>
                </div>
            </div>
        </div>
    )
}
