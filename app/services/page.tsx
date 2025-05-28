import Link from "next/link"
import {Button} from "@/components/ui/button"
import {ArrowRight, BarChart3, Brain, ChevronRight, Cloud, Database, FileText} from "lucide-react"
import Image from "next/image";

export default function ServicesPage() {
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
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/services" className="nav-link active">
              Services
            </Link>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </nav>
          <Link href="/contact">
            <Button
                className="hidden md:flex bg-carolina-blue text-navy hover:bg-navy hover:text-white transition-colors duration-300"
                aria-label="Get Started">Get Started</Button>
          </Link> <Button variant="ghost" size="icon" className="md:hidden">
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
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
                src="/copoint-hero-interior-1440.png"
                alt="Contact Us"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-navy/70"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-white">Our Services</h1>
              <p className="text-white text-lg mb-8">
                Comprehensive data and AI solutions powered by Microsoft technologies to transform your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-carolina-blue text-navy hover:bg-carolina-blue/90">Contact Us</Button>
                </Link>
                <Link href="/blog">
                  <Button variant="outline"
                          className="text-white border-carolina-blue bg-transparent hover:bg-carolina-blue/20">
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-navy mb-4">
                All Data, All Microsoft, All AI
              </h2>
              <div className="section-divider"></div>
              <p className="text-black max-w-3xl mx-auto mt-6">
                At CoPoint Data, we specialize in leveraging the full power of Microsofts data ecosystem to help
                businesses transform their operations, make data-driven decisions, and achieve measurable results.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Data Management */}
              <div className="bg-gray-bg p-8 rounded-lg transition-all hover:shadow-lg hover:translate-y-[-5px]">
                <div className="bg-carolina-blue/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Database className="h-8 w-8 text-basin-slate" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-basin-slate">Data Management</h3>
                <p className="text-black mb-6">
                  We help organizations consolidate, organize, and govern their data assets to create a solid foundation
                  for analytics and AI initiatives.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-carolina-blue shrink-0 mt-0.5" />
                    <span>Data integration and consolidation</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-carolina-blue shrink-0 mt-0.5" />
                    <span>Data quality and governance</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-carolina-blue shrink-0 mt-0.5" />
                    <span>Data warehousing and lake solutions</span>
                  </li>
                </ul>
                <Link href="/contact"
                      className="inline-flex items-center text-basin-slate hover:text-carolina-blue font-semibold">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* AI Solutions */}
              <div className="bg-gray-bg p-8 rounded-lg transition-all hover:shadow-lg hover:translate-y-[-5px]">
                <div className="bg-carolina-blue/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Brain className="h-8 w-8 text-basin-slate" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-basin-slate">AI Solutions</h3>
                <p className="text-black mb-6">
                  We put human intelligence in AI, helping organizations implement practical AI solutions that deliver
                  tangible business value and measurable outcomes.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-carolina-blue shrink-0 mt-0.5" />
                    <span>AI strategy and roadmap development</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-carolina-blue shrink-0 mt-0.5" />
                    <span>Machine learning model development</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-carolina-blue shrink-0 mt-0.5" />
                    <span>AI-powered process automation</span>
                  </li>
                </ul>
                <Link href="/contact"
                      className="inline-flex items-center text-basin-slate hover:text-carolina-blue font-semibold">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Business Intelligence */}
              <div className="bg-gray-bg p-8 rounded-lg transition-all hover:shadow-lg hover:translate-y-[-5px]">
                <div className="bg-carolina-blue/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <BarChart3 className="h-8 w-8 text-basin-slate" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-basin-slate">Business Intelligence</h3>
                <p className="text-black mb-6">
                  We transform raw data into actionable insights through powerful visualization and analytics solutions
                  that enable better decision-making.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-carolina-blue shrink-0 mt-0.5" />
                    <span>Dashboard development and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-carolina-blue shrink-0 mt-0.5" />
                    <span>Advanced analytics implementation</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-carolina-blue shrink-0 mt-0.5" />
                    <span>Self-service BI enablement</span>
                  </li>
                </ul>
                <Link href="/contact"
                      className="inline-flex items-center text-basin-slate hover:text-carolina-blue font-semibold">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Cloud Solutions */}
              <div className="bg-gray-bg p-8 rounded-lg transition-all hover:shadow-lg hover:translate-y-[-5px]">
                <div className="bg-carolina-blue/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Cloud className="h-8 w-8 text-basin-slate" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-basin-slate">Cloud Solutions</h3>
                <p className="text-black mb-6">
                  We help organizations leverage the power of Microsoft Azure to build scalable, secure, and
                  cost-effective cloud solutions for their data and AI needs.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-carolina-blue shrink-0 mt-0.5" />
                    <span>Azure migration and modernization</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-carolina-blue shrink-0 mt-0.5" />
                    <span>Cloud architecture and implementation</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-carolina-blue shrink-0 mt-0.5" />
                    <span>Cloud optimization and management</span>
                  </li>
                </ul>
                <Link href="/contact"
                      className="inline-flex items-center text-basin-slate hover:text-carolina-blue font-semibold">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Data Strategy */}
              <div className="bg-gray-bg p-8 rounded-lg transition-all hover:shadow-lg hover:translate-y-[-5px]">
                <div className="bg-carolina-blue/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <FileText className="h-8 w-8 text-basin-slate" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-basin-slate">Data Strategy</h3>
                <p className="text-black mb-6">
                  We help organizations develop comprehensive data strategies that align with their business goals and
                  provide a roadmap for data-driven transformation.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-carolina-blue shrink-0 mt-0.5" />
                    <span>Data maturity assessment</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-carolina-blue shrink-0 mt-0.5" />
                    <span>Strategic roadmap development</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-carolina-blue shrink-0 mt-0.5" />
                    <span>Data governance framework design</span>
                  </li>
                </ul>
                <Link href="/contact"
                      className="inline-flex items-center text-basin-slate hover:text-carolina-blue font-semibold">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* AI Productivity Sprint */}
              <div className="bg-gray-bg p-8 rounded-lg transition-all hover:shadow-lg hover:translate-y-[-5px]">
                <div className="bg-carolina-blue/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                       className="text-basin-slate">
                    <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-basin-slate">AI Productivity Sprint</h3>
                <p className="text-black mb-6">
                  Our intensive, hands-on program that rapidly equips your team with practical AI skills to enhance
                  daily work and deliver immediate results.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-carolina-blue shrink-0 mt-0.5" />
                    <span>Customized AI training for your team</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-carolina-blue shrink-0 mt-0.5" />
                    <span>Workflow analysis and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-carolina-blue shrink-0 mt-0.5" />
                    <span>Hands-on AI implementation support</span>
                  </li>
                </ul>
                <Link href="/contact"
                      className="inline-flex items-center text-basin-slate hover:text-carolina-blue font-semibold">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* AI Productivity Sprint Feature */}

        <section className="py-16 bg-basin-slate">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-white mb-4">AI Productivity Sprint</h2>
                <div className="w-16 h-1 bg-carolina-blue my-4"></div>

                {/* Existing Paragraphs */}
                <p className="text-white mb-6">
                  Transform your team's productivity through our intensive, hands-on AI Productivity Sprint. This
                  focused program takes professionals from any background and rapidly equips them with practical AI
                  skills that enhance their daily work.
                </p>
                <p className="text-white mb-6">
                  Instead of theoretical concepts, we concentrate on immediate implementation and measurable results.
                </p>

                <p className="text-white mb-6">
                  Our AI Productivity Sprint bridges the gap between AI’s potential and real-world implementation.
                  Working directly with your team, we identify specific workflows and tasks where AI can create
                  immediate
                  impact. Through intensive guided practice and real-time implementation, participants learn to leverage
                  AI tools specifically chosen for their roles.
                </p>
                <p className="text-white mb-6">
                  Traditional AI training often gets stuck in theory or general concepts. Our sprint approach is
                  different:
                  we begin with your team’s actual work and rapidly build practical AI capabilities around it.
                  Participants
                  don’t just learn about AI – they complete the sprint already implementing AI solutions in their daily
                  tasks.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-white">Sprint Structure</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-carolina-blue rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">
                      <span className="text-navy font-semibold">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Morning Acceleration: Foundation Building</h4>
                      <p className="text-white">
                        We begin by establishing a practical understanding of AI capabilities relevant
                        to your team's work, ensuring immediate relevance and application.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-carolina-blue rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">
                      <span className="text-navy font-semibold">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Afternoon Implementation: Hands-on Integration
                      </h4>
                      <p className="text-white">
                        Teams work directly with AI tools chosen for their specific needs,
                        guided through real task automation, content creation, analysis,
                        and workflow optimization.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-carolina-blue rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">
                      <span className="text-navy font-semibold">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Post-Sprint Momentum</h4>
                      <p className="text-white">
                        Participants receive detailed implementation guides and follow-up support
                        to ensure successful integration into their daily work with structured check-ins.
                      </p>
                    </div>
                  </div>
                </div>

                <Link href="/contact">
                  <Button className="bg-carolina-blue text-navy hover:bg-carolina-blue/90">Schedule Your Sprint</Button>
                </Link>
              </div>

              {/* Right Column */}
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6 text-basin-slate">Sprint Outcomes</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-carolina-blue/20 p-2 rounded-full mr-4 shrink-0">
                      <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-basin-slate"
                      >
                        <path
                            d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21
