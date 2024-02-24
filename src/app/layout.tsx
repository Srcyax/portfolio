import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Philip",
	description: "Coded with ❤ by cya",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} dark`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
