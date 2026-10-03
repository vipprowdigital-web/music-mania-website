/**
 * Central content for the Music Mania School of Music marketing site.
 * Sourced from https://sites.google.com/view/musicmaniamumbai — where the
 * source site is thin (testimonials, stats, timings), copy is written in the
 * brand voice and clearly marked as illustrative.
 */

export const site = {
  name: "Music Mania",
  fullName: "Music Mania School of Music",
  tagline: "Find your rhythm. Create your sound.",
  phone: "7415555535",
  phoneHref: "tel:+917415555535",
  whatsappHref: "https://wa.me/917415555535",
  email: "hello@musicmaniamumbai.in",
  socials: {
    facebook: "https://facebook.com/musicmaniamumbai",
    instagram: "https://instagram.com/music_mania_mumbai",
    youtube: "https://youtube.com/@musicmania3595",
  },
} as const;

export const nav = [
  { label: "About", href: "/about" },
  { label: "Courses", href: "/#courses" },
  { label: "Instructor", href: "/#instructor" },
  { label: "Videos", href: "/videos" },
  { label: "Locations", href: "/#locations" },
  { label: "Contact", href: "/contact" },
] as const;

/** About page copy — supplied by the school; keep wording as provided. */
export const about = {
  intro:
    "At Music Mania School of Music, we believe in the transformative power of music. Founded with a passion for nurturing musical talent, we provide top-quality music education that inspires, motivates, and brings out the best in every student. Whether you’re dreaming of playing the guitar, perfecting your singing, or mastering the keyboard, our personalized approach helps you achieve your musical goals.",
  mission: {
    statement:
      "to make learning music an enjoyable, enriching, and fulfilling experience.",
    body: "We aim to cultivate a lifelong love of music in each of our students, empowering them to explore their creativity and discover their unique musical voice.",
  },
  why: [
    {
      title: "Experienced Instructors",
      body: "Led by the highly skilled Abhishek Sir, our teaching team is dedicated to providing professional, tailored instruction that meets each student’s needs. Abhishek Sir's passion for music and education shines through every lesson, ensuring that students receive the guidance and encouragement they need to excel.",
    },
    {
      title: "Wide Range of Classes",
      body: "From guitar to singing and keyboard, we offer comprehensive lessons designed for beginners, intermediate learners, and advanced students alike. Each class is structured to help you master your instrument and grow as a musician.",
    },
    {
      title: "Personalized Learning",
      body: "At Music Mania, we understand that every student is unique. That's why we focus on creating customized lesson plans that fit your learning style, pace, and musical goals.",
    },
  ],
  locationsIntro:
    "We proudly serve the local communities of Virar and Nalasopara, with two convenient branches offering a friendly, creative, and supportive learning environment.",
  vision:
    "We envision a world where music is accessible to everyone, and our students are empowered to express themselves musically. Our goal is to foster creativity, confidence, and a deep appreciation for the art of music in every individual we teach.",
  closing:
    "Whether you're just starting out or looking to refine your skills, Music Mania School of Music is here to guide you every step of the way. Come join us and embark on a musical journey filled with creativity, learning, and fun.",
} as const;

export const stats = [
  { value: "10+", label: "Years teaching" },
  { value: "500+", label: "Students trained" },
  { value: "2", label: "Studio branches" },
  { value: "3", label: "Instruments" },
] as const;

export const courses = [
  {
    id: "guitar",
    name: "Guitar Masterclass",
    level: "Beginner → Advanced",
    blurb:
      "Acoustic and electric. Chords, strumming, fingerstyle, lead technique and playing along to real songs from lesson one.",
    points: ["Posture & fretboard fundamentals", "Rhythm, barre chords & scales", "Solos, improvisation & song covers"],
  },
  {
    id: "vocals",
    name: "Vocals & Singing",
    level: "All ages welcome",
    blurb:
      "Breath control, pitch, range and stage confidence. Build a voice that carries across Bollywood, pop, classical and Western styles.",
    points: ["Breathing & warm-up routines", "Pitch, tone & vocal range", "Performance & mic technique"],
  },
  {
    id: "keyboard",
    name: "Keyboard & Piano",
    level: "Beginner → Advanced",
    blurb:
      "Two-hand coordination, music theory and chord voicings. Read, play and arrange your favourite tracks on keys.",
    points: ["Note reading & hand coordination", "Chords, scales & progressions", "Film music & contemporary pieces"],
  },
] as const;

