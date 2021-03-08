import React, { Component } from 'react'
import './styles.css'

class New extends Component{
    state = {
        image: null,
        author: '',
        place: '',
        description: '',
        hashtags: '',
    }

    handleSubimit = e => {
        e.preventDefault();

        console.log(this.state)
    }

    handleImageChange = e => {
        this.setState({ image: e.target.files[0] });        
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render(){
        return(
            <form action="" id="new-post">
                <input type="file" onChange={this.handleImageChange}/>

                <input 
                    type="text"
                    name="author"
                    placeholder="Autor do post"
                    onChange={this.handleChange}
                    value={this.setState.author}
                />

                <input 
                    type="text"
                    name="place"
                    placeholder="local do post"
                    onChange={this.handleChange}
                    value={this.setState.place}
                />

                <input 
                    type="text"
                    name="description"
                    placeholder="Descrição do post"
                    onChange={this.handleChange}
                    value={this.setState.description}
                />

                <input 
                    type="text"
                    name="hashtags"
                    placeholder="Hashtags do post"
                    onChange={this.handleChange}
                    value={this.setState.hashtags}
                />

                <button type="submit" onClick={this.handleSubimit}>Enviar</button>
            </form>
        )
    }
}

export default New;