12 21C7.02944 21 3 16.9706 3 12C3 7.02944
7.02944 3 12 3C16.9706 3 21 7.02944
21 12Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span>Master practical usage of role-specific AI tools that enhance daily work</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-carolina-blue/20 p-2 rounded-full mr-4 shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                           className="text-basin-slate">
                        <path
                            d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>Create and implement automated workflows that save hours of manual work</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-carolina-blue/20 p-2 rounded-full mr-4 shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                           className="text-basin-slate">
                        <path
                            d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>Develop confidence in applying AI solutions to real workplace challenges</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-carolina-blue/20 p-2 rounded-full mr-4 shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                           className="text-basin-slate">
                        <path
                            d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>Establish clear processes for identifying AI-suitable tasks in their roles</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-carolina-blue/20 p-2 rounded-full mr-4 shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                           className="text-basin-slate">
                        <path
                            d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>Build expertise in prompt engineering and AI tool optimization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-carolina-blue/20 p-2 rounded-full mr-4 shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                           className="text-basin-slate">
                        <path
                            d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>Create guidelines for responsible and effective AI implementation</span>
                  </li>
                </ul>

                {/* Who Benefits Most */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-semibold mb-4 text-basin-slate">Who Benefits Most</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-carolina-blue shrink-0 mt-0.5" />
                      <span>Teams seeking rapid productivity enhancement through AI implementation</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-carolina-blue shrink-0 mt-0.5" />
                      <span>Departments looking to quickly streamline workflows and reduce manual tasks</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-carolina-blue shrink-0 mt-0.5" />
                      <span>Organizations wanting to build practical AI capabilities across their workforce</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-carolina-blue shrink-0 mt-0.5"/>
                      <span>Professionals determined to stay competitive in an AI-enhanced workplace</span>
                    </li>
                  </ul>
                </div>

                {/* Custom Sprint Design */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-semibold mb-4 text-basin-slate">Custom Sprint Design</h4>
                  <p className="text-black mb-4">Before each sprint, we:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-carolina-blue shrink-0 mt-0.5"/>
                      <span>Analyze your team's current workflows and pain points</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-carolina-blue shrink-0 mt-0.5"/>
                      <span>Identify high-impact areas for AI implementation</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-carolina-blue shrink-0 mt-0.5"/>
                      <span>Select relevant tools and examples for your industry</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-navy mb-4">Our Approach</h2>
              <div className="section-divider"></div>
              <p className="text-black max-w-3xl mx-auto mt-6">
                We follow a proven methodology to ensure successful implementation of data and AI solutions that deliver
                measurable business value.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="relative">
                <div className="bg-carolina-blue text-navy p-6 rounded-lg h-full transition-all hover:shadow-lg">
                  <div className="flex justify-center mb-3">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                          stroke="#13294B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                <div className="bg-carolina-blue text-navy p-6 rounded-lg h-full transition-all hover:shadow-lg">
                  <div className="flex justify-center mb-3">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                          stroke="#13294B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 12L11 14L15 10" stroke="#13294B" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round"/>
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
                <div className="bg-carolina-blue text-navy p-6 rounded-lg h-full transition-all hover:shadow-lg">
                  <div className="flex justify-center mb-3">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 7L9 4L15 7L21 4V17L15 20L9 17L3 20V7Z" stroke="#13294B" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 4V17" stroke="#13294B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15 7V20" stroke="#13294B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                <div className="bg-carolina-blue text-navy p-6 rounded-lg h-full transition-all hover:shadow-lg">
                  <div className="flex justify-center mb-3">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M18 18.7023C16.5536 17.0208 14.4154 16 12 16C9.58457 16 7.44637 17.0208 6 18.7023M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z"
                          stroke="#13294B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

        {/* CTA Section */}
        <section className="py-16 bg-carolina-blue">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-navy">Ready to transform your data strategy?</h2>
            <p className="text-black mb-8 max-w-2xl mx-auto">
              Lets discuss how CoPoint Data can help you leverage the full power of Microsofts data ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-navy hover:bg-white/90">Contact Us</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="bg-transparent border-navy text-navy hover:bg-carolina-blue/90">Schedule
                  a Consultation</Button>
              </Link>
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
                    Data Management
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="nav-link">
                    AI Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="nav-link">
                    Business Intelligence
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="nav-link">
                    Cloud Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="nav-link">
                    Data Strategy
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
                  <Link href="/about" className="nav-link">
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
                <p className="mb-2">123 Data Street</p>
                <p className="mb-2">Seattle, WA 98101</p>
                <p className="mb-2">United States</p>
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
