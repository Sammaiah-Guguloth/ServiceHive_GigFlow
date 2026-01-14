import GigCard from "./GigCard";

interface Gig {
  _id: string;
  title: string;
  description: string;
  budget: number;
}

interface Props {
  gigs: Gig[];
  onView: (gig: Gig) => void;
}

const GigList = ({ gigs, onView }: Props) => {
  if (gigs.length === 0) {
    return (
      <p className="mt-10 text-center text-gray-600">
        No gigs found.
      </p>
    );
  }

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {gigs.map((gig) => (
        <GigCard key={gig._id} gig={gig} onView={onView} />
      ))}
    </div>
  );
};

export default GigList;
