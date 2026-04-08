export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors: Partial<
    Record<
      | "fullName"
      | "email"
      | "phone"
      | "message"
      | "role"
      | "portfolioUrl",
      string
    >
  >;
};

export const initialFormState: FormState = {
  status: "idle",
  message: "",
  fieldErrors: {},
};
