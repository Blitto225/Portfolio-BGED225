Write-Host "Building project to docs/..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "Preparing GitHub Pages assets..." -ForegroundColor Cyan
New-Item -Path docs/.nojekyll -ItemType File -Force | Out-Null
Copy-Item -Path docs/index.html -Destination docs/404.html -Force

Write-Host "Committing and pushing to main branch..." -ForegroundColor Cyan
git add -A
git commit -m "Deploy Portfolio update on main"
$remoteUrl = git config --get remote.origin.url
git push $remoteUrl main

Write-Host "Deploy complete on main! Live at: https://blitto225.github.io/Portfolio-BGED225/" -ForegroundColor Green
