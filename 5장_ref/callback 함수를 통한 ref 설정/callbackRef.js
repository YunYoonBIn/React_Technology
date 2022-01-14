import React, { Component } from "react";

class callbackRef extends Component {

    render() {
        return (
            <div>
                <input ref={(ref) => { this.input = ref }} />
            </div>
        )
    }
}

export default callbackRef;