# GitHub and GitHub Pages Deployment

## Important security note
If you pasted a personal access token into chat, **revoke it immediately** and create a new one locally.
Do not keep using a token that has already been exposed.

## What is already prepared
This project is already configured for:

- GitHub repository push
- GitHub Pages deployment using Actions
- static export via Next.js
- repo-name-aware base path for project pages
- `.nojekyll` handling

## Files added for deployment
- `.github/workflows/deploy-pages.yml`
- `next.config.ts`
- `.gitignore`
- `public/.nojekyll`

## Recommended GitHub repo setup
1. Create a new GitHub repository.
2. Name it whatever you want.
3. Push this project to the `main` branch.
4. In GitHub:
   - go to **Settings > Pages**
   - set **Source** to **GitHub Actions**
5. Push to `main` again or run the workflow manually.

## Local commands to publish
Run these locally in your terminal, after creating a fresh token if needed:

```bash
cd /home/user/unity-knowledge-nextjs

git init
git add .
git commit -m "Initial commit: Unity knowledge base"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## If you want edit links to point to GitHub
Set this repository variable or environment variable during deployment:

```bash
NEXT_PUBLIC_EDIT_BASE_URL=https://github.com/YOUR_USERNAME/YOUR_REPO/edit/main
```

Then `Edit this page` links can point to the GitHub web editor instead of local VS Code URLs.

## How basePath is handled
- if this is a normal project repo page, the site builds under `/<repo-name>` automatically in GitHub Actions
- if this is a user/org site repo like `username.github.io`, it builds at root

## Troubleshooting
### CSS or links broken on GitHub Pages
Usually means base path issues. This project is already configured to derive the repo path automatically in Actions.

### Workflow fails at build
Run locally first:

```bash
npm install
npm run build
```

### GitHub Pages shows default branch content instead of built site
Make sure **Settings > Pages > Source** is set to **GitHub Actions**.
