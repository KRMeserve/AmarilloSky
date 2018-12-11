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
                            <p>You can book us via the above button or call/text our manager at <span class="bold textSize1">574-524-0742</span> to inquire about anything band-related. </p>
                        </div>
                        <div class="article">
                            <h1 class="title">Distance</h1>
                            <p>Amarillo Sky travels up to 120 miles from their hometown of Elkhart, Indiana. They can be booked to play gigs from 60 to 240 minutes long.</p>
                        </div>
                        <div class="article">
                            <h1 class="title">Equipment</h1>
                            <p>Amarillo Sky has a full PA system, stage lights, and a light show. You can find the Input List on the "About Us" page.</p>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}
