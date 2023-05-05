import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const ClientFeedback = ({ name, company, feedback }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{company}</Card.Subtitle>
        <Card.Text>{feedback}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const FeedbackSection = () => {
  const feedbacks = [
    {
      name: 'John Doe',
      company: 'ABC Corp',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod aliquam faucibus.'
    },
    {
      name: 'Jane Doe',
      company: 'XYZ Inc',
      feedback: 'Phasellus ac quam sapien. Suspendisse potenti. Nullam euismod nulla sed eros commodo.'
    },
    {
      name: 'Bob Smith',
      company: '123 Co',
      feedback: 'Pellentesque ut malesuada risus. In dapibus posuere nisl, eu euismod quam malesuada quis.'
    }
  ];

  return (
    <div>
      <h2>Client Feedback</h2>
      <div >
        {feedbacks.map((feedback, index) => (
          <ListGroup.Item className='m-3' key={index}>
            <ClientFeedback name={feedback.name} company={feedback.company} feedback={feedback.feedback} />
          </ListGroup.Item>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSection;
