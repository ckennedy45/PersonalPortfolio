Personal Portfolio — README

This README explains how to customize the portfolio so it can be reused for another person.

Files that make up the site
- `index.html` — home page
- `essay.html` — essay page
- `project1.html`, `project2.html`, `project3.html` — project pages
- `resume.html` — resume page
- `CSS/portfolio.css` — styles
- `Images/` — images, downloads (PDF/DOCX/PNG)
- `js/menu.js` — mobile menu behavior

General notes
- The layout and mobile responsiveness are already implemented in the HTML/CSS. You usually won't need to change layout or responsiveness settings.
- Avoid relying on hard-coded line numbers when editing. Different editors or small changes can move lines. Instead, open the target HTML file and look for the section names or obvious comments (for example: "Sidebar", "About", "Projects", "Download").

Home page (`index.html`)
- Site title: change the <title> element in the document head to update the browser tab text.
- Sidebar navigation: edit the nav/sidebar list to change page names or order. The sidebar is present on these pages: `index.html`, `essay.html`, `project1.html`, `project2.html`, `project3.html`, and `resume.html`. If you want consistent changes, update the sidebar in each of those files.
- Name and short description: edit the name and the short description fields near the top of the page (look for a name heading and a small paragraph under it).
- About me: there is an "About" section (a heading followed by a <p> block) — put your personal description inside that paragraph tag.
- Page buttons (Resume / Essay): buttons that link to `resume.html` and `essay.html` are on the home page — update hrefs if you rename files or move pages.
- Contact information: update the contact area with your preferred email, phone, or links.
- IT skills and qualifications: these are simple lists — edit the list items to reflect your skills and qualifications.
- Projects list (bottom of the page): update the project names and links if you change project filenames or titles.

Project pages (`project1.html`, `project2.html`, `project3.html`)
- Page title and description: update the project title and short description near the top of the page.
- Overview: edit the short overview/summary for the project.
- Tags: there are small tag elements (styled with classes like `tag`, `tag accent`, `tag accent2`) — change or remove these labels as needed.
- Live demo / Source code buttons: these link to external demos or repositories. Update the href attributes to point to your live demo and repo.
- Features & impact: there is a section to list the main features and the impact of the project — edit those bullets to describe your work.

Essay page (`essay.html`)
- Download button: if you want visitors to download the essay, add a `.docx` file to the `Images/` folder and update the download link href to point at it.
- Essay display: the essay is shown as an image (PNG) on the page. Replace the PNG in `Images/` and update the image src if you rename it. The image often links to itself so clicking opens it in a new tab — keep that behavior if you want that feature.

Resume page (`resume.html`)
- Download button: add a `.pdf` file to `Images/` and update the download link if you want a downloadable resume.
- Resume display: the resume is shown as an image (PNG). Replace that PNG in `Images/` and update the image src if you rename it. The displayed image generally links to the PDF or a full-size image.

Assets and naming
- Put downloadable files (PDF/DOCX) and display PNGs in the `Images/` folder.
- Use consistent, URL-safe filenames (no spaces or special characters) so links work across web servers.

Quick checklist before publishing
- Verify all internal links (sidebar, project links, resume/essay buttons) point to the correct files.
- Confirm any downloadable files exist in `Images/` and their filenames match the hrefs.
- Test on mobile to confirm the menu and layout behave as expected.


---

