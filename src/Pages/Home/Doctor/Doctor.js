import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = ({ doctor }) => {
    const { name, img, service, cost, id } = doctor;
    return (
        <div className="col-lg-4 col-md-6">
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Speciality: {service} <br />
                        Consultation Fee: ${cost}
                    </Card.Text>
                    <Link to={`/appointment/${id}`}>
                        <Button variant="warning">Appoint {name}</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Doctor;