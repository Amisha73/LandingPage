import "./App.css";
import Footer from "./components/Footer";
import MapComponent from "./components/MapComponent";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <Navbar />
      
      {/* Main content section */}
      <main className="flex-1 w-11/12 mx-auto p-4 bg-white shadow-lg rounded-lg mt-4">
        <MapComponent />
      </main>

      <Footer />
    </div>
  );
}

export default App;
