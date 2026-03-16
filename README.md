# Your Name - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## Features

✨ **Modern Design** - Clean and professional layout with smooth animations
📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop devices
🎨 **Customizable** - Easy to personalize with your own content, colors, and images
⚡ **Fast & Lightweight** - No dependencies, pure HTML/CSS/JavaScript
🚀 **Complete** - Includes all essential sections for a professional portfolio

### Included Sections

- **Hero Section** - Eye-catching landing area with call-to-action buttons
- **About Me** - Showcase your skills, background, and experience
- **Certificates** - Display your achievements and certifications
- **Projects Portfolio** - Highlight your best work with descriptions and links
- **Blog** - Share your knowledge and insights with three sample posts
- **Testimonials** - Build credibility with client/colleague feedback
- **Contact Form** - Easy way for visitors to reach out
- **Responsive Navigation** - Mobile-friendly menu with hamburger icon
- **Social Links** - Connect with your professional networks

## Project Structure

```
portfolio/
├── index.html          # Main homepage
├── styles.css          # All styling
├── script.js           # Interactivity and animations
├── blog/               # Blog posts directory
│   ├── post1.html     # Sample blog post 1
│   ├── post2.html     # Sample blog post 2
│   └── post3.html     # Sample blog post 3
├── images/            # Image assets (add your images here)
└── assets/            # Additional assets directory
```

## Getting Started

### 1. Customize Basic Information

Edit [index.html](index.html) and update:
- Your name in the hero section
- Your professional title/subtitle
- About section with your background
- Skills in the skill tags
- Social media links (GitHub, LinkedIn, Twitter, etc.)
- Contact information (email, phone, location)

### 2. Add Your Images

Add images to the `images/` folder:
- `profile.jpg` - Your profile picture
- `project1.jpg`, `project2.jpg`, `project3.jpg` - Project images
- `blog1.jpg`, `blog2.jpg`, `blog3.jpg` - Blog post cover images

You can use placeholder images from:
- [Unsplash](https://unsplash.com/) - Free high-quality images
- [Pexels](https://www.pexels.com/) - Free stock photos
- [Placeholder.com](https://placeholder.com/) - Generate placeholder images

### 3. Update Your Projects

Modify the project cards in the "Featured Projects" section:
- Change project names and descriptions
- Update technology tags
- Add links to your GitHub repositories
- Add live demo links

### 4. Create Blog Posts

The blog structure is already in place. Add more posts by:
1. Duplicating one of the blog post files in the `blog/` folder
2. Updating the title, date, and content
3. Adding a reference in the main blog section on [index.html](index.html)

### 5. Customize Styling

Edit [styles.css](styles.css) to match your preferences:

**Color Scheme:**
```css
:root {
    --primary-color: #00a8ff;      /* Change to your brand color */
    --secondary-color: #1a1a1a;    /* Dark color */
    --text-dark: #333;
    --text-light: #666;
    --bg-light: #f5f5f5;
}
```

### 6. Add Testimonials

Update the testimonials section with real feedback from clients or colleagues. Modify the star ratings as needed.

### 7. Add Certificates

Update the certificates section with your actual achievements, certifications, or awards.

## Hosting Your Portfolio

### Free Hosting Options

1. **GitHub Pages**
   - Push your code to GitHub
   - Enable GitHub Pages in repository settings
   - Your site will be live at `username.github.io/portfolio`

2. **Netlify**
   - Connect your GitHub repository
   - Automatic deploys on push
   - Custom domain support

3. **Vercel**
   - Deploy in seconds
   - Automatic CI/CD
   - Fast CDN

4. **Firebase Hosting**
   - Google's hosting platform
   - Easy setup with Firebase CLI

## Customization Guide

### Adding More Projects

Copy this structure and add it to the projects grid:
```html
<div class="project-card">
    <div class="project-image">
        <img src="images/project-name.jpg" alt="Project Name">
    </div>
    <div class="project-info">
        <h3>Your Project Name</h3>
        <p>Description of your project...</p>
        <div class="project-tags">
            <span>Technology</span>
            <span>Technology</span>
        </div>
        <div class="project-links">
            <a href="#" class="link-btn">View Live</a>
            <a href="#" class="link-btn">GitHub</a>
        </div>
    </div>
</div>
```

### Adding More Blog Posts

1. Create a new HTML file in the `blog/` folder
2. Use one of the existing posts as a template
3. Update the content
4. Add a new entry in the blog section

### Changing Colors

Simply update the CSS variables in [styles.css](styles.css):
- Primary color for accents and buttons
- Secondary color for backgrounds
- Text colors for different emphasis levels

### Modifying Typography

Adjust font sizes and weights in [styles.css](styles.css) to match your preference. The site uses system fonts for fast loading.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**: Use tools like TinyPNG or ImageOptim to compress images
2. **Lazy Loading**: Consider adding lazy loading for images below the fold
3. **Minify CSS/JS**: For production, minify your CSS and JavaScript
4. **CDN**: Use a CDN for Font Awesome icons for faster loading

## SEO Tips

- Add meta descriptions to your pages
- Use semantic HTML (already included)
- Optimize image alt text
- Use proper heading hierarchy
- Add Open Graph meta tags for social sharing

## Contact Form Integration

By default, the contact form logs data to the console. To actually send emails, you can:

1. **Use Formspree** - Sign up at formspree.io and update the form action
2. **Use EmailJS** - JavaScript email sending library
3. **Use a Backend Service** - Node.js/Python server with email service

## Troubleshooting

**Mobile menu not working?**
- Ensure [script.js](script.js) is linked in your HTML

**Images not showing?**
- Check image paths are relative to your HTML file
- Make sure images are in the `images/` folder

**Styling looks off?**
- Check that [styles.css](styles.css) is properly linked
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)

**Links not working?**
- Update href attributes with correct URLs
- For internal links, use relative paths

## License

This portfolio template is free to use and modify for personal use.

## Support

For questions or issues:
1. Check the HTML comments in the code
2. Refer to CSS comments for styling references
3. Review the JavaScript comments for functionality

---

**Happy building! 🚀** Your portfolio is now ready to showcase your amazing work!
