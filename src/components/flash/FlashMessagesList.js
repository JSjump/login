import React,{Component} from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import FlashMessage from './FlashMessage';
import {deleteMessage} from '../../actions/flashMessages';
class FlashMessagesList extends Component {
    static propTypes = {
        flashMessage: PropTypes.array.isRequired,
        deleteMessage:PropTypes.func.isRequired,
    }
    render() {
        const flash = this.props.flashMessage.map(item =>
            <FlashMessage
                key={item.id}
                message={item}
            deleteFlashMessage={this.props.deleteMessage}/>
        )
        return (
            <div className="container">
                {flash}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        flashMessage:state.flashMessage,
    }
}
export default connect(mapStateToProps,{deleteMessage})(FlashMessagesList);
