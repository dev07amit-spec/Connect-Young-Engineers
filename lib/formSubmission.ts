import apiClient from "./axios";

export interface FormSubmitPayload {
    firstName: string;
    lastName: string | null;
    email: string;
    phone: string;
    source: string;
    utmSource: string | null;
}

export const submitContactForm = async (payload: FormSubmitPayload) => {
    try {
        const response = await apiClient.post("/auth/formsubmit", payload);
        return response.data;
    } catch (error: any) {
        throw error.response?.data?.message || "Failed to submit the form. Please try again.";
    }
};