import React from 'react';
import './ImageReveal.css';
import CanvasFreeDrawing from 'canvas-free-drawing';


class ImageReveal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            X: 0,
            Y: 0,

            prevX: null,
            prevY: null,

            backImage: props.backImage,
            frontImage: props.frontImage,
            
            canvas: null,
            context: null,
            img: null,
        }

        this.imageRevealCanvas = React.createRef();
    }

/*
    handleMouseMove = (e) => { 
        
        this.setState({
            X: e.clientX,
            Y: e.clientY,
        })

        this.updateCanvas(e);
    }
/**/
 

    updateCanvas(e) {

        const { canvas, context, img, prevX, prevY } = this.state;

        let x = e.nativeEvent.offsetX;
        let y = e.nativeEvent.offsetY;
        context.globalCompositeOperation = "destination-out";

        context.beginPath();
        context.arc(x, y, 50, 0, 2 * Math.PI);
        context.fill();

        if (prevX !== null) {
            context.lineWidth = 100;
            context.beginPath();
            context.moveTo(prevX, prevY);
            context.lineTo(x, y);
            context.stroke();
        }


        this.setState({
            prevX: x,
            prevY: y,
        })

        console.log(prevX, prevY, x, y)
    }

    initCanvas() {        
        const canvas = this.refs.imageRevealCanvas;
        const context = canvas.getContext("2d")
        const img = this.refs.frontImage;

        this.setState({
            canvas: canvas,
            context: context,
            img: img,
        })

        img.onload = () => {
            context.drawImage(img, 0, 0);

        }
    }

    componentDidMount() {
        this.initCanvas();
    }


    render() {
        return (
            <div className="image-reveal-container" onMouseMove={this.handeMouseMove}>

                <canvas className="image-reveal-canvas" ref={this.imageRevealCanvas} width={1366} height={768}/>
                <img src={this.state.backImage} className="back-image" />

                <img ref="frontImage" src={this.state.frontImage} className="front-image" />
            </div>
        );
    }
}

export default ImageReveal;