import React from 'react';

export default class Form extends React.Component {
    state = {
        title: '',
        description: '',
        name: '',
        location: '',
        price: '',
        contact: ''
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

    };


    onSubmit = (e) => {
        
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            title: '',
            description: '',
            name: '',
            location: '',
            price: '',
            contact: ''

        })
    };
    componentDidMount() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              title: "string",
              description:"string",
              name:"string",
              location:"string",
            })
        };
        fetch('https://awacademy-classifieds.herokuapp.com/ad', requestOptions)
            .then(response => response.json())
            .then(json => console.log(json))
    }

    render() {
        return (
            <form>
                <input
                    name="title"
                    placeholder="title"
                    value={this.state.title}
                    onChange={e => this.change(e)} />
                <br />
                <input
                    name="description"
                    placeholder="description"
                    value={this.state.description}
                    onChange={e => this.change(e)} />
                <br />
                <input
                    name="name"
                    placeholder="name"
                    value={this.state.name}
                    onChange={e => this.change(e)} />
                <br />
                <input
                    name="location"
                    placeholder="location"
                    value={this.state.location}
                    onChange={e => this.change(e)} />
                <br />
                <input
                    name="price"
                    placeholder="price"
                    value={this.state.price}
                    onChange={e => this.change(e)} />
                <br />
                <input
                    name="contact"
                    placeholder="contact"
                    value={this.state.contact}
                    onChange={e => this.change(e)} />
                <br />

                <button onClick={(e) => this.onSubmit(e)}>Create Ad</button>
            </form>
        );

    }
}