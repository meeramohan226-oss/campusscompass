export interface Scholarship {
  id: string;
  title: string;
  provider: string;
  amount: string;
  incomeLimit: string;
  criteria: string;
  description: string;
  deadline: string;
  minSslcPct?: number;
  minPlusTwoPct?: number;
  category?: string;
}

export interface RideListing {
  id: string;
  driverName: string;
  phone: string;
  vehicleType: "Two-wheeler" | "Four-wheeler";
  collegeName: string;
  dropPoints: string[];
  costPerKm: number;
}

export interface PartTimeJob {
  id: string;
  jobTitle: string;
  shopName: string;
  ownerName: string;
  phone: string;
  location: string;
  category: string;
  minPayPerHour: number;
  workingDays: string;
  workingHours: string;
  description: string;
}

export interface StayListing {
  id: string;
  name: string;
  type: "PG" | "Hostel" | "Shared Room";
  location: string;
  distanceFromCampus: string;
  bedsAvailable: string;
  monthlyRent: number;
  nearbyColleges: string[];
  sharingAvailable: string[];
  phone: string;
  rules: string;
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  college: string;
  mentorType: "Senior" | "Alumni";
  tags: string[];
  avatarInitials: string;
}

export interface Question {
  id: string;
  category: string;
  target: string;
  questionText: string;
  createdAt: string;
  answersCount: number;
}

// Mock Database
export const MOCK_SCHOLARSHIPS: Scholarship[] = [
  {
    id: "1",
    title: "Merit Scholarship for Higher Studies",
    provider: "State Government (sample)",
    amount: "₹10,000 / year",
    incomeLimit: "Income up to ₹8,00,000",
    criteria: "Min 80%",
    description: "Merit based scheme for Kerala students who achieved top percentile in +2.",
    deadline: "31 Oct",
    minPlusTwoPct: 80,
    category: "General",
  },
  {
    id: "2",
    title: "Post-Matric Scholarship for SC/ST",
    provider: "Central Government (sample)",
    amount: "Tuition + allowance",
    incomeLimit: "Income up to ₹2,50,000",
    criteria: "SC / ST",
    description: "Covers complete tuition fees and maintenance allowance for SC/ST students.",
    deadline: "15 Nov",
    category: "SC/ST",
  },
  {
    id: "3",
    title: "OBC Higher Education Grant",
    provider: "State Backward Classes Dept (sample)",
    amount: "₹6,000 / year",
    incomeLimit: "Income up to ₹4,50,000",
    criteria: "OBC",
    description: "Financial assistance for OBC category students in professional and degree programs.",
    deadline: "30 Nov",
    category: "OBC",
  },
  {
    id: "4",
    title: "Kerala Suvarna Jubilee Merit Scholarship",
    provider: "DCE Kerala",
    amount: "₹10,000 / year",
    incomeLimit: "Income up to ₹4,50,000",
    criteria: "Min 50%",
    description: "For first-year B.Tech, B.Sc, B.Com, and MBBS students in Kerala colleges.",
    deadline: "20 Nov",
    minPlusTwoPct: 50,
  },
];

export const MOCK_RIDES: RideListing[] = [
  {
    id: "r1",
    driverName: "Ravi Kumar",
    phone: "9876500011",
    vehicleType: "Two-wheeler",
    collegeName: "Government Engineering College Thrissur",
    dropPoints: ["Main gate", "Library road", "Swaraj Round"],
    costPerKm: 6,
  },
  {
    id: "r2",
    driverName: "Anand S.",
    phone: "9876500022",
    vehicleType: "Four-wheeler",
    collegeName: "St. Thomas College Thrissur",
    dropPoints: ["Bus stand", "West Fort", "East Fort"],
    costPerKm: 8,
  },
  {
    id: "r3",
    driverName: "Vishnu Prasad",
    phone: "9876500033",
    vehicleType: "Two-wheeler",
    collegeName: "Govt Engineering College Thrissur",
    dropPoints: ["Viyyur Junction", "Ramavarmapuram", "Engineering College Gate"],
    costPerKm: 5,
  },
];

