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
		link: "https://gmubadmintonschedule.bentruong.dev/",
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

// Main showcase: each gets a demo video. `live` is where "Open app" points.
export const featuredProjects = [
	{
		name: "Mason Badminton Connect",
		kicker: "Founder · 500+ active players",
		blurb:
			"The hub for GMU badminton. Players book RAC courts without double bookings, get paired with doubles partners by a Glicko-2 matchmaking engine, and climb the leaderboard. A Gemini pipeline turns tournament flyers from social media into a searchable DMV tournament calendar.",
		highlights: [
			"10,000+ gym events a day streamed through Kafka, live court status cached in Redis",
			"Gemini API extracts 50+ regional tournaments a semester from flyers",
			"Production + staging tiers on Render with CI gates; JWT + bcrypt auth",
		],
		tech: ["React", "Express.js", "MongoDB", "Kafka", "Redis", "Gemini API", "Glicko-2"],
		github: "https://github.com/SuperHuyGaming/GMU-Badminton-App",
		live: "https://gmubadmintonschedule.bentruong.dev/",
		video: "/videos/badminton-demo.mp4",
		poster: "/videos/badminton-poster.jpg",
	},
	{
		name: "GMU Syllabus Searcher",
		kicker: "1,000+ syllabi · $0/month on AWS",
		blurb:
			"Look up any GMU course and see which professors taught it each term since Fall 2022, with their syllabus one click away. AI summaries compare grading and topics across professors, and full-text search finds any phrase inside every syllabus.",
		highlights: [
			"Python scrapers pulled 1,000+ syllabi; students upload the missing ones",
			"Azure AI Document Intelligence + Gemini tag and check uploads for one-click approval",
			"React on S3 + CloudFront, Node.js on Lambda, DynamoDB single-table design",
		],
		tech: ["Python", "React", "Node.js", "AWS Lambda", "DynamoDB", "CloudFront", "Supabase", "Azure AI"],
		github: "https://github.com/SuperHuyGaming/Syllabus-Searcher",
		live: "https://d2lwb3ttduhkvw.cloudfront.net/",
		video: "/videos/syllabus-demo.mp4",
		poster: "/videos/syllabus-poster.jpg",
	},
];

export const aiProjects = [
	{
		name: "C Error Tutor",
		status: "In progress",
		blurb:
			"Fine-tuning a small open model with LoRA to explain and fix beginner C compile errors, benchmarked against API models on ~7,000 real student programs from DeepFix. The main metric: does the suggested fix compile?",
		tech: ["PyTorch", "LoRA", "Transformers", "gcc", "Pandas"],
	},
	{
		name: "AI Bug-Triage Agent",
		status: "Deepiri",
		blurb:
			"A LangGraph agent that reads production error logs, groups them, and uses the OpenAI API to root-cause bugs in a Spring Boot backend — 150+ critical bugs fixed and uptime restored to 99.9%.",
		tech: ["LangGraph", "OpenAI API", "Spring Boot", "Claude API"],
	},
	{
		name: "AI Debugging Tutor",
		status: "GMU Research",
		blurb:
			"A course chatbot that explains students' homework errors, grounded in course materials with RAG. Clustering logged questions with embeddings shaped prompts for the 5 most common error types and cut debugging time by ~50%.",
		tech: ["RAG", "Embeddings", "Google AI Studio", "A/B Testing"],
	},
	{
		name: "Tournament Flyer Extraction",
		status: "Open source",
		blurb:
			"An event-driven pipeline that scrapes collegiate badminton Instagram accounts and uses multimodal LLM vision to turn flyers into validated, geocoded tournament records, with self-healing schema retries.",
		tech: ["GPT-4o Vision", "Pydantic", "Kafka", "Spring Boot", "MongoDB"],
		github: "https://github.com/SuperHuyGaming/badminton-tournament-finder",
	},
	{
		name: "Handwritten Digit Classifier",
		status: "ML",
		blurb:
			"A PyTorch multi-layer perceptron that reads handwritten digits with 98% accuracy, fed by a scikit-learn + Pandas pipeline that loads, normalizes and splits the image data.",
		tech: ["PyTorch", "scikit-learn", "Pandas"],
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
