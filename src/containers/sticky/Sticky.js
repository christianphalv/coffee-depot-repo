import React from 'react';
import './Sticky.css';

class Sticky extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="sticky">
                {this.props.children}
            </div>
        );
    }
}

export default Sticky;