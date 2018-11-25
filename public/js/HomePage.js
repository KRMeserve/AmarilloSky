class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayHomePage: true
        }
    }
    render(){
        return(
            <div>
                <Header></Header>
                {this.state.displayHomePage
                    ?
                    <main>
                        <div className="homepage-background">
                            <div>
                                <h3>News:</h3>
                                <p>News would go here.</p>
                            </div>
                            <div className="fb-page" data-href="https://www.facebook.com/AmarilloSkyBand/" data-tabs="timeline" data-height="500" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/AmarilloSkyBand/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/AmarilloSkyBand/">Amarillo Sky</a></blockquote></div>
                        </div>
                    </main>
                    :
                    ''
                }
                <Footer></Footer>
            </div>
        )
    }
}
