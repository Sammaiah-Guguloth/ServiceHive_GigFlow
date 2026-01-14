import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Find Work. Hire Talent.
          <br />
          Get Things Done with GigFlow.
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          GigFlow connects clients and freelancers in a simple, fast, and reliable
          way. Post gigs, receive bids, and hire instantly.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            to="/register"
            className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
          >
            Get Started
          </Link>

          <Link
            to="/gigs"
            className="rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:border-blue-600 hover:text-blue-600 transition"
          >
            Browse Gigs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
