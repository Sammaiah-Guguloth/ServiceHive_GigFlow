const steps = [
  { 
    title: "Gig Initiation", 
    tag: "CRUD / POST",
    description: "Define your project parameters—Title, Description, and Budget—to deploy a live Gig to the global marketplace feed.",
    detail: "Supports fluid roles: Clients can pivot to freelancers instantly." 
  },
  { 
    title: "Bid Aggregation", 
    tag: "BIDS",
    description: "Freelancers submit high-signal proposals. Our engine tracks price points and messages in a centralized bid repository.",
    detail: "Powered by a secure API architecture for high-intent bidding." 
  },
  { 
    title: "Atomic Selection", 
    tag: "ACID / SOCKET",
    description: "One-click 'Hire' logic triggers an atomic update: the Gig is assigned, the freelancer is hired, and competing bids are auto-rejected.",
    detail: "Socket.io notifications for hired talent." 
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative bg-[#050505] py-24 border-t border-white/5 overflow-hidden">
      {/* Background Accent Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header with Bracketed Subtext (ZBS Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4">
              The Workflow <br />
              <span className="text-emerald-500">Simplified.</span>
            </h2>
            <p className="mb-4 text-gray-500 text-sm font-medium tracking-wide">
              A  system designed for secure job posting and  hiring.
            </p>
          </div>
          
        </div>

        {/* Grid: Mimicking the "Latest Updates" cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group relative p-10 bg-[#0A0A0A] transition-all hover:bg-white/[0.03] border-white/10 
                ${index !== steps.length - 1 ? 'md:border-r' : ''} 
                ${index !== 0 ? 'border-t md:border-t-0' : ''}`}
            >
              {/* Monospaced Step Number */}
              <div className="flex items-center justify-between mb-12">
                <span className="font-mono text-xs text-emerald-500/50">STEP {index + 1}</span>
                <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">{step.tag}</span>
              </div>

              {/* Step Title */}
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-emerald-400 transition-colors">
                {step.title}
              </h3>

              {/* Description (Aligned with PDF Requirements) */}
              <p className="text-gray-400 text-sm leading-relaxed mb-8 min-h-[80px]">
                {step.description}
              </p>

              {/* Technical Detail (Signals depth to recruiter) */}
              <div className="pt-6 border-t border-white/5">
                <p className="text-[10px] font-medium text-gray-600 uppercase tracking-tighter">
                  <span className="text-emerald-500 mr-2">✓</span> {step.detail}
                </p>
              </div>

              {/* Background Numbering Effect */}
              <div className="absolute -bottom-4 -right-2 text-8xl font-black text-white/[0.02] select-none group-hover:text-emerald-500/[0.05] transition-colors">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

        
       
      </div>
    </section>
  );
};

export default HowItWorks;