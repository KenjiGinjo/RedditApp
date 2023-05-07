export interface RPics {
  kind: string;
  data: RPicsData;
}

export interface RPicsData {
  after: string;
  dist: number;
  modhash: string;
  geo_filter: null;
  children: Child[];
  before: null;
}

export interface Child {
  kind: Kind;
  data: ChildData;
}

export interface ChildData {
  approved_at_utc: null;
  subreddit: Subreddit;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title: null;
  gilded: number;
  clicked: boolean;
  title: string;
  link_flair_richtext: any[];
  subreddit_name_prefixed: SubredditNamePrefixed;
  hidden: boolean;
  pwls: number;
  link_flair_css_class: null | string;
  downs: number;
  thumbnail_height: number;
  top_awarded_type: null;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color: FlairTextColor;
  upvote_ratio: number;
  author_flair_background_color: null | string;
  subreddit_type: SubredditType;
  ups: number;
  total_awards_received: number;
  media_embed: MediaEmbed;
  thumbnail_width: number;
  author_flair_template_id: null;
  is_original_content: boolean;
  user_reports: any[];
  secure_media: null;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category: null;
  secure_media_embed: MediaEmbed;
  link_flair_text: null | string;
  can_mod_post: boolean;
  score: number;
  approved_by: null;
  is_created_from_ads_ui: boolean;
  author_premium: boolean;
  thumbnail: string;
  edited: boolean;
  author_flair_css_class: null | string;
  author_flair_richtext: any[];
  gildings: Gildings;
  post_hint?: PostHint;
  content_categories: ContentCategory[];
  is_self: boolean;
  mod_note: null;
  created: number;
  link_flair_type: FlairType;
  wls: number;
  removed_by_category: null;
  banned_by: null;
  author_flair_type: FlairType;
  domain: Domain;
  allow_live_comments: boolean;
  selftext_html: null;
  likes: null;
  suggested_sort: null;
  banned_at_utc: null;
  url_overridden_by_dest: string;
  view_count: null;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  preview?: Preview;
  all_awardings: AllAwarding[];
  awarders: any[];
  media_only: boolean;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text: null;
  treatment_tags: any[];
  visited: boolean;
  removed_by: null;
  num_reports: null;
  distinguished: null;
  subreddit_id: SubredditID;
  author_is_blocked: boolean;
  mod_reason_by: null;
  removal_reason: null;
  link_flair_background_color: string;
  id: string;
  is_robot_indexable: boolean;
  report_reasons: null;
  author: string;
  discussion_type: null;
  num_comments: number;
  send_replies: boolean;
  whitelist_status: WhitelistStatus;
  contest_mode: boolean;
  mod_reports: any[];
  author_patreon_flair: boolean;
  author_flair_text_color: FlairTextColor | null;
  permalink: string;
  parent_whitelist_status: WhitelistStatus;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  num_crossposts: number;
  media: null;
  is_video: boolean;
  is_gallery?: boolean;
  media_metadata?: { [key: string]: MediaMetadatum };
  gallery_data?: GalleryData;
}

export interface AllAwarding {
  giver_coin_reward: null;
  subreddit_id: null;
  is_new: boolean;
  days_of_drip_extension: null;
  coin_price: number;
  id: string;
  penny_donate: null;
  award_sub_type: string;
  coin_reward: number;
  icon_url: string;
  days_of_premium: number | null;
  tiers_by_required_awardings: null;
  resized_icons: ResizedIcon[];
  icon_width: number;
  static_icon_width: number;
  start_date: null;
  is_enabled: boolean;
  awardings_required_to_grant_benefits: null;
  description: string;
  end_date: null;
  sticky_duration_seconds: null;
  subreddit_coin_reward: number;
  count: number;
  static_icon_height: number;
  name: string;
  resized_static_icons: ResizedIcon[];
  icon_format: null | string;
  icon_height: number;
  penny_price: number | null;
  award_type: string;
  static_icon_url: string;
}

export interface ResizedIcon {
  url: string;
  width: number;
  height: number;
}

export enum FlairTextColor {
  Dark = "dark",
}

export enum FlairType {
  Text = "text",
}

export enum ContentCategory {
  Photography = "photography",
}

export enum Domain {
  IImgurCOM = "i.imgur.com",
  IReddIt = "i.redd.it",
  RedditCOM = "reddit.com",
}

export interface GalleryData {
  items: Item[];
}

export interface Item {
  media_id: string;
  id: number;
}

export interface Gildings {
  gid_2?: number;
}

export interface MediaEmbed {}

export interface MediaMetadatum {
  status: string;
  e: string;
  m: string;
  p: S[];
  s: S;
  id: string;
}

export interface S {
  y: number;
  x: number;
  u: string;
}

export enum WhitelistStatus {
  AllAds = "all_ads",
}

export enum PostHint {
  Image = "image",
}

export interface Preview {
  images: Image[];
  enabled: boolean;
}

export interface Image {
  source: ResizedIcon;
  resolutions: ResizedIcon[];
  variants: MediaEmbed;
  id: string;
}

export enum Subreddit {
  Pics = "pics",
}

export enum SubredditID {
  T52Qh0U = "t5_2qh0u",
}

export enum SubredditNamePrefixed {
  RPics = "r/pics",
}

export enum SubredditType {
  Public = "public",
}

export enum Kind {
  T3 = "t3",
}
