// data.js — all site content lives here. Wrap a phrase in **double asterisks** to highlight it.

export const SITE_URL = "https://bentruong.dev";
export const RESUME_PDF = "/Huy_Truong_Resume.pdf";

export const profile = {
	name: "Huy Truong",
	handle: "bentruong.dev",
	title: "Software Engineer",
	tagline: "AI agents · Full-stack · Machine learning",
	summary:
		"CS student at George Mason University (3.94 GPA) heading into an M.S. in Machine Learning. I build production software end to end — LLM agents that triage real bugs, event-streaming backends, and apps hundreds of students use every week.",
	photo: "/ProfilePic.jpg",
	email: "htruon5@gmu.edu",
	linkedin: "https://linkedin.com/in/huy-nm-truong",
	github: "https://github.com/SuperHuyGaming",
	now: [
		["role", "Founder & Lead SWE @ GMU Badminton App"],
		["study", "B.S. CS → M.S. CS (ML) @ George Mason"],
		["teach", "Teaching Assistant, CS Dept. (Outstanding TA)"],
		["stack", "Python · TypeScript · Java · LangGraph"],
	],
};

export const stats = [
	{ value: "10K+", label: "users served by APIs I stabilized" },
	{ value: "500+", label: "active players on my app" },
	{ value: "150+", label: "critical bugs root-caused by AI" },
	{ value: "3.94", label: "GPA at George Mason" },
];

export const experience = [
	{
		org: "Deepiri",
		role: "Software Engineer Intern",
		dates: "May 2026 – Aug 2026",
		bullets: [
			"Restored API uptime to **99.9%** for 10,000+ users by building an AI agent with **LangGraph** to triage error logs and the **OpenAI API** to root-cause 150+ critical bugs in a **Spring Boot** backend",
			"Cut release testing from days to minutes by using the **Claude API** to write tests and **Playwright** to run them",
			"Achieved **zero failed deployments** over 3 months with **Docker** packaging and **GitHub Actions** running tests and AI agent evaluations on every push",
			"Raised test coverage to **85%** by adding **Jest** regression tests around all 150+ fixed bugs",
		],
		tech: ["LangGraph", "OpenAI API", "Claude API", "Spring Boot", "Playwright", "Docker", "GitHub Actions", "Jest"],
	},
	{
		org: "GMU Badminton App",
		role: "Founder & Lead Software Engineer",
		dates: "Jan 2026 – Present",
		link: "https://gmu-badminton-openplayschedule.onrender.com/",
		bullets: [
			"Grew to **500+ active players** with zero double bookings — a **React** court-booking app with an ML matchmaking engine pairing doubles partners by **Glicko-2** rating",
			"Processes **10,000+ gym events a day** by streaming them through **Kafka** and caching live court status in **Redis**",
			"Surfaces **50+ regional tournaments** a semester by using the **Gemini API** to turn social-media flyers into structured events, stored in **MongoDB** and served via **Express.js**",
			"Sustained **100% uptime** at peak on **Render**, with **JWT** and **bcrypt** securing 500+ accounts",
		],
		tech: ["React", "Kafka", "Redis", "MongoDB", "Express.js", "Gemini API", "Glicko-2"],
	},
	{
		org: "George Mason University",
		role: "Research Assistant",
		dates: "Jun 2025 – May 2026",
		bullets: [
			"Helped **100+ students** fix homework errors without office hours via an AI debugging chatbot built with **Google AI Studio** and **RAG** grounded in course materials",
			"Cut student debugging time by nearly **50%** by **A/B testing** chatbot responses with the professor and 100+ students",
			"Covered **60%+** of student questions with step-by-step fixes by clustering logged queries with **text embeddings** and **prompt engineering** for the top 5 error types",
		],
		tech: ["RAG", "Google AI Studio", "Embeddings", "Prompt Engineering", "A/B Testing"],
	},
	{
		org: "George Mason University",
		role: "Teaching Assistant, Computer Science",
		dates: "Jan 2025 – Present",
		bullets: [
			"Lead weekly labs on algorithms in **C** for 40 students, helping **80% earn an A** — recipient of the **Outstanding TA Award**",
		],
		tech: ["C", "Algorithms", "Teaching"],
	},
];

