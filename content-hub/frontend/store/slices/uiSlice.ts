import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UiState = {
    mobileNavOpen: boolean;
    postsSearchDraft: string;
    adminStatusFilter: "all" | "draft" | "published";
}

const initialState : UiState = {
    mobileNavOpen: false,
    postsSearchDraft: "",
    adminStatusFilter: "all"
}

const uiSclice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setMobileNavOpen(state, action: PayloadAction<string>){
            // state.mobileNavOpen = action.payload
        }
    }
});

export const {
    setMobileNavOpen
} = uiSclice.actions;

export default uiSclice.reducer;