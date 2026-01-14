import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-[#050505] overflow-hidden py-10 lg:py-12">
      {/* Dynamic Background Elements - Inspired by ZBS Capital Blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
      
      {/* Subtle Grid Overlay for that "Tech" feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge: Focused on the Core Feature (Real-time Bidding) */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-4 py-1.5 mb-10 transition-all hover:bg-emerald-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
            Mini-Freelance Marketplace Platform
            </span>
          </div>

          {/* Main Heading: Focused on the CRUD/Marketplace nature */}
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8">
            POST. BID. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-blue-500">
              HIRE INSTANTLY.
            </span>
          </h1>

          {/* Subtext: Directly referencing the PDF's Hiring Logic */}
          <p className="max-w-2xl text-base md:text-xl text-gray-400 leading-relaxed mb-12">
            The ultimate mini-marketplace for high-intent collaboration. 
            Experience <span className="text-white italic">Atomic Hiring Logic</span>—where clients assign gigs and 
            freelancers secure work through a seamless, real-time bidding ecosystem.
          </p>

          {/* Action Area: Mimicking the "Submit Your Project" bracket style from your images */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            
            {/* Primary Action (Client side) */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-emerald-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <Link
                to="/post-gig"
                className="relative flex items-center justify-center px-10 py-5 bg-black rounded-lg leading-none"
              >
                <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm">
                  [ Post a Gig ]
                </span>
              </Link>
            </div>

            {/* Secondary Action (Freelancer side) */}
            <Link
              to="/gigs"
              className="text-white text-sm font-bold tracking-[0.15em] uppercase hover:text-emerald-400 transition-colors flex items-center gap-3 group"
            >
              Explore Gigs 
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

        

        </div>
      </div>
    </section>
  );
};

export default HeroSection;