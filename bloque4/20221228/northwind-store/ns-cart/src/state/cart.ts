import { BehaviorSubject } from 'rxjs';
import IProduct from 'ns-model';

export const cartItems = new BehaviorSubject(Array<IProduct>());

export default class cart {
  private static items: Array<IProduct> = Array<IProduct>();

  private static getCart() {
    const json = sessionStorage.getItem('cartItems');
    cart.items = json ? (JSON.parse(json) as Array<IProduct>) : [];
    cartItems.next(cart.items);
  }

  private static saveCart() {
    sessionStorage.setItem('cartItems', JSON.stringify(cart.items));
    cartItems.next(cart.items);
  }

  static addToCart(newItem: IProduct) {
    console.log('cart.addToCart: ', newItem)
    // Sino existe el producto lo agrega
    if (cart.items.findIndex((p: IProduct) => p.id == newItem.id) === -1) {
      cart.items = [newItem, ...cart.items];
    }    
    cart.saveCart();
  }

  static removeFromCart(item: IProduct) {
    cart.items = cart.items.filter((p: IProduct) => p.id !== item.id);
    cart.saveCart()
  }

  static clearCart() {
    cart.items = [];
    cart.saveCart();
  }
}
