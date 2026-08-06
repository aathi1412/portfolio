
export const projects = [
  {
    title: 'JWT Authentication System',
    description:
      'A full authentication service covering the parts most tutorials skip — email verification, password recovery, refresh tokens, account lockout, and role-based access, all secured with Spring Security and JWT.',
    features: [
      'Email Verification',
      'Forgot Password',
      'Reset Password',
      'JWT Authentication',
      'Refresh Token',
      'Account Lock',
      'Role Based Authentication',
      'Database Versioning & Migrations'
    ],
    tech: ['Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'Flyway'],
    githubUrl: 'https://github.com/aathi1412/authentication-system',
    featured: true,
    status: 'In Progress',
    live: ''
  },
  {
    title: 'Ecommerce Backend API',
    description:
      'A REST API backend for an ecommerce platform — product and cart management, order processing, versioned database migrations, and a containerized setup ready to deploy.',
    features: [
      'REST APIs',
      'Product Management',
      'cart Management',
      'Order APIs',
      'Docker',
      'Database Versioning & Migrations',
    ],
    tech: ['Spring Boot', 'MySQL', 'Docker', 'Flyway'],
    githubUrl: 'https://github.com/aathi1412/ecommerce-API',
    featured: true,
    status: 'In Progress',
    live: ''
  },
  {
    title: 'AI Chatbot',
    description:
        'A full-stack AI chatbot built with Spring Boot and React that automatically routes user prompts to text or image generation models using LLM-based intent detection.',
    features: [
        'Automatic Intent Detection',
        'AI Text Generation',
        'AI Image Generation',
        'Message History (localStorage)',
        'REST API Integration',
        'Centralized Error Handling'
    ],
    tech: [
        'Java',
        'Spring Boot',
        'React',
        'Vite',
        'Hugging Face Router API',
        'Cloudflare Workers AI'
    ],
    githubUrl: 'https://github.com/aathi1412/chatbot-project',
    featured: false,
    status: 'completed',
    live: ''
  },
  {
    title: 'Bus Reservation System',
    description:
        'A Java console application for managing bus bookings with JDBC and MySQL. Supports passenger reservations, ticket cancellation, and real-time seat availability.',
    features: [
        'Bus Booking',
        'Ticket Cancellation',
        'Seat Availability',
        'Admin Management',
        'Passenger Management',
        'JDBC Database Integration'
    ],
    tech: ['Java', 'JDBC', 'MySQL'],
    githubUrl: 'https://github.com/aathi1412/Bus-Reservation-System-console-java',
    featured: false,
    status: 'completed',
    live: ''
  },
  {
    title: 'Weather Dashboard',
    description:
      'A React dashboard that pulls live weather data from the OpenWeather API and presents it in a clean, glanceable interface.',
    features: [
        'Current Weather',
        'City Search',
        'Temperature, Wind Speed & Humidity',
        '5-Day Weather Forecast',
        'Responsive UI',
        'Live Weather Data'
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'OpenWeather API'],
    githubUrl: 'https://github.com/aathi1412/Weather-Dashboard',
    featured: false,
    status: 'completed',
    live: 'https://zoro-weather-dashboard.netlify.app/'
  },
];
