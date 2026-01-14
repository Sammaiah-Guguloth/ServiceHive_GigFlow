import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
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
  const [viewGig, setViewGig] = useState<any | null>(null);
  const [bidGig, setBidGig] = useState<any | null>(null);

  useEffect(() => {
    dispatch(getGigsThunk(undefined));
  }, [dispatch]);

  // Execute search filter logic 
  const handleSearch = () => {
    dispatch(getGigsThunk(search.trim() || undefined));
  };

  const handleBidSubmit = async (data: {
    message: string;
    price: number;
  }) => {
    if (!bidGig) {
      console.error("No bid selected");
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

      toast.success("Bid submitted successfully!");
      setBidGig(null);
    } catch (err) {
      console.error("Bid submission failure", err);
      toast.error("Failed to submit bid");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#050505] pb-20"
    >
      {/* Marketplace Header Section */}
      <div className="relative py-6 border-b border-white/5 overflow-hidden">
        <div className="absolute  border-emerald-500/20 border-t-emerald-500 top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
         
          <SearchBar
            value={search}
            onChange={setSearch}
            onSearch={handleSearch}
          />

          <p className="text-gray-500 text-xs font-mono uppercase tracking-[0.3em]">
           Search Gigs by Title --- RESULTS
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* State Handlers: Loading/Error [cite: 11] */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="w-10 h-10 border-2 rounded-full animate-spin" />
            <p className="text-xs font-mono text-gray-600 uppercase tracking-widest animate-pulse">
              Fetching  Data...
            </p>
          </div>
        )}

        {error && (
          <div className="mt-10 p-6 bg-red-500/5 border border-red-500/20 rounded-xl text-center">
            <p className="text-sm font-bold text-red-500 uppercase tracking-tighter">
              Protocol Error: {error}
            </p>
          </div>
        )}

        {/* Live Gig Registry [cite: 18, 33] */}
        {!loading && !error && (
          <GigList gigs={browseGigs} onView={setViewGig} />
        )}
      </main>

      {/* Persistent Interaction Overlays [cite: 22] */}
      <AnimatePresence>
        {viewGig && (
          <ViewGigModal
            gig={viewGig}
            onClose={() => setViewGig(null)}
            onBid={() => {
              setBidGig(viewGig);   
              setViewGig(null); 
            }}
          />
        )}

        {bidGig && (
          <BidModal
            onClose={() => setBidGig(null)}
            onSubmit={handleBidSubmit}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default BrowseGigs;