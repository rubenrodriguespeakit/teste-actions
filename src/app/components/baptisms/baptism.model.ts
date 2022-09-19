export interface BaptismResponse {
  results: Baptism[];
  total: number;
  page: number;
  limit: number;
}

export interface Baptism {
  age_at_subscription?: number;
  baptism_date?: string;
  baptism_hour?: string;
  block_remove?: boolean;
  curia_status?: string;
  date?: string;
  entity_id?: number;
  entity_description?: string;
  id?: number;
  seat_number?: string;
  serie_number?: string;
  sheet?: string;
  time_of_birth?: string;
  document_entity_description?: string;
  document_entity_id?: number;
  document_id?: number;
  emolument_description?: string;
  emolument_id?: number;
  tax?: number;
  in_danger_of_life?: boolean;
  entity_baptized_location_description?: string;
  entity_baptized_location_id?: number;
  entity_baptized_location_county?: string;
  entity_baptized_by_id?: number;
  entity_baptized_by_description?: string;
  entity_baptized_authorization_id?: number;
  entity_baptized_authorization_description?: string;
  entity_baptized_authorization_entity_priest_id?: number;
  comments?: string;
  blocked?: boolean;
  certificate_chrism?: boolean;
  certificate_comments?: string;
  certificate_first_communion?: boolean;
  certificate_no_info_on_margin?: boolean;
  certificate_wedding?: boolean;
  created_at?: string;
  created_by_user_id?: number;
  curia_status_date?: string;
  deleted?: boolean;
  deleted_by_user_id?: number;
  entity_ekklesia_location_id?: number;
  entity_godfather_description?: string;
  entity_godfather_id?: number;
  entity_godfather_is_not_confirmed?: boolean;
  entity_godfather_representative_description?: string;
  entity_godfather_representative_id?: number;
  entity_godmother_description?: string;
  entity_godmother_id?: number;
  entity_godmother_is_not_confirmed?: boolean;
  entity_godmother_representative_description?: string;
  entity_godmother_representative_id?: number;
  entity_parishioner_of_description?: string;
  entity_parishioner_of_id?: number;
  entity_priest_description?: string;
  entity_priest_id?: number;
  father_residence_chapelry_description?: string;
  father_residence_chapelry_id?: number;
  godfathers_preparation_priest_description?: string;
  godfathers_preparation_priest_id?: number;
  has_more_kids?: boolean;
  import_origin?: string;
  mother_residence_chapelry_description?: string;
  mother_residence_chapelry_id?: number;
  parents_preparation_priest_description?: string;
  parents_preparation_priest_id?: number;
  paroquia_sw_id?: number;
  preparation_reunion_date_1?: string;
  preparation_reunion_date_2?: string;
  preparation_reunion_hours?: string;
  preparation_reunion_location_id?: number;
  preparation_reunion_location_description?: string;
  process_id?: number;
  seat_godfather_pronoun?: boolean;
  seat_godmother_pronoun?: boolean;
  seat_officiant_pronoun?: boolean;
  seat_parson_pronoun?: boolean;
  suitability_request_godfather_godmother?: boolean;
  touched_in_current_importation?: boolean;
  updated_at?: string;
  updated_by_user_id?: number;
  wich_will?: string;
  baptisms_attachments?: BaptismsAttachment[];
  entity?: Entity;
  entity_baptized_by?: Entity;
  entity_baptized_authorization?: Entity;
  entity_baptized_location?: Entity;
  entity_godfather?: Entity;
  entity_godmother?: Entity;
  entity_godfather_representative?: Entity;
  entity_godmother_representative?: Entity;
  // Virtual fields
  father_id?: number;
  father_description?: string;
  mother_id?: number;
  mother_description?: string;
  paternal_grandfather_id?: number;
  paternal_grandfather_description?: string;
  paternal_grandmother_id?: number;
  paternal_grandmother_description?: string;
  maternal_grandfather_id?: number;
  maternal_grandfather_description?: string;
  maternal_grandmother_id?: number;
  maternal_grandmother_description?: string;
}

