import React from 'react';
import {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import * as postsActions from '../store/posts/actions';
import * as postsSelectors from '../store/posts/reducer';
import Loading from "../components/Loading";
import PostView from "../components/PostView";


class PostsList extends React.Component {

    constructor(props) {
        debugger
        super(props);
        this.state = {
            newPostText: ''
        }
    }

    componentDidMount() {
        debugger
        this.props.dispatch(postsActions.fetchPosts());
    }

    showAllPosts = () => {
        debugger
        this.props.dispatch(postsActions.changeShowPostsByUser(false));
    }

    showPostsByUser = () => {
        debugger
        if (!this.props.postsByUser) {
            this.props.dispatch(postsActions.getPostsByUser(1))
        }
        this.props.dispatch(postsActions.changeShowPostsByUser(true));
    }


    renderPostList = (title, posts, buttonText, buttonAction) => {
        return <div className="PostsScreen">
            <h3>{title}</h3>
            <PostView
                posts={posts}
                delete={(post)=>{debugger;this.props.dispatch(postsActions.deletePost(post)) }}
                update={(post)=>this.props.dispatch(postsActions.updatePost(post))}
                change={(post)=>this.changePost(post)}
                currentPost = {this.props.post||{}}
            />
            <button onClick={() => buttonAction()}>{buttonText}</button>
        </div>
    }

    savePost=(post)=>{
        debugger
        this.props.dispatch(postsActions.savePost(post))
    }

    changePost=(post)=>{debugger
        this.props.dispatch(postsActions.changePost(post));
    }

    changeNewPost=(post)=>{debugger
        this.props.dispatch(postsActions.changeNewPost(post));
    }

    render() {
        debugger
        if (!this.props.allPosts) return <Loading/>;
        return (
            <div>
                {this.props.showPostsByUser ?
                    this.props.allPostsByUser && this.renderPostList('Стаьи по юзеру', this.props.allPostsByUser, 'Показать все статьи', this.showAllPosts) :
                    this.renderPostList('Все статьи', this.props.allPosts, 'Показать по юзеру', () => this.showPostsByUser(6))
                }
                <br/>
                <input value={this.props.newPost&&this.props.newPost.text||''} onChange={(e) => this.changeNewPost({text:e.target.value, userId:1})}/>
                <button onClick={() => {
                    this.savePost(this.props.newPost)
                }}>добавить пост
                </button>
            </div>
        )
    }
}


function mapStateToProps(state) {
    debugger
    return {
        allPostsByUser: postsSelectors.allPostsByUser(state),
        allPosts: postsSelectors.getAllPosts(state),
        showPostsByUser: postsSelectors.showPostsByUser(state),
        post:postsSelectors.getPost(state),
        newPost:postsSelectors.getNewPost(state)
    };

}

export default connect(mapStateToProps)(PostsList)