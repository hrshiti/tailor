import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAddressStore = create(
    persist(
        (set, get) => ({
            addresses: [
                {
                    id: 1,
                    name: "Blair Waldorf",
                    phone: "9876543210",
                    pincode: "110001",
                    addressLine1: "Apartment 4B, The Oberoi",
                    addressLine2: "Connaught Place",
                    city: "New Delhi",
                    state: "Delhi",
                    type: "Home",
                    isDefault: true
                }
            ],
            selectedAddressId: null,

            addAddress: (newAddress) => set((state) => ({
                addresses: [...state.addresses, { ...newAddress, id: Date.now() }]
            })),

            removeAddress: (id) => set((state) => ({
                addresses: state.addresses.filter((addr) => addr.id !== id)
            })),

            selectAddress: (id) => set(() => ({
                selectedAddressId: id
            })),

            getSelectedAddress: () => {
                const state = get();
                return state.addresses.find(addr => addr.id === state.selectedAddressId);
            }
        }),
        {
            name: 'user-address-storage',
        }
    )
);

export default useAddressStore;
