import React, { useEffect, useState } from 'react';

const AppointmentList = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('/api/appointments')
            .then(response => response.json())
            .then(data => setAppointments(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Customer Appointments</h2>
            <ul className="list-disc list-inside">
                {appointments.map((appointment, index) => (
                    <li key={index}>
                        {appointment.name} - {appointment.service} on {appointment.appointment_date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AppointmentList;
