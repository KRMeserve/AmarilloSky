class EventsList extends React.Component {
    constructor(props){
        super(props);
        this.orderEvents = this.orderEvents.bind(this);
        this.state = {
            upcomingEvents: [],
            pastEvents: []
        }
    }
    orderEvents(){

    }
    render(){
        return(
            <div className="events-container">
                {this.props.events.map((event, index) =>{
                    return(
                        <div className="event article">
                            <h2 class="title">{event.venue} at <span class="italic">{event.location}</span></h2>
                            <p><span class="bold">{event.event_day}</span></p>
                            <p><span class="bold">{event.location}</span> - For more info, contact {event.venue_contact}</p>
                            <p>We will be on stage from: <span class="bold">{event.duration}</span></p>
                        </div>
                    )
                })}
                <button class="input-button">Add an Event</button>
            </div>
        )
    }
}
