class Contact extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <h1>Amarillo Sky</h1>
                    <nav class="nav-bar">
                        <a href="#" onClick={()=>{ this.props.changeDisplay('displayHomePage', 'displayContactPage')}}>Home</a>
                        <a href="#" onClick={()=>{ this.props.changeDisplay('displayEventsPage', 'displayContactPage')}}>Events</a>
                        <a href="#" onClick={()=>{ this.props.changeDisplay('displayBandPage', 'displayContactPage')}}>Band</a>
                        <a href="#" onClick={()=>{ this.props.changeDisplay('displayAboutPage', 'displayContactPage')}}>About Us</a>
                        <a href="#">Contact Us</a>
                    </nav>
                </header>
                <main>
                    <h1>You have reached the Contact Page.</h1>
                </main>
            </div>
        )
    }
}
