import './Joke.css';
import { useState } from 'react'

export const Joke = ({userAvatar, userName, text, likes, dislikes}) => {
const [countLikes, setCountLikes] = useState(likes);
const [countDislikes, setCountDislikes] = useState(dislikes);


  const handleLike = () => {
     setCountLikes(countLikes + 1);
  }

  const handleDislike = () => {
     setCountDislikes(countDislikes + 1);
  }

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">
          {text}
        </p>
      </div>
      <div className="joke__likes">
        <button id="btn-up" className="btn-like btn-like--up" onClick={handleLike}></button>
        <span id="likes-up" className="likes-count likes-count--up">{countLikes}</span>
        <button id="btn-down" className="btn-like btn-like--down" onClick={handleDislike}></button>
        <span id="likes-down" className="likes-count likes-count--down">{countDislikes}</span>
      </div>
    </div>
  );
};
