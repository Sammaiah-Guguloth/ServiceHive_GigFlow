import BidCard from "./BidCard";

interface Bid {
  _id: string;
  message: string;
  price: number;
  freelancerId: {
    name: string;
    email: string;
  };
}

interface Props {
  bids: Bid[];
  onView: (bid: Bid) => void;
}

const BidList = ({ bids, onView }: Props) => {
  if (bids.length === 0) {
    return (
      <p className="text-center text-gray-600 mt-10">
        No bids yet.
      </p>
    );
  }

  return (
    <div className="space-y-4 mt-6">
      {bids.map((bid) => (
        <BidCard key={bid._id} bid={bid} onView={onView} />
      ))}
    </div>
  );
};

export default BidList;
