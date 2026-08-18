# Portfolio — Dasun Nimeth Sanjaya

A static portfolio site. No build step, no framework — just HTML, CSS, and JS,
so it's easy to host for free and easy to edit yourself.

## Files

```
index.html     → page structure (you shouldn't need to touch this often)
style.css      → all visual styling
script.js      → turns projects.js data into HTML on the page
projects.js    → YOUR CONTENT — edit this to add/change projects & skills
assets/
  projects/    → put your project images here
```

**To add or edit a project, only edit `projects.js`.** It has comments
explaining every field. Copy an existing block, change the text, save.

---

## Part 1 — Host it on GitHub Pages (free)

You'll need a free GitHub account (github.com) if you don't already have one —
you already do (github.com/dasunsanjaya080).

### Step 1: Create the repository
1. Go to https://github.com/new
2. Repository name: **`dasunsanjaya080.github.io`**
   (this exact name — `<your-username>.github.io` — is what makes GitHub
   host it automatically at that URL)
3. Set it to **Public**
4. Don't initialize with a README (you already have one) — just click **Create repository**

### Step 2: Upload the files
Easiest way (no command line needed):
1. On the new repo's page, click **"uploading an existing file"**
2. Drag in all the files from this folder (`index.html`, `style.css`,
   `script.js`, `projects.js`, `README.md`, and the `assets` folder)
3. Scroll down, click **Commit changes**

Or, if you're comfortable with git from the terminal:
```bash
cd path/to/this/folder
git init
git remote add origin https://github.com/dasunsanjaya080/dasunsanjaya080.github.io.git
git add .
git commit -m "Initial portfolio"
git branch -M main
git push -u origin main
```

### Step 3: Turn on Pages
1. In the repo, go to **Settings → Pages**
2. Under "Build and deployment" → Source, choose **Deploy from a branch**
3. Branch: **main**, folder: **/ (root)** → **Save**
4. Wait ~1 minute. Your site will be live at:

   **https://dasunsanjaya080.github.io**

---

## Part 2 — Updating the site later

Every time you want to add a project or change text:

1. **Add a project:** open `projects.js`, copy one of the existing objects
   inside the `PROJECTS` array, paste it, edit the fields (`id`, `title`,
   `summary`, `stack`, etc.)
2. **Add a photo:** drop an image into `assets/projects/` (e.g.
   `assets/projects/diyakwa.jpg`), then set `image: "assets/projects/diyakwa.jpg"`
   in that project's entry. Keep images roughly landscape (16:10), under ~500KB
   each so the page loads fast — export from SolidWorks/phone camera and
   compress with something like squoosh.app if needed.
3. **Push the change:**
   - Via the web: open the file on github.com, click the pencil (edit) icon,
     make your change, commit.
   - Via terminal:
     ```bash
     git add .
     git commit -m "Add [project name]"
     git push
     ```
4. GitHub Pages rebuilds automatically — changes usually show up within a
   minute or two. You may need to hard-refresh (Ctrl/Cmd + Shift + R) to see it.

---

## Notes

- The site has no backend — everything is static, so it's free forever on
  GitHub Pages and there's nothing to maintain beyond the files themselves.
- Contact info shown is your email and GitHub — your phone number is
  deliberately left off the public site. Add it in `index.html` inside the
  `pin-row` block if you want it visible.
- If you want a custom domain later (e.g. `dasunsanjaya.com`) instead of the
  `github.io` one, GitHub Pages supports that under **Settings → Pages →
  Custom domain** — happy to walk you through it when you're ready.
