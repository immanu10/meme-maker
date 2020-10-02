import React, { Component } from "react"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            memeImg: "http://i.imgflip.com/1bij.jpg",
            allmemeimg: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data

                this.setState({
                    allmemeimg: memes
                })
                console.log(memes[0])
            })


    }
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })

    }
    handleSubmit(event) {
        event.preventDefault()
        const rannum = Math.floor(Math.random() * this.state.allmemeimg.length)
        const ranimg = this.state.allmemeimg[rannum].url
        this.setState({ memeImg: ranimg })
        console.log(ranimg)

    }
    render() {

        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input type="text" name="topText"
                        value={this.state.topText}
                        onChange={this.handleChange}
                        placeholder="Toptext" />

                    <input type="text" name="bottomText"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                        placeholder="Bottomtext" />

                    <button>Generate</button>
                </form>
                <div className="meme">
                    <img src={this.state.memeImg} alt="" />
                    <div className="top">
                        <h2 >{this.state.topText}</h2>
                    </div>
                    <div className="bottom" >
                        <h2 >{this.state.bottomText}</h2>
                    </div>

                </div>
            </div>
        )
    }
}

export default MemeGenerator