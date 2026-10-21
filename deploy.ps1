Write-Host "Building project to docs/..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "Preparing GitHub Pages assets..." -ForegroundColor Cyan
New-Item -Path docs/.nojekyll -ItemType File -Force | Out-Null
Copy-Item -Path docs/index.html -Destination docs/404.html -Force

Write-Host "Checking deployment branch..." -ForegroundColor Cyan
$branch = git branch --show-current
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
if ($branch -ne "main") {
    Write-Error "Run this deployment from the main branch (currently on '$branch')."
    exit 1
}

Write-Host "Committing and pushing GitHub Pages files..." -ForegroundColor Cyan
git add docs README.md deploy.ps1
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

git diff --cached --quiet -- docs README.md deploy.ps1
$diffExitCode = $LASTEXITCODE
if ($diffExitCode -eq 1) {
    git commit --only -m "Deploy Portfolio to GitHub Pages" -m "Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>" -- docs README.md deploy.ps1
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
} elseif ($diffExitCode -ne 0) {
    exit $diffExitCode
} else {
    Write-Host "No deployment file changes to commit." -ForegroundColor Yellow
}

git push origin HEAD:main
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "Deployment pushed! GitHub Pages URL: https://blitto225.github.io/Portfolio-BGED225/" -ForegroundColor Green
