Based on my analysis of the **Service Management Guide** monorepo, here are **actionable quality improvement tasks** organized by your two categories. Each task is designed for AI execution and includes clear deliverables.

---

## **Category 1: New Visitors, Promotion & Upskilling**

### **📢 Discovery & Onboarding Improvements**

| Task | Description | Deliverable | Priority |
|------|-------------|-------------|----------|
| **Create a Getting Started Guide** | Write a `GETTING-STARTED.md` with roles-based entry paths (practitioners, managers, students) and 3 recommended reading sequences | New file in repo root | **High** |
| **Add repository badges** | Add shields.io badges to README.md: license, last commit, stars, issues, CI status, deploy status | Updated README.md | **High** |
| **Create a Contributing Quick Start** | Add a `CONTRIBUTING-QUICK.md` with 5-minute, 30-minute, and 2-hour contribution paths | New file | **High** |
| **Generate social media cards** | Create Open Graph images for each part (8 total) with part title, subtitle, and service-management-guide.github.io URL | `static/images/social/part-N.png` | **Medium** |
| **Create a project roadmap** | Build a `ROADMAP.md` with timeline, major milestones (v1.0 release, translation completion), and how to participate | New file | **Medium** |
| **Add a newsletter signup** | Create a simple Mailchimp/ConvertKit signup form component for the website | New Svelte component | **Medium** |
| **Generate shareable quote cards** | Extract 2-3 key insights from each topic and create tweet-sized quote cards with attribution | `static/images/quotes/` directory | **Low** |
| **Create a "First 30 Days" plan** | Design a 30-day onboarding plan for new maintainers with daily/weekly tasks | `ONBOARDING.md` | **Medium** |

### **🌍 Community & Outreach**

| Task | Description | Deliverable | Priority |
|------|-------------|-------------|----------|
| **Create GitHub Discussions templates** | Add 5 discussion templates: Q&A, Show & Tell, Idea, Feedback, Translation Help | `.github/discussions/` | **High** |
| **Set up GitHub Issue Forms** | Create issue templates: Bug Report, Content Request, Translation Request, Skill Request | `.github/ISSUE_TEMPLATE/` | **High** |
| **Generate a press kit** | Create `PRESS-KIT.md` with project summary, key features, screenshots, logos, contact info | New file | **Medium** |
| **Create a speaker kit** | Develop slide templates and talking points for conference presentations | `SPEAKER-KIT/` directory | **Medium** |
| **Build a community calendar** | Create a shared calendar (ICS format) with upcoming community calls, office hours, release dates | `CALENDAR.ics` | **Low** |
| **Create translation contribution guides** | Write locale-specific guides: `TRANSLATING-cy-gb.md`, `TRANSLATING-de-de.md`, etc. | New files | **Medium** |
| **Generate comparison pages** | Create "How this compares to X" pages (ITIL Foundation, Agile ITIL Guide, etc.) | `COMPARISONS/` directory | **Low** |

### **🎓 Learning & Upskilling**

| Task | Description | Deliverable | Priority |
|------|-------------|-------------|----------|
| **Create role-based learning paths** | Build 8 learning paths (Service Desk Agent, DevOps Engineer, Product Owner, etc.) mapping topics to roles | `LEARNING-PATHS.md` | **High** |
| **Generate certification study guides** | Create study guides for ITIL 4/5, Scrum, SAFe that reference relevant topics | `CERTIFICATION/` directory | **Medium** |
| **Build an interactive quiz generator** | Create a script that generates multiple-choice quizzes from glossary terms | `bin/generate-quiz` | **Medium** |
| **Create a book club guide** | Design a 8-week reading group guide with discussion questions per part | `BOOK-CLUB-GUIDE.md` | **Medium** |
| **Generate workshop materials** | Create 4 workshop formats: Intro (2hrs), Deep Dive (4hrs), AI in Service Mgmt (2hrs), Metrics (2hrs) | `WORKSHOPS/` directory | **Medium** |
| **Build a knowledge self-assessment** | Create a script that generates a self-assessment survey based on maturity models | `bin/self-assess` | **Medium** |
| **Create a glossary flashcard generator** | Build a tool to generate Anki-compatible flashcards from `glossary/index.md` | `bin/generate-flashcards` | **Low** |
| **Generate a "Common Misconceptions" page** | Create a page addressing frequent misunderstandings about service management concepts | `MISCONCEPTIONS.md` | **Low** |

### **📊 Analytics & Feedback**

