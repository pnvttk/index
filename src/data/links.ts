export interface Link {
	title: string;
	url: string;
	description: string;
	tags: string[];
	icon?: string;
}

export interface Category {
	title: string;
	links: Link[];
}

export const linkData: Category[] = [
	{
		title: "Development Tools",
		links: [
			{
				title: "YT-DLP Command Generator",
				url: "https://pnvttk.github.io/yt-dlp-cg/",
				description: "A tool to generate complex yt-dlp command-line arguments.",
				tags: ["tool", "cli", "productivity"]
			},
			{
				title: "String Operations",
				url: "https://pnvttk.github.io/string-ops/",
				description: "A tool to perform string operations.",
				tags: ["tool", "cli", "productivity", "string"]
			}
		]
	},
];
