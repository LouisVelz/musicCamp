
import { connect } from 'react-redux';
import Dummy from './dummy_component'


const mSTP = (state) => {
  const { entities, session } = state
  return {
    currentUser: entities.users[session.currentUser]
  }
}

export default connect(
  mSTP, null
)(Dummy);