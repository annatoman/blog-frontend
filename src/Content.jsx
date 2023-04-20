import axios from "axios";
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { About } from "./About";
import { PostsNew } from './PostsNew';
import { PostsIndex } from './PostsIndex';
import { Modal } from './Modal';
import { PostsShow } from './PostsShow';
import { Login } from './Login';
import { LogoutLink } from './LogoutLink';
import { Signup } from './Signup';
import { PostsShowPage } from "./PostsShowPage";

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
      <LogoutLink />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="posts/:id" element={<PostsShowPage posts={posts} onShowPost={handleShowPost} />} />
        <Route path="/posts/new" element={<PostsNew onCreatePost={handleCreatePost} />} />
        <Route path="/" element={<PostsIndex posts={posts} onShowPost={handleShowPost} />} />
      </Routes>

      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} onDestroyPost={handleDestroyPost}/>
      </Modal>
    </div>
  );
}
