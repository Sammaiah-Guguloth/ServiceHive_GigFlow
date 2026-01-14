const steps = [
    {
      title: "Post a Gig",
      description:
        "Describe your project, set a budget, and publish your gig in minutes."
    },
    {
      title: "Receive Bids",
      description:
        "Freelancers apply with proposals and pricing tailored to your needs."
    },
    {
      title: "Hire Instantly",
      description:
        "Compare bids, choose the best freelancer, and get started right away."
    }
  ];
  
  const HowItWorks = () => {
    return (
      <section id="how-it-works" className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            How GigFlow Works
          </h2>
  
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border p-8 text-center"
              >
                <div className="text-blue-600 text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;
  