class Events extends React.Component{
    constructor(props){
        super(props);
        this.getEvents = this.getEvents.bind(this);
        this.eventCreate = this.eventCreate.bind(this);
        this.eventCreateSubmit = this.eventCreateSubmit.bind(this);
        this.toggleViews = this.toggleViews.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this);
        this.state = {
            events: [],
            displayEventsForm: false,
            displayEventsPage: true
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
    eventCreate(event){
        this.setState({
            events: [event, ...this.state.events]
        })
    }
    eventCreateSubmit(event){
        console.log(event);
        fetch('/events', {
            body: JSON.stringify(event),
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(createdEvent =>{
            return createdEvent.json()
        }).then(jsonedEvent => {
            this.eventCreate(jsonedEvent)
            this.toggleViews('displayEventsForm', 'displayEventsPage')
            this.getEvents()
        })
    }
    eventUpdateSubmit(event){
        fetch('/events/' + event.id, {
            body: JSON.stringify(event),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(updatedEvent => {
            console.log(updatedEvent, 'updated event');
            return updatedEvent.json()
        }).then(jsonedEvent => {
            console.log(jsonedEvent, 'JSONed event');
            this.toggleViews('displayEventsForm', 'displayEventsPage')
            this.getEvents()
        })
    }
    deleteEvent(event, id){
        fetch('/events/' + id, {
            method: 'DELETE'
        }).then(response => {
            this.getEvents()
        })
    }
    toggleViews(view1, view2) {
        this.setState({
            [view1]: !this.state[view1],
            [view2]: !this.state[view2]
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
                    {this.state.displayEventsPage
                        ?
                        <EventsList deleteEvent={this.deleteEvent} changeDisplay={this.toggleViews} events={this.state.events}></EventsList>
                        :
                        ''
                    }
                    {this.state.displayEventsForm
                        ?
                        <EventsForm eventSubmit={this.eventCreateSubmit} changeDisplay={this.toggleViews}></EventsForm>
                        :
                        ''
                    }
                </main>
            </div>
        )
    }
}
