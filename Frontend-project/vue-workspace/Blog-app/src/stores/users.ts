import { defineStore } from "pinia";
import { NewUser } from "../users";
import { JwtToken } from "../JwtToken";

interface UsersState {
  currentUserId?: string
}

export const useUsers = defineStore("users", {
  state: (): UsersState => ({
    currentUserId: undefined,//localStorage.getItem('myVariable') as string,
  }),
  persist: true,

  actions: {
    async login(user: NewUser) {
      const body = JSON.stringify(user);
      const res= await window.fetch("/api/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });
      const token:JwtToken= await res.json();
      if(token != null) {
        localStorage.setItem('user', JSON.stringify(token.jwtToken));
        localStorage.setItem('myVariable', JSON.stringify(token.userId));
        this.currentUserId = localStorage.getItem('myVariable') as string;

      }
    },
    logout() {
      localStorage.removeItem('user');
      localStorage.removeItem('myVariable');
      this.currentUserId = undefined;
    },

    async createUser(newUser: NewUser) {
      const body = JSON.stringify(newUser);
      await window.fetch("/api/new-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });
      return this.login(newUser);
    },
    // async authenticate(newUser: NewUser) {
    //   try {
    //     const body = JSON.stringify(newUser);
    //     const res = await window.fetch("/api/authenticate", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     });
    //     const result = await res.json();
    //     this.currentUserId = result.id;
    //   } catch (e) {
    //     this.currentUserId = undefined;
    //   }
    // },
    // async authenticate() {
    //   try {
    //     const res = await window.fetch("/api/current-user", {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     });
    //     const result = await res.json();
    //     this.currentUserId = result.id;
    //   } catch (e) {
    //     this.currentUserId = undefined;
    //   }
    // },

    // async logout() {
    //   await window.fetch("/api/logout", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   return this.authenticate();
    // },
  },
});