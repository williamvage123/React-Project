
import React from 'react';

export default class AdsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }



    async componentDidMount() {

        const filter = {
            "limit": 20,
            "offset": 0,
        };

        const filterParam = JSON.stringify(filter);

        const response = await fetch('https://awacademy-classifieds.herokuapp.com/ad/?filter=' + encodeURIComponent(filterParam));
        const data = await response.json();
        this.setState({ list: data }) //explain this
        console.log(data);

    }


    render() {
        return (
            <div>
                <p>List of ads</p>
                <ol>
                    {this.state.list.map(m =>
                        <li>
                            <h3>
                                <strong>
                                    Title: {m.title}
                                </strong>
                            </h3>
                            <b> Description: ({m.description.slice(0, 100)})</b>
                            <div>
                                <button>View ad</button>
                            </div>
                        </li>)}
                </ol>
            </div>
        )

    }
}
