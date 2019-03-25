import React,{Component} from 'react';
import NewEventForm from './NewEventForm';
class NewEventPage extends Component{
    constructor(props){
        super(props)

    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                    <NewEventForm />
                </div>
                <div className="col-sm-3"></div>
            </div>
        );
    }
}
export default NewEventPage;
