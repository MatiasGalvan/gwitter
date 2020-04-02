export interface IUser {
  id : number;
  id_str : string;
  name : string;
  screen_name : string;
  verified : boolean;
  url : string; 
  profile_image_url : string;
  following: boolean;
  default_profile: boolean;
}