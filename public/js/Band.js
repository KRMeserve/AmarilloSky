class Band extends React.Component{
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
                    </nav>
                </header>
                <main>
                    <h1>You have reached the Band Page.</h1>
                </main>
            </div>
        )
    }
}
