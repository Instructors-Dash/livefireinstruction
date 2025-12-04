export interface SiteDataProps {
	name: string;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		twitter: string; // used for twitter cards when sharing a blog post on twitter
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Live Fire Instruction",
	// Your website's title and description (meta fields)
	title: "Live Fire Instruction",
	description:
		"Get Your Virginia Concealed Carry Permit. Our 6-hour Basics of Pistol Shooting course in Fairfax includes classroom instruction, live range time, and certification. Classes held every Thursday & Saturday. Enroll Now!",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "Live Fire Instruction",
		email: "class@livefireinstruction.com",
		twitter: "LiveFireInstruction",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/LiveFireInstruction.png",
		alt: "LiveFireInstruction",
	},
};

export default siteData;
