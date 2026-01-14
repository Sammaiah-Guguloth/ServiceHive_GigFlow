const WhoIsItFor = () => {
    return (
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Who Is GigFlow For?
          </h2>
  
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Clients */}
            <div className="rounded-lg border p-8">
              <h3 className="text-xl font-semibold text-gray-900">
                For Clients
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li>• Post gigs quickly and easily</li>
                <li>• Receive multiple competitive bids</li>
                <li>• Hire the right freelancer instantly</li>
                <li>• Manage your projects efficiently</li>
              </ul>
            </div>
  
            {/* Freelancers */}
            <div className="rounded-lg border p-8">
              <h3 className="text-xl font-semibold text-gray-900">
                For Freelancers
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li>• Browse and search open gigs</li>
                <li>• Apply with proposals and pricing</li>
                <li>• Get hired in real time</li>
                <li>• Work with multiple clients</li>
              </ul>
            </div>
  
          </div>
        </div>
      </section>
    );
  };
  
  export default WhoIsItFor;
  