interface Entity {
  address?: string;
  attachment?: string;
  attachment_filename?: string;
  block_remove?: boolean;
  can_sign_documents?: boolean;
  civil_status?: string;
  civil_status_id?: number;
  complete_relation?: string;
  country_description?: string;
  country_id?: number;
  county?: string;
  created_at?: string;
  created_by_user_id?: number;
  deleted?: boolean;
  deleted_by_user_id?: number;
  disabled?: boolean;
  district?: string;
  door_number?: string;
  email?: string;
  emoluments_imported?: boolean;
  entity_birth_chapelry_description?: string;
  entity_birth_chapelry_free_text?: string;
  entity_birth_chapelry_id?: number;
  entity_ekklesia_location_id?: number;
  entity_type_id?: number;
  fax?: string;
  id?: number;
  import_origin?: string;
  inserted_by_user?: boolean;
  is_archdiocese?: boolean;
  is_demo?: boolean;
  is_public_profile?: boolean;
  latitude?: string;
  longitude?: string;
  mass_intention_types_imported?: boolean;
  mobilephone?: string;
  name?: string;
  newsletter_subscriptor?: boolean;
  parish?: string;
  paroquia_sw_id?: number;
  patron_description?: string;
  patron_id?: number;
  payment_types_imported?: boolean;
  phone?: string;
  photo_filename?: string;
  photo_url?: string;
  place?: string;
  postal_code?: string;
  reports_group_description?: string;
  reports_group_id?: number;
  residence_chapelry_description?: string;
  residence_chapelry_id?: number;
  sync_at?: string;
  sync_id?: number;
  tax_designation?: string;
  taxpayer?: string;
  touched_in_current_importation?: boolean;
  updated_at?: string;
  updated_by_user_id?: number;
  url?: string;
  validated?: boolean;
  entity_person?: EntityPerson;
}

