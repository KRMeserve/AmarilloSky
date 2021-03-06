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
      // fetch(`https://alfr3d-db.herokuapp.com/users?username=${username}&password=${password}`).then(response => response.json()).then(data =>{
      //   console.log(data, 'data');
      //   const passwordResponse = JSON.stringify(data);
      //   console.log(passwordResponse, 'passwordResponse');
      //   if (passwordResponse === "\"passwords match\"") {
      //     this.setState({
      //       isAdmin: true
      //     })
      //   }
      // })
      const fetchURL = `https://alfr3d-db.herokuapp.com/users?username=${username}&password=${password}`;
      //Function that will send the POST request to the server.
      const logInToAccount = (url = '' , data = {})=>{
        console.log(data);
        return fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then(response => response.json());
      };
      //Calling above function
      logInToAccount(fetchURL, {username: username, password: password})
        .then(data => {
          let passwordResponse = JSON.stringify(data);
          console.log(passwordResponse);
          if (passwordResponse === "\"passwords match\"" && username === "s.harrier") {
            console.log('password correct, state updated');
            this.setState({
              isAdmin: true
            })
          } else {
            console.log('username or password incorrect');
          }
        })
        .catch(error => console.log(error));
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
