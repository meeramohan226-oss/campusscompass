# CampusCompass — Comprehensive Project Specification

CampusCompass is a mobile-first web application designed specifically for college students in Kerala (tailored for KTU engineering students, Arts & Science colleges, and professional institutions, with initial regional data centered around Thrissur and Kerala state education criteria such as SSLC and +2).

---

## 1. Screen-by-Screen Summary, Fields & User Actions

The UI mockup documentation (`/docs/ui/Adobe Scan Sep 30, 2026 (1).pdf`, 26 pages) is organized into 8 functional modules:

---

### Module 1: Splash & Authentication

#### Screen 1: Splash / Brand Screen (Page 1)
- **Visuals**: Deep dark canvas, centered dual-ring circular compass icon with gold/silver vertical needle, warm cream serif typography reading "CampusCompass".
- **Fields**: None.
- **User Actions**:
  - Auto-transitions or tap to proceed to Log In / Home.

#### Screen 2: Log In Screen (Page 2)
- **Header**: Yellow circular compass icon + sans-serif "CampusCompass"; top tab bar with active indicator under "Log in" and inactive "Sign up".
- **Headings**: "Welcome back", subhead "Log in with your college email or ID."
- **Fields**:
  - `College email or ID`: Text input (`you@college.edu`).
  - `Password`: Password input with right-aligned toggle `Show` / `Hide`.
  - `Keep me logged in`: Checkbox.
- **User Actions**:
  - Tap "Sign up" tab to switch to registration.
  - Tap "Forgot password?" link.
  - Tap "Show" to toggle password masking.
  - Tap primary CTA "Log in" (Cyan filled button).
  - Tap footer link "New here? Create an account".

#### Screens 3 & 4: Sign Up Screen (Pages 3 & 4)
- **Header**: Yellow circular compass icon + sans-serif "CampusCompass"; top tab bar with active indicator under "Sign up".
- **Headings**: "Create your account", subhead "It takes about a minute."
- **Role Selector**:
  - "I am a": Segmented toggle between `[ Student ]` (active, cyan border) and `[ Faculty or staff ]` (dark pill).
- **Fields**:
  - `Full name`: Text input.
  - `College`: Autocomplete searchable input (`Start typing your college name`).
  - `College email`: Email input (`you@college.edu`).
  - `Password`: Password input with `Show` toggle and requirement note: *"Use 8+ characters with a number and a symbol."*
  - `Confirm password`: Password input.
  - `Terms agreement`: Checkbox with linked text *"I agree to the terms and privacy policy."*
- **User Actions**:
  - Toggle between Student and Faculty/Staff roles.
  - Type and select college from college directory.
  - Tap "Log in" tab to return to login.
  - Tap primary CTA "Create account" (Cyan filled button).
  - Tap footer link "Already registered? Log in".

---

### Module 2: Home / Landing Dashboard (Pages 5–9)

#### Screen 5: Home Hero & Global Search (Page 5)
- **Header**: Serif "CampusCompass" on the left, `[ Join ]` orange pill button on the right.
- **Hero**:
  - Headline: *"Your whole college life, in one place."*
  - Subtitle: *"Scholarships, part-time work, deadlines, PG stays and honest advice from seniors, so you stop hunting through ten different groups."*
  - Global Search Input: `Search scholarships, PGs, exam da...` with orange `Search` button.
  - Quick Category Chips: `[ 🎓 Scholarships ]`, `[ 💼 Part-time ]`, `[ 🚌 Transport ]`, `[ 🏅 Sports ]`, `[ 🏠 PG ]`.
- **User Actions**:
  - Tap "Join" to go to Sign Up / Log In.
  - Enter keyword and submit global search.
  - Tap category chip to jump/filter to corresponding section or module.

