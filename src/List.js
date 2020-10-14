
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
        this.setState(this.state.list.data)
        console.log(data);
    
    }


    render() {
        return (
    
            <div>
                <p>List of ads</p>
                
            </div>
            

        )

    }
}
