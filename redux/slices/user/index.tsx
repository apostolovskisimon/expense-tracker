import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  displayName: string;
  photoUrl: string;
}

const initialState: UserState = {
  displayName: "",
  photoUrl: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