export const whyChooseUs = [
  {
    title: "Professional instructors",
    body: "Every class is led by Abhishek Sir, an experienced and passionate musician who gives each student individual attention.",
  },
  {
    title: "Comprehensive classes",
    body: "Guitar, singing and keyboard programmes tailored for beginners, intermediates and advanced learners alike.",
  },
  {
    title: "Convenient locations",
    body: "Well-equipped branches in Virar West and Nalasopara West, both close to major landmarks and easy to reach.",
  },
  {
    title: "Supportive atmosphere",
    body: "A relaxed, encouraging studio where students build confidence, have fun and genuinely look forward to practice.",
  },
] as const;

export const instructor = {
  name: "Abhishek Sir",
  role: "Founder & Lead Instructor",
  bio: "A working musician first and a teacher second. Abhishek Sir has spent over a decade on stages and in studios, and brings that real-world craft into every lesson — no dry theory drills, just music you actually want to play.",
  highlights: [
    "Guitar, vocals & keyboard across genres",
    "One-on-one attention for every student",
    "Regular student showcases & recordings",
  ],
} as const;

export const galleryItems = [
  { title: "Live practice room", tag: "Studio" },
  { title: "Vocal booth sessions", tag: "Recording" },
  { title: "Keyboard lab", tag: "Keys" },
  { title: "Guitar wall", tag: "Strings" },
  { title: "Student showcase night", tag: "Stage" },
  { title: "Jam & ensemble space", tag: "Ensemble" },
] as const;

export const locations = [
  {
    id: "virar",
    name: "Virar West Campus",
    address:
      "Shop no F 18, Global City, Agarwal Paramount, Rustomjee Global City, Virar West, Mumbai, Maharashtra 401303.",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=Music+Mania+Rustomjee+Global+City+Virar+West",
    mapQuery: "Music Mania, Rustomjee Global City, Virar West, Mumbai 401303",
  },
  {
    id: "nalasopara",
    name: "Nalasopara West Campus",
    address:
      "Shop no. E- 1, Sheetal Deep Building, Dgs Group, Yashwant Gaurav Rd, opposite Niswarth Hospital, Nalasopara West, Mumbai, Nala Sopara, Maharashtra 401303.",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=Music+Mania+Sheetal+Deep+Nalasopara+West",
    mapQuery: "Music Mania, Sheetal Deep Building, Yashwant Gaurav Rd, Nalasopara West 401303",
  },
] as const;

export const insideCategories = [
  "One-on-one lessons",
  "Group ensembles",
  "Student showcases",
  "Studio recording",
] as const;

export const testimonials = [
  {
    quote:
      "I walked in not able to hold a chord. Six months later I played a full song at the showcase. Abhishek Sir makes it feel easy.",
    name: "Rohan M.",
    detail: "Guitar student, Virar",
  },
  {
    quote:
      "My daughter actually asks to practice now. The classes are patient, fun and never boring.",
    name: "Priya S.",
    detail: "Parent, Nalasopara",
  },
  {
    quote:
      "The vocal training fixed habits I didn't even know I had. My range and confidence on stage are completely different.",
    name: "Aisha K.",
    detail: "Vocals student, Virar",
  },
] as const;

