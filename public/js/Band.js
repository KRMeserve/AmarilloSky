class Band extends React.Component{
    constructor(props){
        super(props);
        this.getMembers = this.getMembers.bind(this);
        this.getMember = this.getMember.bind(this);
        this.toggleMemberViews = this.toggleMemberViews.bind(this);
        this.state = {
            members: [],
            member: {},
            displayMember: false,
            displayMembers: true,
        }
    }
    componentDidMount(){
        this.getMembers();
    }
    getMembers(){
        fetch('/members').then(response => response.json()).then(data =>{
            this.setState({
                members: data
            })
        })
    }
    getMember(member){
        console.log(member);
        this.setState({
            member: member
        })
    }
    toggleMemberViews(view1, view2) {
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
                        <a href="#" onClick={()=>{ this.props.changeDisplay('displayHomePage', 'displayBandPage')}}>Home</a>
                        <a href="#" onClick={()=>{ this.props.changeDisplay('displayEventsPage', 'displayBandPage')}}>Events</a>
                        <a href="#">Band</a>
                        <a href="#" onClick={()=>{ this.props.changeDisplay('displayAboutPage', 'displayBandPage')}}>About Us</a>
                        <a href="#" onClick={()=>{ this.props.changeDisplay('displayContactPage', 'displayBandPage')}}>Contact Us</a>
                        <a href="https://www.youtube.com/watch?v=YQkCyGdp0Sw&feature=youtu.be">Live Compilation</a>
                    </nav>
                </header>
                <main class="band-background">
                    {this.state.displayMembers
                        ?
                        <MemberList toggleMemberViews={this.toggleMemberViews} members={this.state.members} getMember={this.getMember}></MemberList>
                        :
                        ''
                    }
                    {this.state.displayMember
                        ?
                        <Member toggleMemberViews={this.toggleMemberViews} member={this.state.member}></Member>
                        :
                        ''
                    }
                </main>
            </div>
        )
    }
}
