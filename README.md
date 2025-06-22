# Kotaro Shiba - Personal Portfolio

Welcome to my personal portfolio website! This is a modern, responsive portfolio built with Next.js and Tailwind CSS, showcasing my skills, projects, and experience as a Computer Science student and web developer.

## 🌟 Features

- **Modern Design**: Clean and professional design with smooth animations
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Dark Mode Support**: Built-in dark/light theme support
- **Fast Performance**: Built with Next.js for optimal performance
- **SEO Optimized**: Proper meta tags and structured data
- **Accessible**: WCAG compliant design for better accessibility

## 🚀 Live Demo

Visit my portfolio: [https://shiba0315.github.io/portfolio](https://shiba0315.github.io/portfolio)

## 🛠️ Technologies Used

- **Frontend**: Next.js 14, React 18
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages
- **Version Control**: Git & GitHub

## 📦 Installation & Setup

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shiba0315/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

## 🏗️ Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.js          # About page
│   │   ├── projects/
│   │   │   └── page.js          # Projects page
│   │   ├── globals.css          # Global styles
│   │   ├── layout.js            # Root layout
│   │   └── page.js              # Home page
│   └── lib/
│       └── image.loader.js      # Image optimization
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
└── README.md                    # Project documentation
```

## 🚀 Deployment

This portfolio is deployed using GitHub Pages. The deployment is automated using GitHub Actions.

### Manual Deployment Steps

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Export static files**
   ```bash
   npm run export
   ```

3. **Deploy to GitHub Pages**
   - Push your code to the `main` branch
   - GitHub Actions will automatically build and deploy the site
   - Your site will be available at `https://shiba0315.github.io/portfolio`

## 📝 Customization

### Personal Information
Update the following files to customize the portfolio for your needs:

- `src/app/page.js` - Home page content
- `src/app/about/page.js` - About page content
- `src/app/projects/page.js` - Projects and work experience
- `src/app/layout.js` - Site metadata and navigation

### Styling
- Modify `src/app/globals.css` for custom styles
- Update Tailwind classes in components for design changes
- Customize colors in `tailwind.config.js`

## 🤝 Contributing

While this is my personal portfolio, I welcome feedback and suggestions! Feel free to:

- Report bugs or issues
- Suggest improvements
- Share your thoughts on the design

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **GitHub**: [@Shiba0315](https://github.com/Shiba0315)
- **Email**: kotaro.shiba@example.com
- **Portfolio**: [https://shiba0315.github.io/portfolio](https://shiba0315.github.io/portfolio)

---

**Thank you for visiting my portfolio!** 🎉
