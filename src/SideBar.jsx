import React from 'react';
import StoreDiv from './StoreDiv.jsx';
import $ from 'jquery';

class SideBar extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        var visibility = 'hide';
        if(this.props.show === true) {
            visibility = 'show';
        }

        var home = this.props.home;
        var id = this.props.home.id;
        var otherStores = [];

        for(var store of this.props.stores) {
            if(store.id !== id) {
                otherStores.push(store);
            }
        }

        var button = () => {
            this.props.sideBar();
            this.props.modal();
        }

        return (
            <div>
                <div id="sideBarContainer" className={visibility} onClick={this.props.sideBar}></div>
                <div id="sideBar" className={visibility}>
                    <span className="close" onClick={this.props.sideBar}>&times;</span>
                    <br></br>
                    {otherStores.map((store) => <StoreDiv click={button} store={store}/>)}
                </div>
            </div>
        );
    }
}

export default SideBar;