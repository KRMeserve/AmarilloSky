class About extends React.Component{
    constructor(props){
        super(props);
        this.toggleInputList = this.toggleInputList.bind(this);
        this.state = {
            showInputList: false
        }
    }
    toggleInputList(){
        this.setState({
            showInputList: !this.state.showInputList
        })
    }
    render(){
        return(
            <div>
                <header>
                    <h1>Amarillo Sky</h1>
                    <nav class="nav-bar">
                        <a href="#" onClick={()=>{ this.props.changeDisplay('displayHomePage', 'displayAboutPage')}}>Home</a>
                        <a href="#" onClick={()=>{ this.props.changeDisplay('displayEventsPage', 'displayAboutPage')}}>Events</a>
                        <a href="#" onClick={()=>{ this.props.changeDisplay('displayBandPage', 'displayAboutPage')}}>Band</a>
                        <a href="#">About Us</a>
                        <a href="#" onClick={()=>{ this.props.changeDisplay('displayContactPage', 'displayAboutPage')}}>Contact Us</a>
                    </nav>
                </header>
                <main class="about-page">
                    <div class="article-container">
                        <div class="article">
                            <h3 class="title">About Amarillo Sky</h3>
                            <p>Comprised of great musicians from the Michiana area, Amarillo Sky is a modern country cover band that is sure to entertain. They play songs by the country stars that you hear on the radio every day like Luke Bryan, Jason Aldean, Rascal Flatts, Thomas Rhett, Dan & Shay, and Keith Urban – just to name a few. You’ll probably hear one of your favorites. So if you like the new country, come on out to see them and be ready to dance the night away!</p>
                            <button onClick={this.toggleInputList} class="input-button">Show Input List</button>
                        </div>
                        {
                            this.state.showInputList
                            ?
                            <div class="article">
                                <InputList toggleInputList={this.toggleInputList}></InputList>
                            </div>
                            :
                            ''
                        }
                        <div class="article">
                            <h3 class="title">Why Amarillo Sky?</h3>
                            <p>Sometimes we get asked, <span class="bold">“Why do you call yourselves Amarillo Sky?”</span> Well, just like Jason Aldean’s song of the same name, we are all about puttin' in a full day’s work for the ones we love and the One above. And at the end of the day, we just want to let loose with some folks who do the same.</p>
                            <p>We work hard so that we can play for you.</p>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}
