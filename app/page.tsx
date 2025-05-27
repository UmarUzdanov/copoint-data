import Link from "next/link"
import Image from "next/image"
import {Button} from "@/components/ui/button"
import {ChevronRight, Handshake, LineChart, Target} from "lucide-react"

export default function Home() {
  return (
      <div className="flex flex-col min-h-screen">
        {/* Navigation */}
        <header className="sticky top-0 z-50 w-full border-b bg-white">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center">
                <Image
                    src="/CoPoint.svg"
                    alt="CoPoint Data Logo"
                    width={60}
                    height={20}
                    priority
                />
              </Link>
            </div>
            <nav className="hidden md:flex gap-6">
              <Link href="/" className="nav-link active hover:text-carolina-blue transition-colors duration-200">
                Home
              </Link>
              <Link href="/services" className="nav-link hover:text-carolina-blue transition-colors duration-200">
                Services
              </Link>
              <Link href="/blog" className="nav-link hover:text-carolina-blue transition-colors duration-200">
                Blog
              </Link>
              <Link href="/about" className="nav-link hover:text-carolina-blue transition-colors duration-200">
                About
              </Link>
              <Link href="/contact" className="nav-link hover:text-carolina-blue transition-colors duration-200">
                Contact
              </Link>
            </nav>
            <Button className="hidden md:flex bg-carolina-blue text-navy hover:bg-navy hover:text-white transition-colors duration-300">Get Started</Button>
            <Button variant="ghost" size="icon" className="md:hidden hover:bg-gray-100 transition-colors duration-200">
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
          {/* Hero Section - Reduced height by 50% as requested */}
          <section className="relative h-[50vh] flex items-center">
            <div className="absolute inset-0 z-0">
              <Image
                  src="/home_hero.jpg"
                  alt="Microsoft Tech Dashboard"
                  fill
                  className="object-cover"
                  priority
              />
              <div className="absolute inset-0 bg-navy/70"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-white">
                  All Data<br />
                  All Microsoft<br />
                  All AI
                </h1>
                <p className="text-white text-lg mb-8">
                  CoPoint Data helps organizations leverage Microsoft technologies to transform raw data into actionable
                  insights and drive business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-carolina-blue text-navy hover:bg-navy hover:text-white transition-colors duration-300">Learn More</Button>
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-navy transition-colors duration-300">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </section>
          {/* We put human intelligence in AI Section */}
          <section id="expertise" className="py-16 bg-gray-bg">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-light text-navy mb-4">
                  We put{" "}
                  <span className="font-semibold text-basin-slate">
                  human intelligence
                </span>{" "}
                  in AI
                </h2>
                <div className="section-divider"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-sm  hover:shadow-lg hover:translate-y-[-5px]">
                  <h3 className="text-xl font-semibold mb-4 text-basin-slate">
                    Want to implement AI but dont have a comprehensive strategy to do it?
                  </h3>
                  <p className="text-black">
                    At CoPoint Data, we help you develop a strategic approach to AI implementation that aligns with your
                    business goals and delivers measurable results.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg hover:translate-y-[-5px]">
                  <h3 className="text-xl font-semibold mb-4 text-basin-slate">
                    Want to know how to leverage the various AI and data tools in the Microsoft stack?
                  </h3>
                  <p className="text-black">
                    Our expertise in Microsofts ecosystem allows us to help you navigate and implement the right tools
                    for your specific needs and challenges.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg hover:translate-y-[-5px]">
                  <h3 className="text-xl font-semibold mb-4 text-basin-slate">
                    Do have a clear ROI or business outcomes you are trying to achieve through implementing AI?
                  </h3>
                  <p className="text-black">
                    We focus on delivering tangible business value, ensuring your AI investments translate to measurable
                    outcomes and competitive advantages.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Our Approach Section */}
          <section id="approach" className="py-16 bg-gray-bg">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-light text-navy mb-4">Our Approach</h2>
                <div className="section-divider"></div>

              </div>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="relative">
                  <div className="bg-carolina-blue text-navy p-6 rounded-lg h-full hover:shadow-lg hover:-translate-y-1 cursor-pointer transition-all duration-300">
                    <div className="flex justify-center mb-3">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                            stroke="#13294B"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-navy text-center">Strategize</h3>
                    <p className="text-black text-center">
                      We work with you to understand your business goals and develop a comprehensive data strategy.
                    </p>
                  </div>
                  <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <ChevronRight className="h-6 w-6 text-carolina-blue" />
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-carolina-blue text-navy p-6 rounded-lg h-full hover:shadow-lg hover:-translate-y-1 cursor-pointer transition-all duration-300">
                    <div className="flex justify-center mb-3">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                            stroke="#13294B"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M9 12L11 14L15 10"
                            stroke="#13294B"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-navy text-center">Implement</h3>
                    <p className="text-black text-center">
                      Our expert team builds and deploys Microsoft data solutions tailored to your needs.
                    </p>
                  </div>
                  <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <ChevronRight className="h-6 w-6 text-carolina-blue" />
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-carolina-blue text-navy p-6 rounded-lg h-full hover:shadow-lg hover:-translate-y-1 cursor-pointer transition-all duration-300">
                    <div className="flex justify-center mb-3">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3 7L9 4L15 7L21 4V17L15 20L9 17L3 20V7Z"
                            stroke="#13294B"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path d="M9 4V17" stroke="#13294B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path
                            d="M15 7V20"
                            stroke="#13294B"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-navy text-center">Transition</h3>
                    <p className="text-black text-center">
                      We ensure smooth adoption with comprehensive training and change management.
                    </p>
                  </div>
                  <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <ChevronRight className="h-6 w-6 text-carolina-blue" />
                  </div>
                </div>
                <div>
                  <div className="bg-carolina-blue text-navy p-6 rounded-lg h-full hover:shadow-lg hover:-translate-y-1 cursor-pointer transition-all duration-300">
                    <div className="flex justify-center mb-3">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18 18.7023C16.5536 17.0208 14.4154 16 12 16C9.58457 16 7.44637 17.0208 6 18.7023M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z"
                            stroke="#13294B"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-navy text-center">Support</h3>
                    <p className="text-black text-center">
                      Ongoing support and optimization to ensure your data solutions continue to deliver value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Our Vision Section */}
          <section className="py-16 bg-navy">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-4">Our Vision</h2>
              <div className="section-divider"></div>
              <p className="text-white max-w-3xl mx-auto mt-6">
                We transform businesses through process improvement and data insights by leveraging AI on the Microsoft
                stack.
              </p>
            </div>
          </section>
          {/* Core Values Section */}
          <section id="values" className="py-16 bg-gray-bg">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-light text-navy mb-4">Our Core Values</h2>
                <div className="section-divider"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start">
                    <div className="bg-carolina-blue/20 p-3 rounded-full mr-4 transition-colors duration-300 group-hover:bg-carolina-blue/40">
                      <Target className="h-6 w-6 text-basin-slate" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-basin-slate">Be Purposeful</h3>
                      <p className="text-black">Think Straight, Communicate, Always to the Right Thing</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start">
                    <div className="bg-carolina-blue/20 p-3 rounded-full mr-4 transition-colors duration-300 group-hover:bg-carolina-blue/40">
                      <Handshake className="h-6 w-6 text-basin-slate" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-basin-slate">In Partnership</h3>
                      <p className="text-black">With our Team, For Our Clients, In Our Communities</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start">
                    <div className="bg-carolina-blue/20 p-3 rounded-full mr-4 transition-colors duration-300 group-hover:bg-carolina-blue/40">
                      <LineChart className="h-6 w-6 text-basin-slate" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-basin-slate">Create Impact</h3>
                      <p className="text-black">
                        Deliver Value-Based Solutions, Help Individuals Achieve Their Dreams, Demand Profitable Growth
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* CTA Section */}
          <section className="py-16 bg-carolina-blue">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-light mb-4 text-navy">Ready to transform your data strategy?</h2>
              <p className="text-black mb-8 max-w-2xl mx-auto">
                Lets discuss how CoPoint Data can help you leverage the full power of Microsofts data ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-navy hover:bg-navy hover:text-white transition-colors duration-300">Contact Us</Button>
                <Button variant="outline" className="bg-transparent border-navy text-navy hover:bg-white hover:border-white transition-all duration-300">
                  Explore Solutions
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
                  <Image
                      src="/CoPoint.svg"
                      alt="CoPoint Data Logo"
                      width={120}
                      height={40}
                      priority
                  />
                </div>
                <p className="text-black mb-4">All Data, All Microsoft, All of the Time</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-navy hover:text-carolina-blue transition-transform duration-300 hover:scale-110">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-navy hover:text-carolina-blue transition-transform duration-300 hover:scale-110">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-navy hover:text-carolina-blue transition-transform duration-300 hover:scale-110">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-navy hover:text-carolina-blue transition-transform duration-300 hover:scale-110">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                          fillRule="evenodd"
                          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                          clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-black">
                  Services
                  <div className="w-16 h-0.5 bg-carolina-blue mt-2"></div>
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/services"
                       className="nav-link hover:text-carolina-blue hover:translate-x-1 inline-block transition-all duration-200">
                      Data Management
                    </a>
                  </li>
                  <li>
                    <a href="/services"
                       className="nav-link hover:text-carolina-blue hover:translate-x-1 inline-block transition-all duration-200">
                      AI Solutions
                    </a>
                  </li>
                  <li>
                    <a href="/services"
                       className="nav-link hover:text-carolina-blue hover:translate-x-1 inline-block transition-all duration-200">
                      Business Intelligence
                    </a>
                  </li>
                  <li>
                    <a href="/services"
                       className="nav-link hover:text-carolina-blue hover:translate-x-1 inline-block transition-all duration-200">
                      Cloud Solutions
                    </a>
                  </li>
                  <li>
                    <a href="/services"
                       className="nav-link hover:text-carolina-blue hover:translate-x-1 inline-block transition-all duration-200">
                      Data Strategy
                    </a>
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
                    <a href="#" className="nav-link hover:text-carolina-blue hover:translate-x-1 inline-block transition-all duration-200">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link hover:text-carolina-blue hover:translate-x-1 inline-block transition-all duration-200">
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link hover:text-carolina-blue hover:translate-x-1 inline-block transition-all duration-200">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link hover:text-carolina-blue hover:translate-x-1 inline-block transition-all duration-200">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link hover:text-carolina-blue hover:translate-x-1 inline-block transition-all duration-200">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-black">
                  Contact Us
                  <div className="w-16 h-0.5 bg-carolina-blue mt-2"></div>
                </h3>
                <address className="not-italic text-black">
                  <p className="mb-2">123 Data Street</p>
                  <p className="mb-2">Seattle, WA 98101</p>
                  <p className="mb-2">United States</p>
                  <p className="mb-2">
                    <a href="mailto:info@copointdata.com" className="nav-link hover:text-carolina-blue transition-colors duration-200">
                      info@copointdata.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:+12065551234" className="nav-link hover:text-carolina-blue transition-colors duration-200">
                      (206) 555-1234
                    </a>
                  </p>
                </address>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-12 pt-8 text-center text-black">
              <p>&copy; {new Date().getFullYear()} CoPoint Data. All rights reserved.</p>
              <div className="flex justify-center mt-4 space-x-4">
                <a href="#" className="nav-link hover:text-carolina-blue hover:underline transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="nav-link hover:text-carolina-blue hover:underline transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="nav-link hover:text-carolina-blue hover:underline transition-colors duration-200">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
  )
}