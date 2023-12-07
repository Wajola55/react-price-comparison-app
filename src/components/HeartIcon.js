import React from 'react';

function HeartIcon({ isFavorite, onClick }) {
  return (
    <svg
      className={`heart-icon ${isFavorite ? 'red-heart' : 'black-heart'}`}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  );
}

export default HeartIcon;
