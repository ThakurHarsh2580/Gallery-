# React Image Gallery with Pagination

A simple React application that fetches images from the Picsum API and displays them in a responsive gallery with pagination.

## Features

* Fetches images from the Picsum API
* Responsive image gallery layout
* Pagination (Previous / Next page navigation)
* Reusable ImageCard component
* Loading state while fetching data
* Native lazy loading for images
* Built with React Hooks (`useState`, `useEffect`)

## Technologies Used

* React
* JavaScript (ES6+)
* Tailwind CSS
* Picsum API

## Project Structure

```
src/
├── component/
│   └── ImageCard.jsx
├── pages/
│   └── App.jsx
└── main.jsx
```

## How It Works

1. The application fetches 15 images from the Picsum API.
2. Images are displayed using a reusable `ImageCard` component.
3. Users can navigate between pages using the Previous and Next buttons.
4. Whenever the page number changes, a new API request is made using `useEffect`.
5. Images are lazy-loaded to improve performance.

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate to the project folder:

```bash
cd <project-name>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## API Endpoint

```text
https://picsum.photos/v2/list?page=1&limit=15
```

## Concepts Practiced

* React Components
* Props
* State Management
* useEffect Hook
* API Fetching
* Conditional Rendering
* List Rendering with map()
* Pagination
* Component Reusability

## Future Improvements

* Custom lazy loading using Intersection Observer
* Infinite scrolling
* Search and filter functionality
* Skeleton loading UI
* Error page handling
* Modal image preview

## Author

Built as a React learning project to practice API integration, component-based architecture, and pagination.
