import './portfolio.scss'

export default function Portfolio() {
    return (
        <div className = 'portfolio' id='portfolio'>
            <div className = 'left'>
                <h1>Portfolio</h1>
                <ul>
                    <li className="active">Featured</li>
                </ul>
                <div className="container">
                    <div className="item">
                        <img src="assets/sortingimage.JPG" alt=""/>
                        <a href="https://21jadennguyen.github.io/sorting-racer/">Sorting Algorithm Racer</a>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <div className="wrapper1">
                        <h1>This application compares the sorting speeds of different sorting algorithms. 
                            There are built-in functions for changing base sorting speed and array size. 
                            Select sorting algorithms, select array size and animation delay, then generate 
                            arrays and sort.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
