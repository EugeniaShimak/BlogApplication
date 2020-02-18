import React from 'react';

function PostView(props) {

    return (
        <div className="PostView">{
            props.posts && props.posts.map(post => {
                return <div key={post.id}>
                    <li>{post.text + ', user = ' + post.userId}</li>
                    <br/>
                    {props.delete&&<button onClick={()=>{debugger;props.delete(post)}}>Удалить</button>}
                    {props.update&&<button onClick={()=>props.update(post)}>Редактировать</button>}
                </div>
            })
        }
        </div>
    );
}

export default PostView;
