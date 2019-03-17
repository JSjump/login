import React,{ Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
class FlashMessage extends Component{
    static propTypes = {
        message: PropTypes.object.isRequired,
        deleteFlashMessage:PropTypes.func.isRequired,
    }
    // onClick() {
    //     this.props.deleteFlashMessage(this.props.message.id)
    // }
    // 属性初始化器语法；
    onClick = () => {
        this.props.deleteFlashMessage(this.props.message.id)
    }
    render() {
        const {type ,id ,text} =this.props.message;
        console.log(this,'this')
        return (
            <div className={classnames('alert',{
                'alert-success':type === 'success',
                'alert-danger' : type === 'danger',
            })}>
                <button className='close'
                // onClick={this.onClick.bind(this)}><span>&times;</span></button>
                        onClick={this.onClick}><span>&times;</span></button>
                {text}
            </div>
        )
    }
}
export default FlashMessage;
