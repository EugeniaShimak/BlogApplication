import React from 'react';
import {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import * as postsActions from '../store/posts/actions';
import * as postsSelectors from '../store/posts/reducer';


class PostsList extends React.Component {

    constructor(props) {
        debugger
        super(props);
    }

    componentDidMount() {
        debugger
        this.props.dispatch(postsActions.fetchPosts());
        //this.props.dispatch(postsActions.getPostsByUser());
    }

    showAllPosts=()=>{
        debugger
        if (!this.props.allPosts){

        }
        this.props.dispatch(postsActions.changeShowPostsByUser(false));
    }

    render() {
        debugger
        if (!this.props.allPosts) return this.renderLoading();
        return (
            <div>
                {this.props.showPostsByUser ?
                    <div className="PostsScreen">
                        <h3>Стаьи по юзеру</h3>
                       <ul>
                           {this.props.postsByUser.map(post=>{
                               return <li>{post.text+', user = '+post.userId}</li>
                           })}
                       </ul>
                        <button onClick={this.showAllPosts}/>
                    </div>
               : <div className="PostsScreen">
                    <h3>Все статьи</h3>
                        <ul>
                            {this.props.allPosts.map(post=>{
                                return <li>{post.text+', user = '+post.userId}</li>
                            })}
                        </ul>
                        <button onClick={this.showPostsByUser}/>
                </div>}
            </div>
        )
    }

    renderLoading=()=> {
        debugger
        return (
            <p>Loading...</p>
        );
    }
}


function mapStateToProps(state) {
    debugger
    return {
        postsByUser: postsSelectors.allPostsByUser(state),
        allPosts: postsSelectors.getAllPosts(state),
        showPostsByUser: postsSelectors.showPostsByUser(state),
    };

}

export default connect(mapStateToProps)(PostsList)