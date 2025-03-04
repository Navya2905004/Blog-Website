import React, { useState, useEffect,useRef,useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getPosts, addPosts, deletePosts, updatePosts } from "./db";

const Home = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [editingPost, setEditingPost] = useState(null);

  const postsRef = useRef(null);

  useEffect(() => {
    fetchPosts();
  }, []);


  useLayoutEffect(() => {
    if (postsRef.current) {
      postsRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [posts]);

  const fetchPosts = async () => {
    const data = await getPosts();
    setPosts(data);
  };

  const handleAddPost = async () => {
    if (newPostTitle.trim() === "") return;
    await addPosts({ title: newPostTitle });
    setNewPostTitle("");
    setShowPopup(false);
    fetchPosts();
  };

  const handleDelete = async (id) => {
    await deletePosts(id);
    fetchPosts();
  };

  const handleUpdateClick = (post) => {
    setEditingPost(post);
    setNewPostTitle(post.title);
    setShowPopup(true);
  };

  const handleUpdatePost = async () => {
    if (!editingPost) return;
    await updatePosts(editingPost.id, { title: newPostTitle });
    setNewPostTitle("");
    setEditingPost(null);
    setShowPopup(false);
    fetchPosts();
  };

  return (
    <div>
      <div className="header">
        <h1>Blog-Posts</h1>
        <div className="create-logout">
        <button className="fields" onClick={() => { 
        setShowPopup(true); 
        setEditingPost(null);
        setNewPostTitle("");
      }}>
        Create Post
      </button>
        <button className="fields"
        onClick={() => {
          localStorage.removeItem('loggedInUser');
          navigate('/');
        }}>
        Logout
      </button>
      </div>
      </div>
      <div className="outer-posts-box"  ref={postsRef}>
        <div className="posts-Box">
          {posts.length === 0 ? (
            <h1>No Posts Available</h1>
          ) : (
            <div className="main-post-divs">
              {posts.map((post) => (
                <div className="post-divs" key={post.id}>
                  <p>{post.title}</p>
                  <div className="delete-edit-btn">
                    <button className="delete-btn" onClick={() => handleDelete(post.id)}>
                      Delete
                    </button>
                    <button className="edit-btn" onClick={() => handleUpdateClick(post)}>Edit</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Popup content */}
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>{editingPost ? "Update Post" : "Create a Post"}</h2>
              <textarea
                value={newPostTitle}
                onChange={(e) => setNewPostTitle(e.target.value)}
                placeholder="Enter post title..."
              />
              <div className="delete-edit-btn">
              {editingPost ? (
                <button onClick={handleUpdatePost}>Update</button>
              ) : (
                <button onClick={handleAddPost}>Add Post</button>
              )}
              <button onClick={() => setShowPopup(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* footer */}
  <div className="footer">
  <div className="footer-content">
    <p>&copy; {new Date().getFullYear()} Blog-Posts-Website. All rights reserved.</p>
    <div className="social-icons">
      <a href="https://www.facebook.com" target="_blank">Facebook</a>
      <a href="https://www.twitter.com" target="_blank">Twitter</a>
      <a href="https://www.Instagram.com" target="_blank">Instagram</a>
    </div>
  </div>
</div>

    </div>
  );
};
export default Home;
