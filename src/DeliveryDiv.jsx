import React from 'react';
import $ from 'jquery';
import AddButton from './AddButton.jsx';

class DeliveryDiv extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            zip: null,
            showZipField: 0
        }

        this.deliverMsg = this.deliverMsg.bind(this);
        this.editZip = this.editZip.bind(this);
        this.toggleZipField = this.toggleZipField.bind(this);
        this.zipField = this.zipField.bind(this);
        this.pickupButton = this.pickupButton.bind(this);
        this.submitZip = this.submitZip.bind(this);
        this.updateField = this.updateField.bind(this);
    }

    deliverMsg() {
        if(this.state.zip === null) {
            var zip = (this.props.storeInfo.zip + '').substring(0, 5);
        } else {
            var zip = this.state.zip;
        }
        return(<div><span className="greenDark bold">Deliver to&nbsp;</span>
        <span href="#" className="bold left" >{zip}</span>
                </div>);
    }

    editZip() {
        return (
            <div className="zipDiv bMargin">
                <a href="#" className="" data-test="fiatsButton" onClick={this.toggleZipField}>Edit zip code</a>
            </div>
        );
    }

    toggleZipField() {
        if(this.state.zip === null) {
            this.setState({zip: (this.props.storeInfo.zip + '').substring(0, 5)});
        }
        if (this.state.showZipField === 1) {
            this.setState({showZipField: 0});
        } else {
            this.setState({showZipField: 1});
        }
    }

    submitZip(e) {
        var form = document.getElementById('zipInput');
        var formData = form.value + '';
        this.setState({
            zip: formData
        });
        this.toggleZipField();
    }

    updateField(e) {
        var form = document.getElementById('zipInput');
        form.value = e.target.value;
    }

    zipField() {
        if(this.state.showZipField !== 0) {
            return(<div className="inputWrapper"><label htmlFor="enterYourZipCode">enter your zip code&nbsp;</label><input id="zipInput" onChange={this.updateField} name="zipInput" type="text" maxLength="5" autoComplete="on"></input>
            <div><div className="optionsContainer inlineBlock"><form><input name="zipInput" type="submit" onClick={this.submitZip} value="submit" className="redButton"></input></form></div>
            <div className="optionsContainer inlineBlock"><button onClick={this.toggleZipField} className="whiteButton">cancel</button></div></div></div>);
        }
    }

    pickupButton() {
        if (this.props.stock !== 0) {
            return (<AddButton click={this.props.handleModal} msg="Ship it" />);
        }
    }

    lowStocks() {
        if (this.props.stock < 10) {
            return(<div>Only {this.props.stock} left</div>);
        }
    }

    render() {
    return (<div className="box"><div className="optionsContainer inlineBlock">{this.deliverMsg()}{this.editZip()}</div><div className="buttonDiv inlineBlock">{this.pickupButton()}</div>
    <div className="optionsContainer">{this.lowStocks()}</div>
    <div className="optionsContainer">{this.zipField()}</div>
    </div>);
    }
}

export default DeliveryDiv;