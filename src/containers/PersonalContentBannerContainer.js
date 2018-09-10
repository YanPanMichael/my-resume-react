import { connect } from 'react-redux';
import PersonalContentBanner from '../components/PersonalContentBanner';
import { setHeaderShadowFlag } from '../actions';

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateHeaderShadow: (boolValue) => {
    dispatch(setHeaderShadowFlag(boolValue));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PersonalContentBanner);
