export interface CuriaProvisionTypesResponse {
  results: CuriaProvisionType[];
  total: number;
  page: number;
  limit: number;
}

export interface CuriaProvisionType {
  block_remove: boolean;
  created_at: string;
  created_by_user_id: number;
  deleted: boolean;
  deleted_by_user_id: number;
  entity_ekklesia_location_id: number;
  id: number;
  name: string;
  updated_at: string;
  updated_by_user_id: number;
}
