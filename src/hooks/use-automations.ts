import {
  createAutomations,
  saveListener,
  updateAutomationName,
} from "@/actions/automations";
import { useEffect, useRef, useState } from "react";
import { useMutationData } from "./use-mutations";
import { z } from "zod";
import useZodForm from "./use-zod-form";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { stat } from "fs";
import { useDispatch } from "react-redux";
import { TRIGGER } from "@/redux/slices/automation";

export const useCreateAutomation = (id?: string) => {
  const { mutate, isPending } = useMutationData(
    ["create-automation"],
    () => createAutomations(id),
    "user-automations"
  );
  return { isPending, mutate };
};

export const useEditAutomation = (automationId: string) => {
  const [edit, setEdit] = useState<any>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const enableEdit = () => setEdit(true);
  const disableEdit = () => setEdit(false);

  const { isPending, mutate } = useMutationData(
    ["update-automation"],
    (data: { name: string }) =>
      updateAutomationName(automationId, { name: data.name }),
    "automation-info",
    disableEdit
  );

  useEffect(() => {
    function handleClickOutside(this: Document, event: MouseEvent) {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node | null)
      ) {
        if (inputRef.current.value !== "") {
          mutate({ name: inputRef.current.value });
        } else {
          disableEdit();
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    isPending,
    edit,
    inputRef,
    enableEdit,
    disableEdit,
  };
};

export const useListener = (id: string) => {
  const [listener, setListener] = useState<"MESSAGE" | "SMART_AI">();

  const promptSchema = z.object({
    propmt: z.string(),
    reply: z.string(),
  });

  const { isPending, mutate } = useMutationData(
    ["create-listener"],
    (data: { prompt: string; reply: string }) =>
      saveListener(id, listener || "MESSAGE", data.prompt, data.reply),
    "automation-info"
  );

  const { register, errors, onFormSubmit, watch, reset } = useZodForm(
    promptSchema,
    mutate
  );

  const onSetListener = (type: "MESSAGE" | "SMART_AI") => () =>
    setListener(type);

  return {
    onSetListener,
    register,
    onFormSubmit,
    listener,
    isPending,
  };
};

export const useTrigger = (id: string) => {
  const types = useAppSelector(
    (state) => state.AutomationReducer.trigger?.types
  );

  const dispatch: AppDispatch = useDispatch();

  const onSetTrigger = (type: "COMMENT" | "DM") =>
    dispatch(TRIGGER({ trigger: { type } }));

  const { isPending, mutate } = useMutationData([
    "add-trigger",
    (data: { types: string[] }) => saveTrigger(),
  ]);

  const onSaveTrigger = () => {};
};
