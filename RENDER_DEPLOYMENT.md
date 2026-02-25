# Frontend Deployment Guide - Render

## 🚀 Quick Deploy to Render

### Prerequisites
- Backend deployed at: `https://evan-forum-backend-2-crzp.onrender.com`
- Repository: `https://github.com/Naol724/Evan-Forum-frontend`

---

## Step 1: Create Static Site on Render

1. Go to **Render Dashboard**: https://dashboard.render.com
2. Click **New +** → **Static Site**
3. Connect your GitHub repository: `Naol724/Evan-Forum-frontend`

---

## Step 2: Configure Build Settings

### Basic Settings:
- **Name**: `evangadi-forum-frontend` (or your preferred name)
- **Branch**: `main`
- **Root Directory**: *(leave empty)*
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`

---

## Step 3: Add Environment Variable

Click **Advanced** → **Add Environment Variable**:

```
VITE_API_URL = https://evan-forum-backend-2-crzp.onrender.com/api
```

**Important**: Make sure to include `/api` at the end!

---

## Step 4: Deploy

1. Click **Create Static Site**
2. Wait 3-5 minutes for build to complete
3. Copy your frontend URL (e.g., `https://evangadi-forum-frontend.onrender.com`)

---

## Step 5: Update Backend CORS

After deployment, update your backend to allow requests from the frontend:

1. Go to your **backend service** on Render
2. Click **Environment**
3. Update `CLIENT_URL` variable:
   ```
   CLIENT_URL = https://your-frontend-url.onrender.com
   ```
4. Save changes (backend will auto-redeploy)

---

## ✅ Verify Deployment

Visit your frontend URL and test:
- ✅ Page loads without errors
- ✅ Register a new account
- ✅ Login successfully
- ✅ Create a question
- ✅ Post an answer
- ✅ Test chatbot

---

## 🐛 Troubleshooting

### Build Failed
- Check build logs in Render dashboard
- Verify `package.json` has all dependencies
- Ensure Node version compatibility

### "Network Error" or CORS Error
- Verify `VITE_API_URL` is correct
- Check backend `CLIENT_URL` includes your frontend URL
- Test backend directly: `https://evan-forum-backend-2-crzp.onrender.com/test`

### Blank Page
- Check browser console for errors
- Verify environment variable is set
- Check routing configuration

### API Calls Failing
- Verify backend is running (not spun down)
- Check backend logs for errors
- Ensure `/api` is included in `VITE_API_URL`

---

## 📝 Configuration Summary

### Frontend (This Repository)
```
Repository: https://github.com/Naol724/Evan-Forum-frontend
Build Command: npm install && npm run build
Publish Directory: dist
Environment Variable: VITE_API_URL=https://evan-forum-backend-2-crzp.onrender.com/api
```

### Backend (Already Deployed)
```
URL: https://evan-forum-backend-2-crzp.onrender.com
Repository: https://github.com/Naol724/Evan-Forum-backend
Environment Variable: CLIENT_URL=<your-frontend-url>
```

---

## 🔄 Updating Your App

### To Update Frontend:
1. Make changes locally
2. Commit and push to GitHub
3. Render auto-deploys on push

### To Update Backend:
1. Push changes to backend repository
2. Render auto-deploys on push

---

## 📚 Additional Resources

- Render Static Sites: https://render.com/docs/static-sites
- Vite Environment Variables: https://vitejs.dev/guide/env-and-mode.html
- React Router on Static Hosts: https://reactrouter.com/en/main/guides/deploying

---

**Backend URL**: https://evan-forum-backend-2-crzp.onrender.com
**Deployment Date**: February 26, 2026
