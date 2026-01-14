import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";

import { getGigsThunk } from "../redux/thunks/gig.thunk";
import { createBidThunk } from "../redux/thunks/bid.thunk";

import SearchBar from "../components/browseGigs/SearchBar";
import GigList from "../components/browseGigs/GigList";
import ViewGigModal from "../components/browseGigs/ViewGigModal";
import BidModal from "../components/browseGigs/BidModal";

const BrowseGigs = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { browseGigs, loading, error } = useSelector(
    (state: RootState) => state.gig
  );

  const [search, setSearch] = useState("");

  // ✅ SEPARATE STATES
  const [viewGig, setViewGig] = useState<any | null>(null);
  const [bidGig, setBidGig] = useState<any | null>(null);

  useEffect(() => {
    dispatch(getGigsThunk(undefined));
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(getGigsThunk(search.trim() || undefined));
  };

  const handleBidSubmit = async (data: {
    message: string;
    price: number;
  }) => {
    if (!bidGig) {
      console.error("No bid gig selected");
      return;
    }

    try {
      await dispatch(
        createBidThunk({
          gigId: bidGig._id,
          message: data.message,
          price: data.price,
        })
      ).unwrap();

      setBidGig(null); // close bid modal
    } catch (err) {
      console.error("Bid submission failed:", err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <SearchBar
        value={search}
        onChange={setSearch}
        onSearch={handleSearch}
      />

      {loading && (
        <p className="mt-6 text-center text-gray-600">
          Loading gigs...
        </p>
      )}

      {error && (
        <p className="mt-6 text-center text-red-600">
          {error}
        </p>
      )}

      {!loading && !error && (
        <GigList gigs={browseGigs} onView={setViewGig} />
      )}

      {/* VIEW GIG MODAL */}
      {viewGig && (
        <ViewGigModal
          gig={viewGig}
          onClose={() => setViewGig(null)}
          onBid={() => {
            setBidGig(viewGig);   // ✅ SET BID CONTEXT
            setViewGig(null);     // close view modal
          }}
        />
      )}

      {/* BID MODAL */}
      {bidGig && (
        <BidModal
          onClose={() => setBidGig(null)}
          onSubmit={handleBidSubmit}
        />
      )}
    </div>
  );
};

export default BrowseGigs;
