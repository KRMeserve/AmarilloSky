class MemberList extends React.Component {
    render(){
        return(
            <div class="band-container">
                {this.props.members.map((member, index)=>{
                    console.log(member);
                    return(
                        <div class='band-member'>
                            <h1>{member.name}</h1>
                            <h1>{member.instrument}</h1>
                            <img src={member.img}></img>
                            <p class="member-list-click" onClick={()=>{this.props.getMember(member); this.props.toggleMemberViews('displayMember', 'displayMembers')}}>Click here for more info!</p>
                        </div>
                    )
                })}
                <div class="article">
                    <h3 class="title">Why Amarillo Sky?</h3>
                    <p>Sometimes we get asked, <span class="bold">“Why do you call yourselves Amarillo Sky?”</span> Well, just like Jason Aldean’s song of the same name, we are all about puttin' in a full day’s work for the ones we love and the One above. And at the end of the day, we just want to let loose with some folks who do the same.</p>
                    <p>We work hard so that we can play for you.</p>
                </div>
            </div>
        )
    }
}
//
// <div class="band-container">
//     <div class='band-member'>
//         <h1>Tanner "The Voice" Smale</h1>
//         <h1>Lead Vocals</h1>
//         <img src="/img/tanner.png"></img>
//         <p>Click for more info!</p>
//     </div>
//     <div class='band-member'>
//         <h1>Rob "Thunder" Harrier</h1>
//         <h1>Bass/Backup Vocals</h1>
//         <img src="/img/rob.png"></img>
//         <p>Click for more info!</p>
//     </div>
//     <div class='band-member'>
//         <h1>Jerry "The Animal" Smith</h1>
//         <h1>Drums/Backup Vocals</h1>
//         <img src="/img/jerry.png"></img>
//         <p>Click for more info!</p>
//     </div>
//     <div class='band-member'>
//         <h1>Adam "The Magnet" Sarna</h1>
//         <h1>Guitar</h1>
//         <img src="/img/adam.png"></img>
//         <p>Click for more info!</p>
//     </div>
// </div>
