
import React, { Component } from 'react';


export default class ShowAd extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                {this.props.ad.title}
                {this.props.ad.description}
            </div>
        )
    }




}
