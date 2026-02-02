# Security & Privacy Policy

## Overview
This document outlines the security measures implemented in the Aurelian Studios website to protect user data and website integrity.

## Image Metadata Removal

### Current Implementation
Images served through the website have metadata stripped during the build process to protect photographer privacy and reduce file sizes.

### Best Practices
1. **Upload Processing**: When uploading images to `src/assets/`, ensure they are processed with metadata removal:
   - Use online tools like [Verexif](https://verexif.com/en/) or [InMetaChronicles](https://www.inmeta.org/)
   - Or use command-line tools: `exiftool -all= image.jpg`
   - ImageMagick: `convert input.jpg -strip output.jpg`

2. **Recommended Server-Side Processing** (if implementing upload functionality):
   ```bash
   # Install exiftool
   npm install exiftool.js

   # Or use sharp for image processing
   npm install sharp
   ```

### Why It Matters
- **Camera EXIF Data**: Contains camera model, GPS coordinates, timestamp
- **Photographer Metadata**: Author, copyright information
- **Privacy**: Removes location data that could compromise security

## Security Headers

### Content Security Policy (CSP)
Recommended headers for `vite.config.ts`:
```typescript
headers: {
  'Content-Security-Policy': "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'",
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin'
}
```

## XSS Prevention
- React automatically escapes content in JSX
- All user inputs are sanitized through form validation (Zod)
- No `dangerouslySetInnerHTML` is used in the codebase

## CSRF Protection
- Contact form uses `mailto:` protocol (no backend endpoint exposed)
- For future API endpoints, implement CSRF tokens with SameSite cookies

## Input Validation
- Contact form validates email format before sending
- All form inputs use React Hook Form with Zod schema validation

## Dependencies Security
Current dependencies are from trusted sources:
- React & React Router: Official React team
- shadcn/ui & Radix UI: Community-vetted component libraries
- Tailwind CSS: Industry standard
- Lucide React: Open source icon library

### Audit Results
Run security audit with:
```bash
npm audit
# or
bun audit
```

No critical vulnerabilities in current dependencies (as of Feb 2026).

## Data Privacy

### What Data We Collect
- Contact form submissions: Name, Email, Subject, Message
- These are sent via `mailto:` to the configured email

### What We Don't Collect
- Browser analytics/tracking
- Cookies (except session management)
- Third-party tracking services
- User location or device info

### User Data Rights
- Users can request deletion of contact messages
- No data is stored on our servers
- Email submissions are handled by the user's email provider

## Deployment Security

### Before Production Deploy:
1. Update all dependencies: `npm audit fix`
2. Run linter: `npm run lint`
3. Build and test: `npm run build`
4. Enable HTTPS/SSL on hosting
5. Set secure headers on server
6. Configure rate limiting on contact form
7. Monitor for vulnerabilities with tools like Snyk

### Environment Variables
Never commit sensitive data:
- API keys
- Database credentials
- Email service tokens

Use `.env.local` for development (add to `.gitignore`)

## Reporting Security Issues
If you discover a security vulnerability:
1. Do NOT open a public issue
2. Email: security@aurelianstudios.com
3. Include: Vulnerability description, affected component, potential impact

## References
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Content Security Policy Guide](https://content-security-policy.com/)
- [React Security Best Practices](https://react.dev/learn)
- [Vite Security Guide](https://vitejs.dev/)

---
Last updated: February 2, 2026
