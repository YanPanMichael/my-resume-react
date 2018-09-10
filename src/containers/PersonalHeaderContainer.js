import { connect } from 'react-redux'
import PersonalHeader from '../components/PersonalHeader'

const mapStateToProps = (state, ownProps) => ({
  headerShadow: state.headerShadow
})

const PersonalHeaderContainer = connect(mapStateToProps)(PersonalHeader)
export default PersonalHeaderContainer;
