"use client";

import Link from "next/link";

const companyName = "BCB";

export const Logo = () => {
	return (
		<Link href="/" className="flex items-center gap-2 text-xl font-bold">
			<span className="sr-only">{companyName} - home</span>
			{companyName}
		</Link>
	);
};
