import { useEffect, useRef } from "react";

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
  onClose: () => void;
  onHire: () => void;
}

const ViewBidModal = ({ bid, onClose, onHire }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutside);
    return () =>
      document.removeEventListener("mousedown", handleOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div ref={ref} className="bg-white rounded-lg max-w-lg w-full p-6">
        <h3 className="text-xl font-bold">
          Bid by {bid.freelancerId.name}
        </h3>

        <p className="mt-4 text-sm text-gray-700">
          {bid.message}
        </p>

        <p className="mt-4 font-medium">
          Bid Amount: ₹{bid.price}
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Contact: {bid.freelancerId.email}
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="border px-4 py-2 rounded-md"
          >
            Close
          </button>
          <button
            onClick={onHire}
            className="bg-green-600 text-white px-4 py-2 rounded-md"
          >
            Hire freelancerId
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewBidModal;
