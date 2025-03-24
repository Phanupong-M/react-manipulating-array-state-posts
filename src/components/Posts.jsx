import {useState} from "react"
import {postData} from "../raw-data/post-data"

function Posts() {

  const [postList,setPostList] = useState(postData)


  const likePost = (postIndex) => {
    const newPostList = [...postList]
    newPostList[postIndex].likes += 1
    setPostList(newPostList)
 }

 const disLikePost = (postIndex) => {


  const newPostList = [...postList]

  if (newPostList[postIndex].likes > 0){
    newPostList[postIndex].likes -= 1
    setPostList(newPostList)
  }
}

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
         {postList.map((post,index) => (
                <div class="post-item" key = {post.id}>
                  <div class="post-header">
                    <h2>{post.title}</h2>
                    <div class="post-social-media-stats">
                      <span class="stats-topic">Likes: </span>
                      <span class="post-likes">{post.likes}</span>
                    </div>
                  </div>
                  <p class="post-content">
                     {post.content}
                  </p>
                  <div class="post-actions">
                    <button onClick = {() => likePost(index)} class="like-button">Like</button>
                    <button onClick = {() => disLikePost(index)} class="dislike-button">Dislike</button>
                  </div>
                </div>
         ))}
      </div>
    </div>
  );
}

export default Posts;
