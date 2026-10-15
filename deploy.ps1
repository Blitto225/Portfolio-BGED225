Write-Host "Building project..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "Preparing GitHub Pages assets..." -ForegroundColor Cyan
New-Item -Path dist/.nojekyll -ItemType File -Force | Out-Null
Copy-Item -Path dist/index.html -Destination dist/404.html -Force

Write-Host "Deploying to gh-pages branch..." -ForegroundColor Cyan
git -C dist init
git -C dist checkout -b gh-pages
git -C dist add -A
git -C dist commit -m "Deploy Portfolio to GitHub Pages"
$remoteUrl = git config --get remote.origin.url
git -C dist push -f $remoteUrl gh-pages
Remove-Item -Path dist/.git -Recurse -Force

Write-Host "Deploy complete! Live at: https://blitto225.github.io/Portfolio-BGED225/" -ForegroundColor Green
