import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useOrderStore = create(
    persist(
        (set, get) => ({
            orders: [
                {
                    id: "ORD-9821-202X",
                    status: "Delivered",
                    statusIndex: 13, // DELIVERED
                    serviceTitle: "Linen Shirt Stitching",
                    date: "12 Oct 2024",
                    totalAmount: 1250,
                    deliveryType: "Standard",
                    imageUrl: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=800"
                },
                {
                    id: "ORD-9932-202X",
                    status: "In Progress",
                    statusIndex: 6, // STITCHING
                    serviceTitle: "Trouser Alteration",
                    date: "20 Feb 2026",
                    totalAmount: 350,
                    deliveryType: "Express",
                    imageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800"
                }
            ], // Initial mock orders

            addOrder: (newOrder) => set((state) => ({
                orders: [{
                    ...newOrder,
                    id: `ORD-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`,
                    status: "Placed",
                    statusIndex: 0, // ORDER_PLACED
                    date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
                    tailorId: newOrder.tailorId,
                    tailorName: newOrder.tailorName
                }, ...state.orders]
            })),

            getOrderById: (id) => get().orders.find(o => o.id === id),

            // For now, no deletion or modification needed for basic flow
        }),
        {
            name: 'user-orders-storage',
        }
    )
);

export const ORDER_STATES = [
    { label: "Order Placed", description: "Wait for pickup assignment" },
    { label: "Pickup Assigned", description: "Rider reaching your location" },
    { label: "Pickup in Progress", description: "Rider is at your doorstep" },
    { label: "Fabric Picked", description: "On the way to workshop" },
    { label: "Tailor Assigned", description: "Best tailor selected for you" },
    { label: "With Tailor", description: "Material received by tailor" },
    { label: "Cutting", description: "Pattern making & cutting" },
    { label: "Stitching", description: "Sewing in progress" },
    { label: "Hemming", description: "Interlock & final finish" },
    { label: "Ironing", description: "Steam press & packaging" },
    { label: "Ready for Dispatch", description: "Wait for delivery partner" },
    { label: "Delivery Assigned", description: "Rider assigned for delivery" },
    { label: "Out for Delivery", description: "Rider reaching your location" },
    { label: "Delivered", description: "Enjoy your perfect fit!" }
];

export default useOrderStore;