#### Screen 6: Everyday Essentials Section (Page 6)
- **Section Heading**: "Everyday essentials", subhead *"The things every student asks about in the first month."*
- **Feature Cards**:
  1. **Scholarships** (🎓): "Government and private scholarships with eligibility and last dates." → Link: `24 open now →`
  2. **Part-time works** (💼): "Weekend and evening jobs that fit around classes." → Link: `Browse jobs →`
  3. **Transport** (🚌): "Bus timings, routes and concession details near your campus." → Link: `Find routes →`
- **User Actions**:
  - Tap any card or link arrow to navigate directly to that module.

#### Screen 7: Places to Stay & College Details Preview (Page 7)
- **Section 1: Places to stay**:
  - Subhead: *"PG availability with direct contact details."*
  - PG Mini Cards:
    - *Sunrise Boys PG*: "800 m from campus · 2 beds free · ₹3,800/mo" → `[ 📞 Call ]` button.
    - *Lakshmi Ladies Hostel*: "1.2 km · 1 bed free · ₹4,200/mo" → `[ 📞 Call ]` button.
    - *Greenview Rooms*: "2 km · shared · ₹3,000/mo" → `[ 📞 Call ]` button.
- **Section 2: College details for freshers**:
  - Subhead: *"Shared by students who are actually there."*
  - Card 1: **Placement details** (📈): Companies that visit, packages reported by last year's batch, prep tips from placed seniors.
- **User Actions**:
  - Tap `Call` button on any PG card to trigger `tel:` dialer.
  - Tap card to view full stay listings.

#### Screen 8: College Details Continuation (Page 8)
- **Content**:
  - Card 2: **After college** (🚀): Further studies and where seniors went, jobs by branch, competitive exams (dates, syllabus, resources).
- **User Actions**:
  - Tap to navigate to the College Details module.

#### Screen 9: Campus Connect Preview & Footer (Page 9)
- **Campus Connect White Promo Container**:
  - Badge: "Campus Connect" (Orange).
  - Headline: *"First year? Ask someone who's been there."*
  - Body: *"Get matched with seniors from your college for practical guidance on classes, labs, hostels and what to actually focus on."*
  - CTA Button: `[ Find a senior ]` (Orange pill button).
  - Senior Avatars Preview:
    - `[A]` Anjali · S7 CSE (Placements, projects, KTU tips).
    - `[R]` Rahul · Final year BSc (Exams, PG hunting, campus life).
    - `[F]` Fathima · MBBS Y3 (Study plans, hostel advice).
- **Footer**:
  - Text: *"CampusCompass · Built by students. Sample data shown"*.
- **User Actions**:
  - Tap "Find a senior" to open Campus Connect mentor discovery.

---

### Module 3: Scholarships (Pages 10 & 11)

#### Screen 10: Scholarship Eligibility Form (Page 10)
- **Header**: Serif "CampusCompass" (left), "Hi, student" (right).
- **Headings**: "Find scholarships you qualify for", subhead *"Fill in your details and we will show matching scholarships."*
- **Search Bar**: Input `Search by name, e.g. merit, post-` + `Search` orange button.
- **Form Fields ("Your details")**:
  - `Which college are you studying in?`: Text input (`College name`).
  - `Course`: Dropdown select (`Any course`).
  - `Year of study`: Dropdown select (`Any year`).
  - `Annual family income (₹)`: Number input (`e.g. 200000`).
  - `Caste / category`: Dropdown select (`Prefer not to say`), with note: *"Only used to match schemes. Optional."*
  - `SSLC %`: Number input (`e.g. 88`).
  - `+2 %`: Number input (`e.g. 82`).
- **User Actions**:
  - Enter demographic, academic, and financial criteria.

#### Screen 11: Scholarship Form Actions & Results List (Page 11)
- **Form Actions**:
  - `[ Show matches ]`: Pale yellow pill button (triggers matching algorithm).
  - `[ Reset ]`: Text link (clears all filter inputs).
- **Results Counter**: "10 scholarships found".
- **Result Cards**:
  - **Card 1**: *Merit Scholarship for Higher Studies* (State Government)
    - Amount: `₹10,000 / year` (Mint green).
    - Tags: `[ Income up to ₹8,00,000 ]`, `[ Min 80% ]`.
    - Description: *"Merit based. Needs high +2 marks."*
    - Meta: "Last date: 31 Oct" (Cyan text) | Button: `[ View details ]`.
  - **Card 2**: *Post-Matric Scholarship for SC/ST* (Central Government)
    - Amount: `Tuition + allowance` (Mint green).
    - Tags: `[ Income up to ₹2,50,000 ]`, `[ SC / ST ]`.
    - Description: *"Covers fees and maintenance for SC/ST students."*
    - Meta: "Last date: 15 Nov" (Cyan text) | Button: `[ View details ]`.
  - **Card 3**: *OBC Higher Education Grant* (State Backward Classes Dept)
    - Amount: `₹6,000 / year`.
- **User Actions**:
  - Tap "Show matches" to run matching filter.
  - Tap "Reset" to reset filters.
  - Tap "View details" to open full scholarship guidelines/apply links.

---

### Module 4: Transport (Pages 12, 13, 14)

#### Screens 12 & 13: Offer a Ride / "I have a vehicle" (Pages 12 & 13)
- **Header**: Serif "CampusCompass", Title "Transport", Subtitle *"Find a ride to campus or offer your vehicle to students."*
- **Search Bar**: `Search vehicles already posted`.
- **Mode Toggle**: Segmented toggle `[ I have a vehicle ]` (active, cyan) | `[ I need a ride ]`.
- **Vehicle Type**: `[ Two-wheeler ]` (active, cyan border) | `[ Four-wheeler ]`.
- **Form Fields**:
  - `Your name`: Text input.
  - `Phone number`: 10-digit mobile number input.
  - `Cost per km (₹)`: Number input (`e.g. 8`).
  - `College name`: Text input.
  - `Drop points you cover`: Text input (`e.g. Main gate, Bus stand`).
- **Validation**: Inline error display: *"Enter your name."*
- **Primary CTA**: `[ Post my vehicle ]` (Cyan filled button).
- **User Actions**:
  - Switch between vehicle types (Two-wheeler / Four-wheeler).
  - Submit ride listing to peer transport pool.

#### Screen 14: Find a Ride / "I need a ride" (Page 14)
- **Header & Search**: `Search by driver, college or place`.
- **Mode Toggle**: `[ I have a vehicle ]` | `[ I need a ride ]` (active, cyan).
- **Filter Controls**:
  - `Vehicle you need`: `[ Any ]` (active cyan outline) | `[ Two-wheeler ]` | `[ Four-wheeler ]`.
  - `Your college name`: Text input (`e.g. City Engineering College`).
  - `Your dropping point`: Text input (`e.g. Main gate`).
  - `Distance (km)`: Number input (`Optional`).
- **Results Counter**: "4 vehicles available".
- **Ride Card**:
  - Driver: "Ravi Kumar" | Tag: `[ Two-wheeler ]`.
  - College: "Government Arts College".
  - Route: "Drops at: Main gate, Library road".
  - Rate: `₹6 per km` (Gold text).
  - CTA Button: `[ Call 9876500011 ]` (Cyan outlined button).
- **User Actions**:
  - Filter rides by vehicle type, college, and dropping points.
  - Direct call driver via CTA button.

---

### Module 5: Part-time Jobs (Pages 15 & 16)

#### Screen 15: Find Jobs Tab (Page 15)
- **Header**: Yellow circular compass icon + sans-serif "CampusCompass"; top tab bar `[ Find jobs ]` (active, yellow underline) | `[ Post a job ]`.
- **Title**: "Part-time jobs near campus", subhead *"Search jobs that fit around classes."*
- **Search & Filter Fields**:
  - `Job title or keyword`: Text input (`e.g. barista, tutor`).
  - `Location`: Text input (`Area or street`).
  - `Category`: Select dropdown (`All categories`, active cyan focus border).
  - `Minimum pay (₹ per hour)`: Number input (`e.g. 80`).
  - `Working days`: Select dropdown (`Any days`).
  - `Working hours`: Select dropdown (`Any hours`).
- **User Actions**:
  - Search and filter job listings.
  - Switch to "Post a job" tab.

#### Screen 16: Post a Job Tab (Page 16)
- **Header**: Top tab bar with active indicator on `[ Post a job ]`.
- **Title**: "Post a job", subhead *"For shop owners. Fill in the details and students can apply straight away."*
- **Form Fields**:
  - `Shop name`: Text input.
  - `Owner / contact name`: Text input.
  - `Phone number`: Tel input.
  - `Job title`: Text input.
  - `Job description`: Multiline textarea.
  - `Location`: Text input.
- **User Actions**:
  - Fill employer/shop details and publish a student job opening.

---

### Module 6: Stay (PG / Hostel) (Pages 17, 18, 19)

#### Screen 17: Stay Search Availability (Page 17)
- **Header**: Serif "CampusCompass" (left), "Hi, student" (right). Title "Stay", subhead *"Find a PG or hostel near your college, or list one you own."*
- **Dual Selector Cards**:
  - `[ 🔍 Search availability / Find a PG or hostel ]` (active, orange border).
  - `[ 🏠 Post availability / List your PG or hostel ]` (inactive dark card).
- **Search Bar**: `Search by PG / hostel name, coll...` + `Search` orange button.
- **Filter Fields**:
  - `Name of college`: Text input (`College name`).
  - `Place`: Text input (`Town / area`).
  - `Sharing`: Select dropdown (`Any`).
  - `Max monthly rent (₹)`: Number input (`e.g. 4000`).
- **Form Action**: `[ Reset ]` link.
- **Results Counter**: "4 places found".
- **Listing Card**:
  - Name: "Sunrise Boys PG".
  - Rate: `₹3,800/mo` (Mint green).
  - Category & Town: "PG · Thrissur Town".
  - Tags: `[ 2 share ]`, `[ 4 share ]`, `[ Near Govt Engineering College ]`, `[ Near St Thomas College ]`.
- **User Actions**:
  - Filter PGs by nearby college, town/area, sharing occupancy, and max rent.
  - Tap card to see contact numbers and amenities.

#### Screens 18 & 19: Stay Post Availability (Pages 18 & 19)
- **Header & Selector**: `[ Post availability ]` card is active with orange border.
- **Form Fields**:
  - `Name of PG or hostel`: Text input (`e.g. Sunrise Boys PG`).
  - `Type`: Select dropdown (`PG`, Hostel, Shared Room).
  - `Place`: Text input (`Town / area`).
  - `Colleges nearby`: Comma-separated text input (`Separate with commas, e.g. Govt Engg Colleg`).
  - `Monthly rent (₹)`: Number input (`e.g. 3800`).
  - `Contact number`: 10-digit mobile number input.
  - `Sharing available`: Multiple checkboxes (`[ ] 2 share`, `[ ] 4 share`, `[ ] Any`).
  - `Rules and regulations`: Multiline textarea (`e.g. Gate closes at 9:30 PM. No smoking. Visitors only in the common area.`).
- **Primary CTA**: `[ Post availability ]` (Pale yellow/orange button).
- **Footer Note**: *"Sample listings for design preview. Listings posted here are kept only while this page is open."*
- **User Actions**:
  - Enter accommodation specs and publish listing.

---

### Module 7: College Details (Pages 20, 21, 22, 23, 24)

#### Screen 20: College Overview & Admission (Page 20)
- **Header**: Yellow circular dot + sans-serif "CampusCompass" (left), "My profile" link (right).
- **College Hero**:
  - Name: "Sample Institute of Technology" (Large bold H1).
  - Subhead: *"Everything you need to compare a college: placements, what comes next, and the exams worth preparing for."*
  - Course Selector: Dropdown pill `[ Course: B.Tech Computer Science v ]`.
- **Sub-navigation Tabs**: `[ College details ]` (active) | `[ Placement ]` | `[ Studies and job ]`.
- **Details Card**:
  - `College name`: Sample Institute of Technology.
  - `Eligibility`: "12th with 60% in PCM, valid entrance score" (KEAM reference).
- **User Actions**:
  - Change selected degree/branch using course dropdown.
  - Switch sub-navigation tabs.

#### Screen 21: Placement Details Tab (Page 21)
- **Header & Subtitle**: "Placement details", *"Last academic year, for the selected course."*
- **3 KPI Metric Cards**:
  - `86%` — Placement rate (Large cyan numeral).
  - `6.2 LPA` — Average package (Large cyan numeral).
  - `24 LPA` — Highest package (Large cyan numeral).
- **Data Cards**:
  - **Top recruiting companies**: Pills `[ Company A ]`, `[ Company B ]`, `[ Company C ]`, `[ Company D ]` (teal badges).
  - **Common job roles**: Pills `[ Software engineer ]`, `[ Data analyst ]`, `[ Support engineer ]`.
  - **Internship opportunities**: Bullets:
    - *6-month industry internship in final year*
    - *Stipend: 10,000 to 25,000 per month*
- **User Actions**:
  - Compare statistics across academic years or courses.

#### Screens 22, 23, 24: Further Studies, Jobs & Competitive Exams (Pages 22, 23, 24)
- **Header**: "Further studies and jobs after college", subhead *"Your options once the degree is done."*
- **Section A: Further studies**:
  - Card 1: *PG courses* (• M.Tech, • MCA).
  - Card 2: *Master's degree options* (• MS in Computer Science, • MBA).
  - Card 3: *Professional courses* (• Cloud certification, • Data science diploma).
  - Card 4: *Higher-study entrance exams* (Pills: `[ GATE ]`, `[ CAT ]`, `[ GRE ]`).
  - Card 5: *Study-abroad opportunities* (Exchange programs and MS admits in Germany, Canada, and the US. Requires GRE or IELTS).
- **Section B: Jobs**:
  - Card 6: *Job roles after graduation* (• Developer, • Analyst, • Consultant).
  - Card 7: *Companies hiring graduates* (Pills: `[ Company A ]`, `[ Company E ]`, `[ Company F ]`).
  - Card 8: *Government jobs* (• PSU engineer, • Bank IT officer).
  - Card 9: *Private-sector jobs* (• IT services, • Product companies, • Startups).
- **Section C: Competitive exam details**:
  - Subhead: *"Exams relevant to this course."*
  - Exam Filter Pills: `[ UPSC ]` (active, cyan pill) | `[ SSC ]` | `[ IBPS ]` | `[ GATE ]` | `[ CAT ]`.
  - Selected Exam Detail Card:
    - `Exam name`: UPSC.
    - `Conducting organization`: Union Public Service Commission.
    - `Eligibility`: Any degree, age 21 to 32.
- **User Actions**:
  - Filter competitive exams to see conducting bodies, syllabi, and eligibility.

---

### Module 8: Campus Connect (Pages 25 & 26)

#### Screen 25: Mentor Discovery ("Find a mentor") (Page 25)
- **Header**: Screen title "Campus Connect" (no brand logo), subhead *"Chat with seniors and alumni who have been where you are."*
- **Filter Tabs**: `[ All ]` (active, white pill) | `[ Seniors ]` | `[ Alumni ]`.
- **Mentor Cards**:
  - **Anjali Nair**: Senior, S5 Computer Science, KTU | Tags: `[ Study plans ]`, `[ Internships ]` | Action: `[ Request chat ]` (White pill).
  - **Rahul Menon**: Senior, S7 Electronics, KTU | Tags: `[ Projects ]`, `[ Placements ]` | Action: `[ Request chat ]`.
  - **Fathima Shereef**: Senior, Year 3 MBBS, Medical | Tags: `[ Exam prep ]`, `[ Clinical postings ]` | Action: `[ Request chat ]`.
  - **Arun Kumar**: Alumni, Software engineer, batch of 2019 | Tags: `[ Careers in tech ]`, `[ Interviews ]` | Action: `[ Request chat ]`.
- **Bottom Navigation Tab Bar**:
  - `[ Find a mentor ]` (active, cyan indicator).
  - `[ Ask a question ]` (inactive).
- **User Actions**:
  - Filter mentor list by Senior vs Alumni.
  - Tap "Request chat" to initiate 1-on-1 direct guidance message request.
  - Tap bottom tab bar to switch to "Ask a question".

#### Screen 26: Community Q&A ("Ask a question") (Page 26)
- **Header**: "Campus Connect", subhead *"Ask anything. Replies come from seniors and alumni."*
- **Form Fields**:
  - `What do you need help with?`: Select dropdown (`Studies and exams`).
  - `Who should answer?`: Select dropdown (`Seniors or alumni`).
  - `Your question`: Multiline textarea (`Example: How should I plan my first semester?`).
- **Primary CTA**: `[ Send question ]` (Lavender/periwinkle pill `#b4c6ff`, dark text).
- **Section**: "Your questions":
  - Empty state text: *"No questions yet. Ask one above and a senior or alumnus will reply."*
- **Bottom Navigation Tab Bar**:
  - `[ Find a mentor ]` (inactive).
  - `[ Ask a question ]` (active, cyan indicator).
- **User Actions**:
  - Submit public or peer questions to senior community.
  - View status of posted questions and responses.

---

## 2. Inconsistencies Identified Across Screens

### 1. Brand Logo & Typography Inconsistency
- **Serif vs Sans-Serif Brandmark**:
  - Pages 1, 5–9 (Home), 10 (Scholarships), 12 (Transport), and 17–18 (Stay) use a **Serif font** (Playfair / Georgia style) for "CampusCompass".
  - Pages 2–3 (Auth), 15 (Part-time jobs), and 20 (College details) use a **Sans-serif font** (Inter / Outfit style) for "CampusCompass".
  - Pages 25–26 (Campus Connect) remove the brand name completely and start directly with "Campus Connect".
- **Compass Logo Icon**:
  - Page 1: Large detailed dual-circle compass with two-tone needle.
  - Pages 2–3, 15: Miniature yellow circle with black compass needle.
  - Page 20: Just a solid yellow dot.
  - Pages 5–9, 10, 12, 14, 17–19, 25–26: No logo icon at all.

### 2. Header & User Context Inconsistency
- **Right Header Element**:
  - Home: Shows `[ Join ]` (orange pill button).
  - Scholarships & Stay: Shows `Hi, student` (muted grey greeting).
  - College Details: Shows `My profile` (link).
  - Transport & Part-time Jobs: Blank right header.
  - Campus Connect: Missing standard app header entirely.
- **Header Structure**:
  - There is no unified persistent application header; some screens show brand + user greeting, others show module title, and some have custom tabs.

### 3. Button Styles & Accent Color Clashes
The mockups use **five uncoordinated primary button accent colors**:
1. **Electric Cyan (`#00e5ff` / `#38bdf8`)**: Used for "Log in", "Create account", "Post my vehicle", active vehicle tabs, active exam tabs, and link arrows.
2. **Bright Tangerine Orange (`#ff8a3d`)**: Used for "Join" button, "Search" buttons (Home, Scholarships, Stay), and "Find a senior".
3. **Pale Yellow / Gold (`#facc15` / `#eab308`)**: Used for "Show matches" (Scholarships) and "Post availability" (Stay).
   - *Accessibility Issue*: White text on pale yellow button (`Show matches`) fails WCAG contrast requirements significantly.
4. **Lavender / Periwinkle (`#b4c6ff`)**: Used for "Send question" in Campus Connect.
5. **Pure White**: Used for "Request chat" buttons and "All" mentor filter pill in Campus Connect.

### 4. Tab & Sub-navigation Chaos
Each module invents its own tab control:
- **Auth**: Top tabs with yellow underline bar.
- **Part-time jobs**: Top tabs with yellow underline bar.
- **Transport**: Rounded segmented toggle buttons (`I have a vehicle` | `I need a ride`).
- **Stay**: Two large card blocks with orange border for the active card.
- **College details**: Horizontal pill buttons (`College details` | `Placement` | `Studies and job`).
- **Campus Connect**: Bottom navigation bar (`Find a mentor` | `Ask a question`) with cyan underline indicator, plus top filter pills (`All` | `Seniors` | `Alumni`).
- **Missing Global App Navigation**: A student cannot navigate between modules (Home, Scholarships, Transport, Jobs, Stay, College, Connect) without going back to Home because there is no persistent global bottom bar or drawer.

### 5. Theme & Card Surface Breaks
- The application is overwhelmingly a sleek Dark Navy theme (`#060B18` / `#0F172A`).
- However, on Home (Pages 8 & 9), the "Campus Connect" preview suddenly switches to a **bright stark white container card** with dark text, creating visual dissonance before transitioning back to the dark footer.

---

## 3. Implementation Plan & Task List (Next.js, Tailwind, Supabase)

### Proposed Design System Harmonization
To preserve the aesthetic while fixing the inconsistencies, we will standardize:
- **Typography**: Google Font **Outfit** for modern geometric headings & **Inter** for clean readable body/inputs.
- **Brandmark**: Unified compass logo icon + consistent modern typography across all screens.
- **Color Palette (Semantic Tailwind Tokens)**:
  - Background: `bg-slate-950` / `bg-[#060b18]`
  - Surfaces / Cards: `bg-slate-900/80` with `border-slate-800` (subtle glassmorphism)
  - Primary Accent: `cyan-400` (`#22d3ee` / `#00e5ff`) for primary actions, active indicators, and links
  - Secondary Accent: `amber-500` / `orange-500` (`#f97316`) for featured highlights, search triggers, and urgent tags
  - Success / Currency: `emerald-400` (`#34d399`) for all fees, stipends, and packages (₹)
  - Text: `text-white` (headings), `text-slate-300` (body), `text-slate-400` (muted labels)
- **Unified Navigation Architecture**:
  - Top Bar: Standardized across all pages: Compass Logo + "CampusCompass", current page breadcrumb/title, and Profile/Auth avatar.
  - Global Mobile Bottom Navigation: 5 core tabs: `Home`, `Scholarships`, `Stay & Jobs`, `Transport`, `Connect`.

---

### Supabase Database Schema Plan

1. **`profiles`**
   - `id` (references auth.users), `full_name`, `role` (student, faculty, alumni), `college_id`, `college_email`, `phone_number`, `avatar_url`, `created_at`.
2. **`colleges`**
   - `id`, `name` (e.g. Govt Engineering College Thrissur, St. Thomas College, City Engg College), `district` (Thrissur, etc.), `university` (KTU, Calicut, etc.), `eligibility_criteria`.
3. **`scholarships`**
   - `id`, `title`, `provider` (State/Central/Private), `amount_display`, `min_sslc_pct`, `min_plus_two_pct`, `max_annual_income`, `caste_category`, `eligible_courses`, `deadline`, `apply_url`.
4. **`transport_rides`**
   - `id`, `user_id`, `driver_name`, `phone_number`, `vehicle_type` (two-wheeler, four-wheeler), `college_id`, `cost_per_km`, `drop_points` (array), `is_available`.
5. **`part_time_jobs`**
   - `id`, `shop_name`, `owner_name`, `phone_number`, `job_title`, `description`, `location`, `category`, `min_pay_per_hour`, `working_days`, `working_hours`.
6. **`stays` (PG & Hostels)**
   - `id`, `name`, `type` (PG, Hostel, Shared), `place`, `nearby_colleges` (array), `monthly_rent`, `contact_number`, `sharing_types` (array e.g. [2, 4]), `rules`.
7. **`college_stats`**
   - `college_id`, `course_name`, `placement_rate`, `avg_package_lpa`, `highest_package_lpa`, `top_companies` (array), `roles` (array), `internship_details`, `further_studies` (jsonb), `competitive_exams` (jsonb).
