import { invariant } from "ts-invariant";
import { RootWrapper } from "./pageWrapper";

export const metadata = {
	title: "Checkout · BCB Storefront",
};

export default function CheckoutPage() {
	invariant(process.env.NEXT_PUBLIC_SALEOR_API_URL, "Missing NEXT_PUBLIC_SALEOR_API_URL env variable");

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-24">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900">BCB</h1>
				</div>
				<RootWrapper saleorApiUrl={process.env.NEXT_PUBLIC_SALEOR_API_URL} />
			</div>
		</div>
	);
}
