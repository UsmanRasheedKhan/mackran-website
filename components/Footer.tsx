export default function Footer() {
  return (
    <footer className="bg-[#0B1220] text-white mt-12">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-800">
        <div>
          <h3 className="text-2xl font-bold">Mackran<span className="text-[#C9A86A]">.</span></h3>
          <p className="mt-2 text-sm text-gray-400">Luxury properties across the UAE</p>
        </div>
        <div className="mt-6 md:mt-0 text-sm text-gray-400 text-center md:text-right">
          <p>© {new Date().getFullYear()} Mackran Real Estate. All rights reserved.</p>
          <p className="mt-2">
            <a href="mailto:info@mackran.ae" className="hover:text-[#C9A86A] transition">info@mackran.ae</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
