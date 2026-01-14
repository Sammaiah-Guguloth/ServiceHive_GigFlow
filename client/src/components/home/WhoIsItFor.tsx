const WhoIsItFor = () => {
  return (
    <section className="relative bg-[#050505] py-10 overflow-hidden">
      {/* Background Decorative Blob - ZBS Capital style */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Title with Bracket Accent */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            Unified <span className="text-emerald-500">Ecosystem</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-emerald-500/30" />
            <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.3em]">
              Fluid Roles • One Account 
            </p>
            <div className="h-[1px] w-12 bg-emerald-500/30" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Clients / Project Owners */}
          <div className="group relative">
            {/* The "Bracket" Border Effect from ZBS references */}
            <div className="absolute -inset-2 border border-emerald-500/10 rounded-3xl group-hover:border-emerald-500/30 transition-colors" />
            
            <div className="relative bg-[#0A0A0A] border border-white/10 p-10 rounded-2xl h-full shadow-2xl transition-transform group-hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Project Owners</h3>
              </div>
              
              <ul className="space-y-6">
                {[
                  { label: "Gig Posting", desc: "Post high-intent gigs with structured budgets instantly." },
                  { label: "Bid Oversight", desc: "Access a centralized dashboard to review and filter talent proposals" },
                  { label: "Atomic Hiring", desc: "Execute 'one-click' hiring with automated competitor rejection" }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-emerald-500 font-mono text-xs mt-1">0{i+1}</span>
                    <div>
                      <p className="text-white font-bold text-sm uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Freelancers / Strategic Talent */}
          <div className="group relative">
            <div className="absolute -inset-2 border border-blue-500/10 rounded-3xl group-hover:border-blue-500/30 transition-colors" />
            
            <div className="relative bg-[#0A0A0A] border border-white/10 p-10 rounded-2xl h-full shadow-2xl transition-transform group-hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Dynamic Talent</h3>
              </div>
              
              <ul className="space-y-6">
                {[
                  { label: "Browse Gigs", desc: "Filter and discover open gigs using a high-performance search query system." },
                  { label: "Bidding", desc: "Submit competitive proposals with real-time pricing and messaging." },
                  { label: "Instant Signal", desc: "Receive real-time hire notifications via Socket.io integration." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-blue-500 font-mono text-xs mt-1">0{i+1}</span>
                    <div>
                      <p className="text-white font-bold text-sm uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;