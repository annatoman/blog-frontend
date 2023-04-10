import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function  Header() {
  return (
  <div>
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>
  </div>
  );
};

function PostsNew() {
  return (
      <div id="posts-new">
        <h1>New post</h1>
        <form action="">Title: <input type="text" ></input></form>
        <form action="">Body: <input type="text" ></input></form>
        <form action="">Image: <input type="text" ></input></form>
        <button type="button">Submit</button>
      </div>
  );
}

function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>
        All Posts
      </h1>
      {props.posts.map((post) =>(
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image_url} alt=""/>
          <p>{post.body}</p>
          <button> More info</button>
          </div>
      )
      )}
    </div>
  );
}

function Footer() {
  return (
      <footer>
        <p>Copyright 2023</p>
      </footer>
  );
}

function Content() {
  let posts = [
    {
      id: 1,
      title: "Curb Your Enthusiasm",
      body: "Larry David",
      image_url: "https://static.hbo.com/content/dam/hbodata/series/curb-your-enthusiasm/character/larry-david-1920.jpg",
    },
    {
      id: 2,
      title: "Seinfeld",
      body: "Jerry Seinfeld",
      image_url: "https://www.pbs.org/wnet/pioneers-of-television/files/2014/04/9088097831_d31af2d6e5_o.jpg",
    },
    {
      id: 3,
      title: "Parks & Recreation",
      body: "Amy Poehler",
      image_url: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1142603651_cropped.jpg",
    }
  ];

  return (
  <div>
    <PostsNew />
    <PostsIndex posts={posts} />
  </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
