import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro" id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/facebookpfp.jpg" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <div className="wrapper1">
                        <h2>Jaden Nguyen,</h2>
                        <h1>NJIT Albert Dorman Honors College</h1>
                        <h1>Computer Science Major</h1>
                    </div>
                    <div className="arrow">
                        <a href="#portfolio">
                            <img src="assets/downarrow.png" className="arrow" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
