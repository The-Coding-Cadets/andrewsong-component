import React from 'react';
import ImageStrip from './ImageStrip.jsx'
import $ from 'jquery';

class modal extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        if(this.props.modal === true) {
            var display = 'optionsModalShow';
        } else {
            var display = 'optionsModalHidden';
        }
        return (
            <div className={`optionsModal ${display}`}>
            <div className="modal-content">
                <span className="close" onClick={this.props.toggleModal}>&times;</span>
                <div className="inlineBlock"><img src={this.props.item.imgurl} width="100"></img></div>
                <div className="inlineBlock"><h2 className="bold">Added to cart</h2>
                <p>Edit delivery method in cart</p>
                <p>{`$${this.props.item.price/100}`}</p></div>
                <div>
                <div className="optionsContainer inlineBlock">
                    <button onClick={this.props.toggleModal} className="redButton">Continue shopping</button>
                </div>
                <div className="optionsContainer inlineBlock">
                    <button className="whiteButton">{`View cart & checkout`}</button>
                </div>
                <div>
                    <h2 style={{textAlign: "center"}}>Frequently bought together</h2>
                    <ImageStrip items={this.props.related} /></div>
                </div>
            </div>
            
            </div>
        );
    }
}

export default modal;