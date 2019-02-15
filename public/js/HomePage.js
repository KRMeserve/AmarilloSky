class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.changeDisplay = this.changeDisplay.bind(this);
        this.testUser = this.testUser.bind(this);
        this.state = {
            displayLandingPage: true,
            displayEventsForm: false,
            displayHomePage: false,
            displayEventsPage: false,
            displayEventsAdminPage: false,
            displayAboutPage: false,
            displayBandPage: false,
            displayContactPage: false,
            displayLoginPage: false,
            isAdmin: false,
            now: now
        }
    };
    testUser(username, password){
      fetch('/users/1').then(response => response.json()).then(data =>{
        if (data.username === username && data.password === password) {
          this.setState({
            isAdmin: true
          })
        }
      })
    }
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
                                <a href="https://www.youtube.com/watch?v=YQkCyGdp0Sw&feature=youtu.be">Live Compilation</a>
                            </nav>
                        </header>
                        <main>
                            <div className="homepage-background">
                                <img class="logo" src="/img/logo-skinny.png"></img>
                                <UpcomingEvent now={this.state.now} changeDisplay={this.changeDisplay}></UpcomingEvent>
                                <div>
                                    <Carousel changeDisplay={this.changeDisplay}></Carousel>
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
                    <Events changeDisplay={this.changeDisplay} now={this.state.now} isAdmin={this.state.isAdmin}></Events>
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
                {this.state.displayLoginPage
                  ?
                  <LoginPage changeDisplay={this.changeDisplay} testUser={this.testUser}></LoginPage>
                  :
                  ''
                }
                <Footer></Footer>
            </div>
        )
    }
}
