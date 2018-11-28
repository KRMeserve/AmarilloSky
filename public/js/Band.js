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
                <main class="band-background">
                    <div class="band-container">
                        <div class='band-member'>
                            <h1>Tanner "The Voice" Smale</h1>
                            <h1>Lead Vocals</h1>
                            <p>Picture will go here.</p>
                        </div>
                        <div class='band-member'>
                            <h1>Rob "Thunder" Harrier</h1>
                            <h1>Bass/Backup Vocals</h1>
                            <p>Picture will go here.</p>
                        </div>
                        <div class='band-member'>
                            <h1>Jerry "The Animal" Smith</h1>
                            <h1>Drums/Backup Vocals</h1>
                            <p>Picture will go here.</p>
                        </div>
                        <div class='band-member'>
                            <h1>Adam "The Magnet" Sarna</h1>
                            <h1>Guitar</h1>
                            <p>Picture will go here.</p>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}
