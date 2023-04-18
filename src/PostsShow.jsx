export function PostsShow(props) {
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const params = new FormData(event.target);
        props.onUpdatePost(props.post.id, params);
        event.target.reset();
     };

    return (
        <div id="posts-show">
        <h1>Update Posts Info!</h1>
        <form onSubmit={handleSubmit}>  
        <div>Title: <input defaultValue={props.post.title} name="title" type="text" /></div>
        <div>Body: <input defaultValue={props.post.body} name="body" type="text" /></div>
        <div>image: <input defaultValue={props.post.image} name="image" type="text" /></div>
        <button type="submit">Update this post</button>
        </form>
        </div>
        );
}