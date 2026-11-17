// All site content lives here.

export const SITE_URL = "https://bentruong.dev";
export const RESUME_PDF = "/Huy_Truong_Resume.pdf";

export const profile = {
	name: "Huy Truong",
	title: "Software Engineer",
	intro: [
		"I'm a computer science student at George Mason University, starting my master's in machine learning in January 2027.",
		"I like building things people actually use. Right now that's a court booking app for our campus badminton club and a site that helps GMU students find old syllabi. This past summer I interned at Deepiri, where I built an AI agent that helped track down production bugs.",
	],
	photo: "/ProfilePic.jpg",
	email: "htruon5@gmu.edu",
	linkedin: "https://linkedin.com/in/huy-nm-truong",
	github: "https://github.com/SuperHuyGaming",
};

export const experience = [
	{
		org: "Deepiri",
		role: "Software Engineer Intern",
		dates: "May 2026 to Aug 2026",
		bullets: [
			"Built an AI agent with LangGraph and the OpenAI API that reads error logs and finds the root cause of bugs in our Spring Boot backend. It helped us fix 150+ critical bugs and get API uptime back to 99.9% for 10,000+ users.",
			"Used the Claude API to write tests and Playwright to run them, which cut release testing from days to minutes.",
			"Set up Docker and GitHub Actions so tests and agent evaluations run on every push. We had zero failed deployments over three months.",
			"Added Jest regression tests around every fixed bug and raised coverage to 85%.",
		],
		tools: "LangGraph, OpenAI API, Claude API, Spring Boot, Playwright, Docker, GitHub Actions, Jest",
	},
	{
		org: "GMU Badminton App",
		role: "Founder and Lead Software Engineer",
		dates: "Jan 2026 to Present",
		link: "https://gmubadmintonschedule.bentruong.dev/",
		bullets: [
			"Started a React court booking app for the club. It has 500+ active players and has never double booked a court.",
			"Wrote a matchmaking engine that pairs doubles partners by Glicko-2 skill rating.",
			"Gym events (10,000+ a day) stream through Kafka, and live court status is cached in Redis.",
			"Use the Gemini API to turn tournament flyers from social media into events, which surfaces 50+ regional tournaments a semester.",
		],
		tools: "React, Express.js, MongoDB, Kafka, Redis, Gemini API, Render",
	},
	{
		org: "George Mason University",
		role: "Research Assistant",
		dates: "Jun 2025 to May 2026",
		bullets: [
			"Built a debugging chatbot for a programming course using Google AI Studio and RAG over the course materials. 100+ students used it to fix homework errors outside office hours.",
			"A/B tested its answers with the professor and students, which cut debugging time by almost half.",
			"Grouped logged questions with text embeddings and tuned prompts for the five most common error types, covering 60%+ of what students asked.",
		],
		tools: "Google AI Studio, RAG, embeddings, prompt engineering",
	},
	{
		org: "George Mason University",
		role: "Teaching Assistant, Computer Science",
		dates: "Jan 2025 to Present",
		bullets: [
			"Lead weekly algorithms labs in C for 40 students. 80% of my students earned an A, and I received the Outstanding TA award.",
		],
		tools: "C, algorithms",
	},
];

// Main projects, each with a demo video. `live` is where "Open app" points.
export const featuredProjects = [
	{
		name: "Mason Badminton Connect",
		blurb:
			"The club's hub for open play. Players book courts at the RAC, find doubles partners, climb the leaderboard and chat in the forum. It also finds tournaments around the DC area by reading flyers posted on Instagram.",
		highlights: [
			"500+ active players",
			"Matchmaking by Glicko-2 rating",
			"Tournament finder powered by the Gemini API",
		],
		tech: ["React", "Express.js", "MongoDB", "Kafka", "Redis", "Gemini API"],
		github: "https://github.com/SuperHuyGaming/GMU-Badminton-App",
		live: "https://gmubadmintonschedule.bentruong.dev/",
		video: "/videos/badminton-demo.mp4",
		poster: "/videos/badminton-poster.jpg",
	},
	{
		name: "GMU Syllabus Searcher",
		blurb:
			"Pick a GMU course and see every professor who taught it since Fall 2022, with their syllabus one click away. You can also search inside all the syllabi at once, for example for \"late policy\" or a textbook name.",
		highlights: [
			"1,000+ syllabi, collected with Python scrapers",
			"Student uploads checked with Azure AI and Gemini before an admin approves them",
			"Runs on AWS Lambda, DynamoDB and CloudFront for $0 a month",
		],
		tech: ["Python", "React", "Node.js", "AWS Lambda", "DynamoDB", "Supabase"],
		github: "https://github.com/SuperHuyGaming/Syllabus-Searcher",
		live: "https://findmysyllabus.bentruong.dev/",
		video: "/videos/syllabus-demo.mp4",
		poster: "/videos/syllabus-poster.jpg",
	},
];

export const otherProjects = [
	{
		name: "C Error Tutor",
		note: "In progress",
		blurb:
			"Fine-tuning a small open model with LoRA to explain and fix beginner C compile errors, and testing it on about 7,000 real student programs. The question I'm trying to answer: can a small, cheap model keep up with the big API models?",
		tech: ["PyTorch", "LoRA", "Transformers"],
	},
	{
		name: "Tournament Flyer Reader",
		note: "Open source",
		blurb:
			"Scrapes college badminton Instagram accounts and uses a vision model to turn tournament flyers into clean, mapped event listings.",
		tech: ["Python", "GPT-4o", "Kafka", "Spring Boot"],
		github: "https://github.com/SuperHuyGaming/badminton-tournament-finder",
	},
	{
		name: "Handwritten Digit Classifier",
		note: "Class project",
		blurb: "A small PyTorch neural network that reads handwritten digits with 98% accuracy.",
		tech: ["PyTorch", "scikit-learn", "Pandas"],
	},
];

export const skills = [
	{ group: "Languages", items: ["Python", "Java", "C", "JavaScript", "SQL"] },
	{
		group: "AI and ML",
		items: ["LLM agents", "RAG", "LangGraph", "OpenAI API", "Claude API", "Gemini API", "Embeddings", "PyTorch", "scikit-learn", "Pandas", "NumPy", "OpenCV"],
	},
	{
		group: "Web and tools",
		items: ["React", "Next.js", "Node.js", "Express.js", "Spring Boot", "Docker", "GitHub Actions", "Playwright", "Jest"],
	},
	{
		group: "Data and cloud",
		items: ["MongoDB", "DynamoDB", "Supabase", "Redis", "Kafka", "AWS (Lambda, S3, CloudFront)", "Render", "Azure"],
	},
];

export const education = [
	{
		degree: "M.S. in Computer Science, Machine Learning concentration",
		dates: "Starting Jan 2027",
	},
	{
		degree: "B.S. in Computer Science, minor in Software Engineering",
		dates: "Aug 2023 to Dec 2026",
		note: "GPA 3.94",
	},
];

export const coursework = [
	"Data Structures and Algorithms",
	"Machine Learning",
	"Large Language Models",
	"Artificial Intelligence",
	"Operating Systems",
	"Databases",
	"Software Engineering",
];

export const leadership = [
	"President of the Vietnamese Student Association. We run events for 200+ students and raised $10K in sponsorships.",
	"Event organizer for PatriotHacks, GMU's largest hackathon, with 600+ hackers and $30K in sponsorships.",
	"Outstanding TA award from the GMU Computer Science department.",
];
