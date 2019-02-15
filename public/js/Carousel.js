class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.changePicture = this.changePicture.bind(this);
        this.state = {
            pictures: ['/img/landing-page.png', '/img/carousel6.png', '/img/carousel2.png'],
            visiblePicture: '/img/landing-page.png',
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
            <div>
                <img src={this.state.visiblePicture} class="carousel"></img>
                <div class="article event">
                    <p><span class="bold">Amarillo Sky</span> is a modern country cover band based in the Michiana area<span onClick={()=>{this.props.changeDisplay('displayHomePage', 'displayLoginPage')}}>.</span></p>
                    <div class="home-page-buttons">
                        <button class="input-button botMargin30" onClick={()=>{this.props.changeDisplay('displayHomePage', 'displayAboutPage')}}>Read More About Us</button>
                        <button class="input-button" onClick={()=>{this.props.changeDisplay('displayHomePage', 'displayContactPage')}}>Book Amarillo Sky</button>
                    </div>
                </div>

            </div>
        )
    }
}
