import React from 'react';
import _ from 'lodash';

function PostView(props) {

    return (
        <div className="PostView">{
            props.posts && props.posts.map(post => {
                return <div key={post.id}>
                    <li>{post.text + ', user = ' + post.userId}</li>
                    <br/>
                    {props.delete && <button onClick={() => {
                        debugger;
                        props.delete(post)
                    }}>Удалить</button>}
                    {props.change && <input value={props.currentPost.id===post.id?props.currentPost.text || post.text:post.text} onChange={(e) => props.change({
                        text: e.target.value,
                        userId: post.userId,
                        id: post.id
                    })}/>}
                    {props.update && !_.isEmpty(props.currentPost) &&props.currentPost.id === post.id&& props.currentPost.text !== post.text &&
                    <button onClick={() => props.update(props.currentPost)}>Сохранить изменения</button>}
                </div>
            })
        }
        </div>
    );
}

export default PostView;
