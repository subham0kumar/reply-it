import { duplicationValidation } from "@/lib/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateTriggerProps = {
  trigger?: {
    type?: "COMMENT" | "DM";
    keyword?: string;
    types?: string[];
    keywords?: string[];
  };
};

const InitialState: InitialStateTriggerProps = {
  trigger: {
    type: undefined,
    keyword: undefined,
    types: [],
    keywords: [],
  },
};

export const AUTOMATION = createSlice({
  name: "automation",
  initialState: InitialState,
  reducers: {
    TRIGGER: (state, action: PayloadAction<InitialStateTriggerProps>) => {
      state.trigger!.types = duplicationValidation(
        state.trigger!.types!,
        action.payload.trigger!.type!
      );
    },
  },
});

export const { TRIGGER } = AUTOMATION.actions;
export default AUTOMATION.reducer;
