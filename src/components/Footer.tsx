// import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-700 text-sm text-gray-400 py-6">
    <div className="max-w-5xl mx-auto px-4 text-center space-y-3">

        <div className="flex justify-center gap-6 flex-wrap">
        {[
            { href: "mailto:sheneska101@gmail.com", label: "email" },
            { href: "https://www.linkedin.com/in/sheneskawilliams", label: "linkedin" },
            { href: "https://github.com/sheneska", label: "github" },
        ].map((link) => (
            <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="relative inline-block text-gray-400 hover:text-white transition duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
            {link.label}
            </a>
        ))}
        </div>
    </div>
    </footer>

  );
}
