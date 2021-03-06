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
    // 必须谨慎对待jsx回调函数中的this, 类的方法默认是不会绑定this的。  所以要用bind

    // 属性初始化器语法；
    onClick = () => {
        this.props.deleteFlashMessage(this.props.message.id)
    }
    render() {
        const {type ,id ,text} =this.props.message;
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
