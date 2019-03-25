import React,{Component} from 'react';
import {connect} from "react-redux";
import {addFlashMessage} from '../actions/flashMessages';
import PropTypes from 'prop-types';
export default function (WrappedComponent){
     class Authenticate  extends Component {
         componentWillMount() {
                if(!this.props.isAuthenticated){
                    this.props.addFlashMessage({
                        type:'danger',
                        text:'You need to login to access this page',
                    })
                    this.context.router.history.push('/');
                }
         }
         componentWillUpdate(nextProps, nextState, nextContext) {
             if(!nextProps.isAuthenticated){
                 this.context.router.history.push('/');
             }
         }

         static propTypes = {
             addFlashMessage: PropTypes.func.isRequired,
             isAuthenticated:PropTypes.bool.isRequired,
         }
         static contextTypes = {
             router: PropTypes.object.isRequired,
         }
            render() {
                return(
                    <WrappedComponent {...this.props}></WrappedComponent>
                )
            }
     }
     const mapStateToProps = (state) => {
         return{
             isAuthenticated: state.auth.isAuthenticated
         };
     }
     const mapDispatchToProps = {
         addFlashMessage
     }
    return connect(mapStateToProps,mapDispatchToProps)(Authenticate)
}
