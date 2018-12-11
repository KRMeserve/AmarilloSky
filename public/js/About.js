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
                            <p>Comprised of great musicians from the Michiana area, Amarillo Sky is a modern country cover band that is sure to entertain. They play songs by the country stars that you hear on the radio every day like Luke Bryan, Jason Aldean, LoCash, Rascal Flatts, Thomas Rhett, Dan & Shay, Granger Smith and Keith Urban – just to name a few. You’ll probably hear one of your favorites. So if you like the new country, come on out to see them and be ready to dance the night away!</p>
                            <p>Amarillo Sky is also available to play at your venue, wedding, party, or festival. They have a full PA system, stage lights, laser lights, and geysers. They would love to be the soundtrack for your upcoming special event!</p>
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
                            <h1 class="title">Set List</h1>
                            <p>They are continually learning new country hits to add to our set lists. They have some songs that are particularly geared towards weddings that they can email you. Here are some of the songs they currently perform.</p>
                            <ul>
                                <li><span class="bold">Body Like a Back Road</span> - Sam Hunt</li>
                                <li><span class="bold">Seeing Red</span> - Dustin Lynch</li>
                                <li><span class="bold">Wasted Time</span> - Keith Urban</li>
                                <li><span class="bold">'Merica</span> - Granger Smith</li>
                                <li><span class="bold">Cruise</span> - Florida Georgia Line</li>
                                <li><span class="bold">Homegrown</span> - Zac Brown Band</li>
                                <li><span class="bold">Country Girl</span> - Luke Bryan</li>
                                <li><span class="bold">SnapBack</span> - Old Dominion</li>
                                <li><span class="bold">All Night to Get There</span> - Rascal Flatts</li>
                                <li><span class="bold">Hey Girl</span> - Billy Currington</li>
                                <li><span class="bold">Ring on Every Finger</span> - Locash</li>
                                <li><span class="bold">Somebody Else Will</span> - Justin Moore</li>
                                <li><span class="bold">We Went</span> - Randy Houser</li>
                                <li><span class="bold">My Kinda Party</span> - Jason Aldean</li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}
