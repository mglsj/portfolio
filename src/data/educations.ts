type Education = {
	title: string;
	date: string;
	organization: string;
	location: string;
	url: string;
	tags: string[];
	content?: string;
};

const educations: Education[] = [
	{
		title: "B.TECH (CSE)",
		date: "2022 - 2026",
		organization: "Graphic Era Hill University",
		location: "Graphic Era Hill University, Uttarakhand, IN",
		url: "https://www.gehu.ac.in",
		tags: ["Computer Science", "Engineering"],
		content:
			"Bachelor of Technology in Computer Science and Engineering from Graphic Era Hill University",
	},
	{
		title: "High School",
		date: "2011 - 2022",
		organization: "Aryaman Vikram Birla Institute of Learning",
		location:
			"Aryaman Vikram Birla Institute of Learning, Haldwani, Uttarakhand, IN",
		url: "https://avbil.net",
		tags: ["High School", "Middle School", "Primary School"],
		content: "High School from Aryaman Vikram Birla Institute of Learning",
	},
];

export default educations;
