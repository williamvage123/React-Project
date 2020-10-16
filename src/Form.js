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
            phone: '',
            priceNegotiable: true,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }


    /*change = (e) => {
        this.setState({
            //form:{
            [e.target.name]: e.target.value,
            //...this.state.form

        }
        );
        
    };*/


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

                //this.state.form          
            })
        })
            .then(response => {
                console.log(response)
                this.props.onSubmit()
            })
            .catch(error => {
                console.log(error)
            })

        this.setState({
        })



    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({

            [name]: value
        })
    }


    render() {

        return (

            <div class="control">
                <p onClick={() => this.setState({ showForm: !this.state.showForm })}>Show Form</p>
                {this.state.showForm ? this.renderForm() : null}

            </div>

        )
    }

    renderForm() {
        return (
            <form visibility="hidden">

                <div class="field">
                    <label class="label">Title</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="max 80 characters" name="title" maxLength={80} value={this.state.title} onChange={this.handleInputChange} />
                    </div>
                </div>
                <div class="field">
                    <label class="label">Description</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                    </div>
                </div>
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="my name" name="name" value={this.state.name} onChange={this.handleInputChange} />
                    </div>
                </div>
                <div class="field">
                    <label class="label">Location</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="e.g. Stockholm" name="location" value={this.state.location} onChange={this.handleInputChange} />
                    </div>
                </div>
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control ">
                        <input class="input" type="email" id="email" name="email" placeholder="e.g. alexsmith@gmail.com" value={this.state.email} onChange={this.handleInputChange} ></input>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Price</label>
                    <div class="control">
                        <input class="input" type="number" placeholder="price" name="price" value={this.state.price} onChange={e => this.setState({ price: parseFloat(e.target.value) })} />
                    </div>
                </div>
                <div>Price Negotiable<input
                    name="price negotiable"
                    type="checkbox"
                    onChange={this.handleInputChange} //
                    placeholder="price negotiable"
                //value={this.state.priceNegotiable}
                //onChange={e => this.change(e)} 
                />
                    <br /></div>










                {/*<div>Title<input
                        name="title"
                        type="text"
                        maxLength={80}
                        placeholder="max 80 characters"
                        value={this.state.title}
                        onChange={this.handleInputChange} />
                    <br /></div>*/}
                {/*<div>Description<input
                        name="description"
                        type="text"
                        placeholder="text"
                        value={this.state.description}
                        onChange={this.handleInputChange} />
                    <br /></div>*/}
                {/*<div>Name<input
                        name="name"
                        placeholder="my name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleInputChange} />
                    <br /></div>*/}
                {/*<div>Location<input
                        name="location"
                        type="text"
                        placeholder="e.g. Stockholm"
                        value={this.state.location}
                        onChange={this.handleInputChange} />
                    <br /></div>*/}
                {/*<div>Price<input
                        name="price"
                        type="number"
                        placeholder="price"
                        value={this.state.price}
                        onChange={e => this.setState({ price: parseFloat(e.target.value) })} />
                    <br /></div>*/}
                {/*} <div>Price Negotiable<input
                        name="price negotiable"
                        type="checkbox"
                        onChange={this.handleInputChange} //
                        placeholder="price negotiable"
                    //value={this.state.priceNegotiable}
                    //onChange={e => this.change(e)} 
                    />
                        <br /></div>
                    <div>Email<input
                        name="email"
                        type="email"
                        id="email"
                        placeholder="e.g. alexsmith@gmail.com"
                        value={this.state.email}
                        onChange={this.handleInputChange} />
                <br /></div>*/}

                <button class="button is-primary" onClick={(e) => this.onSubmit(e)}>Create Ad</button>

            </form>
        );

    }
}