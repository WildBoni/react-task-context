export default function Button({ children, onClick }) {
  return (
    <button
      className="rounded-md hover:bg-sky-800 hover:text-white bg-green-300 py-2 px-4"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
