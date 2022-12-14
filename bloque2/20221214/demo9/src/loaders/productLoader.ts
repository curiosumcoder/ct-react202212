import ProductService from "../services/ProductService";

export async function productLoader({ params }: { params: any }) {
  const ps = new ProductService();
  return await ps.get(params.id);
}
