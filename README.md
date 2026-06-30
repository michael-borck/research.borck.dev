# research.borck.dev

An interactive research visualization platform built with TypeScript and Astro for exploring data science concepts, algorithms, and computational methods. This project serves as an educational resource with interactive tools and visualizations designed to make complex concepts more accessible and intuitive.

## About

research.borck.dev hosts a collection of interactive visualizations and educational tools that help learners understand fundamental concepts in computer science, data science, and algorithms. Built with modern web technologies, the platform provides hands-on exploration of theoretical concepts through engaging, real-time visualizations.

## Features

- Interactive visualizations of algorithms and data structures
- Educational tools for learning data science concepts
- Responsive design for desktop and mobile devices
- Built with TypeScript for type-safe, maintainable code
- Static site generation with Astro for optimal performance
- Clean, intuitive user interface

## Installation

### Prerequisites

- Node.js 16.0 or higher
- npm or yarn package manager

### Setup

1. Clone the repository:

```bash
git clone https://github.com/michael-borck/research.borck.dev.git
cd research.borck.dev
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Usage

### Development

Run the development server with hot module replacement:

```bash
npm run dev
```

### Building

Build the project for production:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Project Structure

The project is organized as follows:

```
src/
├── pages/          # Astro pages and routes
├── layouts/        # Reusable layout components
├── data/           # Research data and configurations
└── styles/         # Global and component styles
public/             # Static assets
.github/
└── workflows/      # GitHub Actions CI/CD workflows
```

## Configuration

### Astro Configuration

The project uses Astro for static site generation. Key configuration options can be found in `astro.config.mjs`.

### Custom Domain

The project is configured to use a custom domain via the CNAME file located in the `public/` directory.

## Development

### Technologies Used

- **TypeScript**: Type-safe JavaScript for robust code
- **Astro**: Modern static site builder
- **CSS**: Styling and responsive design
- **JavaScript**: Interactive functionality

### Code Style

This project follows TypeScript and modern JavaScript best practices. Ensure your code is properly typed and adheres to the existing code style.

## Deployment

The project uses GitHub Actions for continuous deployment. The workflow configuration can be found in `.github/workflows/deploy.yml`.

Deployments are automatically triggered on pushes to the main branch and deploy the built site to the hosting environment.

## Contributing

Contributions are welcome! When contributing to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

Please ensure your code follows the existing style and includes appropriate documentation.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For questions or feedback about this project, please open an issue on GitHub or contact the project owner.