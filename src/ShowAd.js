
import React from 'react';


export default class ShowAd extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                {this.props.ad.title}<br/>
                {this.props.ad.description}<br/>
                
                
            </div>
        )
    }




}
