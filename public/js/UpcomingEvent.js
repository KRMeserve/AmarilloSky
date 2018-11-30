class UpcomingEvent extends React.Component{
    constructor(props){
        super(props);
        this.getEventsAndFindRecent = this.getEventsAndFindRecent.bind(this);
        this.state = {
            events: [],
            receivedEvents: false,
            event: {}
        }
    }
    componentDidMount(){
        this.getEventsAndFindRecent()
    }
    getEventsAndFindRecent(){
        fetch('/events').then(response => response.json()).then(data =>{
            this.setState({
                events: data
            })

            let recentEvents = [];
            for (let i = 0; i < data.length; i++) {
                if (moment(data[i].event_day).isSameOrAfter(this.props.now, 'day')) {
                    recentEvents.push(data[i]);
                }
            }
            this.setState({
                event: recentEvents[0],
                receivedEvents: true
            })
        })
    }
    render(){
        return(
            <div>
                <h1 class="title underline">Next Upcoming Event</h1>
                {this.state.receivedEvents
                    ?
                    <ActualNextEvent event={this.state.event} changeDisplay={this.props.changeDisplay}></ActualNextEvent>
                    :
                    ''
                }
            </div>
        )
    }
}
