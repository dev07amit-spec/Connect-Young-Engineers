export interface CampaignDetails {
  utm: boolean;
  territory_name: string;
  declared_territory_name: string;
}

export interface ApiErrorResponse {
  success: boolean;
  message: string;
}
