import "../styles/main.css";
const BookingBar = () => {
  return (
    <div className="relative -mt-24 z-20">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-lg p-6 grid grid-cols-1 md:grid-cols-5 gap-4">
        
        <input
          type="date"
          className="border p-3 rounded text-gray-600"
        />

        <input
          type="date"
          className="border p-3 rounded text-gray-600"
        />

        <input
          type="number"
          placeholder="Guests"
          className="border p-3 rounded"
        />

        <button className="md:col-span-2 bg-green-700 text-white rounded px-6 py-3 hover:bg-green-800 transition">
          Check Availability
        </button>

      </div>
    </div>
  );
};

export default BookingBar;
