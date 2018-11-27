class LandingPage extends React.Component{
    render(){
        return(
            <div class="landing-page-background">
                <div class="landing-page-h1">
                    <h1>Amarillo Sky</h1>
                    <p>Playing Country That Rocks</p>
                    <button onClick={()=>{this.props.changeDisplay('displayLandingPage', 'displayHomePage')}} class="input-button">More</button>
                </div>
            </div>
        )
    }
}
