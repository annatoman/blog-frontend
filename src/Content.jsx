import axios from "axios";
import { useState, useEffect } from 'react';
import { PostsNew } from './PostsNew';
import { PostsIndex } from './PostsIndex';
import { Modal } from './Modal';
import { PostsShow } from './PostsShow';
import { Signup } from './Signup';
import { Login } from './Login';
import { LogoutLink } from './LogoutLink';

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

  useEffect(handleIndexPosts, []);

  return (
    <div className="container">
      <Signup />
      <Login />
      <LogoutLink />
      <PostsNew onCreatePost={handleCreatePost}/>
      <PostsIndex posts={posts} onShowPost={handleShowPost}/>
      <Modal show={isPostsShowVisible} onClose={handleClose}>
      <PostsShow post={currentPost}/>
      </Modal>
    </div>
  );
}
