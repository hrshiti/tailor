import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCheckoutStore = create(
    persist(
        (set, get) => ({
            // Session Data
            serviceDetails: null, // { id, title, image, basePrice }
            configuration: null,  // { deliveryType, fabricSource, measurements, instructions }
            pricing: null,        // { base, delivery, taxes, total, deliveryDays }

            // Actions
            initializeCheckout: (data) => set({
                serviceDetails: data.service,
                configuration: data.config,
                pricing: data.pricing
            }),

            clearCheckout: () => set({
                serviceDetails: null,
                configuration: null,
                pricing: null
            })
        }),
        {
            name: 'checkout-session-storage',
            partialize: (state) => ({
                serviceDetails: state.serviceDetails,
                configuration: state.configuration,
                pricing: state.pricing
            }),
        }
    )
);

export default useCheckoutStore;
