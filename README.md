# Personal Portfolio

A responsive personal portfolio for Alin-Andrei Bărbuceanu, presenting projects, achievements, a downloadable CV, contact details, and recent public GitHub activity.

## Features

- Responsive React portfolio with reusable components
- Projects section with modal details
- CV download and achievements carousel
- GitHub activity integration
- Multiple selectable layouts with localStorage persistence

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

## Deployment

The portfolio is deployed with GitHub Pages.

```bash
npm run deploy
```

## Screenshots

### Home Page
![Home Page](screenshots/home.png)

### Projects Section
![Projects Section](screenshots/projects.png)

### CV and Achievements
![CV and Achievements](screenshots/cv-achievements.png)

### Alternate Layout
![Alternate Layout](screenshots/alternate-layout.png)


## Live version

[View the live portfolio](https://andreibarbuceanu.github.io/personal-portfolio/)

## Limitations

- GitHub activity depends on the unauthenticated GitHub public API and its rate limits.
- Some project repositories are not publicly available.

## Future Improvements

- Add verified public links for remaining projects.

## Author

Alin-Andrei Bărbuceanu  
GitHub: https://github.com/andreibarbuceanu  
LinkedIn: https://www.linkedin.com/in/alin-andrei-barbuceanu-96a473388/
