import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className="my-5" id="doctors">
            <h1 className="my-5">Our Doctors</h1>
            <div className="container">
                <div className="row gy-3">
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.key}
                            doctor={doctor}></Doctor>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Doctors;