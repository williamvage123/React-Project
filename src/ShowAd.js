
import React from 'react';


export default class ShowAd extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props.ad)
        return(
            <form>
                <div>
                
                    Title: {this.props.ad.title}<br/>
                    Description: {this.props.ad.description}<br/>
                    Name: {this.props.ad.name}<br/>
                    Location: {this.props.ad.location}<br/>
                    Contact: {this.props.ad.email}<br/>
                    Price: {this.props.ad.price}<br/>
                    Price Negotiable: {this.props.ad.priceNegotiable?"Yes":"No"}<br/>

                
                </div>
            </form>
        )
    }




}
