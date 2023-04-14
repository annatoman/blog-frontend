export function PostsShow(props) {
    return (
        <div id="posts-show">
        <h2>Title: {props.post.title}</h2>
        <p>Description: {props.post.body}</p>
        <img src={props.post.image}></img>
        </div>
        );
}