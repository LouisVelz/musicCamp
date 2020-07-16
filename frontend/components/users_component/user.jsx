import React from 'react'

class UserPage extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId)
  }

  render(){
    const {currentUser} = this.props
    if(!currentUser) return <div>Fetching data...</div>

    return(
      <div className="user-page">
        <h1>{currentUser.username}</h1>


      </div>
    )
  }
}

export default UserPage;