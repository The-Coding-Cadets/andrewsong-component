import React from "react";
import AddButton from "./AddButton.jsx";
import HomeStoreHeader from "./HomeStoreHeader.jsx";

class StoreDiv extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="storeDiv">
                {this.props.store.storename}
                <div style={{width: "100px"}}>
                    <AddButton click={this.props.click} msg="Pick up here"/>
                </div>
            </div>
        );
    }
}

export default StoreDiv;