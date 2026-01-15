import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import Navbar from "./components/global/Navbar"
import Footer from "./components/global/Footer"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "./redux/store"
import { useEffect } from "react"
import { getMeThunk } from "./redux/thunks/auth.thunk"
import PostGig from "./pages/PostGig"
import MyGigs from "./pages/MyGigs"
import BrowseGigs from "./pages/BrowseGigs"
import ViewBids from "./pages/ViewBids"
import { useSocket } from "./hooks/useSocket"
import { useSocketInit } from "./hooks/useSocketInit"
import type { Socket } from "socket.io-client"
import { toast } from "react-toastify"
import ProtectedRoute from "./components/global/ProtectedRoute"

const App = () => {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getMeThunk());
  } , [dispatch]);

  useSocketInit();

  const socket : Socket | null = useSocket();

  useEffect(() => {
    if(!socket) return;

    socket.on("hired", (data) => {
      console.log("Hired!", data);

      toast.success(data.message || "You have been hired for ServiceHive GigFlow!");
    });

    return () => {
      socket.off("hired");
    };
  })


  return (
    <div className="">
      
      <Navbar />
      <Routes>

        <Route path="/"  element={<Home />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

          
        <Route path="/post-gig" element={<ProtectedRoute>
          <PostGig />
        </ProtectedRoute>} />
          <Route path="/my-gigs" element={<ProtectedRoute>
            <MyGigs />
          </ProtectedRoute>} />
          <Route path="/gigs" element={<ProtectedRoute>
            <BrowseGigs />
          </ProtectedRoute>} />

          <Route path="/gigs/:gigId/bids" element={<ProtectedRoute>
            <ViewBids />
          </ProtectedRoute>} />


        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />

    </div>
  )
}

export default App