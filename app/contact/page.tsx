import Link from "next/link"

export default function Contact() {
  return (
    <div className="bg-white">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Contact Us</h1>
            <nav className="hidden md:flex gap-6">
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="/services" className="nav-link">
                Services
              </Link>
              <Link href="/blog" className="nav-link">
                Blog
              </Link>
              <Link href="/about" className="nav-link">
                About
              </Link>
              <Link href="/careers" className="nav-link">
                Careers
              </Link>
              <Link href="/contact" className="nav-link active">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="mb-6">
                We'd love to hear from you! Please use the form below to send us a message or reach out to us directly
                using the contact information provided.
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-basin-slate">Our Offices</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-navy mb-2">CoPoint Data Global HQ</h4>
                  <p className="text-black">5646 Milton St. Suite 231</p>
                  <p className="text-black">Dallas, TX 75206</p>
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-2">CoPoint Data India</h4>
                  <p className="text-black">1st Floor, Unitech Trade Center</p>
                  <p className="text-black">Sushant Lok Phase 1, Sector 43</p>
                  <p className="text-black">Gurugram, Haryana 122022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-black">
              CoPoint Data is a leading provider of data solutions and services. We help businesses unlock the power of
              their data to drive growth and innovation.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <address className="not-italic text-black">
              <p className="mb-4 font-semibold">CoPoint Data Global HQ</p>
              <p className="mb-2">5646 Milton St. Suite 231</p>
              <p className="mb-4">Dallas, TX 75206</p>

              <p className="mb-2 font-semibold">CoPoint Data India</p>
              <p className="mb-2">1st Floor, Unitech Trade Center</p>
              <p className="mb-2">Sushant Lok Phase 1, Sector 43</p>
              <p className="mb-4">Gurugram, Haryana 122022</p>

              <p className="mb-2">
                <Link
                  href="mailto:info@copointdata.com"
                  className="nav-link hover:text-carolina-blue transition-colors duration-200"
                >
                  info@copointdata.com
                </Link>
              </p>
              <p>
                <Link
                  href="tel:+12065551234"
                  className="nav-link hover:text-carolina-blue transition-colors duration-200"
                >
                  (206) 555-1234
                </Link>
              </p>
            </address>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="nav-link hover:text-carolina-blue transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="nav-link hover:text-carolina-blue transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="nav-link hover:text-carolina-blue transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="nav-link hover:text-carolina-blue transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="nav-link hover:text-carolina-blue transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="nav-link hover:text-carolina-blue transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} CoPoint Data. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
