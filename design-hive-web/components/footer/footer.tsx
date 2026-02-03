import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-12 px-6 border-t border-white/10 bg-black text-white/60">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-white font-bold text-lg mb-2">DESIGN HIVE</h3>
          <p className="text-sm">© {new Date().getFullYear()} Design Hive Studio. All rights reserved.</p>
        </div>
        
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
          <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
          <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}
