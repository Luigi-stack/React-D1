import { Component } from "react";

class ImageComponent extends Component{
    render () {
        return <img src={this.props.UrlImg} alt={this.props.DescriptionImg} />
    }
}

export default ImageComponent