import { useEffect, useRef, useState } from "react";

interface Props {
  onClose: () => void;
  onSubmit: (data: { message: string; price: number }) => void;
}

const BidModal = ({ onClose, onSubmit }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState("");
  const [price, setPrice] = useState("");

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

  const handleSubmit = () => {
    if (!message.trim() || !price) return;
    onSubmit({ message, price: Number(price) });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div ref={ref} className="bg-white rounded-lg max-w-md w-full p-6">
        <h3 className="text-lg font-bold">Place a Bid</h3>

        <textarea
          placeholder="Your proposal"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-4 w-full border rounded-md p-2 text-sm"
          rows={4}
        />

        <input
          type="number"
          placeholder="Bid amount"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="mt-3 w-full border rounded-md p-2 text-sm"
        />

        <div className="mt-5 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="border px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Submit Bid
          </button>
        </div>
      </div>
    </div>
  );
};

export default BidModal;
