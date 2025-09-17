// components/BookingButton.jsx
import { Button } from 'react-bootstrap';

function BookingButton() {
  return (
    <div className="position-fixed bottom-0 end-0 p-4 z-3">
      <Button 
        variant="success" 
        size="lg" 
        href="https://www.hipcamp.com/en-US/land/oklahoma-leaning-tree-woods-1-7rvh12r6?adults=1&children=0&srid=c97f4be8-6dbd-4a8e-8d61-c821686a17ae" 
        className="fw-bold shadow rounded-pill px-4"
      >
        Book Now
      </Button>
    </div>
  );
}

export default BookingButton;
