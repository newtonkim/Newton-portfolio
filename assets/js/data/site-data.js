export const siteData = {
  header: {
    brandName: 'My Portfolio',
    brandUrl: 'index.html',
    navLinks: [
      { id: 'home', label: 'Home', href: 'index.html' },
      { id: 'about', label: 'About', href: 'about.html' },
      { id: 'resume', label: 'Resume', href: 'resume.html' },
      { id: 'services', label: 'Services', href: 'services.html' },
      { id: 'portfolio', label: 'Portfolio', href: 'portfolio.html' },
      { id: 'contact', label: 'Contact', href: 'contact.html' }
    ]
  },
  hero: {
    name: 'Newton Kimathi',
    tagline: 'A fullstack Developer proficient in ',
    typedItems: ['PHP', 'LARAVEL', 'tailwindcss', 'Vue.js', 'JavaScript', 'Flutter', 'MySQL'],
    fallbackText: 'Software Developer',
    imageSrc: 'assets/img/WhatsApp_Image_2024-12-14_at_11.47.51_AM-removebg-preview.png',
    imageAlt: 'Newton Kimathi portrait',
    socialLinks: [
      { href: '', icon: 'bi bi-twitter-x', label: 'Twitter' },
      { href: '', icon: 'bi bi-facebook', label: 'Facebook' },
      { href: '', icon: 'bi bi-instagram', label: 'Instagram' },
      { href: '', icon: 'bi bi-skype', label: 'Skype' },
      { href: 'https://www.linkedin.com/in/newton-nyamu-kimathi-96366892/', icon: 'bi bi-linkedin', label: 'LinkedIn' }
    ]
  },
  footer: {
    title: 'The Craft of Software: Code, Challenges, and Change',
    message:
      '"Great software is built not just by writing code, but by solving problems, embracing challenges, and constantly learning. Every line you write is a step toward creating something that can change the world."',
    copyrightPrefix: 'Copyright ©',
    copyName: '2024 Nyamu',
    copySuffix: 'All Rights Reserved',
    credit: 'Designed by <a href="#">Newton Kimathi</a>'
  }
};
