import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { getBlogPostBySlug, getRelatedPosts } from "@/lib/blog"
import { CalendarIcon, User2, ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.id)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <Image src="/CoPoint.svg" alt="CoPoint Data Logo" width={60} height={20} priority />
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/services" className="nav-link">
              Services
            </Link>
            <Link href="/blog" className="nav-link active">
              Blog
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/careers" className="nav-link">
              Careers
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-navy py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-white">{post.title}</h1>
              <div className="flex items-center justify-center gap-6 text-white">
                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <User2 className="h-5 w-5 mr-2" />
                  <span>{post.author.name}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Link href="/blog" className="inline-flex items-center text-basin-slate hover:text-carolina-blue mb-8">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>

              <div className="relative h-80 w-full mb-8 rounded-lg overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg?height=600&width=1200"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                {post.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image
                      src={post.author.image || "/placeholder.svg"}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-basin-slate">{post.author.name}</h3>
                    <p className="text-sm text-gray-600">{post.author.role}</p>
                    <a href={`mailto:${post.author.email}`} className="text-sm text-carolina-blue hover:underline">
                      {post.author.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-gray-bg">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-light text-navy mb-8">Related Articles</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <article
                      key={relatedPost.id}
                      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all"
                    >
                      <div className="relative h-48 w-full">
                        <Image
                          src={relatedPost.image || "/placeholder.svg?height=600&width=1200"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-3 text-basin-slate">
                          <Link
                            href={`/blog/${relatedPost.slug}`}
                            className="hover:text-carolina-blue transition-colors"
                          >
                            {relatedPost.title}
                          </Link>
                        </h3>
                        <p className="text-black mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                        <Link
                          href={`/blog/${relatedPost.slug}`}
                          className="inline-flex items-center text-basin-slate hover:text-carolina-blue font-semibold"
                        >
                          Read More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-carolina-blue">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-navy">Ready to transform your data strategy?</h2>
            <p className="text-black mb-8 max-w-2xl mx-auto">
              Lets discuss how CoPoint Data can help you leverage the full power of Microsofts data ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-navy hover:bg-white/90">Contact Us</Button>
              <Button variant="outline" className="bg-transparent border-navy text-navy hover:bg-carolina-blue/90">
                Explore Our Services
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <Image src="/CoPoint.svg" alt="CoPoint Data Logo" width={120} height={40} priority />
              </div>
              <p className="text-black mb-4">All AI, All Data, All of the Time</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-navy hover:text-carolina-blue">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-navy hover:text-carolina-blue">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-navy hover:text-carolina-blue">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-navy hover:text-carolina-blue">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-black">
                Services
                <div className="w-16 h-0.5 bg-carolina-blue mt-2"></div>
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services" className="nav-link">
                    AI
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="nav-link">
                    Data
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="nav-link">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-black">
                Company
                <div className="w-16 h-0.5 bg-carolina-blue mt-2"></div>
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="nav-link">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="nav-link">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="nav-link">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-black">
                Contact Us
                <div className="w-16 h-0.5 bg-carolina-blue mt-2"></div>
              </h3>
              <address className="not-italic text-black">
                <p className="mb-4 font-semibold">CoPoint Data Global HQ</p>
                <p className="mb-2">5646 Milton St. Suite 231</p>
                <p className="mb-4">Dallas, TX 75206</p>

                <p className="mb-2 font-semibold">CoPoint Data India</p>
                <p className="mb-2">1st Floor, Unitech Trade Center</p>
                <p className="mb-2">Sushant Lok Phase 1, Sector 43</p>
                <p className="mb-4">Gurugram, Haryana 122022</p>

                <p className="mb-2">
                  <Link href="mailto:info@copointdata.com" className="nav-link">
                    info@copointdata.com
                  </Link>
                </p>
                <p>
                  <Link href="tel:+12065551234" className="nav-link">
                    (206) 555-1234
                  </Link>
                </p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-black">
            <p>&copy; {new Date().getFullYear()} CoPoint Data. All rights reserved.</p>
            <div className="flex justify-center mt-4 space-x-4">
              <Link href="#" className="nav-link">
                Privacy Policy
              </Link>
              <Link href="#" className="nav-link">
                Terms of Service
              </Link>
              <Link href="#" className="nav-link">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
