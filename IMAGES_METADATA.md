# Image Processing & Metadata Removal Guide

## Before Uploading Images

Always remove metadata (EXIF, IPTC, XMP) from images before adding them to `src/assets/` folders.

### Why?
- **Privacy**: Removes GPS location, camera settings, timestamps
- **Security**: Reduces attack surface
- **Performance**: Smaller file sizes

## Quick Methods

### Online Tools (Easiest)
1. **Verexif.com**
   - Upload image → Download cleaned version
   - Free, no registration required
   - Supports JPG, PNG, GIF, etc.

2. **InMetaChronicles**
   - Multiple images at once
   - Preserves image quality

### Command Line Tools

#### Using exiftool (Recommended)
```bash
# Install (Mac/Linux)
brew install exiftool

# Install (Windows)
# Download from https://exiftool.org/

# Remove all metadata
exiftool -all= -overwrite_original image.jpg

# Batch process folder
exiftool -all= -overwrite_original src/assets/MyProject/*.jpg
```

#### Using ImageMagick
```bash
# Install
brew install imagemagick  # Mac
# or use Windows installer from imagemagick.org

# Remove metadata
convert input.jpg -strip output.jpg
```

#### Using FFmpeg
```bash
ffmpeg -i input.jpg -an output.jpg
```

### Node.js Script (Automated)

Create `scripts/remove-exif.js`:

```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = 'src/assets';

async function removeExif() {
  const folders = fs.readdirSync(assetsDir);
  
  for (const folder of folders) {
    const folderPath = path.join(assetsDir, folder);
    const stats = fs.statSync(folderPath);
    
    if (!stats.isDirectory()) continue;
    
    const files = fs.readdirSync(folderPath).filter(f => 
      /\.(jpg|jpeg|png|webp)$/i.test(f)
    );
    
    for (const file of files) {
      const filePath = path.join(folderPath, file);
      try {
        await sharp(filePath)
          .withMetadata(false)
          .toFile(filePath);
        console.log(`✓ Cleaned: ${filePath}`);
      } catch (err) {
        console.error(`✗ Failed: ${filePath}`, err.message);
      }
    }
  }
}

removeExif();
```

Add to `package.json`:
```json
"scripts": {
  "clean-images": "node scripts/remove-exif.js"
}
```

Run before building:
```bash
npm run clean-images
npm run build
```

## Verification

### Check if metadata was removed:
```bash
# Windows PowerShell
Get-Item -Path "image.jpg" -Stream *

# Linux/Mac
exiftool image.jpg | head -20
# Should show minimal output
```

### Online Checker
Upload to [Verexif.com](https://verexif.com/en/) to verify.

## Best Practices

1. **Always clean before uploading** to the repository
2. **Keep originals backup** in a separate folder (not in repo)
3. **Test a sample** image before batch processing
4. **Document sources** separately (not in image metadata)
5. **Use consistent format** (JPG for photos, PNG for graphics)

## Supported Formats

- **JPG/JPEG**: Full metadata removal ✓
- **PNG**: Full metadata removal ✓
- **WebP**: Full metadata removal ✓
- **GIF**: Limited metadata removal
- **TIFF**: Full metadata removal ✓

## Performance Optimization

After removing metadata, optimize file size:

```bash
# Using ImageMagick
convert input.jpg -quality 85 -strip output.jpg

# Using FFmpeg
ffmpeg -i input.jpg -q:v 5 output.jpg

# Using sharp (Node.js)
sharp('input.jpg')
  .rotate()
  .resize(1920, 1080, { fit: 'cover' })
  .toFile('output.jpg');
```

## Troubleshooting

### "Command not found"
- Ensure tool is installed
- Add to system PATH
- Use full path: `/usr/local/bin/exiftool`

### "Permission denied"
```bash
# Make script executable
chmod +x scripts/remove-exif.js
```

### Image looks different after cleaning
- Some tools may alter color profile
- Use lossless processing where possible
- Test with `-overwrite_original` flag first

---
**Last Updated**: February 2, 2026

For questions, refer to SECURITY.md
