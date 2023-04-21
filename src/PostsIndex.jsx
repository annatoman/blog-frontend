import { useState } from "react";

export function PostsIndex(props) {
  
  const [searchFilter, setSearchFilter] = useState("");

  console.log(props);

  return (
    <div id="posts-index">
      <h1>
        All Posts
      </h1>
      Search:<input type="text" value={searchFilter} onChange={(event) => ssetSearchFilter(event.target.value)} list="titles"/>
      
      <datalist id="titles">
        {props.posts.map(post => <option key={post.id}>{post.title}</option>)}
      </datalist>

      {props.posts
      .filter((post) => post.title.toLowerCase().includes(searchFilter.toLowerCase()))
      .map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image} alt="" />
          <p>{post.body}</p>
          <button onClick={() => props.onShowPost(post)}>More info</button>
        </div>
      )
      )}
    </div>
  );
}
