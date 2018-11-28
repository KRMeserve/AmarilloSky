class Events extends React.Component{
    constructor(props){
        super(props);
        this.getEvents = this.getEvents.bind(this);
        this.eventCreate = this.eventCreate.bind(this);
        this.eventCreateSubmit = this.eventCreateSubmit.bind(this);
        this.eventUpdateSubmit = this.eventUpdateSubmit.bind(this);
        this.toggleViews = this.toggleViews.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this);
        this.getEvent = this.getEvent.bind(this);
        this.state = {
            events: [],
            event: {},
            displayEventsForm: false,
            displayEventsPage: true,
            displayEventsFormUpdate: false,
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
    getEvent(event){
        this.setState({
            event: event
        })
    }
    eventCreate(event){
        this.setState({
            events: [event, ...this.state.events]
        })
    }
    eventCreateSubmit(event){
        console.log(this);
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
            console.log(this);
            this.toggleViews('displayEventsForm', 'displayEventsPage')
            this.getEvents()
        })
    }
    eventUpdateSubmit(event){
        console.log(this);
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
            console.log(this);
            this.toggleViews('displayEventsFormUpdate', 'displayEventsPage')
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
        console.log('running toggleviews');
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
                        <EventsList now={this.props.now} deleteEvent={this.deleteEvent} eventSubmit={this.eventUpdateSubmit} changeDisplay={this.toggleViews} events={this.state.events} getEvent={this.getEvent}></EventsList>
                        :
                        ''
                    }
                    {this.state.displayEventsForm
                        ?
                        <EventsForm eventSubmit={this.eventCreateSubmit}></EventsForm>
                        :
                        ''
                    }
                    {this.state.displayEventsFormUpdate
                        ?
                        <EventsForm eventSubmit={this.eventUpdateSubmit} event={this.state.event}></EventsForm>
                        :
                        ''
                    }
                </main>
            </div>
        )
    }
}
