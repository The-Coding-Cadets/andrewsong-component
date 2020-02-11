import React from 'react';
import $ from 'jquery';
import AddButton from './AddButton.jsx';

class PickupDiv extends React.Component {
    constructor (props) {
        super(props);
    }

    storeMessage() {
        var stock = this.props.stock;
        var pickup = this.props.pickup;
        var classStyle = 'inlineBlock';
        var storeMessage = '';
        if (stock === 0) {
            storeMessage = 'Not sold'
        } else {
            classStyle += ' greenDark bold';
            if(pickup === 0){
                storeMessage = 'In stock';
            } else {
                storeMessage = 'Pick up today';
            }
        }

    return(<div><span className={classStyle}>{storeMessage}&nbsp;</span><span>at&nbsp;
    <span href="#" className="bold left tooltip" >{this.props.storeInfo.storename}
    <span className="tooltiptext">{this.props.address}</span></span>
        </span></div>);
    }

    editStore() {
        return (
            <div className="bMargin"><a href="#" onClick={this.props.sideBar} className="Link-sc-1khjl8b-0 kTulu h-text-underline h-text-sm" data-test="fiatsButton" tabIndex="">Edit store</a></div>
        );
    }

    pickupButton() {
        if (this.props.stock !== 0 && this.props.pickup !== 0) {
            return (<AddButton click={this.props.toggleModal} msg="Ship it" />);
        }
    }

    lowStocks() {
        if (this.props.stock < 10) {
            return(<div>Only {this.props.stock} left</div>);
        }
    }

    pickupEligible() {
        if(this.props.pickup === 0) {
            return(<div>Not eligible for Order Pickup</div>);
        } else if (this.props.stock !== 0) {
            if (this.props.hours === 1) {
                return(<div>{`Ready within ${this.props.hours} hour with Order Pickup`}</div>);
            }
            return(<div>{`Ready within ${this.props.hours} hours with Order Pickup`}</div>);
        }
    }

    render() {
    return (<div className="box pad-bot"><div className="optionsContainer inlineBlock">{this.storeMessage()}{this.editStore()}</div><div className="buttonDiv inlineBlock">{this.pickupButton()}</div>
    <div className="optionsContainer">{this.lowStocks()}</div>
    <div className="optionsContainer">{this.pickupEligible()}</div></div>);
    }
}

export default PickupDiv;