import React from 'react';
import AppointmentForm from './AppointmentForm'; // Assuming this component exists

function App() {
  return (
    <div className="App">
      <header className="bg-blue-800 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Mechanic Appointment Scheduler</h1>
      </header>
      <main className="container mx-auto p-6">
        <AppointmentForm />
        {/* Add other components like AppointmentList here */}
      </main>
    </div>
  );
}

export default App;
