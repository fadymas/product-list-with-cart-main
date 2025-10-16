export default function Button({ text, onClickHandle }) {
  return (
    <button
      onClick={onClickHandle}
      className="w-full  md:self-center rounded-full bg-Red  py-3 px-6 text-center font-RedHat font-semibold text-white shadow-sm hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-Red/50 active:scale-[.99] transition"
    >
      {text}
    </button>
  );
}
