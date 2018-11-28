class EventsList extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className="events-container">
                {this.props.events.slice(0).reverse().map((event, index) =>{
                    return(
                        <div className="event article">
                            <h2 class="title">{event.venue} at <span class="italic">{event.location}</span></h2>
                            <p><span class="bold on-stage">{event.event_day}</span></p>
                            {/* <p><span class="bold">{event.location}</span> - For more info, contact {event.venue_contact}</p> */}
                            <p class="on-stage"><span class="bold">{event.duration}</span></p>
                        </div>
                    )
                })}
                <button class="input-button">Add an Event</button>
            </div>
        )
    }
}
