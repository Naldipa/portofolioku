import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

const siteUrl =
	process.env.NEXT_PUBLIC_SITE_URL || "https://naldi-pradipta.vercel.app";
const siteTitle = "Naldi Pradipta | Portfolio";
const siteDescription =
	"Naldi Pradipta is a junior fullstack developer focused on modern web development and AI-powered applications.";

export const metadata = {
	metadataBase: new URL(siteUrl),
	title: siteTitle,

	description: siteDescription,

	authors: [{ name: "Naldi Pradipta" }],
	creator: "Naldi Pradipta",
	siteUrl,
	applicationName: "Naldi Pradipta",

	keywords: [
		"Naldi Pradipta",
		"Naldi",
		"Naldipa",
		"full stack developer",
		"web developer",
		"AI developer",
		"portfolio",
	],

	openGraph: {
		type: "website",
		url: siteUrl,
		title: siteTitle,
		siteName: siteTitle,
		description: siteDescription,
		images: [
			{
				url: "/og-image-rev.png",
				width: 1200,
				height: 630,
				alt: "Naldi Pradipta Portfolio",
			},
		],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
