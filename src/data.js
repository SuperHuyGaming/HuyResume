// All site content lives here. Keep it short: the PDF has the full detail.

export const SITE_URL = "https://bentruong.dev";
export const RESUME_PDF = "/Huy_Truong_Resume.pdf";

export const profile = {
	name: "Huy Truong",
	title: "Software Engineer",
	intro: "CS at George Mason. Starting my M.S. in machine learning in January 2027.",
	photo: "/ProfilePic.jpg",
	email: "bentruong.swe@gmail.com",
	linkedin: "https://linkedin.com/in/huy-nm-truong",
	github: "https://github.com/SuperHuyGaming",
};

// Main projects, each with a demo video. `live` is where "Open app" points.
export const featuredProjects = [
	{
		name: "Mason Badminton Connect",
		blurb: "Court booking, partner matchmaking and a tournament finder for GMU's badminton club.",
		metric: "500+ players",
		tech: ["React", "Express", "MongoDB", "Kafka", "Redis", "Gemini"],
		github: "https://github.com/SuperHuyGaming/GMU-Badminton-App",
		live: "https://gmubadmintonschedule.bentruong.dev/",
		video: "/videos/badminton-demo.mp4",
		poster: "/videos/badminton-poster.jpg",
	},
	{
		name: "Syllabus Searcher",
		blurb: "Course syllabi across schools since Fall 2022 in one place, with full text search.",
		metric: "1,000+ syllabi",
		tech: ["React", "Python", "AWS Lambda", "DynamoDB", "Supabase"],
		github: "https://github.com/SuperHuyGaming/Syllabus-Searcher",
		live: "https://findmysyllabus.bentruong.dev/",
		video: "/videos/syllabus-demo.mp4",
		poster: "/videos/syllabus-poster.jpg",
	},
];

export const otherProjects = [
	{
		name: "C Error Tutor",
		tag: "LLM fine-tuning",
		status: "In progress",
		blurb: "A small fine-tuned model that explains beginner C compile errors.",
		tech: ["PyTorch", "LoRA"],
	},
	{
		name: "Tournament Flyer Reader",
		tag: "Computer vision",
		blurb: "Turns tournament flyers on Instagram into clean event listings.",
		tech: ["Python", "GPT-4o", "Kafka"],
		github: "https://github.com/SuperHuyGaming/badminton-tournament-finder",
	},
	{
		name: "Handwritten Digit Classifier",
		tag: "Deep learning",
		blurb: "A PyTorch network that reads handwritten digits at 98% accuracy.",
		tech: ["PyTorch", "scikit-learn"],
	},
];

export const experience = [
	{
		org: "Deepiri",
		role: "Software Engineer Intern",
		dates: "Summer 2026",
		line: "Built an AI agent that traces production bugs to their root cause. Helped fix 150+ critical bugs.",
	},
	{
		org: "GMU Badminton App",
		role: "Founder",
		dates: "2026 to now",
		line: "Built and run the club's booking app for 500+ players.",
		link: "https://gmubadmintonschedule.bentruong.dev/",
	},
	{
		org: "George Mason University",
		role: "Research Assistant",
		dates: "2025 to 2026",
		line: "Built a course debugging chatbot used by 100+ students.",
	},
	{
		org: "George Mason University",
		role: "Teaching Assistant",
		dates: "2025 to now",
		line: "Teach weekly algorithms labs. Outstanding TA award.",
	},
];

export const skills = [
	"Python",
	"Java",
	"C",
	"JavaScript",
	"SQL",
	"React",
	"Node.js",
	"Express",
	"Spring Boot",
	"PyTorch",
	"scikit-learn",
	"LangGraph",
	"RAG",
	"LLM APIs",
	"AWS",
	"Docker",
	"GitHub Actions",
	"MongoDB",
	"Redis",
	"Kafka",
	"Supabase",
];

export const education = [
	{ degree: "M.S. Computer Science, Machine Learning", dates: "Starting Jan 2027" },
	{ degree: "B.S. Computer Science", dates: "Dec 2026", note: "GPA 3.94" },
];

export const leadership = ["President, Vietnamese Student Association", "Organizer, PatriotHacks"];
