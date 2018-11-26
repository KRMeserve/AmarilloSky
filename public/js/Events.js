class Events extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <h1>Amarillo Sky</h1>
                    <nav class="nav-bar">
                        <a href="#" onClick={()=>{ this.props.changeDisplay('displayHomePage', 'displayEventsPage')}}>Home</a>
                        <a href="#">Events</a>
                        <a href="#" onClick={()=>{ this.props.changeDisplay('displayBandPage', 'displayEventsPage')}}>Band</a>
                        <a href="#" onClick={()=>{ this.props.changeDisplay('displayAboutPage', 'displayEventsPage')}}>About Us</a>
                        <a href="#" onClick={()=>{ this.props.changeDisplay('displayContactPage', 'displayEventsPage')}}>Contact Us</a>
                    </nav>
                </header>
                <main>
                    <h1>You have reached the Events Page.</h1>
                </main>
            </div>
        )
    }
}
