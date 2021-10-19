import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Doctor = (props) => {
    console.log(props);
    const { name, img, service, cost } = props.doctor;
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
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Doctor;