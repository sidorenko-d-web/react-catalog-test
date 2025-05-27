import { Link } from 'react-router';

export const ReturnButton = () => {
  return (
    <Link
      to="/"
      className="text-indigo-500 hover:text-indigo-800 font-medium flex items-center w-fit justify-start mb-8"
    >
      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      Вернуться в каталог
    </Link>
  );
};
