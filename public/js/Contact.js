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
                <main class="contacts-page">
                    <div class="article-container">
                        <div class="article">
                            <h1 class="title">Contact Us</h1>
                            <a href="mailto:s.harrier@comcast.net?Subject=Book%20Amarillo%20Sky"><button class="input-button botMargin30">Book Amarillo Sky</button></a>
                            <p>You can book us via the above button or call/text our manager at 574-524-0742 to inquire about anything band-related. </p>
                        </div>
                        <div class="article">
                            <h1 class="title">Distance</h1>
                            <p>Amarillo Sky travels up to 120 miles from their hometown of Elkhart, IN. We bring our own equipment and can be booked to play anywhere from 60-240 minute gigs.</p>
                        </div>
                        <div class="article">
                            <h1 class="title">Set List</h1>
                            <p>We are continually learning new country hits to add to our set lists. We have some songs that are particularly geared towards weddings that we can email you. Here are some of the songs we currently perform.</p>
                            <ul>
                                <li><span class="bold">Seeing Red</span> - Dustin Lynch</li>
                                <li><span class="bold">Wasted Time</span> - Keith Urban</li>
                                <li><span class="bold">If the Boot Fits</span> - Granger Smith</li>
                                <li><span class="bold">Cruise</span> - Florida Georgia Line</li>
                                <li><span class="bold">Homegrown</span> - Zac Brown Band</li>
                                <li><span class="bold">Country Girl</span> - Luke Bryan</li>
                                <li><span class="bold">SnapBack</span> - Old Dominion</li>
                                <li><span class="bold">All Night to Get There</span> - Rascal Flatts</li>
                                <li><span class="bold">Hey Girl</span> - Billy Currington</li>
                                <li><span class="bold">Ring on Every Finger</span> - Locash</li>
                                <li><span class="bold">Somebody Else Will</span> - Justin Moore</li>
                                <li><span class="bold">We Went</span> - Randy Houser</li>
                                <li><span class="bold">My Kinda Party</span> - Jason Aldean</li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}
