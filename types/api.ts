export interface CampaignDetails {
  utm: boolean;
  territory_name: string;
  declared_territory_name: string;
  redirectUrl?: string;
  website?: string;
}

export interface ApiErrorResponse {
  success: boolean;
  message: string;
}
