interface Gig {
    _id: string;
    title: string;
    description: string;
    budget: number;
  }
  
  interface Props {
    gig: Gig;
    onView: (gig: Gig) => void;
  }
  
  const GigCard = ({ gig, onView }: Props) => {
    return (
      <div className="rounded-lg border p-6">
        <h3 className="text-lg font-semibold text-gray-900">
          {gig.title}
        </h3>
  
        <p className="mt-2 text-sm text-gray-600">
          {gig.description.length > 100
            ? gig.description.slice(0, 100) + "..."
            : gig.description}
        </p>
  
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">
            Budget: ₹{gig.budget}
          </span>
  
          <button
            type="button"
            onClick={() => onView(gig)}
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            View Gig
          </button>
        </div>
      </div>
    );
  };
  
  export default GigCard;
  