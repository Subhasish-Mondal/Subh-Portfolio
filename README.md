# Subhasish Mondal | Portfolio

Personal portfolio of **Subhasish Mondal**, a Computer Science & Engineering graduate. A responsive, interactive website showcasing my education, experience, projects, research and achievements.

**Live site:** https://subhasish-mondal.github.io/Subh-Portfolio/

## Highlights

- **Responsive layout** that adapts from large monitors to phones, with a collapsible menu on small screens.
- **Light and dark themes**, switched with one click. The animated background and every colour adapt instantly.
- **Animated circuit-grid background** with moving signal pulses that react to the cursor.
- **Interactive 3D-style avatar** that tilts towards the cursor, with eyes that follow it.
- **Typing animation** for my roles in the hero section.
- **Projects** with category filters, search and a details popup.
- **Education timeline**, expandable **experience** entries, a **skills** overview, **research publications** and **awards & achievements**.
- **Resume** one click away from the hero section.
- **Quick menu** (`Ctrl + K`, or `Cmd + K` on Mac) to jump between sections.

## Sections

| Section | What it shows |
|---|---|
| Hero | Introduction, quick stats and resume button |
| Education | Academic timeline with subjects |
| Experience | Internships and what I worked on |
| Projects | Selected projects with filters and search |
| Skills | Technical skills, soft skills and languages |
| Research & Publications | Co-authored papers |
| Awards & Achievements | Competitions and recognition |
| Footer | Contact details and social links |

## Project structure

```
.
├── index.html     # Page structure and content
├── style.css      # Styles, including the light and dark theme colours
├── script.js      # Behaviour: animations, theme switch, projects, awards, resume button
├── resume.pdf     # Resume opened by the "View resume" button
├── images/        # Avatar and eye images
│   ├── avatar.webp
│   ├── iris-left.webp
│   └── iris-right.webp
└── README.md
```

## Run locally

No installation or build step is needed.

1. Download or clone this repository.
2. Open `index.html` in your browser.

To serve it on a local address instead, run this inside the project folder (requires Python):

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Customise

- **Text and sections:** edit the content in `index.html`.
- **Projects, papers and awards:** these are plain lists in `script.js`. Add or edit an entry to update the page.
- **Resume:** replace `resume.pdf` with your own file, keeping the same name.
- **Social links:** update the links in the footer section of `index.html`.
- **Colours:** the light and dark theme colours are variables at the top of `style.css`.

## About

Designed & built by Subhasish Mondal.
