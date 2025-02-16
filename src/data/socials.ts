type Social = {
	id: string;
	name: string;
	url: string;
	iconify: string;
};

const respone = await fetch(
	"https://raw.githubusercontent.com/mglsj/socials/refs/heads/main/socials.json",
).then((res) => res.json());

const socials: Social[] = respone.primary as Social[];
const socialsAlt: Social[] = respone.secondary as Social[];

// const socials: Social[] = [
// 	{
//      id: "email",
// 		title: "Email",
// 		iconify: "carbon:email",
// 		url: "mailto:lakshyajeet@jalal.uk.in",
// 	},
// 	{
//      id: "website",
// 		title: "Website",
// 		iconify: "carbon:link",
// 		url: "https://mglsj.eu.org/",
// 	}
// ];

export default socials;
export { socialsAlt };
