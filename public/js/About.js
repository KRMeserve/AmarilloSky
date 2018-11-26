class About extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <h1>Amarillo Sky</h1>
                    <nav class="nav-bar">
                        <a href="#" onClick={()=>{ this.props.changeDisplay('displayHomePage', 'displayAboutPage')}}>Home</a>
                        <a href="#" onClick={()=>{ this.props.changeDisplay('displayEventsPage', 'displayAboutPage')}}>Events</a>
                        <a href="#" onClick={()=>{ this.props.changeDisplay('displayBandPage', 'displayAboutPage')}}>Band</a>
                        <a href="#">About Us</a>
                        <a href="#" onClick={()=>{ this.props.changeDisplay('displayContactPage', 'displayAboutPage')}}>Contact Us</a>
                    </nav>
                </header>
                <main>
                    <h1>You have reached the About Page.</h1>
                </main>
            </div>
        )
    }
}
