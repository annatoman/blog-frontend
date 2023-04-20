import axios from "axios";
import { useState, useEffect } from 'react';
import { PostsNew } from './PostsNew';
import { PostsIndex } from './PostsIndex';
import { Modal } from './Modal';
import { PostsShow } from './PostsShow';
import { Signup } from './Signup';
import { Login } from './Login';
import { LogoutLink } from './LogoutLink';
import { Routes, Route } from "react-router-dom";
import { About } from "./About";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      setPosts([...posts, response.data]);
    });
  };

  const handleUpdatePost = (id, params) => {
    axios.patch("http://localhost:3000/posts/" + id + ".json", params).then((response) => {
      setPosts(
        posts.map((post) => {
          if (post.id === response.data.id) {
            return response.data;
          } else {
            return post;
          }
        })
      );
      handleClose();
    })
  };

  const handleDestroyPost = (post) => {
    axios.delete("http://localhost:3000/posts/" + post.id + ".json").then((response) => {
      setPosts(posts.filter((r) => r.id !== post.id));
      handleClose();
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logoutlink" element={<LogoutLink />} />
        <Route path="/posts/new" element={<PostsNew onCreatePost={handleCreatePost} />} />
      </Routes>

      {/* <PostsNew onCreatePost={handleCreatePost}/> */}
      <PostsIndex posts={posts} onShowPost={handleShowPost}/>
      <Modal show={isPostsShowVisible} onClose={handleClose}>
      <PostsShow post={currentPost} onUpdatePost={handleUpdatePost}/>
      </Modal>
    </div>
  );
}
