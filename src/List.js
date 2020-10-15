
import React from 'react';


export default class List extends React.Component {
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
            //location and value
        };

        const filterParam = JSON.stringify(filter);

        const response = await fetch('https://awacademy-classifieds.herokuapp.com/ad/?filter=' + encodeURIComponent(filterParam));
        const data = await response.json();
        this.setState({
            list: data /*explain this*/
        })
        console.log(data);

    }

    

    render () {
       const list=this.state.list.map(ad => 
        <li><h3><strong>Title:{ad.title}</strong></h3>({ad.description.slice(0, 100)})
        <div><button onClick={()=> {this.props.onAdClick(ad)}} >View ad</button></div>
        
        </li>)
        
       return (
            
            <div className="List">
                <p><strong>List of ads:</strong></p>
                <ol>
                    {list}
                </ol>
                
            </div>


        )

    }
}
