export interface GroupResponse {
  results: Group[];
  total: number;
  page: number;
  limit: number;
}

export interface Group {
  active: boolean;
  block_remove: boolean;
  created_at: string;
  created_by_user_id: number;
  deleted: boolean;
  deleted_by_user_id: number;
  entity_ekklesia_location_id: number;
  id: number;
  name: string;
  sync_at: string;
  updated_at: string;
  updated_by_user_id: number;
  user_group_attributes: any;
}
