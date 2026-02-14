import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
    persist(
        (set, get) => ({
            items: [],

            addItem: (product, variant) => {
                const { items } = get();
                const existingItemIndex = items.findIndex(
                    (item) => item.id === product.id &&
                        item.selectedSize === variant.size &&
                        item.selectedColor === variant.color
                );

                if (existingItemIndex > -1) {
                    // Update quantity if item exists with same variant
                    const newItems = [...items];
                    newItems[existingItemIndex].quantity += 1;
                    set({ items: newItems });
                } else {
                    // Add new item
                    set({
                        items: [...items, {
                            ...product,
                            selectedSize: variant.size,
                            selectedColor: variant.color,
                            quantity: 1,
                            cartId: `${product.id}-${variant.size}-${variant.color}` // Unique ID for cart item
                        }]
                    });
                }
            },

            removeItem: (cartId) => {
                set({ items: get().items.filter((item) => item.cartId !== cartId) });
            },

            updateQuantity: (cartId, quantity) => {
                if (quantity < 1) {
                    get().removeItem(cartId);
                    return;
                }
                set({
                    items: get().items.map((item) =>
                        item.cartId === cartId ? { ...item, quantity } : item
                    )
                });
            },

            clearCart: () => set({ items: [] }),

            // Getters
            getTotalItems: () => get().items.reduce((total, item) => total + item.quantity, 0),

            getTotalPrice: () => get().items.reduce((total, item) => total + (item.price * item.quantity), 0),
        }),
        {
            name: 'user-cart-storage',
        }
    )
);

export default useCartStore;
