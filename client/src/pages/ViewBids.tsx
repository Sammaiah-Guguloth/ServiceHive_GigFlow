import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
      console.error("Failed to execute hiring protocol", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center gap-4">
        <div className="w-10 h-10 border-2 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
        <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.4em]">Fetching Bids Data...</p>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#050505] pb-20"
    >
      {/* Page Header: Terminal Style */}
      <div className="relative py-16 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
             
              <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
                Proposal <span className="text-emerald-500 italic">'s</span> 
              </h1>
            </div>
            
            <div className="bg-white/[0.02] border border-white/10 px-6 py-3 rounded-xl">
              <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">Active Gigs</p>
              <p className="text-sm font-mono text-white tracking-tight">{gigId?.slice(-12)}</p>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Status Messaging */}
        <div className="flex justify-between items-center mb-10 pb-6 border-b border-white/5">
          <p className="text-gray-400 text-sm font-medium">
            Reviewing <span className="text-white">{bids.length} submitted bids</span> for this assignment. 
          </p>
          <div className="flex gap-4">
             <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
                <span className="text-[10px] font-bold text-gray-500 uppercase">Pending</span>
             </div>
             <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500/20 border border-blue-500/50" />
                <span className="text-[10px] font-bold text-gray-500 uppercase">Hired</span>
             </div>
          </div>
        </div>

        {bids.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-white/5 rounded-3xl">
            <p className="text-gray-600 font-mono text-xs uppercase tracking-[0.3em]">No Proposals Detected for this Query</p>
          </div>
        ) : (
          <BidList bids={bids} onView={setSelectedBid} /> 
        )}
      </main>

      {/* Atomic Selection Overlay */}
      <AnimatePresence>
        {selectedBid && (
          <ViewBidModal
            bid={selectedBid}
            onClose={() => setSelectedBid(null)}
            onHire={handleHire}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ViewBids;