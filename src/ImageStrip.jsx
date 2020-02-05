import React from 'react';
import ImageSlideButton from './ImageSlideButton.jsx'

class ImageStrip extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            button: 1
        }
    }

    switchSlide(here) {
        this.setState({button: here});
    }

    render() {
        var buttons = [];
        var active = this.state.button;
        var imgLinks = [];
        var items = this.props.items;
        var transform = '';

        if (items.length >= 7) {
            buttons = [1, 2 ,3];
        } else if (items.length >= 4) {
            buttons = [1, 2];
        }

        if (active === 2) {
            transform = 'shiftOne';
        } else if (active === 3) {
            transform = 'shiftTwo';
        }

        for (var item of items) {
            imgLinks.push(item.imgurl); 
        }

        return(
            <div>
                <div className={`strip ${transform}`}>
                    {imgLinks.map((link) => {return (<div className="container"><img src={link} height="200"></img></div>)})}
                </div>
                <div style={{margin: "auto", width: "57px"}}>
                    {buttons.map((number) => { return (<ImageSlideButton active={active-number} switch={this.switchSlide.bind(this, number)} />)})}
                </div>
            </div>
        );
    }
}

export default ImageStrip;