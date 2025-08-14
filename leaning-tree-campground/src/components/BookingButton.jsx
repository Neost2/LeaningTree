// components/BookingButton.jsx
import { Button } from 'react-bootstrap';

function BookingButton() {
  return (
    <div className="position-fixed bottom-0 end-0 p-4 z-3">
      <Button 
        variant="success" 
        size="lg" 
        href="#contact" 
        className="fw-bold shadow rounded-pill px-4"
      >
        Book Now
      </Button>
    </div>
  );
}

export default BookingButton;
