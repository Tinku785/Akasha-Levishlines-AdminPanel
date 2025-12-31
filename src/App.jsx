import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NewBooking from './pages/NewBooking';
import Bookings from './pages/Bookings';

// Wrap Layout to use navigation hooks inside it
const LayoutWithNavigation = ({ children, onLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans text-slate-900">
      <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
        user={{ name: "Admin Staff" }}
        onLogout={onLogout}
      />
      <div className="flex-1 flex flex-col h-full w-full relative overflow-hidden">
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 overflow-auto p-4 lg:p-8 relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
          <div className="relative z-10 max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

function App() {
  const [bookings, setBookings] = useState([
    {
      id: 'BK1002', name: 'Priya Sharma', phone: '9876543210', route: 'Golaghat -> Guwahati',
      date: '2025-01-01', seat: 'A1', fare: '650',
      departure: '06:00 AM', arrival: '12:30 PM', status: 'Confirmed'
    },
    {
      id: 'BK1003', name: 'Amit Roy', phone: '8765432109', route: 'Golaghat -> Bokakhat',
      date: '2025-01-02', seat: 'B4', fare: '150',
      departure: '08:00 PM', arrival: '09:30 PM', status: 'Confirmed'
    },
    {
      id: 'BK1004', name: 'John Doe', phone: '7654321098', route: 'Golaghat -> Kamarbandha',
      date: '2025-01-03', seat: 'C2', fare: '50',
      departure: '07:00 AM', arrival: '07:30 AM', status: 'Pending'
    },
    {
      id: 'BK1005', name: 'Rahul Das', phone: '6543210987', route: 'Guwahati -> Golaghat',
      date: '2025-01-04', seat: 'D1', fare: '650',
      departure: '02:00 PM', arrival: '08:30 PM', status: 'Confirmed'
    },
  ]);

  const addBooking = (newBooking) => {
    const id = `BK${1000 + bookings.length + 5}`;
    const booking = { id, status: 'Confirmed', ...newBooking };
    setBookings([booking, ...bookings]);
    return id;
  };

  const updateBooking = (id, updatedFields) => {
    setBookings(bookings.map(b => b.id === id ? { ...b, ...updatedFields } : b));
  };

  const cancelBooking = (id) => {
    setBookings(bookings.map(b => b.id === id ? { ...b, status: 'Cancelled' } : b));
  };

  return (
    <BrowserRouter>
      <AppContent
        bookings={bookings}
        addBooking={addBooking}
        updateBooking={updateBooking}
        cancelBooking={cancelBooking}
      />
    </BrowserRouter>
  );
}

// Separate component to use useNavigate 
const AppContent = ({ bookings, addBooking, updateBooking, cancelBooking }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={
        <LayoutWithNavigation onLogout={handleLogout}>
          <Dashboard bookings={bookings} />
        </LayoutWithNavigation>
      } />

      <Route path="/new-booking" element={
        <LayoutWithNavigation onLogout={handleLogout}>
          <NewBooking onAddBooking={addBooking} />
        </LayoutWithNavigation>
      } />

      <Route path="/bookings" element={
        <LayoutWithNavigation onLogout={handleLogout}>
          <Bookings
            bookings={bookings}
            onUpdateBooking={updateBooking}
            onCancelBooking={cancelBooking}
          />
        </LayoutWithNavigation>
      } />
    </Routes>
  );
}

export default App;
