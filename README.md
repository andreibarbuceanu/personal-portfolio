# Personal Portfolio

A responsive personal portfolio for Alin-Andrei Bărbuceanu, presenting projects, achievements, a downloadable CV, contact details, and recent public GitHub activity.

## Features

- Responsive React portfolio with reusable components
- Projects section with modal details
- CV download and achievements carousel
- GitHub activity integration
- Multiple selectable layouts with localStorage persistence
- AI-assisted development

## Technology Stack

React, TypeScript, Vite, CSS, ESLint, and the GitHub public API.

## Project Structure

```text
src/
  components/   UI sections and layout switcher
  data/         Project and achievement content
  assets/       Local images
public/
  cv/           Downloadable CV
screenshots/    README screenshot placeholders
```

## Local Installation

```bash
npm install
npm run dev
```

## Commands

```bash
npm run lint
npm run build
npm run preview
```

## GitHub Pages Deployment

The Vite base path is configured for the `personal-portfolio` repository.

```bash
npm run deploy
```

Before deploying, create the GitHub repository named `personal-portfolio`, push the project, then enable GitHub Pages from the `gh-pages` branch in the repository settings.

## Screenshots

- Home page: `screenshots/home.png`
- Projects section: `screenshots/projects.png`
- CV and achievements: `screenshots/cv-achievements.png`
- Alternate layout: `screenshots/alternate-layout.png`

## Live Demo

Coming soon.

## Limitations

- GitHub activity depends on the unauthenticated GitHub public API and its rate limits.
- Some project repositories are not publicly available.

## Future Improvements

- Add verified public links for remaining projects.
- Add real screenshots and a live-demo link.

## Author

Alin-Andrei Bărbuceanu  
GitHub: https://github.com/andreibarbuceanu  
LinkedIn: https://www.linkedin.com/in/alin-andrei-barbuceanu-96a473388/
