import React from 'react';
import './Canvas.css';

class Canvas extends React.Component {

    constructor(props) {
        super(props);
        this.canvas = React.createRef();
    }

    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas() {
        const canvas = this.refs.canvas;
        const context = canvas.getContext("2d");
        const img = this.refs.image;

        img.onload = () => {
            context.drawImage(img, 0, 0);

            context.beginPath();
            context.arc(100, 100, 50, 0, 2 * Math.PI, true);
            context.fillStyle = "#FF6A6A";
            context.fill();
        }
    }



    render() {
        return (
            <div>
                <canvas id="canvas" ref={this.canvas} width = {700} height={500} />
                <img ref="image" src="https://cdn.shopify.com/s/files/1/2836/2982/products/brie-recipe_grande.jpg?v=1533088694" className="hidden" />
            </div>
        );
    }
}

export default Canvas;