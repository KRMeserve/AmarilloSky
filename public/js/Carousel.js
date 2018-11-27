class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.changePicture = this.changePicture.bind(this);
        this.state = {
            pictures: ['/img/carousel3.png', '/img/carousel2.png', '/img/carousel4.png', '/img/carousel5.png', '/img/landing-page.png'],
            visiblePicture: '/img/carousel3.png',
            currentPicture: 1
        }
    }
    componentDidMount(){
        setInterval(this.changePicture, 6000);
    }
    changePicture(){
        const pictureAmount = this.state.pictures.length - 1;
        if (this.state.currentPicture < pictureAmount) {
            let tempNum = this.state.currentPicture;
            let updatedTempNum = (tempNum+1);
            this.setState({
                visiblePicture: this.state.pictures[tempNum],
                currentPicture: updatedTempNum
            })
        } else if (this.state.currentPicture === pictureAmount) {
            this.setState({
                visiblePicture: this.state.pictures[this.state.currentPicture],
                currentPicture: 0
            })
        }
    }
    render(){
        return (
            <img src={this.state.visiblePicture} class="carousel"></img>
        )
    }
}