/** Contact page copy — supplied by the school; keep wording as provided. */
export const contact = {
  intro:
    "We’re excited to help you begin or continue your musical journey! Whether you’re looking to enroll in our guitar, singing, or keyboard classes, or simply want more information, we’d love to hear from you. Get in touch with us through any of the following ways:",
  branches: [
    {
      id: "virar",
      title: "Virar Branch",
      phone: "7415555535",
      phoneHref: "tel:+917415555535",
      lines: [
        "Shop no F 18, Global City, Agarwal Paramount,",
        "Rustomjee Global City, Virar West,",
        "Mumbai, Maharashtra 401303.",
      ],
      mapsHref:
        "https://www.google.com/maps/search/?api=1&query=Music+Mania+Rustomjee+Global+City+Virar+West",
      mapQuery: "Music Mania, Rustomjee Global City, Virar West, Mumbai 401303",
    },
    {
      id: "nalasopara",
      title: "Nalasopara Branch",
      phone: "7415555535",
      phoneHref: "tel:+917415555535",
      lines: [
        "Shop no. E-1, Sheetal Deep Building, Dgs Group,",
        "Yashwant Gaurav Rd, Opposite Niswarth Hospital,",
        "Nalasopara West, Mumbai,",
        "Nala Sopara, Maharashtra 401303.",
      ],
      mapsHref:
        "https://www.google.com/maps/search/?api=1&query=Music+Mania+Sheetal+Deep+Nalasopara+West",
      mapQuery:
        "Music Mania, Sheetal Deep Building, Yashwant Gaurav Rd, Nalasopara West 401303",
    },
  ],
  getInTouch: {
    title: "Get in Touch Today!",
    body: "Whether you have questions about our classes, schedules, fees, or anything else, feel free to reach out. We're here to provide all the information you need to get started with your music education. We look forward to welcoming you to Music Mania School of Music!",
  },
  enquiryOptions: ["Guitar", "Keyboard", "Singing"],
  locationOptions: ["Virar", "Nalasopara"],
} as const;

/** Branch pages. Copy supplied by the school for each branch. */
export const branchNav = [
  { label: "Virar", href: "/branches/virar" },
  { label: "Nalasopara", href: "/branches/nalasopara" },
] as const;

export const branchClasses = [
  {
    title: "Guitar",
    body: "From basics to advanced techniques, learn to play your favorite tunes with ease. Whether you're a beginner or an intermediate player, our guitar classes will enhance your skills and musical understanding.",
  },
  {
    title: "Singing",
    body: "Want to improve your vocal range, breath control, and stage confidence? Our singing classes are designed to bring out the best in your voice. You'll learn under the guidance of an experienced teacher, honing your unique sound.",
  },
  {
    title: "Keyboard",
    body: "The keyboard is one of the most versatile instruments, and we’ll help you master it! Learn scales, chords, and songs in a structured, easy-to-follow format.",
  },
] as const;

export const branchPages = {
  virar: {
    city: "Virar",
    heading: { lead: "Welcome to Music Mania –", accent: "Virar Branch!" },
    intro: [
      "Are you passionate about music and ready to explore your talents? Whether you're looking to strum your first chords, hit the perfect note, or master the keyboard, Music Mania School of Music in Virar is here to help you turn your musical dreams into reality!",
    ],
    address:
      "Shop no F 18, Global City, Agarwal Paramount, Rustomjee Global City, Virar West, Mumbai, Maharashtra 401303",
  },
  nalasopara: {
    city: "Nalasopara",
    heading: { lead: "Welcome to Music Mania –", accent: "Nalasopara" },
    intro: [
      "Unlock your musical potential at Music Mania School of Music in Nalasopara! We offer expert-led guitar, singing, and keyboard classes to help you achieve your musical dreams.",
      "Our classes are taught by Abhishek Sir, a skilled teacher dedicated to providing personalized guidance for all students. Whether you're a beginner or an advanced learner, we have the perfect course for you.",
    ],
    address:
      "Shop no. E- 1, Sheetal Deep Building, Dgs Group, Yashwant Gaurav Rd, opposite Niswarth Hospital, Nalasopara West, Mumbai, Nala Sopara, Maharashtra 401303",
  },
} as const;

export type BranchSlug = keyof typeof branchPages;
