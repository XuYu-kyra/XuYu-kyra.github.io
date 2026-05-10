#!/bin/bash
# Extract GIF from video (24s to 28s)
# Usage: ./extract_gif.sh

INPUT="/home/student24/Downloads/1.mp4"
OUTPUT="/home/student24/cpdpage/test-site/assets/videos/project-demo.gif"

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "ERROR: ffmpeg is not installed."
    echo "Please install it first by running:"
    echo "  sudo apt-get update && sudo apt-get install -y ffmpeg"
    exit 1
fi

# Create output directory if it doesn't exist
mkdir -p "$(dirname "$OUTPUT")"

echo "Extracting GIF from video..."
echo "Input: $INPUT"
echo "Time range: 24s to 28s (4 seconds)"
echo "Output: $OUTPUT"

# Extract GIF from 24s to 28s (4 seconds total)
# Using optimized settings: 10fps, 320px width, palette optimization for better quality
ffmpeg -i "$INPUT" \
       -ss 24 \
       -t 4 \
       -vf "fps=10,scale=320:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \
       -y \
       "$OUTPUT"

if [ $? -eq 0 ]; then
    echo ""
    echo "✓ GIF created successfully!"
    echo "Location: $OUTPUT"
    ls -lh "$OUTPUT"
    echo ""
    echo "You can now use this path in your Projects.yml:"
    echo "  demo_video: \"/assets/videos/project-demo.gif\""
else
    echo "Error creating GIF"
    exit 1
fi