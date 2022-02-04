import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  displayName: string | null;
  photoUrl: string | null;
  loading?: boolean;
}

const initialState: UserState = {
  displayName: "",
  photoUrl: "",
  loading: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      console.log(action);
      return (state = { ...action.payload, loading: false });
    },
    resetUser: (state) => {
      state.displayName = "";
      state.photoUrl = "";
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