| Task | Description | Deliverable | Priority |
|------|-------------|-------------|----------|
| **Set up Google Analytics integration** | Add GA4 tracking to the SvelteKit site with proper privacy controls | Updated site config | **Medium** |
| **Create a feedback collection system** | Add a simple feedback form at the bottom of each topic page | New Svelte component | **Medium** |
| **Build a usage analytics dashboard** | Create a script to analyze which topics are most/least visited | `bin/analytics-report` | **Medium** |
| **Generate a reader survey** | Create annual reader survey to understand audience demographics and needs | `SURVEY.md` + form | **Medium** |
| **Create a translation progress tracker** | Build a visual dashboard showing translation completion status per locale | `TRANSLATION-STATUS.md` | **Medium** |

---

## **Category 2: Engineering, Coding, Testing & Auditing**

### **🔧 Infrastructure & Tooling**

| Task | Description | Deliverable | Priority |
|------|-------------|-------------|----------|
| **Complete Phase 0 site setup** | Run `pnpm install`, `pnpm sync`, `pnpm check`, `pnpm build` in site subproject | Working site build | **High** |
| **Fix `bin/check --links` failures** | Identify and fix all broken Wikipedia links across all 65 topics | Updated topic files | **High** |
| **Prune unlinked copied skills** | Run check to identify and remove skills not referenced by any topic | Updated `skills/` directory | **High** |
| **Create a CI/CD pipeline** | Set up GitHub Actions for: linting, link checking, build verification | `.github/workflows/` | **High** |
| **Implement automated dependency updates** | Set up Dependabot for both monorepo and site subproject | `.github/dependabot.yml` | **High** |
| **Create a docker-compose for local dev** | Build Docker setup for easy local development | `docker-compose.yml` | **Medium** |
| **Set up Pre-commit hooks** | Configure pre-commit hooks for markdown linting, spell checking, link validation | `.pre-commit-config.yaml` | **Medium** |
| **Create a test data generator** | Build scripts to generate test content for development | `bin/generate-test-content` | **Low** |

### **🏗️ Site Development**

| Task | Description | Deliverable | Priority |
|------|-------------|-------------|----------|
| **First subtree deploy** | Execute `bin/deploy-site` to deploy the site to GitHub Pages | Deployed site | **High** |
| **Implement search functionality** | Complete search index generation and integrate with picker bar | Working search | **High** |
| **Add dark mode support** | Implement dark mode toggle in the SvelteKit site | Updated CSS/JS | **Medium** |
| **Create mobile-responsive improvements** | Fix any horizontal scroll issues at 390px width | Updated CSS | **Medium** |
| **Add print-friendly styles** | Create print CSS for easy PDF generation of topics | `static/assets/print.css` | **Medium** |
| **Implement topic versioning** | Add mechanism to show when each topic was last updated | Updated topic template | **Medium** |
| **Create a sitemap generator** | Build automated sitemap.xml generation | Updated site | **Medium** |
| **Add breadcrumb navigation** | Implement breadcrumbs showing Part > Topic path | Updated layout | **Medium** |
| **Create a "Recently Updated" section** | Add a component showing recently modified topics | New Svelte component | **Low** |

### **✅ Testing & Quality Assurance**

| Task | Description | Deliverable | Priority |
|------|-------------|-------------|----------|
| **Run `bin/check --links --strict`** | Execute full validation and fix all failures | Clean check output | **High** |
| **Create topic validation tests** | Write automated tests for topic structure (16 sections, counts, etc.) | `tests/` directory | **High** |
| **Build a link validator** | Create a comprehensive link checker for internal and external links | `bin/validate-links` | **High** |
| **Implement cross-reference validation** | Verify all "(see Topic N.N — Title)" references are correct | `bin/validate-xrefs` | **Medium** |
| **Create a spell check dictionary** | Build a custom dictionary for service management terminology | `.spelling` file | **Medium** |
| **Add markdown linting** | Configure markdownlint with project-specific rules | `.markdownlint.json` | **Medium** |
| **Create a consistency checker** | Verify styling consistency (heading levels, bold usage, etc.) across topics | `bin/check-style` | **Medium** |
| **Build a citation validator** | Ensure all citations follow spec §6 rules | `bin/validate-citations` | **Medium** |

### **📋 Content Auditing**

