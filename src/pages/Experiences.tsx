import React, { useState } from 'react';
import { CommentComponent, Comment, initialComments } from '../components/Comment';

interface ExperiencesProps {}

const Experiences: React.FC<ExperiencesProps> = () => {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newCommentContent, setNewCommentContent] = useState("");
  const [newCommentRating, setNewCommentRating] = useState(0);

  const avatarMale = 'https://xsgames.co/randomusers/avatar.php?g=male';

  const handleNewCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCommentContent.trim() === "") return;

    const newComment: Comment = {
      id: Math.floor(Math.random() * 1000),
      author: "Sebas",
      content: newCommentContent,
      rating: newCommentRating,
      likes: 0, // Predeterminamos los likes en 0
      date: new Date().toISOString().split('T')[0], // Predeterminamos la fecha actual
      avatar: avatarMale, // Asignamos un avatar aleatorio
    };

    setComments((prevComments) => [...prevComments, newComment]);
    setNewCommentContent("");
    setNewCommentRating(0);
  };

  return (
    <div className="experiences">
    <div className="container mx-auto mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"></div>
      <h1>Experiences</h1>
      {comments.map((comment) => (
        <CommentComponent key={comment.id} comment={comment} />
      ))}
      <form onSubmit={handleNewCommentSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="content" className="block font-bold text-gray-700 mb-2">
            Write a comment:
          </label>
          <input
            type="text"
            id="content"
            value={newCommentContent}
            onChange={(e) => setNewCommentContent(e.target.value)}
            placeholder="Write a comment..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block font-bold text-gray-700 mb-2">
            Rating (1-5):
          </label>
          <input
            type="number"
            id="rating"
            min={1}
            max={5}
            value={newCommentRating}
            onChange={(e) => setNewCommentRating(Number(e.target.value))}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2"
        >
          Submit Comment
        </button>
      </form>
    </div>
    </div>
    
  );
};

export default Experiences;
