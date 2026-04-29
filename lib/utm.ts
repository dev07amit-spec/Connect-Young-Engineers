import apiClient from "./axios";
import { CampaignDetails } from "../types/api";

export const getCampaignDetails = async (utm: string): Promise<CampaignDetails | null> => {
  try {
    const response = await apiClient.get<CampaignDetails>(`/api/campaign/details?utm=${utm}`);
    
    // Based on requirements, if UTM is correct we get the object.
    // However, we should also check if the response actually contains the data.
    if (response.data && response.data.utm === true) {
      return response.data;
    }
    
    return null;
  } catch (error) {
    // If 404 or any other error, we return null to trigger the invalid page redirect in the component
    return null;
  }
};
