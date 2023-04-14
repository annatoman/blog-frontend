export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>
        All Posts
      </h1>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image} alt="" />
          <p>{post.body}</p>
          <button>More info</button>
        </div>
      )
      )}
    </div>
  );
}