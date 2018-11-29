class Member extends React.Component{
    render(){
        return(
            <div class="band-container">
                <div class="band-member-show">
                    <div class="band-member-inner-div">
                        <img src={this.props.member.img}></img>
                        <div>
                            <h1>{this.props.member.name}</h1>
                            <h1>{this.props.member.instrument}</h1>
                            <p>{this.props.member.bio}</p>
                        </div>
                    </div>
                    <button class="input-button botMargin30" onClick={()=>{this.props.toggleMemberViews('displayMember', 'displayMembers')}}>Return to List of Members</button>
                </div>
            </div>
        )
    }
}
