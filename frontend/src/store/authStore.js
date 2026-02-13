import { create } from 'zustand';
import { ROLES } from '../config/roles';

const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    role: null,
    isLoading: false,
    error: null,

    login: async (email, password, role) => {
        set({ isLoading: true, error: null });
        try {
            // TODO: Replace with actual API call
            await new Promise((resolve) => setTimeout(resolve, 1000));

            const mockUser = {
                id: 1,
                name: 'John Doe',
                email,
                role: role || ROLES.CUSTOMER,
            };

            set({
                user: mockUser,
                isAuthenticated: true,
                role: mockUser.role,
                isLoading: false
            });
            return mockUser;
        } catch (err) {
            set({ error: err.message, isLoading: false });
            throw err;
        }
    },

    logout: () => {
        set({ user: null, isAuthenticated: false, role: null });
    },

    signup: async (userData) => {
        set({ isLoading: true, error: null });
        try {
            // TODO: API call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            // Auto-login after signup for now
            const mockUser = { ...userData, id: 2 };
            set({
                user: mockUser,
                isAuthenticated: true,
                role: mockUser.role,
                isLoading: false
            });
        } catch (err) {
            set({ error: err.message, isLoading: false });
            throw err;
        }
    }
}));

export default useAuthStore;
