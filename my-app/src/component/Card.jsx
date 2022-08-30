import React from "react";

class Card extends React.Component{
    render() {
        const title = this.props.title ? <h4 className="card-title">{this.props.title}</h4> : null;
        const text = this.props.text ? <p className="card-text">{this.props.text}</p> : null;
        return(
            <div className="card">
                <div className="card-body">
                    {title}
                    {text}
                </div>
            </div>
        )
    }
}
export default Card;