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
    bid: Bid;
    onView: (bid: Bid) => void;
  }
  
  const BidCard = ({ bid, onView }: Props) => {
    return (
      <div className="border rounded-lg p-5 flex justify-between items-center">
        <div>
          <h4 className="font-semibold text-gray-900">
            {bid.freelancerId.name}
          </h4>
          <p className="text-sm text-gray-600 mt-1">
            Bid Amount: ₹{bid.price}
          </p>
        </div>
  
        <button
          onClick={() => onView(bid)}
          className="text-sm font-semibold text-blue-600 hover:underline"
        >
          View Bid
        </button>
      </div>
    );
  };
  
  export default BidCard;
  