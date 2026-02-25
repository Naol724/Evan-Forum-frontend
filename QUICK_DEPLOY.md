# Quick Deploy Frontend to Render

## 🎯 One-Page Deploy Guide

### Your Configuration:
- **Backend URL**: `https://evan-forum-backend-2-crzp.onrender.com`
- **Frontend Repo**: `https://github.com/Naol724/Evan-Forum-frontend`
- **Backend Repo**: `https://github.com/Naol724/Evan-Forum-backend`

---

## 📋 Deploy Steps (5 minutes)

### 1. Create Static Site
- Go to: https://dashboard.render.com
- Click: **New +** → **Static Site**
- Connect: `Naol724/Evan-Forum-frontend`

### 2. Configure
```
Name: evangadi-forum-frontend
Branch: main
Root Directory: (empty)
Build Command: npm install && npm run build
Publish Directory: dist
```

### 3. Environment Variable
```
VITE_API_URL = https://evan-forum-backend-2-crzp.onrender.com/api
```

### 4. Deploy
- Click **Create Static Site**
- Wait 3-5 minutes

### 5. Update Backend CORS
- Go to backend service on Render
- Environment → Update `CLIENT_URL`
- Add your new frontend URL

---

## ✅ Test Checklist
- [ ] Frontend loads
- [ ] Register works
- [ ] Login works
- [ ] Create question works
- [ ] Post answer works
- [ ] Chatbot works

---

## 🆘 Quick Fixes

**CORS Error?**
→ Update backend `CLIENT_URL` with frontend URL

**Build Failed?**
→ Check logs, verify `npm run build` works locally

**Blank Page?**
→ Check browser console, verify `VITE_API_URL` is set

---

**Need Help?** See `RENDER_DEPLOYMENT.md` for detailed guide
