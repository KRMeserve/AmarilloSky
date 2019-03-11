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
            displayEventsAdminPage: false,
            displayEventsFormUpdate: false,
        }
    }
    componentDidMount(){
        this.getEvents();
        if (this.props.isAdmin === true) {
          this.setState({
            displayEventsPage: false,
            displayEventsAdminPage: true,
          })
        }
    }
    getEvents(){
        fetch('/events').then(response => response.json()).then(data =>{
            // Turning each string into a Date object and sorting by order. Then reverse the array to make it ascending order.
            data.sort(function(a,b){
              return new Date(b.event_day) - new Date(a.event_day);
            }).reverse();
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
      let input = prompt("Are you sure you want to delete this event?", "Yes or No");
      if (input.toLowerCase() == 'yes') {
        fetch('/events/' + id, {
            method: 'DELETE'
        }).then(response => {
            this.getEvents()
        })
      } 
    }
    toggleViews(view1, view2) {
        console.log('running toggleviews');
        console.log(this.props.isAdmin);
        if (this.props.isAdmin === true) {
          if (view1 === 'displayEventsPage') {
            console.log('changed to admin page');
            view1 = 'displayEventsAdminPage'
          } else if (view2 === 'displayEventsPage') {
            console.log('changed to admin page');
            view2 = 'displayEventsAdminPage'
          }
        }
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
                        <a href="https://www.youtube.com/watch?v=YQkCyGdp0Sw&feature=youtu.be">Live Compilation</a>
                    </nav>
                </header>
                <main>
                    {this.state.displayEventsPage
                        ?
                        <EventsList now={this.props.now} deleteEvent={this.deleteEvent} eventSubmit={this.eventUpdateSubmit} changeDisplay={this.toggleViews} events={this.state.events} getEvent={this.getEvent}></EventsList>
                        :
                        ''
                    }
                    {this.state.displayEventsAdminPage
                        ?
                        <EventsListAdmin now={this.props.now} deleteEvent={this.deleteEvent} eventSubmit={this.eventUpdateSubmit} changeDisplay={this.toggleViews} events={this.state.events} getEvent={this.getEvent}></EventsListAdmin>
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
