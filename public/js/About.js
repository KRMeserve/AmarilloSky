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
                    <h3>About Amarillo Sky</h3>
                    <p>Comprised of great musicians from the Michiana area, Amarillo Sky is a modern country cover band that is sure to entertain. They play songs by the country stars that you hear on the radio every day like Luke Bryan, Jason Aldean, Rascal Flatts, Thomas Rhett, Dan & Shay, and Keith Urban – just to name a few. You’ll probably hear one of your favorites. So if you like the new country, come on out to see them and be ready to dance the night away!</p>
                    <h3>Q/A Section?</h3>
                </main>
            </div>
        )
    }
}
