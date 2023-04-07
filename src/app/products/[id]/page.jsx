import { store } from "@/stores"
import { fetchProduct } from "@/stores/products-store";
import { AddBasketButton } from "@/components/add-basket-button";

export default async function ProductDetailPage({ params: { id } }) {
  // console.log("id:", id)
  await store.dispatch(fetchProduct(id))
  // console.log("id:", store.getState().products)
  const { product } = store.getState().products;


  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <AddBasketButton product={product} />
    </div>
  );
}
