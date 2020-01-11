class Footer extends React.Component{
    render(){
        return(
                <footer>
                    <div class="social-media">
                        <img src="/img/logo2.png" id="logo"/>
                        {/* <a href="https://www.gigsalad.com/amarillo_sky_band_elkhart"><img src="/img/gig_salad.png" alt="GigSalad Link"/></a> */}
                        <a href="https://www.facebook.com/AmarilloSkyBand/"><img src="/img/facebook.png" alt="Facebook Link"/></a>
                        <a href="https://www.instagram.com/amarilloskyband/"><img src="/img/instagram.png" alt="Instagram Link"/></a>
                        <a href="https://www.youtube.com/watch?v=YQkCyGdp0Sw&feature=youtu.be"><img src="/img/youtube.png" alt="YouTube Link"/></a>
                    </div>

                    <div class="copyright">
                        <p>© 2020 | Designed and Built by <a href="https://kylemeserve.com/"> Kyle M. </a></p>
                    </div>
                </footer>
        )
    }
}
