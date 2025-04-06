import "./globals.css";
import { type ReactNode } from "react";
import { type Metadata } from "next";
import { DraftModeNotification } from "@/ui/components/DraftModeNotification";
import { Header } from "@/components/bcb/Header";
import { Footer } from "@/components/bcb/Footer";

export const metadata: Metadata = {
	title: "Beach Coast Beads - Handcrafted Coastal Jewelry",
	description: "Discover unique, handcrafted bead trinkets and jewelry inspired by the beauty of the coast. Each piece is made with love and positive intentions.",
	metadataBase: process.env.NEXT_PUBLIC_STOREFRONT_URL
		? new URL(process.env.NEXT_PUBLIC_STOREFRONT_URL)
		: undefined,
};

export default function RootLayout(props: { children: ReactNode }) {
	const { children } = props;

	return (
		<html lang="en" className="min-h-dvh">
			<body className="min-h-dvh flex flex-col">
				<Header />
				<main className="flex-grow">
					{children}
				</main>
				<Footer />
				<DraftModeNotification />
			</body>
		</html>
	);
}
