import React from 'react';
// import {sizesUserContainer} from '../containers/';


function UserView(props) {
    // let sizes = sizesUserContainer, size = props.size, styles = props.styles || {};
    // if (props.width && props.height) {
    //     styles.height = props.height;
    //     styles.width = props.width;
    // }
    // else if (sizes[size]) {
    //     styles.height = sizes[size].height;
    //     styles.width = sizes[size].width;
    // }
    return (
        <div style={props.style||{}} className="user_container">
            {props.needBack && <UserBackground src={props.srcBack||''}/>}
            <UserAvatar src={props.srcAvatar}/>
            <UserLogin login={props.login}/><br/>
            {/*ниже не нужно потом*/}
            {props.password}<br/>
            {props.id}
        </div>
    )
}

function UserLogin(props) {
    return (<div style={props.style || {}}>
        {props.login}
    </div>)
}

function UserAvatar(props) {
    return (<img style={props.style || {}} src={props.src}/>)
}

function UserBackground(props) {
    return (<img style={props.style || {}} src={props.src}/>)
}


export {UserView, UserLogin};