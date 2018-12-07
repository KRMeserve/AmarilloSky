class ActualNextEvent extends React.Component {
    render(){
        return(
            <div class="event article">
                <h1>{this.props.event.location}</h1>
                <h1>{this.props.event.venue}</h1>
                <h1>{this.props.event.event_day}</h1>
                <h1>{this.props.event.duration}</h1>
                <button class="input-button" onClick={()=>{this.props.changeDisplay('displayHomePage', 'displayEventsPage')}}>See More Events</button>
            </div>
        )
    }
}
