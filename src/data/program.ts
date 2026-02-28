export const programNav = [
  { id: "details", label: "Details", href: "/programs/details" },
  { id: "admissions", label: "Admissions + Aid", href: "/programs/admissions" },
  { id: "projects", label: "Projects", href: "/programs/projects" },
  { id: "patents", label: "Patents", href: "/programs/patents" },
  { id: "staff", label: "Staff", href: "/programs/staff" }
];

export const detailItems = [
  { label: "Duration", value: "10 weeks (in-person + remote)" },
  { label: "Lab days", value: "Wednesday & Saturday" },
  { label: "Eligibility", value: "Ages 16–24 or school consent" },
  { label: "Tuition", value: "EGP 14k (sliding-scale aid)" },
  { label: "Included", value: "Lab time, consumables, mentor hours" },
  { label: "Credential", value: "Research for Everyone Fellowship" }
];

export const programTracks = [
  {
    id: "biology",
    title: "Biology labs",
    tag: "BIO",
    color: "#6F7CFF",
    blurb: "Microscopy, DNA gels, enzyme assays, and plant studies guided by resident scientists.",
    description: "Grow cultures, stain slides, and test plant-friendly hypotheses with calm, well-lit benches.",
    duration: "10 weeks",
    weeklyTime: "6-8 hrs",
    difficulty: "Intermediate",
    cost: "EGP 14k (aid up to 80%)",
    requirements: [
      "Complete the online biosafety primer before week one",
      "Comfort using pipettes or ready to learn quickly",
      "Upload tidy lab notes after every lab block"
    ],
    modules: [
      { week: "Weeks 1-2", title: "Sample care", summary: "Sterile technique, plating, and microscopy routines.", takeaways: ["Prep slides and gels", "Log growth data"] },
      { week: "Weeks 3-6", title: "Assay sprint", summary: "Enzyme assays and colorimetric tests tied to student hypotheses.", takeaways: ["Choose controls", "Plot absorbance"] },
      { week: "Weeks 7-10", title: "Showcase prep", summary: "Summaries, micrographs, and posters for demo day.", takeaways: ["Clean figure captions", "Public speaking reps"] }
    ],
    faqs: [
      { question: "Do I need prior wet lab hours?", answer: "No. We start with pipette drills and safety workflows before touching samples." },
      { question: "Can I grow human cells?", answer: "We stay with BSL-1 organisms only, including plants and safe microbes." },
      { question: "Will I get photos for my portfolio?", answer: "Yes. Mentors help capture microscope stills you can share." }
    ]
  },
  {
    id: "chemistry",
    title: "Chemistry benches",
    tag: "CHEM",
    color: "#7BC5FF",
    blurb: "Colorimetry, titrations, and material testing with tidy, easy-to-follow workflows.",
    description: "Blend safe formulations, analyze pigments, and validate material ideas with instructors on standby.",
    duration: "10 weeks",
    weeklyTime: "5-7 hrs",
    difficulty: "Intermediate",
    cost: "EGP 14k (aid up to 70%)",
    requirements: [
      "Pass the chemical handling mini-quiz",
      "Comfort with unit conversions and ratios",
      "Agree to our no-solvent list"
    ],
    modules: [
      { week: "Weeks 1-2", title: "Bench reset", summary: "Glassware care, measurement, and dilution bootcamp.", takeaways: ["Titration notes", "Safety labeling"] },
      { week: "Weeks 3-6", title: "Formulation lab", summary: "Iterate on pigments, coatings, or sustainable cleaners.", takeaways: ["Design safe trials", "Capture sensory data"] },
      { week: "Weeks 7-10", title: "Validation clinic", summary: "Stress-test prototypes and prepare reports for mentors.", takeaways: ["Material scorecards", "Demo scripts"] }
    ],
    faqs: [
      { question: "Do we use hazardous solvents?", answer: "No. All work stays within low-risk, school-friendly chemistry." },
      { question: "Can I bring my own idea?", answer: "Yes, as long as it fits the safe materials list and mentor capacity." }
    ]
  },
  {
    id: "electronics",
    title: "Electronics labs",
    tag: "EE",
    color: "#64E1DC",
    blurb: "Sensors, wearables, and Arduino projects with soldering support on standby.",
    description: "Prototype sensing rigs, test wearables, and learn how to validate circuits without frying components.",
    duration: "10 weeks",
    weeklyTime: "6-9 hrs",
    difficulty: "Intermediate",
    cost: "EGP 13k (aid available)",
    requirements: [
      "Know basic algebra and Ohm's law",
      "Commit to sharing GitHub or photo logs",
      "Wear closed shoes and bring a laptop"
    ],
    modules: [
      { week: "Weeks 1-2", title: "Circuit warm-up", summary: "Breadboards, safety, and multimeter drills.", takeaways: ["Debug checklists", "Voltage diaries"] },
      { week: "Weeks 3-6", title: "Sensor lab", summary: "Build and calibrate sensing nodes or wearables.", takeaways: ["Firmware loops", "Data calibration"] },
      { week: "Weeks 7-10", title: "Field trials", summary: "Deploy prototypes and analyze results with mentors.", takeaways: ["Test plans", "Showcase-ready dashboards"] }
    ],
    faqs: [
      { question: "Do I need to code?", answer: "Basic Arduino or CircuitPython helps, but we provide starter sketches." },
      { question: "Can we solder?", answer: "Yes. Operators guide all soldering and ensure fume extraction." }
    ]
  },
  {
    id: "fabrication",
    title: "Digital fabrication",
    tag: "FAB",
    color: "#FDB27B",
    blurb: "Laser cutting, 3D printing, and CNC sketch-to-part demos for rapid prototyping.",
    description: "Translate drawings into physical prototypes with clean shop etiquette and time-saving templates.",
    duration: "8 weeks",
    weeklyTime: "5-6 hrs",
    difficulty: "Beginner friendly",
    cost: "EGP 12k (aid available)",
    requirements: [
      "Pass the machine safety checklist",
      "Bring closed shoes and tie hair back",
      "Upload CAD or sketches weekly"
    ],
    modules: [
      { week: "Weeks 1-2", title: "Shop tour", summary: "Machine orientation and rapid prototyping prompts.", takeaways: ["Tool change routines", "Material library"] },
      { week: "Weeks 3-5", title: "Iterate fast", summary: "Laser, CNC, and additive cycles with critique circles.", takeaways: ["Fixture basics", "Design logs"] },
      { week: "Weeks 6-8", title: "Show the build", summary: "Finish, photograph, and document the hero prototype.", takeaways: ["Assembly notes", "Photo kit"] }
    ],
    faqs: [
      { question: "Can I store projects on site?", answer: "Yes, every fellow gets a labeled shelf for prototypes." },
      { question: "Which software do we use?", answer: "Fusion, Onshape, or pen-and-paper plus scans. We adapt to you." }
    ]
  },
  {
    id: "climate",
    title: "Climate & environment",
    tag: "CLIMATE",
    color: "#97E291",
    blurb: "Water and air quality investigations plus simple data dashboards for the field.",
    description: "Collect samples across Egypt, run bench tests, and visualize changes for community partners.",
    duration: "10 weeks",
    weeklyTime: "6-8 hrs",
    difficulty: "Intermediate",
    cost: "EGP 13k (aid available)",
    requirements: [
      "Comfort traveling across the city for sampling",
      "Complete field safety mini-course",
      "Can work in small teams outdoors"
    ],
    modules: [
      { week: "Weeks 1-2", title: "Field kits", summary: "Assemble water and air sampling kits.", takeaways: ["Label everything", "Keep chain-of-custody logs"] },
      { week: "Weeks 3-6", title: "Data stories", summary: "Collect, digitize, and visualize readings.", takeaways: ["Map overlays", "Simple dashboards"] },
      { week: "Weeks 7-10", title: "Community brief", summary: "Turn findings into one-page briefs for local partners.", takeaways: ["Plain-language writing", "Next-step recommendations"] }
    ],
    faqs: [
      { question: "Is travel covered?", answer: "Yes, we reimburse local transport for field blocks." },
      { question: "Do I need my own sensors?", answer: "No, we supply calibrated kits." }
    ]
  },
  {
    id: "civic",
    title: "Community science",
    tag: "CIVIC",
    color: "#FF87B5",
    blurb: "Neighborhood-focused experiments that connect science to local questions.",
    description: "Design surveys, lightweight experiments, and pop-up exhibits that invite the public into your research.",
    duration: "8 weeks",
    weeklyTime: "4-6 hrs",
    difficulty: "Beginner",
    cost: "EGP 10k (aid available)",
    requirements: [
      "Comfort speaking with community members",
      "Complete ethics and consent briefing",
      "Publish weekly reflections"
    ],
    modules: [
      { week: "Weeks 1-2", title: "Story mining", summary: "Interview practice and hypothesis framing.", takeaways: ["Question banks", "Ethics checklist"] },
      { week: "Weeks 3-5", title: "Prototype public lab", summary: "Run small demos or surveys with live feedback.", takeaways: ["Facilitation scripts", "Data tidy-up"] },
      { week: "Weeks 6-8", title: "Community showcase", summary: "Host a mini exhibit or publish a guidebook.", takeaways: ["Brochure design", "Follow-up plan"] }
    ],
    faqs: [
      { question: "Is this fully in Arabic?", answer: "Yes, we support bilingual facilitation and translation." },
      { question: "Do I need research experience?", answer: "No. Curiosity and reliability are enough." }
    ]
  }
];

