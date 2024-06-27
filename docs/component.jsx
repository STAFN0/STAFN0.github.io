/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MKm5DwDIDKS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 md:px-12 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2 font-bold text-xl" prefetch={false}>
          <Package2Icon className="h-6 w-6" />
          <span>Stafn0 Store</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="hover:underline" prefetch={false}>
            Featured
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Accessories
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Clothing
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Collectibles
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            <ShoppingCartIcon className="h-4 w-4 mr-2" />
            Cart
          </Button>
          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            <UserIcon className="h-4 w-4 mr-2" />
            Login
          </Button>
          <Button variant="outline" size="sm" className="md:hidden">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-[url('/placeholder.svg')] bg-cover bg-center py-24 md:py-32 lg:py-40 text-center">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Welcome to Stafn0's Store
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground mb-8">
              Discover the latest Roblox creations from a top developer.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">Shop Now</Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="bg-background rounded-lg overflow-hidden shadow-lg">
                <Link href="#" className="block" prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    alt="Product 1"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">Roblox Backpack</h3>
                    <p className="text-muted-foreground mb-4">A stylish and functional Roblox-themed backpack.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-bold text-lg">$9.99</span>
                      <Button variant="primary" size="sm">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="bg-background rounded-lg overflow-hidden shadow-lg">
                <Link href="#" className="block" prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    alt="Product 2"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">Roblox T-Shirt</h3>
                    <p className="text-muted-foreground mb-4">A comfortable and stylish Roblox-themed t-shirt.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-bold text-lg">$14.99</span>
                      <Button variant="primary" size="sm">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="bg-background rounded-lg overflow-hidden shadow-lg">
                <Link href="#" className="block" prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    alt="Product 3"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">Roblox Figurine</h3>
                    <p className="text-muted-foreground mb-4">A detailed and collectible Roblox figurine.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-bold text-lg">$19.99</span>
                      <Button variant="primary" size="sm">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="bg-background rounded-lg overflow-hidden shadow-lg">
                <Link href="#" className="block" prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    alt="Product 4"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">Roblox Mug</h3>
                    <p className="text-muted-foreground mb-4">
                      A high-quality Roblox-themed mug for your daily coffee.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-bold text-lg">$7.99</span>
                      <Button variant="primary" size="sm">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Shop by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <Link href="#" className="bg-background rounded-lg overflow-hidden shadow-lg" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  alt="Accessories"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Accessories</h3>
                  <p className="text-muted-foreground">Explore our collection of Roblox-themed accessories.</p>
                </div>
              </Link>
              <Link href="#" className="bg-background rounded-lg overflow-hidden shadow-lg" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  alt="Clothing"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Clothing</h3>
                  <p className="text-muted-foreground">Browse our selection of Roblox-inspired apparel.</p>
                </div>
              </Link>
              <Link href="#" className="bg-background rounded-lg overflow-hidden shadow-lg" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  alt="Collectibles"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Collectibles</h3>
                  <p className="text-muted-foreground">Discover our exclusive Roblox collectibles.</p>
                </div>
              </Link>
              <Link href="#" className="bg-background rounded-lg overflow-hidden shadow-lg" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  alt="Home Decor"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Home Decor</h3>
                  <p className="text-muted-foreground">Bring the Roblox experience into your home.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">About Stafn0</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src="/placeholder.svg"
                  alt="Stafn0"
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-auto object-cover rounded-lg"
                />
              </div>
              <div className="prose max-w-none">
                <p>
                  Stafn0 is a talented Roblox developer who has been creating amazing experiences and content for the
                  platform since 2015. With a passion for game design and a keen eye for detail, Stafn0 has built a
                  loyal following of fans who appreciate the high-quality and innovative nature of their creations.
                </p>
                <p>
                  In this online store, you'll find a curated selection of Stafn0's best-selling products, including
                  apparel, accessories, collectibles, and more. Each item is designed with the Roblox community in mind,
                  offering a unique and authentic experience for fans of the platform.
                </p>
                <p>Explore the store and discover the latest from Stafn0, a true master of the Roblox universe.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">&copy; 2023 Stafn0 Store. All rights reserved.</p>
          <nav className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
