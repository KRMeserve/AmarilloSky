class Events extends React.Component{
    constructor(props){
        super(props);
        this.getEvents = this.getEvents.bind(this);
        this.state = {
            events: []
        }
    }
    componentDidMount(){
        this.getEvents();
    }
    getEvents(){
        fetch('/events').then(response => response.json()).then(data =>{
            this.setState({
                events: data
            })
        })
    }
    render(){
        return(
            <div>
                <header>
                    <h1>Amarillo Sky</h1>
                    <nav class="nav-bar">
                        <a href="#" onClick={()=>{ this.props.changeDisplay('displayHomePage', 'displayEventsPage')}}>Home</a>
                        <a href="#">Events</a>
                        <a href="#" onClick={()=>{ this.props.changeDisplay('displayBandPage', 'displayEventsPage')}}>Band</a>
                        <a href="#" onClick={()=>{ this.props.changeDisplay('displayAboutPage', 'displayEventsPage')}}>About Us</a>
                        <a href="#" onClick={()=>{ this.props.changeDisplay('displayContactPage', 'displayEventsPage')}}>Contact Us</a>
                    </nav>
                </header>
                <main>
                    <EventsList events={this.state.events}></EventsList>
                </main>
            </div>
        )
    }
}