export const disciplines = programTracks.map(({ title, blurb }) => ({ title, blurb }));

export const goals = [
  { title: "Publish-ready", copy: "Leave with a short paper, dataset, or handbook." },
  { title: "Portfolio", copy: "Share code, CAD, and lab notes that show your thinking." },
  { title: "Network", copy: "Meet mentors who can vouch for your next step." },
  { title: "Community", copy: "Learn how to run safe sessions back at school." }
];

export const admissionsSteps = [
  { step: "1", title: "Apply", desc: "Tell us what you want to explore and any past tinkering." },
  { step: "2", title: "Mini brief", desc: "Join a 60-minute exercise with other applicants." },
  { step: "3", title: "Match", desc: "We pair you with mentors and labs that fit your idea." },
  { step: "4", title: "Aid offer", desc: "Need-based support decisions arrive within 10 days." }
];

export const aidOptions = [
  { title: "Need-based scholarships", info: "Covers up to 100% of tuition for public-school students." },
  { title: "Partner sponsorships", info: "Labs fund seats in exchange for capstone demos." },
  { title: "Patent microgrants", info: "Helps with prior-art searches and filing fees." }
];

export const projects = [];

export const alumni = [];

export const staff = [];

export const patentHighlights = [];

export const partnerLogos = [];

export const mapMarkers = [];

export const modules = [
  { icon: "🔬", title: "Research Methods", desc: "Plan experiments, manage samples, and log data clearly.", time: "2 weeks" },
  { icon: "🧮", title: "Data & Analysis", desc: "Use simple stats and visual tools to explain your findings.", time: "3 weeks" },
  { icon: "🤝", title: "Collaboration", desc: "Write updates, review peers, and present to mentors.", time: "2 weeks" }
];
