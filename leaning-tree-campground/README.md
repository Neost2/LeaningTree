# Leaning Tree Campground Website

A responsive website for Leaning Tree Campground built with React and Bootstrap.

## Description

This project is a modern, responsive website for Leaning Tree Campground that showcases the campground's amenities, features, testimonials, and provides contact information. The site is designed to help potential visitors learn about the campground and make reservations.

## Features

- Responsive design that works on mobile, tablet, and desktop devices
- Interactive navigation bar
- Hero section with call-to-action
- Features/amenities showcase
- Customer testimonials
- Contact form for inquiries and reservations
- Footer with social media links
- Prominent "Book Now" button

## Technologies Used

- React.js - Frontend library
- Bootstrap 5 - CSS framework
- React-Bootstrap - React components for Bootstrap
- React Icons - Icon library
- Vite - Build tool and development server

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/leaning-tree-campground.git
   cd leaning-tree-campground
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
leaning-tree-campground/
├── public/
│   └── assets/
│       └── images/
├── src/
│   ├── components/
│   │   ├── BookingButton.jsx
│   │   ├── Contact.jsx
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   └── Testimonials.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Component Overview

- **Header**: Navigation bar with links to different sections
- **Hero**: Main banner with background image and call-to-action
- **Features**: Highlights of the campground's amenities
- **Testimonials**: Customer reviews in a carousel format
- **Contact**: Contact information and inquiry form
- **Footer**: Copyright information and social media links
- **BookingButton**: Fixed "Book Now" button for easy reservations

## Customization

- Update campground information in the respective components
- Replace placeholder images with actual campground photos
- Modify contact information in the Contact component
- Adjust the styling to match your brand

## Deployment

To build the project for production:

```bash
npm run build
```

The build files will be created in the `dist` directory, which can be deployed to any static site hosting service like Netlify, Vercel, or GitHub Pages.

## Acknowledgements

- [React](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [React Icons](https://react-icons.github.io/)
- [Unsplash](https://unsplash.com/) - For placeholder images