function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-fuchsia-500 text-xs font-bold text-white">
                DS
              </div>

              <h2 className="text-lg font-semibold text-slate-900">
                Dev Stack
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-6 text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-6 flex gap-5 text-sm font-medium text-slate-600">
              <a href="#" className="hover:text-slate-900 transition">
                GitHub
              </a>

              <a href="#" className="hover:text-slate-900 transition">
                Twitter
              </a>

              <a href="#" className="hover:text-slate-900 transition">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-wider text-slate-900">
              Product
            </h3>

            <div className="space-y-3 text-sm text-slate-500">
              <a href="#" className="block hover:text-slate-800 transition">
                Home
              </a>

              <a href="#" className="block hover:text-slate-800 transition">
                Technologies
              </a>

              <a href="#" className="block hover:text-slate-800 transition">
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-wider text-slate-900">
              Company
            </h3>

            <div className="space-y-3 text-sm text-slate-500">
              <a href="#" className="block hover:text-slate-800 transition">
                About
              </a>

              <a href="#" className="block hover:text-slate-800 transition">
                Contact
              </a>

              <a href="#" className="block hover:text-slate-800 transition">
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-wider text-slate-900">
              Legal
            </h3>

            <div className="space-y-3 text-sm text-slate-500">
              <a href="#" className="block hover:text-slate-800 transition">
                Privacy Policy
              </a>

              <a href="#" className="block hover:text-slate-800 transition">
                Terms of Service
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-100 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-800 transition">
              Privacy
            </a>

            <a href="#" className="hover:text-slate-800 transition">
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer