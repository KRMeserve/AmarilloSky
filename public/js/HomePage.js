class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.changeDisplay = this.changeDisplay.bind(this);
        this.state = {
            displayLandingPage: true,
            displayHomePage: false,
            displayEventsPage: false,
            displayAboutPage: false,
            displayBandPage: false,
            displayContactPage: false,
        }
    };
    changeDisplay(dis1, dis2) {
        this.setState({
            [dis1]: !this.state[dis1],
            [dis2]: !this.state[dis2]
        })
    }
    render(){
        return(
            <div>
                {this.state.displayLandingPage ? <LandingPage changeDisplay={this.changeDisplay}></LandingPage> : ''}
                {this.state.displayHomePage
                    ?
                    <div>
                        <header>
                            <h1>Amarillo Sky</h1>
                            <nav class="nav-bar">
                                <a href="#">Home</a>
                                <a href="#" onClick={()=>{ this.changeDisplay('displayHomePage', 'displayEventsPage')}}>Events</a>
                                <a href="#" onClick={()=>{ this.changeDisplay('displayHomePage', 'displayBandPage')}}>Band</a>
                                <a href="#" onClick={()=>{ this.changeDisplay('displayHomePage', 'displayAboutPage')}}>About Us</a>
                                <a href="#" onClick={()=>{ this.changeDisplay('displayHomePage', 'displayContactPage')}}>Contact Us</a>
                            </nav>
                        </header>
                        <main>
                            <div className="homepage-background">
                                <div>
                                    <Carousel></Carousel>
                                </div>
                                {/* <div className="fb-page" data-href="https://www.facebook.com/AmarilloSkyBand/" data-tabs="timeline" data-height="500" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/AmarilloSkyBand/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/AmarilloSkyBand/">Amarillo Sky</a></blockquote></div> */}
                            </div>
                        </main>
                    </div>
                    :
                    ''
                }
                {this.state.displayEventsPage
                    ?
                    <Events changeDisplay={this.changeDisplay}></Events>
                    :
                    ''
                }
                {this.state.displayBandPage
                    ?
                    <Band changeDisplay={this.changeDisplay}></Band>
                    :
                    ''
                }
                {this.state.displayAboutPage
                    ?
                    <About changeDisplay={this.changeDisplay}></About>
                    :
                    ''
                }
                {this.state.displayContactPage
                    ?
                    <Contact changeDisplay={this.changeDisplay}></Contact>
                    :
                    ''
                }
                <Footer></Footer>
            </div>
        )
    }
}
