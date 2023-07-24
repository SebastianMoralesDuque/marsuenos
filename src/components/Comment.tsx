import React, { useState } from 'react';

export interface Comment {
  id: number;
  author: string;
  content: string;
  rating: number;
  likes: number;
  date: string;
  avatar: string; // Agregamos el atributo avatar
}

interface CommentProps {
  comment: Comment;
}

const avatarSebastian = 'https://xsgames.co/randomusers/avatar.php?g=male';
const avatarDaniela = 'https://xsgames.co/randomusers/avatar.php?g=female';

const initialComments: Comment[] = [
  {
    id: 1,
    author: "Sebastian",
    content: "This is the first comment.",
    rating: 4,
    likes: 10,
    date: "2023-07-18",
    avatar: avatarSebastian, // Asignamos el avatar a Sebastian
  },
  {
    id: 2,
    author: "Daniela",
    content: "Great experience!",
    rating: 5,
    likes: 5,
    date: "2023-07-19",
    avatar: avatarDaniela, // Asignamos el avatar a Daniela
  },
];

const CommentComponent: React.FC<CommentProps> = ({ comment }) => {
  const [likes, setLikes] = useState(comment.likes);
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    if (!liked) {
      setLikes((prevLikes) => prevLikes + 1);
    } else {
      setLikes((prevLikes) => prevLikes - 1);
    }
    setLiked((prevLiked) => !prevLiked);
  };

  const starIcons = Array.from({ length: 5 }, (_, index) => (
    <svg
      key={index}
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-5 fill-current ${
        comment.rating >= index + 1 ? 'text-yellow-500' : 'text-gray-300'
      }`}
      viewBox="0 0 20 20"
    >
      <path d="M10 0l2.39 7.73h7.71l-6.22 4.8 2.39 7.73-6.1-4.48-6.09 4.48 2.39-7.73-6.22-4.8h7.71z" />
    </svg>
  ));

  return (
    <div className="comment p-4 bg-white rounded-lg shadow mb-4">
      <div className="comment-content">
        <div className="flex items-center">
          <img
            src={comment.avatar}
            alt={comment.author}
            className="w-10 h-10 rounded-full mr-3"
          />
          <p className="font-bold">{comment.author}</p>
        </div>
        <p>{comment.content}</p>
        <div className="flex items-center mt-2">
          <div className="flex">{starIcons}</div>
          <span className="text-sm text-gray-500 ml-2">{comment.date}</span>
        </div>
        <div className="flex mt-4">
          <button
            onClick={handleLikeClick}
            className={`flex items-center text-gray-500 mr-4 hover:text-blue-500 focus:outline-none ${
              liked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
            }`}
            disabled={liked}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M10 18a1 1 0 01-.8-.4c-3-4.2-6-5-6-8V6a4 4 0 014-4h6a4 4 0 014 4v3c0 3-3 3.8-6 8a1 1 0 01-.8.4z" />
            </svg>
            <span className="ml-1">{likes}</span>
          </button>
          <button
            className="flex items-center text-gray-500 hover:text-blue-500 focus:outline-none"
            onClick={() => console.log('Reply clicked')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M10.94 18.33a1 1 0 01-.81-.4L3.54 10H6a5.002 5.002 0 014.83 3.64A1 1 0 0110 14v6a1 1 0 01-1 1zm8.37-10.11A9.964 9.964 0 0012 2c-1.7 0-3.37.44-4.82 1.27-.47.27-1.08.13-1.44-.33L2.93 1.45a1 1 0 111.41-1.41l14.1 14.1a1 1 0 01-.32 1.63 10.083 10.083 0 003.15-7.37c0-2.55-.95-4.89-2.54-6.66z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export { CommentComponent, initialComments };
