class LoginPage extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: '',
      password: ''
    }
  }
  handleChange(event){
      this.setState({
          [event.target.id]: event.target.value
      })
  }
  handleSubmit(event){
      event.preventDefault()
  }
  render(){
    return(
      <div class="article">
          <h1 class="title">Enter Login Information:</h1>
          <form onSubmit={(event)=>{this.handleSubmit(event); this.props.changeDisplay('displayLoginPage', 'displayHomePage'); this.props.testUser(this.state.username, this.state.password)}}>
              <label>Username:</label><br/>
              <input onChange={this.handleChange} id="username" type="text" value={this.state.username}></input><br/>
              <label>Password:</label><br/>
              <input onChange={this.handleChange} id="password" type="password" value={this.state.password}></input><br/>
              <input type="submit" value="Submit"></input>
          </form>
      </div>
    )
  }
}
