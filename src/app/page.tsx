import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
	// Use hardcoded default channel
	const baseUrl = "/default-channel";

	return (
		<div className="space-y-20">
			{/* Hero Section */}
			<section className="relative h-[600px] flex items-center">
				<div className="absolute inset-0 bg-bcb-aqua bg-opacity-10 z-0" />
				<div className="container-custom relative z-10">
					<div className="max-w-2xl space-y-6">
						<h1 className="text-5xl font-bold text-bcb-teal">
							Handcrafted Coastal Jewelry
						</h1>
						<p className="text-xl text-bcb-tan">
							Discover unique bead creations inspired by the beauty of the coast, made with love and positive intentions.
						</p>
						<Link href={`${baseUrl}/products`} className="btn-primary inline-block">
							Shop Collection
						</Link>
					</div>
				</div>
			</section>

			{/* Featured Categories */}
			<section className="container-custom">
				<h2 className="text-3xl font-bold text-bcb-teal text-center mb-12">
					Shop by Category
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<Link href={`${baseUrl}/categories/necklaces`} className="group">
						<div className="relative h-80 bg-bcb-neutral rounded-lg overflow-hidden">
							<div className="absolute inset-0 bg-bcb-aqua bg-opacity-0 group-hover:bg-opacity-10 transition-colors" />
							<div className="absolute bottom-0 left-0 right-0 p-6">
								<h3 className="text-2xl font-bold text-bcb-teal">Necklaces</h3>
							</div>
						</div>
					</Link>
					<Link href={`${baseUrl}/categories/bracelets`} className="group">
						<div className="relative h-80 bg-bcb-neutral rounded-lg overflow-hidden">
							<div className="absolute inset-0 bg-bcb-aqua bg-opacity-0 group-hover:bg-opacity-10 transition-colors" />
							<div className="absolute bottom-0 left-0 right-0 p-6">
								<h3 className="text-2xl font-bold text-bcb-teal">Bracelets</h3>
							</div>
						</div>
					</Link>
					<Link href={`${baseUrl}/categories/accessories`} className="group">
						<div className="relative h-80 bg-bcb-neutral rounded-lg overflow-hidden">
							<div className="absolute inset-0 bg-bcb-aqua bg-opacity-0 group-hover:bg-opacity-10 transition-colors" />
							<div className="absolute bottom-0 left-0 right-0 p-6">
								<h3 className="text-2xl font-bold text-bcb-teal">Accessories</h3>
							</div>
						</div>
					</Link>
				</div>
			</section>

			{/* About Section */}
			<section className="bg-white py-20">
				<div className="container-custom">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<div className="space-y-6">
							<h2 className="text-3xl font-bold text-bcb-teal">Our Story</h2>
							<p className="text-bcb-tan">
								Beach Coast Beads was born from a love of the coast, design, and creating beautiful things. Each piece is handcrafted with care, inspired by the natural beauty of beach treasures and infused with positive energy.
							</p>
							<Link href="/about" className="btn-secondary inline-block">
								Learn More
							</Link>
						</div>
						<div className="relative h-96 bg-bcb-neutral rounded-lg overflow-hidden">
							{/* Placeholder for about image */}
						</div>
					</div>
				</div>
			</section>

			{/* Newsletter Section */}
			<section className="container-custom">
				<div className="bg-bcb-neutral rounded-lg p-12 text-center">
					<h2 className="text-3xl font-bold text-bcb-teal mb-4">
						Join Our Community
					</h2>
					<p className="text-bcb-tan mb-8 max-w-2xl mx-auto">
						Subscribe to our newsletter for exclusive offers, new product announcements, and beachy inspiration.
					</p>
					<form className="max-w-md mx-auto flex gap-4">
						<input
							type="email"
							placeholder="Enter your email"
							className="flex-grow px-4 py-2 rounded border border-bcb-tan focus:border-bcb-aqua focus:outline-none"
						/>
						<button type="submit" className="btn-primary whitespace-nowrap">
							Subscribe
						</button>
					</form>
				</div>
			</section>
		</div>
	);
}
