import React from 'react';

class AddButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {    
        return(<div>
            <div className="styles__StyledATC-sc-1gn4z07-3 kFcWDm h-margin-t-tiny h-margin-b-tiny">
                <button onClick={this.props.click} data-test="storeATCButton" type="button" className="redButton">{this.props.msg}</button>
                </div>
            </div>);
    }
}

export default AddButton;