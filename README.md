# Nanda Kumar - AI & Full Stack Developer Portfolio

A modern, responsive portfolio website showcasing AI and Full Stack development projects, built with React and styled with SCSS.

## 🌟 Features

- Modern glass-morphism design
- Responsive layout for all devices
- Smooth animations and transitions
- Interactive project showcase
- Contact form with email integration
- Dark theme with gradient accents
- AOS (Animate On Scroll) animations
- Social media integration

## 🛠️ Tech Stack

- React.js
- SCSS/SASS
- EmailJS for contact form
- AOS (Animate On Scroll)
- Font Awesome Icons
- React Scroll

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── nanda.png
│   │   │   ├── django.png
│   │   │   ├── flask.png
│   │   │   ├── react.png
│   │   │   ├── javascript.png
│   │   │   ├── python.png
│   │   │   ├── node-js.png
│   │   │   ├── postgresql.png
│   │   │   ├── html.png
│   │   │   └── ai.png
│   │   └── Nanda_Kumar_resume.pdf
│   │
│   ├── components/
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.scss
│   │   │
│   │   ├── Certificate/
│   │   │   ├── Certificate.jsx
│   │   │   └── Certificate.scss
│   │   │
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.scss
│   │   │
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.scss
│   │   │
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.scss
│   │   │
│   │   └── Work/
│   │       ├── Work.jsx
│   │       └── Work.scss
│   │
│   ├── App.js
│   ├── App.scss
│   ├── index.js
│   └── index.scss
│
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Nandakumar7328/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## 📱 Component Details

### Home Component
- Hero section with animated introduction
- Skills showcase with progress bars
- Animated background elements
- Download CV button

### About Component
- Professional summary
- Skills categorization
- Experience highlights
- Animated statistics

### Work Component
- Project showcase grid
- Project cards with hover effects
- Technology tags
- Project links

### Certificate Component
- Certification cards
- Issuing organization details
- Achievement dates
- Certificate links

### Contact Component
- Contact form with EmailJS integration
- Social media links
- Location and email information
- Form validation and feedback

## 🎨 Styling

The project uses SCSS with:
- BEM naming convention
- Responsive design
- CSS variables for theming
- Mixins for reusable styles
- Glass-morphism effects
- Gradient animations

## 📧 Email Integration

The contact form uses EmailJS for sending emails:
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Add your credentials to the `.env` file

## 🔧 Customization

### Changing Colors
Edit the SCSS variables in each component's `.scss` file:
```scss
$primary-color: #2a2a2a;
$accent-color: #00f2fe;
$text-color: #ffffff;
```

### Updating Content
- Update personal information in respective component files
- Replace images in the `assets/images` directory
- Modify project details in the Work component
- Update skills in the About component

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- Mobile: < 480px
- Tablet: 481px - 768px
- Desktop: > 768px

## 🚀 Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `build` folder to your preferred hosting service:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Contact

Nanda Kumar
- Email: nanduaru333@gmail.com
- LinkedIn: [Nanda Kumar](https://www.linkedin.com/in/nandakumar-arjun)
- GitHub: [Nandakumar7328](https://github.com/Nandakumar7328)
- Twitter: [@nandakumar_tech](https://twitter.com/nandakumar_tech)

## 🙏 Acknowledgments

- Font Awesome for icons
- AOS library for scroll animations
- EmailJS for contact form functionality
- Unsplash for stock images
