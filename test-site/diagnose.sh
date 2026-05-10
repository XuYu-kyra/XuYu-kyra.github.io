#!/bin/bash
# Diagnosis script for GitHub Pages deployment issues

echo "=== Jekyll Site Diagnosis ==="
echo ""

echo "1. Checking if CSS file exists and contains project-card styles..."
if grep -q "project-card" assets/css/style.scss; then
    echo "✓ CSS file contains project-card styles"
else
    echo "✗ CSS file missing project-card styles"
fi

echo ""
echo "2. Checking if layout file contains project-card HTML..."
if grep -q "project-card" _layouts/index.html; then
    echo "✓ Layout file contains project-card HTML"
else
    echo "✗ Layout file missing project-card HTML"
fi

echo ""
echo "3. Testing local build..."
if bundle exec jekyll build --baseurl "/yuxu-cpd" > /tmp/jekyll-build.log 2>&1; then
    echo "✓ Local build successful"
    
    if grep -q "project-card" _site/assets/css/style.css; then
        echo "✓ Generated CSS contains project-card styles"
    else
        echo "✗ Generated CSS missing project-card styles"
    fi
    
    if grep -q "project-card" _site/index.html; then
        echo "✓ Generated HTML contains project-card"
    else
        echo "✗ Generated HTML missing project-card"
    fi
else
    echo "✗ Local build failed"
    echo "Build errors:"
    cat /tmp/jekyll-build.log | grep -i error | head -10
fi

echo ""
echo "4. Checking git status..."
echo "Local commits not pushed:"
git log --oneline origin/master..HEAD 2>/dev/null || echo "  (All commits pushed)"

echo ""
echo "5. Uncommitted changes:"
git status --short

echo ""
echo "=== Diagnosis Complete ==="
echo ""
echo "If GitHub Pages still shows old version:"
echo "1. Check GitHub Actions tab: https://github.com/XuYu-kyra/yuxu-cpd.github.io/actions"
echo "2. Clear browser cache (Ctrl+Shift+Delete)"
echo "3. Try hard refresh (Ctrl+F5)"
echo "4. Wait a few minutes for GitHub Pages to rebuild"

