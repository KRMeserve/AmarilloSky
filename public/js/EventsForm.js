class EventsForm extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            location: '',
            venue: '',
            event_day: '',
            duration: '',
            id: '',
        }
    }
    componentDidMount(){
        if(this.props.event){
            this.setState({
                location: this.props.event.location,
                venue: this.props.event.venue,
                event_day: this.props.event.event_day,
                duration: this.props.event.duration,
                id: this.props.event.id
            })
        }
    }
    handleChange(event){
        console.log(event.target.value);
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        this.props.eventSubmit(this.state)
    }
    render(){
        return(
            <div class="article">
                <h1 class="title">Enter Event Information:</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Event Day:</label><br/>
                    <input onChange={this.handleChange} id="event_day" type="text" value={this.state.event_day}></input><br/>
                    <label>Location:</label><br/>
                    <input onChange={this.handleChange} id="location" type="text" value={this.state.location}></input><br/>
                    <label>Venue:</label><br/>
                    <input onChange={this.handleChange} id="venue" type="text" value={this.state.venue}></input><br/>
                    <label>Duration:</label><br/>
                    <input onChange={this.handleChange} id="duration" type="text" value={this.state.duration}></input><br/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }

}
