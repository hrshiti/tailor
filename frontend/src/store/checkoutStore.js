import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCheckoutStore = create(
    persist(
        (set, get) => ({
            // Session Data
            serviceDetails: null, // { id, title, image, basePrice, tailorId, tailorName }
            configuration: null,  // { deliveryType, fabricSource, measurements, instructions }
            pricing: null,        // { base, delivery, taxes, total, deliveryDays }
            addons: [],           // Array of addon objects

            // Actions
            initializeCheckout: (data) => set({
                serviceDetails: data.service ? {
                    ...data.service,
                    tailorId: data.tailorId || null,
                    tailorName: data.tailorName || null
                } : null,
                configuration: data.config || null,
                pricing: data.pricing || null,
                addons: data.addons || []
            }),

            setTailor: (id, name) => set((state) => ({
                serviceDetails: state.serviceDetails
                    ? { ...state.serviceDetails, tailorId: id, tailorName: name }
                    : { tailorId: id, tailorName: name }
            })),

            clearCheckout: () => set({
                serviceDetails: null,
                configuration: null,
                pricing: null,
                addons: []
            })
        }),
        {
            name: 'checkout-session-storage',
            partialize: (state) => ({
                serviceDetails: state.serviceDetails,
                configuration: state.configuration,
                pricing: state.pricing,
                addons: state.addons
            }),
        }
    )
);

export default useCheckoutStore;