export const projects = [
	{
		name: "GMU Syllabus Searcher",
		blurb:
			"Find every professor's syllabus for any GMU course since Fall 2022. Python scrapers pulled 1,000+ syllabi; Azure AI Document Intelligence tags student uploads for one-click admin approval; full-text search across every syllabus. Runs on AWS for $0/month.",
		tech: ["Python", "React", "Node.js", "AWS Lambda", "DynamoDB", "MongoDB", "Azure AI"],
		github: "https://github.com/SuperHuyGaming/Syllabus-Searcher",
		featured: true,
	},
	{
		name: "Mason Badminton Connect",
		blurb:
			"The hub for GMU badminton: court booking, Glicko-2 leaderboard and doubles matchmaking, an offline-first umpire pad, and an AI tournament finder for the DMV. Production and staging tiers on Render.",
		tech: ["React", "Express.js", "MongoDB", "Kafka", "Redis", "Gemini API"],
		github: "https://github.com/SuperHuyGaming/GMU-Badminton-App",
		live: "https://gmu-badminton-openplayschedule.onrender.com/",
		featured: true,
	},
	{
		name: "Handwritten Digit Classification",
		blurb:
			"A PyTorch multi-layer perceptron that reads handwritten digits with 98% accuracy, fed by a scikit-learn + Pandas pipeline that loads, normalizes and splits the image data.",
		tech: ["Python", "PyTorch", "scikit-learn", "Pandas"],
	},
	{
		name: "NVIS Club Website",
		blurb:
			"Website for GMU's Vietnamese student community — authentication, posts and comments, and event media, deployed on Render.",
		tech: ["React", "Node.js", "MongoDB"],
		github: "https://github.com/SuperHuyGaming/NVIS-Website",
		live: "https://nvis-frontend.onrender.com/",
	},
];

export const skills = [
	{ group: "Languages", items: ["Python", "Java", "C", "JavaScript", "SQL"] },
	{
		group: "AI / ML",
		items: ["LLMs", "AI Agents", "RAG", "LangGraph", "OpenAI API", "Claude API", "Gemini API", "Prompt Engineering", "Embeddings", "PyTorch", "scikit-learn", "Pandas", "NumPy", "OpenCV"],
	},
	{
		group: "Frameworks & Tools",
		items: ["Next.js", "React", "Node.js", "Express.js", "Spring Boot", "Docker", "GitHub Actions", "Playwright", "Jest"],
	},
	{
		group: "Data & Cloud",
		items: ["MongoDB", "DynamoDB", "Supabase", "Redis", "Apache Kafka", "REST APIs", "AWS Lambda", "S3", "CloudFront", "Render", "Azure"],
	},
];

export const education = [
	{
		school: "George Mason University",
		degree: "M.S. Computer Science — Machine Learning",
		dates: "Jan 2027 – Present",
	},
	{
		school: "George Mason University",
		degree: "B.S. Computer Science, Minor in Software Engineering",
		dates: "Aug 2023 – Dec 2026",
		note: "GPA 3.94",
	},
];

export const coursework = [
	"Data Structures & Algorithms",
	"Machine Learning",
	"Large Language Models",
	"Artificial Intelligence",
	"Operating Systems",
	"Databases",
	"Software Engineering",
	"Object-Oriented Programming",
];

export const leadership = [
	{
		role: "President",
		org: "Vietnamese Student Association",
		detail: "Events for 200+ students, $10K in sponsorships",
	},
	{
		role: "Event Organizer",
		org: "PatriotHacks",
		detail: "GMU's largest hackathon — 600+ hackers, $30K in sponsorships",
	},
];
