import { useState } from "react";
import { postData } from "../raw-data/post-data";
function Posts() {
  const [countLike, setCountlike] = useState(postData.map(post => post.likes));
  const handleLike = (index) => {
    const newLikes = [...countLike]; // copy ของ likes
    newLikes[index] += 1;        // เพิ่มไลก์ที่ตำแหน่ง index นั้น
    setCountlike(newLikes);          // อัปเดต state
  };
  const handleDislike = (index) => {
    const newLikes = [...countLike];
    if (newLikes[index] !== 0) {
      newLikes[index] -= 1;
    }
    setCountlike(newLikes);
  };

  
  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {postData.map((post, index) => {
          return (
            <div class="post-item" key={post.id}>
              <div class="post-header">
                <h2>{post.title}</h2>
                <div class="post-social-media-stats">
                  <span class="stats-topic">Likes: </span>
                  <span class="post-likes">{countLike[index]}</span>
                </div>
              </div>
              <p class="post-content">{post.content}</p>
              <div class="post-actions">
                <button class="like-button" onClick={()=> handleLike(index)}>
                  Like
                </button>
                <button class="dislike-button" onClick= {()=> handleDislike(index)}>
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