export const MOCK_JOBS: PartTimeJob[] = [
  {
    id: "j1",
    jobTitle: "Weekend Cafe Barista",
    shopName: "Thrissur Brew Cafe",
    ownerName: "Subhash V.",
    phone: "9447100011",
    location: "Swaraj Round, Thrissur",
    category: "Food & Beverage",
    minPayPerHour: 100,
    workingDays: "Sat & Sun",
    workingHours: "4 PM - 9 PM",
    description: "Assist with coffee brewing, order taking, and weekend counter management.",
  },
  {
    id: "j2",
    jobTitle: "Physics & Math Tutor (Class 9-10)",
    shopName: "Apex Tuition Academy",
    ownerName: "Deepa Nair",
    phone: "9447100022",
    location: "Ramavarmapuram, Near GEC",
    category: "Teaching / Tutoring",
    minPayPerHour: 150,
    workingDays: "Mon, Wed, Fri",
    workingHours: "5:30 PM - 7 PM",
    description: "Teach basic high school physics and mathematics concepts to small batches.",
  },
  {
    id: "j3",
    jobTitle: "Store Assistant / Billing",
    shopName: "Campus Book Stall",
    ownerName: "George K.",
    phone: "9447100033",
    location: "College Road, Thrissur",
    category: "Retail / Shop",
    minPayPerHour: 80,
    workingDays: "Weekdays",
    workingHours: "4:30 PM - 7:30 PM",
    description: "Manage book sales, inventory stocking, and student billing.",
  },
];

export const MOCK_STAYS: StayListing[] = [
  {
    id: "s1",
    name: "Sunrise Boys PG",
    type: "PG",
    location: "Thrissur Town",
    distanceFromCampus: "800 m from campus",
    bedsAvailable: "2 beds free",
    monthlyRent: 3800,
    nearbyColleges: ["Govt Engineering College", "St Thomas College"],
    sharingAvailable: ["2 share", "4 share"],
    phone: "9847011122",
    rules: "Gate closes at 9:30 PM. No smoking. Visitors allowed only in the common lounge.",
  },
  {
    id: "s2",
    name: "Lakshmi Ladies Hostel",
    type: "Hostel",
    location: "Ramavarmapuram",
    distanceFromCampus: "1.2 km from campus",
    bedsAvailable: "1 bed free",
    monthlyRent: 4200,
    nearbyColleges: ["Govt Engineering College", "Vimala College"],
    sharingAvailable: ["2 share"],
    phone: "9847022233",
    rules: "In-time 8:00 PM. Food included (Kerala style menu). Study hall available.",
  },
  {
    id: "s3",
    name: "Greenview Rooms",
    type: "Shared Room",
    location: "Viyyur",
    distanceFromCampus: "2 km from campus",
    bedsAvailable: "Shared availability",
    monthlyRent: 3000,
    nearbyColleges: ["Govt Engineering College", "St Marys College"],
    sharingAvailable: ["3 share", "4 share"],
    phone: "9847033344",
    rules: "Self-cooking kitchen facility provided. Wi-Fi included.",
  },
];

export const MOCK_MENTORS: Mentor[] = [
  {
    id: "m1",
    name: "Anjali Nair",
    role: "Senior, S5 Computer Science, KTU",
    college: "Govt Engineering College Thrissur",
    mentorType: "Senior",
    tags: ["Study plans", "Internships", "KTU tips"],
    avatarInitials: "AN",
  },
  {
    id: "m2",
    name: "Rahul Menon",
    role: "Senior, S7 Electronics, KTU",
    college: "Govt Engineering College Thrissur",
    mentorType: "Senior",
    tags: ["Projects", "Placements", "Exams"],
    avatarInitials: "RM",
  },
  {
    id: "m3",
    name: "Fathima Shereef",
    role: "Senior, Year 3 MBBS, Medical",
    college: "Jubilee Mission Medical College",
    mentorType: "Senior",
    tags: ["Exam prep", "Clinical postings", "Hostel advice"],
    avatarInitials: "FS",
  },
  {
    id: "m4",
    name: "Arun Kumar",
    role: "Alumni, Software Engineer, Batch of 2021",
    college: "Govt Engineering College Thrissur",
    mentorType: "Alumni",
    tags: ["Careers in tech", "Interviews", "GATE prep"],
    avatarInitials: "AK",
  },
];

export const MOCK_QUESTIONS: Question[] = [
  {
    id: "q1",
    category: "Studies and exams",
    target: "Seniors or alumni",
    questionText: "How should I plan my KTU first semester exams and internals preparation?",
    createdAt: "2 hours ago",
    answersCount: 3,
  },
  {
    id: "q2",
    category: "Placements",
    target: "Alumni",
    questionText: "What coding topics are most frequently tested in IT placement drives in Kerala?",
    createdAt: "1 day ago",
    answersCount: 5,
  },
];
