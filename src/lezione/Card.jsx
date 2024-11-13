export default function Card({ children }) {
  return (
    <div className="bg-gray-300 rounded-md border border-red-500">
      {children}
    </div>
  );
}
