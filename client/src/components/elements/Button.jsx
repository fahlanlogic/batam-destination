/* eslint-disable react/prop-types */
export default function Button({ children, aos }) {
  return (
    <button
      data-aos={aos}
      className="bg-green-600 px-4 py-2 rounded-full text-white font-semibold hover:!scale-110 text-sm sm:text-base">
      {children}
    </button>
  );
}
