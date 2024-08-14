import React, { useState } from 'react';

const AppointmentForm = () => {
    const [name, setName] = useState('');
    const [service, setService] = useState('oil-change');
    const [appointmentDate, setAppointmentDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const appointment = { name, service, appointment_date: appointmentDate };

        fetch('/api/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => console.error('Error:', error));
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
            <label htmlFor="name" className="block text-gray-700 mb-2">Your Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-2 mb-4 text-black rounded border"
            />

            <label htmlFor="service" className="block text-gray-700 mb-2">Select Service:</label>
            <select
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full p-2 mb-4 text-black rounded border"
            >
                <option value="oil-change">Oil Change</option>
                <option value="brake-repair">Brake Repair</option>
                <option value="engine-diagnostics">Engine Diagnostics</option>
            </select>

            <label htmlFor="date" className="block text-gray-700 mb-2">Select Date:</label>
            <input
                type="date"
                id="date"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                required
                className="w-full p-2 mb-4 text-black rounded border"
            />

            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded">
                Book Appointment
            </button>
        </form>
    );
};

export default AppointmentForm;
