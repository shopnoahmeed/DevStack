function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-5 w-5 items-center justify-center rounded bg-fuchsia-500 text-[9px] font-bold text-white">
                DS
              </div>
              <h2 className="text-sm font-semibold text-slate-900">
                Dev Stack
              </h2>
            </div>

            <p className="max-w-xs text-xs leading-5 text-slate-400">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-5 flex gap-4 text-xs text-slate-600">
              <a href="#" className="hover:text-slate-900">GitHub</a>
              <a href="#" className="hover:text-slate-900">Twitter</a>
              <a href="#" className="hover:text-slate-900">LinkedIn</a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-[10px] font-bold uppercase text-slate-900">
              Product
            </h3>

            <div className="space-y-2 text-xs text-slate-400">
              <a href="#" className="block hover:text-slate-700">Home</a>
              <a href="#" className="block hover:text-slate-700">Technologies</a>
              <a href="#" className="block hover:text-slate-700">Projects</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-[10px] font-bold uppercase text-slate-900">
              Company
            </h3>

            <div className="space-y-2 text-xs text-slate-400">
              <a href="#" className="block hover:text-slate-700">About</a>
              <a href="#" className="block hover:text-slate-700">Contact</a>
              <a href="#" className="block hover:text-slate-700">Careers</a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-[10px] font-bold uppercase text-slate-900">
              Legal
            </h3>

            <div className="space-y-2 text-xs text-slate-400">
              <a href="#" className="block hover:text-slate-700">
                Privacy Policy
              </a>
              <a href="#" className="block hover:text-slate-700">
                Terms of Service
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-5 text-[10px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer