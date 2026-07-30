export const PORTAL_LINKS = [
  { label: "Admin Portal", role: "admin", emoji: "🏫", bg: "bg-indigo-50" },
  { label: "Teacher Portal", role: "teacher", emoji: "👩‍🏫", bg: "bg-yellow-50" },
  { label: "Student Portal", role: "student", emoji: "🎓", bg: "bg-green-50" },
  { label: "Parent Portal", role: "parent", emoji: "👨‍👩‍👧", bg: "bg-orange-50" },
  { label: "Bursar Portal", role: "bursar", emoji: "💳", bg: "bg-purple-50" },
] as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#programs" },
  { label: "Admissions", href: "#admissions" },
  { label: "Student Life", href: "#life" },
  { label: "News", href: "#news" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

export const TRUST_BADGES = [
  { icon: "✅", label: "WAEC Approved" },
  { icon: "✅", label: "NECO Approved" },
  { icon: "👩‍🏫", label: "Qualified Teachers" },
  { icon: "🛡️", label: "Safe Environment" },
  { icon: "🔬", label: "Modern Laboratories" },
  { icon: "💻", label: "ICT Enabled" },
  { icon: "📚", label: "Library" },
  { icon: "🚌", label: "School Bus" },
] as const;

export const STATS = [
  { icon: "👩‍🎓", target: 2000, suffix: "+", label: "Students Enrolled" },
  { icon: "👩‍🏫", target: 150, suffix: "+", label: "Qualified Teachers" },
  { icon: "🏆", target: 25, suffix: "+", label: "Awards Won" },
  { icon: "📊", target: 98, suffix: "%", label: "WAEC Pass Rate" },
  { icon: "⭐", target: 15, suffix: "+", label: "Years of Excellence" },
] as const;

export const WHY_CARDS = [
  { icon: "🎓", title: "Academic Excellence", desc: "Rigorous curriculum with consistent top-tier national exam results." },
  { icon: "👩‍🏫", title: "Experienced Teachers", desc: "150+ certified educators with a passion for transformational teaching." },
  { icon: "🏫", title: "Condusive Classrooms", desc: "Smart interactive classrooms designed for today's learning." },
  { icon: "💻", title: "Computer Lab", desc: "ICT facility with dedicated instructors." },
  { icon: "🔬", title: "Science Lab", desc: "Fully equipped biology, chemistry and physics laboratories." },
  { icon: "⚽", title: "Sports Development", desc: "Championship-winning sports programmes across multiple disciplines." },
  { icon: "🎨", title: "Music & Arts", desc: "Creative expression through music, fine arts, drama, and culture." },
  { icon: "🌱", title: "Character Development", desc: "Values-based education grounded in integrity, service, and faith." },
  { icon: "👑", title: "Leadership Training", desc: "Student council, prefect system, and mentorship programmes." },
  { icon: "📚", title: "Moral Instruction", desc: "Weekly faith and values classes building compassionate citizens." },
  { icon: "🧑‍🤝‍🧑", title: "Small Class Sizes", desc: "Maximum 25 students per class ensures personal attention for all." },
] as const;

export const PROGRAMS = [
  {
    emoji: "🧸",
    gradient: "from-yellow-50 to-yellow-200",
    level: "Foundation",
    ages: "Ages 1 – 4",
    title: "Creche & Nursery School",
    desc: "Play-based learning that builds motor skills, social intelligence, and early literacy in a nurturing, joyful environment.",
  },
  {
    emoji: "✏️",
    gradient: "from-green-50 to-green-200",
    level: "Primary 1 - 5",
    ages: "Ages 5 – 11",
    title: "Primary School",
    desc: "A strong academic foundation in literacy, numeracy, sciences, and the arts — delivered through active, child-centred pedagogy.",
  },
  {
    emoji: "📐",
    gradient: "from-blue-50 to-blue-200",
    level: "JSS 1 – 3",
    ages: "Ages 11 – 13",
    title: "Junior Secondary",
    desc: "Broadening intellectual horizons with BECE-aligned curriculum, extracurriculars, and leadership development programmes.",
  },
  {
    emoji: "📖",
    gradient: "from-purple-50 to-purple-200",
    level: "SS 1 – 3",
    ages: "Ages 13 – 18",
    title: "Senior Secondary",
    desc: "Science, Arts & Commercial tracks. Intensive WAEC/NECO preparation with a 98% first-attempt pass rate.",
  },
  {
    emoji: "🌅",
    gradient: "from-orange-50 to-orange-200",
    level: "Extended Learning",
    ages: "All Ages",
    title: "Extra Curricular Programs",
    desc: "Tutoring, coding clubs, music lessons, and enrichment activities for holistic development beyond the bell.",
  },
  {
    emoji: "🎯",
    gradient: "from-emerald-50 to-emerald-200",
    level: "Exam Prep",
    ages: "SS2 – SS3",
    title: "WAEC / JAMB Coaching",
    desc: "Targeted exam preparation with past-question drills, mock exams, and one-on-one subject coaching.",
  },
] as const;

export const FACILITIES = [
  { emoji: "🔬", bg: "from-blue-900 to-blue-600", label: "Science Laboratories", sub: "Well-equipped labs", wide: true },
  { emoji: "💻", bg: "from-emerald-900 to-emerald-600", label: "ICT Computer Lab", sub: "Workstations and active internet", wide: false },
  { emoji: "📚", bg: "from-amber-900 to-amber-600", label: "Library", sub: "10,000+ volumes", wide: false },
  { emoji: "🎵", bg: "from-violet-900 to-violet-700", label: "Music Room", sub: "Instruments & recording studio", wide: false },
  { emoji: "⚽", bg: "from-green-900 to-green-600", label: "Sports Field", sub: "Football, athletics & courts", wide: false },
  { emoji: "🏛️", bg: "from-red-900 to-red-700", label: "Assembly Hall", sub: "Capacity 600 seats", wide: false },
  { emoji: "🛝", bg: "from-sky-900 to-sky-600", label: "Playground", sub: "Safe, modern equipment", wide: false },
  { emoji: "🍽️", bg: "from-purple-900 to-purple-700", label: "Cafeteria", sub: "Nutritious daily meals", wide: false },
] as const;

export const LIFE_ACTIVITIES = [
  { icon: "⚽", title: "Sports", desc: "Football, athletics, basketball" },
  { icon: "🎤", title: "Debate", desc: "Inter-school competitions" },
  { icon: "💻", title: "Coding Club", desc: "Web, apps & robotics" },
  { icon: "🎵", title: "Music", desc: "Choir, band & solo" },
  { icon: "🎭", title: "Drama", desc: "Annual school productions" },
  { icon: "🚌", title: "Excursions", desc: "Educational field trips" },
  { icon: "🏅", title: "Inter-House Sports", desc: "Athletics & team events" },
  { icon: "🤖", title: "Robotics", desc: "STEM & innovation lab" },
] as const;

export const TESTIMONIALS = [
  {
    quote: "LordFaith Partner didn't just educate my daughter. They shaped her character. She came out disciplined, confident, and with the highest score in our state's WAEC. I couldn't be prouder.",
    name: "Adaeze Nwosu",
    role: "Parent — JSS3 to SS3 Journey",
    initials: "AN",
    avatarBg: "bg-navy",
  },
  {
    quote: "The teachers here genuinely care. My son went from struggling in mathematics to winning a national competition. The small class sizes made all the difference.",
    name: "Babatunde Fashola",
    role: "Parent — Primary & Junior Secondary",
    initials: "BF",
    avatarBg: "bg-gold",
    avatarText: "text-navy-dark",
  },
  {
    quote: "I'm now studying Computer Science at UNILAG. My coding skills, discipline, and ambition were all built at Lordfaith Partner. This school is the real deal.",
    name: "Chidi Umezurike",
    role: "Alumni — Class of 2021, UNILAG",
    initials: "CU",
    avatarBg: "bg-emerald",
  },
  {
    quote: "The facilities are incredible and the community so welcoming. My twins have blossomed here. The parents' portal lets me track attendance and results in real time!",
    name: "Remi Adeyemi",
    role: "Parent — Nursery & Primary",
    initials: "RA",
    avatarBg: "bg-violet-600",
  },
  {
    quote: "What I love most is the balance — academics, sports, debate, coding, faith. My daughter can explore everything and still excel academically.",
    name: "Fatima Okonkwo",
    role: "Parent — SS2 Student",
    initials: "FO",
    avatarBg: "bg-red-600",
  },
] as const;

export const NEWS_ITEMS = [
  {
    emoji: "📚",
    bg: "from-blue-50 to-blue-100",
    date: "August 10, 2025",
    tag: "News",
    tagStyle: "bg-blue-100 text-blue-800",
    title: "Lordfaith Partner Students Sweep State-Wide WAEC Excellence Awards",
    excerpt: "Twelve of our SS3 graduates achieved A1 across all subjects — the highest in the school's history.",
  },
  {
    emoji: "📅",
    bg: "from-green-50 to-green-100",
    date: "January 15, 2026",
    tag: "Event",
    tagStyle: "bg-green-100 text-green-800",
    title: "Open Day & School Tour — Register Your Spot Now",
    excerpt: "Join us for our annual Open Day. Tour facilities, meet teachers, and see how Greenfield can shape your child's future.",
  },
  {
    emoji: "🎓",
    bg: "from-yellow-50 to-yellow-100",
    date: "February 5, 2026",
    tag: "Announcement",
    tagStyle: "bg-yellow-100 text-yellow-800",
    title: "2025 Entrance Examination — Registration Now Open",
    excerpt: "Registration for the 2026/2027 academic session entrance exam is open for Primary 1, JSS1, and SS1.",
  },
] as const;

export const FAQS = [
  {
    q: "How do I apply for admission?",
    a: "Apply online by clicking 'Apply Now.' Complete the form with your child's details, academic records, and preferred class. Our admissions team will contact you within 3 working days to schedule an assessment.",
  },
  {
    q: "What curriculum do you follow?",
    a: "We follow the Federal Ministry of Education approved Nigerian curriculum, aligned with WAEC and NECO. Junior Secondary offers BECE-track; Senior Secondary students choose from Science, Arts, or Commercial streams.",
  },
  {
    q: "Do you provide school transportation?",
    a: "Yes — GPS-tracked, air-conditioned buses with trained supervisors cover major routes. Transportation is an optional add-on during enrolment. Contact admissions for route details and pricing.",
  },
  {
    q: "What are the tuition fees?",
    a: "Fees vary by level (Nursery, Primary, Junior Secondary, Senior Secondary). We offer flexible termly payment plans and sibling discounts. Contact admissions for the current-session fee schedule.",
  },
  {
    q: "Do you have boarding facilities?",
    a: "Currently we operate as a day school. Boarding facilities are planned for the 2025/2026 academic session. Sign up to our newsletter to be notified when boarding enrolment opens.",
  },
  {
    q: "How can parents monitor their child's progress?",
    a: "Every parent gets access to the Greenfield Parent Portal — real-time attendance, academic scores, report cards, fee balances, and announcements. Credentials are provided at enrolment.",
  },
] as const;

export const STEPS = [
  {
    num: "1",
    color: "bg-(--navy) text-white",
    title: "Apply Online",
    desc: "Complete our online application form with your child's details, academic history, and preferred entry class.",
  },
  {
    num: "2",
    color: "bg-(--gold) text-(--navy-dark)",
    title: "Entrance Assessment",
    desc: "Your child attends a friendly, age-appropriate assessment to help us understand how best to support their learning journey.",
  },
  {
    num: "3",
    color: "bg-(--emerald) text-white",
    title: "Welcome to LordFaith Partners",
    desc: "Receive your offer letter, complete enrolment, and prepare for the first day of an extraordinary school experience.",
  },
] as const;
 