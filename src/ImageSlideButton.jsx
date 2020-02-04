import React from 'react';

class ImageSlideButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var style = "dot";

        if(this.props.active === 0) {
            style += " activeDot";
        }

        return(
            <div className={style} onClick={this.props.switch}></div>
        );
    }
}

export default ImageSlideButton;