8. **`mentors` & `mentorship_chats`**
   - `id`, `profile_id`, `semester_branch` (e.g. "S7 CSE, KTU"), `expertise_tags` (array), `mentor_type` (senior, alumni).
   - Messages table for realtime Supabase chat requests and Q&A threads.

---

### Task List for Implementation

- [ ] **Phase 1: Project Setup & Design System**
  - [ ] Initialize Next.js 14/15 App Router project with TypeScript and Tailwind CSS.
  - [ ] Configure Tailwind theme tokens (colors, gradients, glass surfaces, animations).
  - [ ] Create UI component library: `Button`, `Input`, `Select`, `Badge`, `Card`, `SegmentedControl`, `Tabs`.
  - [ ] Build unified Layout with persistent Header (brand + auth status) and Mobile Bottom Navigation Bar.

- [ ] **Phase 2: Supabase Integration & Authentication**
  - [ ] Setup Supabase client, TypeScript types, and environment configuration.
  - [ ] Create Supabase migration script with schema, RLS policies, and Kerala sample seed data.
  - [ ] Build `/auth/login` and `/auth/signup` screens with role selection and validation.

- [ ] **Phase 3: Home Dashboard**
  - [ ] Build Hero with global search and quick category pills.
  - [ ] Implement "Everyday essentials" feature cards.
  - [ ] Implement "Places to stay" preview list with direct call action.
  - [ ] Implement "College details for freshers" highlight cards.
  - [ ] Implement "Campus Connect" mentor highlight card (in consistent dark glass theme).

- [ ] **Phase 4: Scholarships Module (`/scholarships`)**
  - [ ] Build scholarship search and multi-factor eligibility filter (college, course, year, family income, caste, SSLC %, +2 %).
  - [ ] Implement matching logic and reactive results count.
  - [ ] Render scholarship cards with deadline dates, financial tags, and details drawer/modal.

- [ ] **Phase 5: Transport Module (`/transport`)**
  - [ ] Build mode switcher: "I have a vehicle" vs "I need a ride".
  - [ ] Build "Offer a Ride" form with vehicle type selection and drop points.
  - [ ] Build "Find a Ride" search with vehicle filter and direct `tel:` call CTAs.

- [ ] **Phase 6: Part-Time Jobs Module (`/jobs`)**
  - [ ] Build "Find Jobs" with filters for location, category, min pay/hr, and working days/hours.
  - [ ] Build "Post a Job" form for local business owners and shopkeepers.

- [ ] **Phase 7: Stay (PG / Hostels) Module (`/stay`)**
  - [ ] Build dual selector view ("Search availability" vs "Post availability").
  - [ ] Implement stay search with filters for college, Thrissur town/area, sharing, and max rent.
  - [ ] Implement "Post availability" listing form with sharing checkboxes and house rules.

- [ ] **Phase 8: College Details Module (`/college-details`)**
  - [ ] Build College Hero with course selection dropdown.
  - [ ] Implement 3 tabs: Admission Eligibility, Placement Statistics (KPI badges, top recruiters, internships), and After College (PG courses, Study Abroad, Competitive Exams with interactive UPSC/GATE filter).

- [ ] **Phase 9: Campus Connect Module (`/campus-connect`)**
  - [ ] Build "Find a Mentor" directory with Senior/Alumni filters and "Request chat" action.
  - [ ] Build "Ask a Question" form with category, target respondent, and Q&A history.
  - [ ] Integrate Supabase Realtime for instant chat requests and community Q&A updates.

- [ ] **Phase 10: Quality Assurance, Responsiveness & Polish**
  - [ ] Test mobile viewport responsiveness (375px to 430px mobile viewports + tablet/desktop scaling).
  - [ ] Verify contrast and accessibility across all buttons and badges.
  - [ ] Seed rich realistic Kerala student data (KTU syllabus references, KEAM/NEET context, Thrissur regional details).
