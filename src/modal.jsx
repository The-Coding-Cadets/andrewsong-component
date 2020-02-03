import React from 'react';
import $ from 'jquery';

class modal extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
    return (
        <div className="modal">
        <div className="modal-content">
            <span className="close" onClick={this.props.closeModal}>&times;</span>
            <div className="inlineBlock"><img src={this.props.item.imgurl} width="100"></img></div>
            <div className="inlineBlock"><h1 className="bold">Added to cart</h1>
            <p>Edit delivery method in cart</p>
            <p>{`$${this.props.item.price/100}`}</p></div>
            <div>
            <div className="container inlineBlock">
                <button onClick={this.props.closeModal} className="redButton">Continue shopping</button>
            </div>
            <div className="container inlineBlock">
                <button className="whiteButton">{`View cart & checkout`}</button>
            </div>
            </div>
        </div>
        
        </div>
        );
    }
}

export default modal;