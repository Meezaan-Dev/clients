import products from "@/data/products.json"
import type { Product } from "@/types/product"

export function searchProducts(query: string): Product[] {
	if (!query) return []

	return (products as Product[]).filter(p =>
		p.name.toLowerCase().includes(query.toLowerCase())
	)
}
