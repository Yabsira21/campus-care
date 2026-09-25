import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAppointment = create(
  persist(
    (set) => ({
      items: [],

      addItem: (app) =>
        set((state) => ({
          items: [...state.items, app],
        })),

      clear: () => set({ items: [] }),
    }),
    {
      name: "appointment-storage",
    },
  ),
);
