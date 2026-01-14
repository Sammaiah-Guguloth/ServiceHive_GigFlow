import { useEffect, useRef } from "react";

interface Gig {
  _id: string;
  title: string;
  description: string;
  budget: number;
}

interface Props {
  gig: Gig;
  onClose: () => void;
  onBid: () => void;
}

const ViewGigModal = ({ gig, onClose, onBid }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div ref={ref} className="bg-white rounded-lg max-w-lg w-full p-6">
        <h2 className="text-xl font-bold">{gig.title}</h2>

        <p className="mt-4 text-sm text-gray-600">
          {gig.description}
        </p>

        <p className="mt-4 font-medium">
          Budget: ₹{gig.budget}
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm border rounded-md"
          >
            Close
          </button>
          <button
            onClick={onBid}
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md"
          >
            Bid on Gig
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewGigModal;
