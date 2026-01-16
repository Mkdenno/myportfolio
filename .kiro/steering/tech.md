# Technology Stack

## Core Technologies
- React 19.2.3 (latest)
- React DOM 19.2.3
- JavaScript (ES6+)

## Build System
- Create React App (react-scripts 5.0.1)
- Webpack (bundled with CRA)
- Babel (bundled with CRA)

## Testing
- Jest (bundled with CRA)
- React Testing Library
- @testing-library/jest-dom
- @testing-library/user-event

## Other Libraries
- web-vitals for performance monitoring

## Common Commands

### Development
```bash
npm start
```
Starts the development server on http://localhost:3000 with hot reload enabled.

### Testing
```bash
npm test
```
Runs tests in interactive watch mode.

For CI/CD or single test runs, use:
```bash
npm test -- --run
```

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `build/` folder.

## Code Style
- ESLint configuration extends `react-app` and `react-app/jest`
- Follow React best practices and hooks conventions
- Use functional components over class components
- Maintain React.StrictMode for development warnings
