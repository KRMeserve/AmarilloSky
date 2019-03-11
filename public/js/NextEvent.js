class NextEvent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            event: {},
            recentEvents: [],
            receivedEvents: false
        }
    }
    componentDidMount(){
        setTimeout(()=>{this.getClosestEvent(this.props)}, 1000);
        // this.getClosestEvent(this.props);
    }
    getClosestEvent(props){
        let recentEvents = [];
        for (let i = 0; i < props.events.length; i++) {
            if (moment(props.events[i].event_day).isSameOrAfter(props.now, 'day')) {
                recentEvents.push(props.events[i]);
            }
        }
        this.setState({
            event: recentEvents[0],
            receivedEvents: true
        })
    }
    render(){
        return(
            <div>
                <h1 class="title">Next Event</h1>
                {this.state.receivedEvents
                    ?
                    <ActualNextEvent event={this.state.event}></ActualNextEvent>
                    :
                    ''
                }
                <button class="input-button" onClick={()=>{this.props.changeDisplay('displayHomePage', 'displayEventsPage')}}>See More Events</button>
            </div>
        )
    }
}
