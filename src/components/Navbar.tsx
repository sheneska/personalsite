export default function Navbar() {
  return (
    <nav className="w-full p-4 bg-black text-white flex justify-between items-center">
      <span className="font-semibold font-light text-xlg">Sheneska Williams</span>
      <a
        href="/SheneskaWilliamsResume.pdf"
        download
        className="relative inline-block text-gray-400 hover:text-white transition duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
      >
        Resume
      </a>

    </nav>
  );
}
