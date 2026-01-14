import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { AppDispatch, RootState } from "../redux/store";
import { getMyGigsThunk } from "../redux/thunks/gig.thunk";

const MyGigs = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { myGigs, loading, error } = useSelector(
    (state: RootState) => state.gig
  );

  useEffect(() => {
    dispatch(getMyGigsThunk());
  }, [dispatch]);

  if (loading) {
    return <p className="text-center mt-10">Loading your gigs...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-600">{error}</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-gray-900">
        My Posted Gigs
      </h1>

      {myGigs.length === 0 ? (
        <p className="mt-6 text-gray-600">
          You haven’t posted any gigs yet.
        </p>
      ) : (
        <div className="mt-6 space-y-4">
          {myGigs.map((gig) => (
            <div
              key={gig._id}
              className="rounded-lg border p-6 flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {gig.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Budget: ₹{gig.budget}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Status: {gig.status}
                </p>
              </div>

              <Link
                to={`/gigs/${gig._id}/bids`}
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
              >
                View Bids
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyGigs;
