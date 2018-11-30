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