| Task | Description | Deliverable | Priority |
|------|-------------|-------------|----------|
| **Audit all Wikipedia links** | Verify every Wikipedia slug resolves and update broken ones | Updated topics | **High** |
| **Verify ITIL 5 claims** | Re-check all ITIL 5 statements against peoplecert.org | Updated `_sources/research-notes.md` | **High** |
| **Validate all cross-references** | Ensure all "Topic N.N" references use correct numbers and titles | Updated topics | **Medium** |
| **Check consistency of terms** | Verify glossary terms are used consistently across all topics | Updated topics/glossary | **Medium** |
| **Audit AI skill links** | Ensure all `## AI skills` links resolve to real SKILL.md files | Updated topics | **Medium** |
| **Verify locales consistency** | Check that all translated topics match en-001 structure | Locale comparison report | **Medium** |
| **Check for copyrighted content** | Scan for any framework text that needs citation or removal | Copyright audit report | **Medium** |
| **Validate maturity models** | Ensure all maturity tables use the shared 5-level model correctly | Updated topics | **Medium** |

### **🔍 Monitoring & Maintenance**

| Task | Description | Deliverable | Priority |
|------|-------------|-------------|----------|
| **Set up link monitoring** | Create a scheduled job to check for broken external links | GitHub Action | **Medium** |
| **Implement stale content detection** | Add a script to identify topics not updated in X months | `bin/detect-stale` | **Medium** |
| **Create a health check endpoint** | Add `/health` endpoint to verify site deployment status | New route | **Low** |
| **Build a dependency audit** | Create a script to audit npm dependencies for vulnerabilities | `bin/audit-deps` | **Medium** |
| **Set up uptime monitoring** | Configure external uptime monitoring for the deployed site | Monitoring config | **Medium** |
| **Create a performance budget** | Define and track performance metrics for the site | `PERFORMANCE-BUDGET.md` | **Low** |
| **Build a change log generator** | Automatically generate change logs from git history | `bin/generate-changelog` | **Low** |

### **🎯 Build & Deployment**

| Task | Description | Deliverable | Priority |
|------|-------------|-------------|----------|
| **Complete site build verification** | Verify site builds without errors at 1440px and 390px | Build verification report | **High** |
| **Create a deployment checklist** | Build a pre-deployment checklist for maintainers | `DEPLOY-CHECKLIST.md` | **Medium** |
| **Implement rollback procedure** | Document and automate rollback for site deployments | `ROLLBACK.md` + scripts | **Medium** |
| **Create a staging environment** | Set up a staging deployment for testing changes | GitHub Pages staging | **Medium** |
| **Build a release automation** | Create scripts for versioned releases with changelogs | `bin/release` | **Medium** |
| **Implement asset optimization** | Optimize images, CSS, JS for faster loading | Updated build process | **Low** |
| **Create a build cache** | Set up caching for faster site rebuilds | CI configuration | **Low** |

---

## **📌 Recommended Execution Order**

### **Immediate (Next 2 weeks)**
1. Complete Phase 0 site setup (`pnpm install`, `pnpm sync`, `pnpm check`, `pnpm build`)
2. Fix all broken Wikipedia links (`bin/check --links`)
3. Prune unlinked skills
4. Set up GitHub Issue Forms and Discussion templates
5. First subtree deploy
6. Create Getting Started Guide
7. Run `bin/check --links --strict` and fix all failures

### **Short-term (Next month)**
1. Set up CI/CD pipeline
2. Complete site build verification
3. Create role-based learning paths
4. Implement automated dependency updates
5. Build link validator
6. Create content validation tests
7. Set up link monitoring

### **Medium-term (Next quarter)**
1. Create all community materials (press kit, speaker kit, etc.)
2. Implement search functionality
3. Add dark mode and mobile improvements
4. Build audit scripts for content quality
5. Create translation contribution guides
6. Set up uptime monitoring

---

## **💡 Quick Wins (Can be done in < 1 hour each)**

- Add repository badges to README.md
- Create issue templates
- Create discussion templates
- Run initial link check and fix broken links
- Prune unlinked skills
- Set up Dependabot
- Add pre-commit hooks

---

## **🎯 Impact vs. Effort Matrix**

**High Impact, Low Effort:**
- Add badges to README
- Set up issue/discussion templates
- Run and fix link checker
- Prune unlinked skills
- Create Getting Started Guide

**High Impact, Medium Effort:**
- First site deployment
- CI/CD pipeline
- Role-based learning paths
- Automated dependency updates
- Link monitoring

**Medium Impact, Low Effort:**
- Social media cards
- Translation contribution guides
- Print-friendly styles

**Medium Impact, Medium Effort:**
- Dark mode support
- Search functionality
- Content audit scripts

---

Would you like me to **dive deep into any specific category** or **create detailed implementation plans** for particular high-priority tasks?