interface EntityPerson {
  attended_catechism_party_1?: boolean;
  attended_catechism_party_10?: boolean;
  attended_catechism_party_2?: boolean;
  attended_catechism_party_3?: boolean;
  attended_catechism_party_4?: boolean;
  attended_catechism_party_5?: boolean;
  attended_catechism_party_7?: boolean;
  attended_catechism_party_8?: boolean;
  attended_catechism_party_9?: boolean;
  attended_catechism_year_1?: boolean;
  attended_catechism_year_10?: boolean;
  attended_catechism_year_2?: boolean;
  attended_catechism_year_3?: boolean;
  attended_catechism_year_4?: boolean;
  attended_catechism_year_5?: boolean;
  attended_catechism_year_6?: boolean;
  attended_catechism_year_7?: boolean;
  attended_catechism_year_8?: boolean;
  attended_catechism_year_9?: boolean;
  baptized_chrismed_description?: string;
  birth_date?: string;
  birth_place_county?: string;
  birth_place_parish?: string;
  catechism_10_obs?: string;
  catechism_1_obs?: string;
  catechism_2_obs?: string;
  catechism_3_obs?: string;
  catechism_4_obs?: string;
  catechism_5_obs?: string;
  catechism_6_obs?: string;
  catechism_7_obs?: string;
  catechism_8_obs?: string;
  catechism_9_obs?: string;
  catechism_attendance_1?: number;
  catechism_attendance_10?: number;
  catechism_attendance_2?: number;
  catechism_attendance_3?: number;
  catechism_attendance_4?: number;
  catechism_attendance_5?: number;
  catechism_attendance_6?: number;
  catechism_attendance_7?: number;
  catechism_attendance_8?: number;
  catechism_attendance_9?: number;
  catechism_failures_1?: number;
  catechism_failures_10?: number;
  catechism_failures_2?: number;
  catechism_failures_3?: number;
  catechism_failures_4?: number;
  catechism_failures_5?: number;
  catechism_failures_6?: number;
  catechism_failures_7?: number;
  catechism_failures_8?: number;
  catechism_failures_9?: number;
  catechism_inscription_date_1?: string;
  catechism_inscription_date_10?: string;
  catechism_inscription_date_2?: string;
  catechism_inscription_date_3?: string;
  catechism_inscription_date_4?: string;
  catechism_inscription_date_5?: string;
  catechism_inscription_date_6?: string;
  catechism_inscription_date_7?: string;
  catechism_inscription_date_8?: string;
  catechism_inscription_date_9?: string;
  catechism_last_year?: number;
  catechism_party_10_date?: string;
  catechism_party_10_name?: string;
  catechism_party_1_date?: string;
  catechism_party_1_name?: string;
  catechism_party_2_date?: string;
  catechism_party_2_name?: string;
  catechism_party_3_date?: string;
  catechism_party_3_name?: string;
  catechism_party_4_date?: string;
  catechism_party_4_name?: string;
  catechism_party_5_date?: string;
  catechism_party_5_name?: string;
  catechism_party_6_name?: string;
  catechism_party_7_date?: string;
  catechism_party_7_name?: string;
  catechism_party_8_date?: string;
  catechism_party_8_name?: string;
  catechism_party_9_date?: string;
  catechism_party_9_name?: string;
  catechized_has_brothers_info?: string;
  catechized_has_catechized_brothers?: string;
  christian_attended_catechism?: boolean;
  christian_attended_catechism_county?: string;
  christian_attended_catechism_district?: string;
  christian_attended_catechism_worshipplace_description?: string;
  christian_attended_catechism_worshipplace_id?: number;
  christian_baptized?: boolean;
  christian_baptized_county?: string;
  christian_baptized_date?: string;
  christian_baptized_district?: string;
  christian_baptized_number?: string;
  christian_baptized_sheet?: string;
  christian_baptized_worshipplace_description?: string;
  christian_baptized_worshipplace_id?: number;
  christian_chrism?: boolean;
  christian_chrism_county?: string;
  christian_chrism_date?: string;
  christian_chrism_district?: string;
  christian_chrism_number?: string;
  christian_chrism_sheet?: string;
  christian_chrism_worshipplace_description?: string;
  christian_chrism_worshipplace_id?: number;
  christian_first_communion?: boolean;
  christian_first_communion_county?: string;
  christian_first_communion_date?: string;
  christian_first_communion_district?: string;
  christian_first_communion_number?: string;
  christian_first_communion_sheet?: string;
  christian_first_communion_worshipplace_description?: string;
  christian_first_communion_worshipplace_id?: number;
  christian_first_confession?: boolean;
  christian_first_confession_date?: string;
  christian_first_confession_worshipplace_description?: string;
  christian_first_confession_worshipplace_id?: number;
  christian_often_eucharist?: string;
  christian_solemn_communion?: boolean;
  christian_solemn_communion_by_id?: number;
  christian_solemn_communion_county?: string;
  christian_solemn_communion_date?: string;
  christian_solemn_communion_district?: string;
  christian_solemn_communion_worshipplace_description?: string;
  christian_solemn_communion_worshipplace_id?: number;
  comments?: string;
  deceased?: boolean;
  entity_birth_place_description?: string;
  entity_birth_place_id?: number;
  entity_christian_first_communion_by_id?: number;
  entity_father_description?: string;
  entity_father_id?: number;
  entity_id?: number;
  entity_mother_description?: string;
  entity_mother_id?: number;
  entity_spouse_description?: string;
  entity_spouse_id?: number;
  entity_wedding_location_description?: string;
  entity_wedding_location_id?: number;
  id?: number;
  ident_document_emission_date?: string;
  ident_document_emitted_by?: string;
  ident_document_number?: string;
  ident_document_type?: string;
  ident_document_validity_date?: string;
  is_adopted?: boolean;
  is_catechized?: boolean;
  is_parishioner?: boolean;
  lives_with?: string;
  lives_with_text?: string;
  maritial_status?: string;
  outside_chapelry_description?: string;
  outside_chapelry_id?: number;
  previous_address?: string;
  professional_address?: string;
  professional_company?: string;
  professional_country_description?: string;
  professional_country_id?: number;
  professional_county?: string;
  professional_district?: string;
  professional_door_number?: string;
  professional_email?: string;
  professional_fax?: string;
  professional_locality?: string;
  professional_mobilephone?: string;
  professional_parish?: string;
  professional_phone?: string;
  professional_post?: string;
  professional_postal_code?: string;
  professional_profession_description?: string;
  professional_profession_id?: number;
  professional_url?: string;
  qualifications?: string;
  qualifications_id?: number;
  serie_number?: string;
  sex?: boolean;
  suitability_request?: number;
  time_of_birth?: string;
  title?: string;
  wedding_date?: string;
  entity_father?: Entity;
  entity_mother?: Entity;
}

export interface BaptismsAttachment {
  attachment?: string;
  attachment_name?: string;
  baptism_id?: number;
  created_at?: string;
  description?: string;
  id?: number;
  updated_at?: string;
  file_to_upload?: File;
}