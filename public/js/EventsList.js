class EventsList extends React.Component {
    constructor(props){
        super(props);
        this.toggleForm = this.toggleForm.bind(this);
        this.state = {
            showForm: false
        }
    }
    toggleForm(opt1, opt2){
        this.setState({
            showForm: !this.state.showForm
        })
    }
    render(){
        return(
            <div className="events-container">
                {this.props.events.slice(0).reverse().map((event, index) =>{
                    console.log(moment(event.event_day));
                    return(
                        <div className="event article">
                            <h2 class="title">{event.venue} at <span class="italic">{event.location}</span></h2>
                            <p><span class="bold on-stage">{event.event_day}</span></p>
                            <p class="on-stage"><span class="bold">{event.duration}</span></p>
                            <button onClick={()=>{this.props.changeDisplay('displayEventsFormUpdate', 'displayEventsPage'); this.props.getEvent(event);}}>Edit Event</button>
                            <button onClick={()=>{this.props.deleteEvent(event, event.id)}}>Delete Event</button>
                        </div>
                    )
                })}
                <button class="input-button" onClick={()=>{this.props.changeDisplay('displayEventsForm', 'displayEventsPage')}}>Add an Event</button>
            </div>
        )
    }
}
