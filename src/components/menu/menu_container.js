import { connect } from 'react-redux';
import Menu from './menu';
import { fetchMenu } from '../../actions/user_actions';

const mSTP = (state) => {

    return({state})
}

const mDTP = dispatch => ({
    fetchMenu: () => dispatch(fetchMenu())
})


export default connect(mSTP, mDTP)(Menu);