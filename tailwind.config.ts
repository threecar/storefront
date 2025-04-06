import TypographyPlugin from "@tailwindcss/typography";
import FormPlugin from "@tailwindcss/forms";
import ContainerQueriesPlugin from "@tailwindcss/container-queries";
import { type Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				bcb: {
					aqua: "#88D8E4",
					sand: "#FDE3A7",
					teal: "#1F4959",
					tan: "#BF9E6E",
					neutral: "#F8F4E9",
					coral: "#FFCDB2",
				},
			},
			fontFamily: {
				sans: ["Poppins", "Nunito Sans", "sans-serif"],
			},
			backgroundColor: {
				primary: "#F8F4E9", // Warm Neutral Background
			},
			textColor: {
				primary: "#1F4959", // Deep Teal/Navy
				secondary: "#BF9E6E", // Shell Outline Tan
			},
			borderColor: {
				primary: "#1F4959", // Deep Teal/Navy
				secondary: "#BF9E6E", // Shell Outline Tan
			},
		},
	},
	plugins: [TypographyPlugin, FormPlugin, ContainerQueriesPlugin],
};

export default config;
