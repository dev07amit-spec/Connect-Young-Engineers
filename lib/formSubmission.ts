import apiClient from "./axios";

export interface FormSubmitPayload {
    firstName: string;
    lastName: string | null;
    email: string;
    phone: string;
    utmSource: string | null;
    pixelId?: string;
    fbc?: string | null;
    fbp?: string | null;
    eventSourceUrl?: string;
    eventID?: string;
    whatsappPrefilledMessage?: string;
    testEventCode?: string | null;
}

export const submitContactForm = async (payload: FormSubmitPayload) => {
    try {
        const response = await apiClient.post("/auth/formsubmit", payload);
        return response.data;
    } catch (error: any) {
        throw error.response?.data?.message || "Failed to submit the form. Please try again.";
    }
};