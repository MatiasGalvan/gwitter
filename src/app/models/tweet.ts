import { IUser } from './user';

export interface ITweet {
  created_at : Date;
  id : number;
  id_str : string;
  text : string;
  source : string;
  truncated : boolean;

  in_reply_to_status_id : number; //no se si los vamos a usar (this field will contain the integer representation of the original Tweet’s ID.)
  in_reply_to_status_id_str : string;
  in_reply_to_user_id : number;
  in_reply_to_user_id_str : string; 
  in_reply_to_screen_name : string;

  retweeted : boolean;
  retweet_count : number;
  favorited : boolean;
  favorite_count : number;
  
  user : IUser;
}
