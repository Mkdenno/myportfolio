# Project Structure

## Directory Organization

```
myportfolio/
├── public/              # Static assets and HTML template
│   ├── index.html      # Main HTML template
│   ├── favicon.ico     # Site favicon
│   ├── logo192.png     # PWA icon (192x192)
│   ├── logo512.png     # PWA icon (512x512)
│   ├── manifest.json   # PWA manifest
│   └── robots.txt      # Search engine crawler rules
├── src/                # Application source code
│   ├── App.js          # Main App component
│   ├── App.css         # App component styles
│   ├── App.test.js     # App component tests
│   ├── index.js        # Application entry point
│   ├── index.css       # Global styles
│   ├── logo.svg        # React logo asset
│   ├── reportWebVitals.js  # Performance monitoring
│   └── setupTests.js   # Test configuration
└── node_modules/       # Dependencies (not committed)
```

## Key Conventions

### Component Organization
- Main application component: `src/App.js`
- Entry point: `src/index.js` (renders App with React.StrictMode)
- Co-locate component styles with components (e.g., `App.js` + `App.css`)
- Co-locate tests with components (e.g., `App.test.js`)

### Static Assets
- Place static files in `public/` folder
- Reference using `%PUBLIC_URL%` in HTML or `process.env.PUBLIC_URL` in JS
- Import images/assets directly in components when possible for webpack optimization

### Styling
- Global styles in `src/index.css`
- Component-specific styles in separate CSS files
- CSS files imported directly in component files

### Testing
- Test files use `.test.js` extension
- Tests co-located with components
- Use React Testing Library for component tests
