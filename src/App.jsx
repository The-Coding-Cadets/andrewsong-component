import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import SideBar from './SideBar.jsx';
import Modal from './modal.jsx';
import PickupDiv from './PickupDiv.jsx';
import DeliveryDiv from './DeliveryDiv.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            storeID: 1,
            itemID: 1,
            storeInfo: {},
            itemInfo: {},
            stock: null,
            showSidebar: false,
            relatedItems: [],
            allStores: []
        }
    }

    updateInfo() {
        $.get('http://localhost:3000/api/stores/' + this.state.storeID).done((storeData) => {
          this.setState({storeInfo: storeData[0]});
          console.log(this.state.storeInfo)
        });
        $.get('http://localhost:3000/api/items/' + this.state.itemID).done((itemData) => {
          this.setState({itemInfo: itemData[0]});
          console.log(this.state.itemInfo);
        });
        $.get(`http://localhost:3000/api/inventory/${this.state.storeID}/${this.state.itemID}`).done((stockData) => {
          this.setState({stock: stockData[0].stock});
          console.log(this.state.stock);
        });
        $.get(`http://localhost:3000/api/allStores`).done((stores) => {
          this.setState({allStores: stores});
          console.log(this.state.allStores);
        });
        this.updateRelatedItems();
    }

    updateRelatedItems(number = 9) {
      var from = Math.floor((Math.random() * 13) + 1);
      var to = from - 1 + number;

      $.get(`http://localhost:3000/api/relatedItems/${from}/${to}`).done((items) => {
        this.setState({relatedItems: items});
        console.log(this.state.relatedItems);
      });
    }

    componentDidMount() {
      this.updateInfo();
    }

    activateModal() {
      var modal = document.getElementsByClassName('modal')[0];
      modal.style.display = 'block';
      window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
    }

    closeModal() {
      var modal = document.getElementsByClassName('modal')[0];
      modal.style.display = 'none';
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
        console.log(address);
        return(
            <div className="Col-favj32-0 eKPqHP h-padding-h-default h-padding-t-tight">
                <Modal item={this.state.itemInfo} closeModal={this.closeModal} related={this.state.relatedItems}/>
                <PickupDiv sideBar={this.toggleSidebar.bind(this)} hours={this.state.itemInfo.readyTime} closeModal={this.closeModal.bind(this)} handleModal={this.activateModal.bind(this)} stock={this.state.stock} storeInfo={this.state.storeInfo} address={address} pickup={this.state.itemInfo.pickup} />
                <DeliveryDiv sideBar={this.toggleSidebar.bind(this)} closeModal={this.closeModal.bind(this)} handleModal={this.activateModal.bind(this)} stock={this.state.itemInfo.onlineStock} storeInfo={this.state.storeInfo} address={address} pickup={this.state.itemInfo.pickup} />
                <SideBar modal={this.activateModal.bind(this)} stores={this.state.allStores} home={this.state.storeInfo} sideBar={this.toggleSidebar.bind(this)} show={this.state.showSidebar}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;