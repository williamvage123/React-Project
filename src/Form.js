import React from 'react';


export default class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showForm: false,
            title: '',
            description: '',
            name: '',
            location: '',
            price: null,
            email: '',
            phone: ''
        }
    }
    

    change = (e) => {
        this.setState({
            //form:{
            [e.target.name]: e.target.value,
            //...this.state.form
            
        }
        );
        console.log(this.state)
    };


    onSubmit = (e) => {
        e.preventDefault();
        fetch('https://awacademy-classifieds.herokuapp.com/ad', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                location: this.state.location,
                price: this.state.price,
                description: this.state.description,
                title: this.state.title,
                email: this.state.email, 
                phone: this.state.phone,
                //this.state.form          
            })
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

        this.setState({
        })



    }

    render(){
        return (
            <div>
                <button onClick={()=>this.setState({showForm: true})}>Click me</button>
                {this.state.showForm ? this.renderForm() : null }

            </div>
        )
    }

    renderForm() {
        return (
            <form visibility="hidden">
                <div>Title<input
                    name="title"
                    type="text"
                    maxLength={80}
                    placeholder="max 80 characters"
                    value={this.state.title}
                    onChange={e => this.change(e)} />
                <br /></div>
                <div>Description<input
                    name="description"
                    type="text"
                    placeholder="text"
                    value={this.state.description}
                    onChange={e => this.change(e)} />
                <br /></div>
                <div>Name<input
                    name="name"
                    placeholder="my name"
                    type="text"
                    value={this.state.name}
                    onChange={e => this.change(e)} />
                <br /></div>
                <div>Location<input
                    name="location"
                    type="text"
                    placeholder="e.g. Stockholm"
                    value={this.state.location}
                    onChange={e => this.change(e)} />
                <br /></div>
                <div>Price<input
                    name="price"
                    type="number"
                    placeholder="price"
                    value={this.state.price}
                    onChange={e => this.setState({price: parseFloat(e.target.value)})} />
                <br /></div>
                <div>Email<input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="e.g. alexsmith@gmail.com"
                    value={this.state.email}
                    onChange={e => this.change(e)} />
                <br /></div>
                <div>Phone number<input
                    name="phone"
                    type="tel"
                    id="phone"
                    value={this.state.phone}
                    onChange={e => this.change(e)} />
                <br /></div>


                <button onClick={(e) => this.onSubmit(e)}>Create Ad</button>
            </form>
        );

    }
}