import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import type { AppDispatch } from "../redux/store";

import {
  getBidsForGigThunk,
  hireBidThunk,
} from "../redux/thunks/bid.thunk";

import BidList from "../components/bids/BidList";
import ViewBidModal from "../components/bids/ViewBidModal";

const ViewBids = () => {
  const { gigId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [bids, setBids] = useState<any[]>([]);
  const [selectedBid, setSelectedBid] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBids = async () => {
      if (!gigId) return;

      try {
        const res = await dispatch(
          getBidsForGigThunk(gigId)
        ).unwrap();

        setBids(res);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBids();
  }, [dispatch, gigId]);

  const handleHire = async () => {
    if (!selectedBid) return;

    try {
      await dispatch(hireBidThunk(selectedBid._id)).unwrap();
      navigate("/my-gigs");
    } catch (err) {
      console.error("Failed to hire bid", err);
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Loading bids...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-gray-900">
        Bids for this Gig
      </h1>

      <BidList bids={bids} onView={setSelectedBid} />

      {selectedBid && (
        <ViewBidModal
          bid={selectedBid}
          onClose={() => setSelectedBid(null)}
          onHire={handleHire}
        />
      )}
    </div>
  );
};

export default ViewBids;
