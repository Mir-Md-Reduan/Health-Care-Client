import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Appointment = () => {
    const { appointmentId } = useParams();
    const [dataLoad, setDataLoad] = useState([]);
    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => setDataLoad(data))
    }, []);

    const ExactData = dataLoad.filter(data => data.id == appointmentId);
    console.log(ExactData[0]?.img);

    return (
        <div className="my-5 text-center">
            <Card className="w-50 mx-auto p-5 my-5" >
                <Card.Img variant="top" className="w-25 mx-auto" src={ExactData[0]?.img} />
                <Card.Body>
                    <Card.Title>Name: {ExactData[0]?.name} </Card.Title>
                    <Card.Text>
                        {ExactData[0]?.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};


export default Appointment;