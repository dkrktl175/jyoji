
function Login2(){

  return(
    <div>
    <Input/>
    <Button onClick = { (e) => {
      console.log(e)
      alter(e.target.value)
    } } > 로그인 </Button>
    </div>

  )
}

class Login extends React.Component{
  constructor(){
    super()
    this.state = {id : "아무것도 입력되지 않았습니다"}
}

render(){
  return(
    <div>
    <Input onChange = { (e) => this.setState({id : e.target.value })  }/>
    <Button onClick = { (event) => {
      alter(this.state.id)
    } } > Login </Button>
    <div/>
  )
}
