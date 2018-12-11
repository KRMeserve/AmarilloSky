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
                <div class="upcomingEvents">
                    <h1 class="title underline">Upcoming Events</h1>
                    {this.props.events.slice(0).reverse().map((event, index) =>{
                        return(
                            <div>
                                {moment(event.event_day).isSameOrAfter(this.props.now, 'day')
                                    ?
                                    <div className="event article">
                                        <h2 class="title">{event.venue}</h2>
                                        <h2><span class="italic">{event.location}</span></h2>
                                        <p><span class="bold on-stage">{event.event_day}</span></p>
                                        <p class="on-stage"><span class="bold">{event.duration}</span></p>
                                        {this.props.isAdmin
                                            ?
                                            <div>
                                                <button onClick={()=>{this.props.changeDisplay('displayEventsFormUpdate', 'displayEventsPage'); this.props.getEvent(event);}}>Edit Event</button>
                                                <button onClick={()=>{this.props.deleteEvent(event, event.id)}}>Delete Event</button>
                                            </div>
                                            :
                                            ''
                                        }
                                    </div>
                                    :
                                    ''
                                }
                            </div>
                        )
                    })}
                </div>
                <h1 class="title underline">Past Events</h1>
                <div class="pastEvents">
                    {this.props.events.slice(0).reverse().map((event, index) => {
                        return(
                            <div>
                                {moment(event.event_day).isSameOrAfter(this.props.now, 'day')
                                    ?
                                    ''
                                    :
                                    <div className="event pastArticle">
                                        <h2 class="pastTitle">{event.venue} at <span class="italic">{event.location}</span></h2>
                                        <p><span class="on-stage">{event.event_day}</span></p>
                                        <p class="on-stage botPadding15"><span class="bold">{event.duration}</span></p>
                                        {this.props.isAdmin
                                            ?
                                            <div>
                                                <button onClick={()=>{this.props.changeDisplay('displayEventsFormUpdate', 'displayEventsPage'); this.props.getEvent(event);}}>Edit Event</button>
                                                <button onClick={()=>{this.props.deleteEvent(event, event.id)}}>Delete Event</button>
                                            </div>
                                            :
                                            ''
                                        }
                                    </div>
                                }
                            </div>
                        )
                    })}
                </div>
                {this.props.isAdmin
                    ?
                    <button class="input-button botMargin30" onClick={()=>{this.props.changeDisplay('displayEventsForm', 'displayEventsPage')}}>Add an Event</button>
                    :
                    ''
                }
            </div>
        )
    }
}
