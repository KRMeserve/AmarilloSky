class EventsList extends React.Component {
    render(){
        return(
            <div className="events-container">
                {this.props.events.map((event, index) =>{
                    return(
                        <div className="event">
                            <h2>{event.location}</h2>
                        </div>
                    )
                })}
            </div>
        )
    }
}
