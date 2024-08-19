import axios from "axios";
import { BASE_URL } from "utils/constants";
import { create } from "zustand";

const useUser = create((set) => ({
  user: null,
  isUser: false,
  error: null,

  setUser: (userData: unknown) => {
    set(() => ({ user: userData, isUser: true }));
  },

  resetUser: () => {
    set(() => ({ user: null, isUser: false, error: null }));
  },

  setError: (error: unknown) => {
    set(() => ({ error: error }));
  },

  getUser: async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${BASE_URL}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data && response.data.data) {
        set({ user: response.data.data, isUser: true });
      } else {
        console.error("User data not found in response");
        set({ error: "User data not found" });
      }
    } catch (error: unknown) {
      console.log("Error fetching user data:", error);

      set({
        error: error!.response.data?.message || "Unable to fetch user data",
      });
    }
  },

  updateUser: async (userId: unknown, updatedData: unknown) => {
    try {
      const token = localStorage.getItem("token");
      await axios.patch(`${BASE_URL}/user/${userId}/update-kind`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await useUser.getUser();
    } catch (error: unknown) {
      set(() => ({
        error: error.response?.data?.message || "Unexpected error occurred",
      }));
    }
  },
}));

export default useUser;
