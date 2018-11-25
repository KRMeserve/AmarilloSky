class HomePage extends React.Component{
    render(){
        return(
            <div>
                <Header></Header>
                <main>
                    <div className="homepage-background">
                        <div>
                            <h3>News:</h3>
                            <p>News would go here.</p>
                        </div>
                        <div className="fb-page" data-href="https://www.facebook.com/AmarilloSkyBand/" data-tabs="timeline" data-height="500" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/AmarilloSkyBand/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/AmarilloSkyBand/">Amarillo Sky</a></blockquote></div>
                    </div>
                </main>
                <Footer></Footer>
            </div>

        )
    }
}
