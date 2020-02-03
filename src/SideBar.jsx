import React from 'react';
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

        return (
            <div>
                <div id="sideBarContainer" className={visibility} onClick={this.props.sideBar}></div>
                <div id="sideBar" className={visibility}>
                    <span className="close" onClick={this.props.sideBar}>&times;</span>
                </div>
            </div>
        );
    }
}

export default SideBar;