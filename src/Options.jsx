import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import SideBar from './SideBar.jsx';
import Modal from './modal.jsx';
import PickupDiv from './PickupDiv.jsx';
import DeliveryDiv from './DeliveryDiv.jsx';

class Options extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            storeID: 1,
            itemID: 1,
            storeInfo: {},
            itemInfo: {},
            stock: null,
            showSidebar: false,
            showModal: false,
            relatedItems: [],
            allStores: []
        }
    }

    updateInfo() {
        $.get('http://ec2-13-52-55-232.us-west-1.compute.amazonaws.com:3001/api/stores/' + this.state.storeID).done((storeData) => {
          this.setState({storeInfo: storeData[0]});
        });
        $.get('http://ec2-13-52-55-232.us-west-1.compute.amazonaws.com:3001/api/items/' + this.state.itemID).done((itemData) => {
          this.setState({itemInfo: itemData[0]});
        });
        $.get(`http://ec2-13-52-55-232.us-west-1.compute.amazonaws.com:3001/api/inventory/${this.state.storeID}/${this.state.itemID}`).done((stockData) => {
          this.setState({stock: stockData[0].stock});
        });
        $.get(`http://ec2-13-52-55-232.us-west-1.compute.amazonaws.com:3001/api/allStores`).done((stores) => {
          this.setState({allStores: stores});
        });
        this.updateRelatedItems();
    }

    updateRelatedItems(number = 9) {
      var from = Math.floor((Math.random() * 13) + 1);
      var to = from - 1 + number;

      $.get(`http://ec2-13-52-55-232.us-west-1.compute.amazonaws.com:3001/api/relatedItems/${from}/${to}`).done((items) => {
        this.setState({relatedItems: items});
      });
    }

    componentDidMount() {
      this.updateInfo();
    }

    toggleModal() {
      if(this.state.showModal === true) {
        this.setState({showModal: false});
      } else {
        this.setState({showModal: true});
      }
    }

    toggleSidebar() {
      if(this.state.showSidebar === true) {
        this.setState({showSidebar: false});
      } else {
        this.setState({showSidebar: true});
      }
    }

    render() {
        var store = this.state.storeInfo;
        var address = `${store.street} ${store.city} ${store.stateus} ${store.zip}`;
        return(
            <div className="Col-favj32-0 eKPqHP h-padding-h-default h-padding-t-tight">
                <Modal modal={this.state.showModal} item={this.state.itemInfo} toggleModal={this.toggleModal.bind(this)} related={this.state.relatedItems}/>
                <PickupDiv sideBar={this.toggleSidebar.bind(this)} hours={this.state.itemInfo.readyTime} toggleModal={this.toggleModal.bind(this)} stock={this.state.stock} storeInfo={this.state.storeInfo} address={address} pickup={this.state.itemInfo.pickup} />
                <DeliveryDiv sideBar={this.toggleSidebar.bind(this)} toggleModal={this.toggleModal.bind(this)} stock={this.state.itemInfo.onlineStock} storeInfo={this.state.storeInfo} address={address} pickup={this.state.itemInfo.pickup} />
                <SideBar toggleModal={this.toggleModal.bind(this)} stores={this.state.allStores} home={this.state.storeInfo} sideBar={this.toggleSidebar.bind(this)} show={this.state.showSidebar}/>
            </div>
        );
    }
}

ReactDOM.render(<Options />, document.getElementById('options'));

export default Options;