# Deploy Your Website on Netlify 🚀

## What is Netlify?

Netlify is a free hosting platform that allows you to publish your HTML, CSS, and JavaScript website online.

## Prerequisites
- GitHub account
- Netlify account
- Project uploaded to GitHub

## Step 1: Login to Netlify
1. Go to https://netlify.com
2. Click **Log in**.
3. Continue with GitHub.

## Step 2: Import Project
1. Click **Add new site**.
2. Select **Import an existing project**.
3. Choose **GitHub**.
4. Select your repository.

## Step 3: Deploy
### HTML/CSS/JS Project
- Build Command: Leave empty
- Publish Directory: Leave empty

### Vite Project
- Build Command: `npm run build`
- Publish Directory: `dist`

Click **Deploy Site**.

## Step 4: Live Website
Wait for deployment to finish, then click the generated URL.

## Updating
Push changes to GitHub and Netlify will automatically redeploy.

## Common Issues
- Check index.html exists.
- Verify CSS/JS paths.
- Read deploy logs if build fails.

## Congratulations 🎉
Your website is now live!
