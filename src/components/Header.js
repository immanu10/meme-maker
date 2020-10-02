import React from "react"

const Header = () => {
    return (

        <div>
            <header>
                <div className="img">
                    <img src={require('./logoimg.jpg')} alt="memeimage" />
                    <img src={require('./tenor.gif')} style={{ float: "left", marginRight: 70 }} alt="problem?" />
                </div>
                <h1 style={{ marginLeft: 100, marginTop: 20, fontSize: 30 }}>Meme Maker</h1>




            </header>
        </div>
    )

}


export default Header