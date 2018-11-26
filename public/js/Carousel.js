class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.changePicture = this.changePicture.bind(this);
        this.state = {
            pictures: ['/img/carousel.png', '/img/landing-page.png'],
            visiblePicture: '/img/carousel.png',
            currentPicture: 0
        }
    }
    componentDidMount(){
        setInterval(this.changePicture, 4000);
    }
    changePicture(){
        const pictureAmount = this.state.pictures.length - 1;
        console.log(this.state.pictures.length);
        console.log(this.state.currentPicture);
        if (this.state.currentPicture < pictureAmount) {
            console.log('currentPicture is less than the array length');
            let tempNum = this.state.currentPicture;
            let updatedTempNum = (tempNum+1);
            this.setState({
                visiblePicture: this.state.pictures[tempNum],
                currentPicture: updatedTempNum
            })
            console.log('currentPicture is ' + this.state.currentPicture);
        } else if (this.state.currentPicture === pictureAmount) {
            console.log('currentPicture is not less than the array length');
            this.setState({
                visiblePicture: this.state.pictures[this.state.currentPicture],
                currentPicture: 0
            })
        }
    }
    render(){
        return (
            <img src={this.state.visiblePicture}></img>
        )
    }
}
