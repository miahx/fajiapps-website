export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-gray-900 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent mb-2">
            FajiApp
          </h3>
          <p className="text-gray-400">Bringing communities together, one conversation at a time</p>
        </div>

        {/* Company Information */}
        <div className="mb-6 space-y-2">
          <p className="text-gray-300 font-medium">A product of MiahX Dynamics Ltd.</p>
          <p className="text-gray-400">
            <a href="mailto:info.miahx@gmail.com" className="hover:text-orange-400 transition-colors duration-300">
              info.miahx@gmail.com
            </a>
          </p>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <p className="text-gray-500">© 2025 FajiApp. All rights reserved. Made with ❤️ for our community</p>
        </div>
      </div>
    </footer>
  )
}
