import React, { useState } from 'react';
import { CommentComponent, Comment, initialComments } from '../components/Comment';

const MIN_RATING = 1;
const MAX_RATING = 5;

const Experiences: React.FC = () => {
  const [state, setState] = useState({
    comments: initialComments,
    newCommentContent: "",
    newCommentRating: 0,
  });

  const avatarMale = 'https://xsgames.co/randomusers/avatar.php?g=male';

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    const { newCommentContent, newCommentRating } = state;

    if (newCommentContent.trim() === "" || newCommentRating < MIN_RATING || newCommentRating > MAX_RATING) {
      alert("Por favor, ingresa un comentario válido y una calificación entre 1 y 5.");
      return;
    }

    const newComment: Comment = {
      id: Math.floor(Math.random() * 1000),
      author: "Sebas",
      content: newCommentContent,
      rating: newCommentRating,
      likes: 0,
      date: new Date().toISOString().split('T')[0],
      avatar: avatarMale,
    };

    setState(prevState => ({
      comments: [...prevState.comments, newComment],
      newCommentContent: "",
      newCommentRating: 0,
    }));
  };

  return (
    <div className="container mx-auto mt-10 sm:mt-24 px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-blue-600 mb-8 sm:mb-10">
        ¡Descubre Nuestros Servicios!
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {state.comments.map((comment) => (
          <CommentComponent key={comment.id} comment={comment} />
        ))}
      </section>
      <form onSubmit={handleSubmitComment} className="mt-4">
        <div className="mb-4">
          <label htmlFor="content" className="block font-bold text-gray-700 mb-2">
            Escribe un comentario:
          </label>
          <input
            type="text"
            id="content"
            value={state.newCommentContent}
            onChange={(e) => setState({ ...state, newCommentContent: e.target.value })}
            placeholder="Escribe un comentario..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block font-bold text-gray-700 mb-2">
            Calificación ({MIN_RATING}-{MAX_RATING}):
          </label>
          <input
            type="number"
            id="rating"
            min={MIN_RATING}
            max={MAX_RATING}
            value={state.newCommentRating}
            onChange={(e) => setState({ ...state, newCommentRating: Number(e.target.value) })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2"
        >
          Enviar Comentario
        </button>
      </form>
    </div>
  );
};

export default Experiences;
