import React from 'react';
import {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import * as userActions from '../../store/users/actions';
import * as userSelectors from '../../store/users/reducer';
import {UserView, UserLogin} from "../../components/UserViews";
import {sizesUserContainer} from './userConst';


class User extends React.Component {

    constructor(props) {
        debugger
        super(props);
        this.state = {
            size: 'small',
            needBack: true,
            user: true
        }
    }

    componentDidMount() {
        debugger
        this.props.dispatch(userActions.getUserList());
    }


    renderUserList = (props) => {
        return <div>
            <h3>Список пользователей</h3>
            {props.userList.map(user => {
                return <UserView
                    needBack={this.state.needBack}
                    srcBack={user.srcBack}
                    srcAvatar={user.srcAvatar}
                    login={user.srcAvatar}
                    password={user.password}
                    id={user.id}
                />
            })}
            <button onClick={() => this.showUserOrUserList()}>Показать меня</button>
        </div>
    };

    renderUser = (props) => {
        return <div>
            <h3>Моя страница</h3>
            <UserView
                needBack={this.state.needBack}
                srcBack={user.srcBack}
                srcAvatar={user.srcAvatar}
                login={user.srcAvatar}
                password={user.password}
                id={user.id}
            />
            <button onClick={() => this.showUserOrUserList()}>Показать меня</button>
        </div>
    };

    showUserOrUserList = () => {
        this.setState({user: !this.state.user})

    }


    render() {debugger
        debugger
        return (<React.Fragment>
            {this.props.userList && !this.state.user && this.renderUserList(this.props)}
            {this.props.user && this.state.user && this.renderUser(this.props)}
        </React.Fragment>)
    }
}


function mapStateToProps(state) {
    debugger
    return {
        userList: userSelectors.getUserList(state),
        user: userSelectors.getUser(state),
    };

}

export default connect(mapStateToProps)(User)