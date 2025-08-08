# Custom by Catherine - Fashion Website

A modern, beautiful website for Catherine's custom clothing business featuring an interactive mannequin for mixing and matching clothing items.

## Features

- **Interactive Mannequin**: Click arrows or use keyboard navigation to mix and match different clothing items
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, sleek design with smooth animations
- **Contact Form**: Built-in contact form for customer inquiries
- **Mobile-Friendly**: Touch/swipe support for mobile devices
- **Keyboard Navigation**: Use arrow keys to navigate clothing items
- **GitHub Pages Ready**: Optimized for easy deployment

## Interactive Mannequin Controls

- **Click Arrows**: Use the left/right arrows next to each clothing category
- **Keyboard Navigation**: 
  - Left/Right arrows: Change tops
  - Shift + Left/Right arrows: Change bottoms
- **Mobile**: Swipe left or right on the mannequin display
- **Touch**: Tap the arrow buttons on mobile devices

## Deployment to GitHub Pages

### Method 1: Direct Upload
1. Create a new repository on GitHub
2. Upload all files from the "New Site" folder to your repository
3. Go to repository Settings → Pages
4. Select "Deploy from a branch" and choose "main" branch
5. Your site will be available at `https://yourusername.github.io/repositoryname`

### Method 2: Using Git Commands
```bash
# Navigate to the New Site directory
cd "New Site"

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Custom by Catherine website"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Custom Domain Setup
If you want to use a custom domain:
1. Add a `CNAME` file to the root directory with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages
3. Enable "Enforce HTTPS" in repository settings

## Customization

### Adding Real Clothing Images
Replace the SVG placeholders in `script.js` with actual image paths:

```javascript
const clothingData = {
    tops: [
        {
            name: "Elegant Blouse",
            image: "images/tops/blouse1.jpg"  // Replace with actual image path
        },
        // ... more items
    ],
    bottoms: [
        {
            name: "Classic Trousers",
            image: "images/bottoms/trousers1.jpg"  // Replace with actual image path
        },
        // ... more items
    ]
};
```

### Updating Contact Information
Edit the contact details in `index.html`:
- Email address
- Phone number
- Business hours
- Social media links

### Changing Colors and Styling
Modify `styles.css` to match your brand colors:
- Primary color: `#e74c3c` (red)
- Secondary color: `#2c3e50` (dark blue)
- Accent color: `#ffd700` (gold)

### Adding More Clothing Categories
To add new categories (e.g., accessories, shoes):
1. Add the category to `clothingData` in `script.js`
2. Add corresponding HTML controls in `index.html`
3. Update the CSS styling as needed

## File Structure

```
New Site/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── README.md           # This file
└── images/             # (Create this folder for your images)
    ├── tops/
    ├── bottoms/
    └── other/
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**: Compress clothing images to reduce load times
2. **Use WebP Format**: For better compression and quality
3. **Lazy Loading**: Consider implementing lazy loading for images
4. **CDN**: Use a CDN for faster global loading

## SEO Optimization

The website includes:
- Semantic HTML structure
- Meta tags for social sharing
- Descriptive alt text for images
- Clean URL structure
- Mobile-friendly design

## Accessibility Features

- Keyboard navigation support
- Screen reader friendly
- High contrast colors
- Responsive text sizing
- Touch-friendly buttons

## Future Enhancements

Consider adding:
- Shopping cart functionality
- Customer reviews
- Image zoom feature
- Color variations for clothing items
- Size selection
- Price calculator
- Appointment booking system

## Support

For technical support or customization requests, please contact the developer or refer to the GitHub repository issues section.

## License

This project is created for Catherine's custom clothing business. Please respect intellectual property rights when using or modifying this code.
