export type CommentReturn = [Comment, Comment];
export interface Comment {
  kind: string;
  data: CommentData;
}

export interface CommentData {
  after: null;
  dist: number | null;
  modhash: string;
  geo_filter: string;
  children: PurpleChild[];
  before: null;
}

export interface PurpleChild {
  kind: Kind;
  data: PurpleData;
}

export interface PurpleData {
  approved_at_utc: null;
  subreddit: Subreddit;
  selftext?: string;
  user_reports: any[];
  saved: boolean;
  mod_reason_title: null;
  gilded: number;
  clicked?: boolean;
  title?: string;
  link_flair_richtext?: any[];
  subreddit_name_prefixed: SubredditNamePrefixed;
  hidden?: boolean;
  pwls?: number;
  link_flair_css_class?: null;
  downs: number;
  thumbnail_height?: number;
  top_awarded_type: null;
  parent_whitelist_status?: string;
  hide_score?: boolean;
  name: string;
  quarantine?: boolean;
  link_flair_text_color?: string;
  upvote_ratio?: number;
  author_flair_background_color: null;
  subreddit_type: SubredditType;
  ups: number;
  total_awards_received: number;
  media_embed?: Gildings;
  thumbnail_width?: number;
  author_flair_template_id: null;
  is_original_content?: boolean;
  author_fullname: string;
  secure_media?: null;
  is_reddit_media_domain?: boolean;
  is_meta?: boolean;
  category?: null;
  secure_media_embed?: Gildings;
  link_flair_text?: null;
  can_mod_post: boolean;
  score: number;
  approved_by: null;
  is_created_from_ads_ui?: boolean;
  author_premium: boolean;
  thumbnail?: string;
  edited: boolean;
  author_flair_css_class: null;
  author_flair_richtext: any[];
  gildings: Gildings;
  post_hint?: string;
  content_categories?: null;
  is_self?: boolean;
  mod_note: null;
  created: number;
  link_flair_type?: FlairType;
  wls?: number;
  removed_by_category?: null;
  banned_by: null;
  author_flair_type: FlairType;
  domain?: string;
  allow_live_comments?: boolean;
  selftext_html?: null;
  likes: null;
  suggested_sort?: null;
  banned_at_utc: null;
  url_overridden_by_dest?: string;
  view_count?: null;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable?: boolean;
  pinned?: boolean;
  over_18?: boolean;
  preview?: Preview;
  all_awardings: any[];
  awarders: any[];
  media_only?: boolean;
  can_gild: boolean;
  spoiler?: boolean;
  locked: boolean;
  author_flair_text: null;
  treatment_tags: any[];
  visited?: boolean;
  removed_by?: null;
  num_reports: null;
  distinguished: null;
  subreddit_id: SubredditID;
  author_is_blocked: boolean;
  mod_reason_by: null;
  removal_reason: null;
  link_flair_background_color?: string;
  id: string;
  is_robot_indexable?: boolean;
  num_duplicates?: number;
  report_reasons: null;
  author: string;
  discussion_type?: null;
  num_comments?: number;
  send_replies: boolean;
  media?: null;
  contest_mode?: boolean;
  author_patreon_flair: boolean;
  author_flair_text_color: null;
  permalink: string;
  whitelist_status?: string;
  stickied: boolean;
  url?: string;
  subreddit_subscribers?: number;
  created_utc: number;
  num_crossposts?: number;
  mod_reports: any[];
  is_video?: boolean;
  comment_type?: null;
  replies?: PurpleReplies | string;
  collapsed_reason_code?: null | string;
  parent_id?: ID;
  collapsed?: boolean;
  body?: string;
  is_submitter?: boolean;
  body_html?: string;
  collapsed_reason?: null | string;
  associated_award?: null;
  unrepliable_reason?: null;
  score_hidden?: boolean;
  link_id?: ID;
  controversiality?: number;
  depth?: number;
  collapsed_because_crowd_control?: null;
}

export enum FlairType {
  Text = "text",
}

export interface Gildings {}

export enum ID {
  T31331Qhw = "t3_1331qhw",
}

export interface Preview {
  images: Image[];
  enabled: boolean;
}

export interface Image {
  source: Source;
  resolutions: Source[];
  variants: Gildings;
  id: string;
}

export interface Source {
  url: string;
  width: number;
  height: number;
}

export interface PurpleReplies {
  kind: string;
  data: FluffyData;
}

export interface FluffyData {
  after: null;
  dist: null;
  modhash: string;
  geo_filter: string;
  children: FluffyChild[];
  before: null;
}

export interface FluffyChild {
  kind: Kind;
  data: TentacledData;
}

export interface TentacledData {
  subreddit_id: SubredditID;
  approved_at_utc: null;
  author_is_blocked: boolean;
  comment_type: null;
  awarders: any[];
  mod_reason_by: null;
  banned_by: null;
  author_flair_type: FlairType;
  total_awards_received: number;
  subreddit: Subreddit;
  author_flair_template_id: null;
  likes: null;
  replies: FluffyReplies | string;
  user_reports: any[];
  saved: boolean;
  id: string;
  banned_at_utc: null;
  mod_reason_title: null;
  gilded: number;
  archived: boolean;
  collapsed_reason_code: null;
  no_follow: boolean;
  author: string;
  can_mod_post: boolean;
  created_utc: number;
  send_replies: boolean;
  parent_id: string;
  score: number;
  author_fullname: string;
  removal_reason: null;
  approved_by: null;
  mod_note: null;
  all_awardings: any[];
  body: string;
  edited: boolean | number;
  top_awarded_type: null;
  author_flair_css_class: null;
  name: string;
  is_submitter: boolean;
  downs: number;
  author_flair_richtext: any[];
  author_patreon_flair: boolean;
  body_html: string;
  gildings: Gildings;
  collapsed_reason: null;
  distinguished: null;
  associated_award: null;
  stickied: boolean;
  author_premium: boolean;
  can_gild: boolean;
  link_id: ID;
  unrepliable_reason: null;
  author_flair_text_color: null;
  score_hidden: boolean;
  permalink: string;
  subreddit_type: SubredditType;
  locked: boolean;
  report_reasons: null;
  created: number;
  author_flair_text: null;
  treatment_tags: any[];
  collapsed: boolean;
  subreddit_name_prefixed: SubredditNamePrefixed;
  controversiality: number;
  depth: number;
  author_flair_background_color: null;
  collapsed_because_crowd_control: null;
  mod_reports: any[];
  num_reports: null;
  ups: number;
}

export interface FluffyReplies {
  kind: string;
  data: StickyData;
}

export interface StickyData {
  after: null;
  dist: null;
  modhash: string;
  geo_filter: string;
  children: TentacledChild[];
  before: null;
}

export interface TentacledChild {
  kind: Kind;
  data: IndigoData;
}

export interface IndigoData {
  subreddit_id: SubredditID;
  approved_at_utc: null;
  author_is_blocked: boolean;
  comment_type: null;
  awarders: any[];
  mod_reason_by: null;
  banned_by: null;
  author_flair_type: FlairType;
  total_awards_received: number;
  subreddit: Subreddit;
  author_flair_template_id: null;
  likes: null;
  replies: TentacledReplies | string;
  user_reports: any[];
  saved: boolean;
  id: string;
  banned_at_utc: null;
  mod_reason_title: null;
  gilded: number;
  archived: boolean;
  collapsed_reason_code: null;
  no_follow: boolean;
  author: string;
  can_mod_post: boolean;
  send_replies: boolean;
  parent_id: string;
  score: number;
  author_fullname: string;
  removal_reason: null;
  approved_by: null;
  mod_note: null;
  all_awardings: any[];
  body: string;
  edited: boolean;
  top_awarded_type: null;
  downs: number;
  author_flair_css_class: null;
  name: string;
  is_submitter: boolean;
  collapsed: boolean;
  author_flair_richtext: any[];
  author_patreon_flair: boolean;
  body_html: string;
  gildings: Gildings;
  collapsed_reason: null;
  distinguished: null;
  associated_award: null;
  stickied: boolean;
  author_premium: boolean;
  can_gild: boolean;
  link_id: ID;
  unrepliable_reason: null;
  author_flair_text_color: null;
  score_hidden: boolean;
  permalink: string;
  subreddit_type: SubredditType;
  locked: boolean;
  report_reasons: null;
  created: number;
  author_flair_text: null;
  treatment_tags: any[];
  created_utc: number;
  subreddit_name_prefixed: SubredditNamePrefixed;
  controversiality: number;
  depth: number;
  author_flair_background_color: null;
  collapsed_because_crowd_control: null;
  mod_reports: any[];
  num_reports: null;
  ups: number;
}

export interface TentacledReplies {
  kind: string;
  data: IndecentData;
}

export interface IndecentData {
  after: null;
  dist: null;
  modhash: string;
  geo_filter: string;
  children: StickyChild[];
  before: null;
}

export interface StickyChild {
  kind: Kind;
  data: HilariousData;
}

export interface HilariousData {
  subreddit_id: SubredditID;
  approved_at_utc: null;
  author_is_blocked: boolean;
  comment_type: null;
  awarders: any[];
  mod_reason_by: null;
  banned_by: null;
  author_flair_type: FlairType;
  total_awards_received: number;
  subreddit: Subreddit;
  author_flair_template_id: null;
  likes: null;
  replies: StickyReplies | string;
  user_reports: any[];
  saved: boolean;
  id: string;
  banned_at_utc: null;
  mod_reason_title: null;
  gilded: number;
  archived: boolean;
  collapsed_reason_code: null;
  no_follow: boolean;
  author: string;
  can_mod_post: boolean;
  send_replies: boolean;
  parent_id: string;
  score: number;
  author_fullname: string;
  removal_reason: null;
  approved_by: null;
  mod_note: null;
  all_awardings: any[];
  collapsed: boolean;
  body: string;
  edited: boolean;
  top_awarded_type: null;
  author_flair_css_class: null;
  name: string;
  is_submitter: boolean;
  downs: number;
  author_flair_richtext: any[];
  author_patreon_flair: boolean;
  body_html: string;
  gildings: Gildings;
  collapsed_reason: null;
  distinguished: null;
  associated_award: null;
  stickied: boolean;
  author_premium: boolean;
  can_gild: boolean;
  link_id: ID;
  unrepliable_reason: null;
  author_flair_text_color: null;
  score_hidden: boolean;
  permalink: string;
  subreddit_type: SubredditType;
  locked: boolean;
  report_reasons: null;
  created: number;
  author_flair_text: null;
  treatment_tags: any[];
  created_utc: number;
  subreddit_name_prefixed: SubredditNamePrefixed;
  controversiality: number;
  depth: number;
  author_flair_background_color: null;
  collapsed_because_crowd_control: null;
  mod_reports: any[];
  num_reports: null;
  ups: number;
}

export interface StickyReplies {
  kind: string;
  data: AmbitiousData;
}

export interface AmbitiousData {
  after: null;
  dist: null;
  modhash: string;
  geo_filter: string;
  children: IndigoChild[];
  before: null;
}

export interface IndigoChild {
  kind: Kind;
  data: CunningData;
}

export interface CunningData {
  subreddit_id: SubredditID;
  approved_at_utc: null;
  author_is_blocked: boolean;
  comment_type: null;
  awarders: any[];
  mod_reason_by: null;
  banned_by: null;
  author_flair_type: FlairType;
  total_awards_received: number;
  subreddit: Subreddit;
  author_flair_template_id: null;
  distinguished: null;
  likes: null;
  replies: IndigoReplies | string;
  user_reports: any[];
  saved: boolean;
  id: string;
  banned_at_utc: null;
  mod_reason_title: null;
  gilded: number;
  archived: boolean;
  collapsed_reason_code: null;
  no_follow: boolean;
  author: string;
  can_mod_post: boolean;
  send_replies: boolean;
  parent_id: string;
  score: number;
  author_fullname: string;
  removal_reason: null;
  approved_by: null;
  mod_note: null;
  all_awardings: any[];
  body: string;
  edited: boolean;
  author_flair_css_class: null;
  name: string;
  is_submitter: boolean;
  downs: number;
  author_flair_richtext: any[];
  author_patreon_flair: boolean;
  body_html: string;
  gildings: Gildings;
  collapsed_reason: null;
  link_id: ID;
  associated_award: null;
  stickied: boolean;
  author_premium: boolean;
  can_gild: boolean;
  top_awarded_type: null;
  unrepliable_reason: null;
  author_flair_text_color: null;
  treatment_tags: any[];
  score_hidden: boolean;
  permalink: string;
  subreddit_type: SubredditType;
  locked: boolean;
  report_reasons: null;
  created: number;
  author_flair_text: null;
  collapsed: boolean;
  created_utc: number;
  subreddit_name_prefixed: SubredditNamePrefixed;
  controversiality: number;
  depth: number;
  author_flair_background_color: null;
  collapsed_because_crowd_control: null;
  mod_reports: any[];
  num_reports: null;
  ups: number;
}

export interface IndigoReplies {
  kind: string;
  data: MagentaData;
}

export interface MagentaData {
  after: null;
  dist: null;
  modhash: string;
  geo_filter: string;
  children: IndecentChild[];
  before: null;
}

export interface IndecentChild {
  kind: Kind;
  data: FriskyData;
}

export interface FriskyData {
  subreddit_id: SubredditID;
  approved_at_utc: null;
  author_is_blocked: boolean;
  comment_type: null;
  awarders: any[];
  mod_reason_by: null;
  banned_by: null;
  author_flair_type: FlairType;
  total_awards_received: number;
  subreddit: Subreddit;
  author_flair_template_id: null;
  distinguished: null;
  likes: null;
  replies: IndecentReplies | string;
  user_reports: any[];
  saved: boolean;
  id: string;
  banned_at_utc: null;
  mod_reason_title: null;
  gilded: number;
  archived: boolean;
  collapsed_reason_code: null;
  no_follow: boolean;
  author: string;
  can_mod_post: boolean;
  send_replies: boolean;
  parent_id: string;
  score: number;
  author_fullname: string;
  approved_by: null;
  mod_note: null;
  all_awardings: any[];
  body: string;
  edited: boolean;
  gildings: Gildings;
  downs: number;
  author_flair_css_class: null;
  name: string;
  is_submitter: boolean;
  collapsed: boolean;
  author_flair_richtext: any[];
  author_patreon_flair: boolean;
  body_html: string;
  removal_reason: null;
  collapsed_reason: null;
  link_id: ID;
  associated_award: null;
  stickied: boolean;
  author_premium: boolean;
  can_gild: boolean;
  top_awarded_type: null;
  unrepliable_reason: null;
  author_flair_text_color: null;
  score_hidden: boolean;
  permalink: string;
  subreddit_type: SubredditType;
  locked: boolean;
  report_reasons: null;
  created: number;
  author_flair_text: null;
  treatment_tags: any[];
  created_utc: number;
  subreddit_name_prefixed: SubredditNamePrefixed;
  controversiality: number;
  depth: number;
  author_flair_background_color: null;
  collapsed_because_crowd_control: null;
  mod_reports: any[];
  num_reports: null;
  ups: number;
}

export interface IndecentReplies {
  kind: string;
  data: MischievousData;
}

export interface MischievousData {
  after: null;
  dist: null;
  modhash: string;
  geo_filter: string;
  children: HilariousChild[];
  before: null;
}

export interface HilariousChild {
  kind: Kind;
  data: BraggadociousData;
}

export interface BraggadociousData {
  subreddit_id: SubredditID;
  approved_at_utc: null;
  author_is_blocked: boolean;
  comment_type: null;
  awarders: any[];
  mod_reason_by: null;
  banned_by: null;
  author_flair_type: FlairType;
  total_awards_received: number;
  subreddit: Subreddit;
  author_flair_template_id: null;
  distinguished: null;
  likes: null;
  replies: HilariousReplies | string;
  user_reports: any[];
  saved: boolean;
  id: string;
  banned_at_utc: null;
  mod_reason_title: null;
  gilded: number;
  archived: boolean;
  collapsed_reason_code: null;
  no_follow: boolean;
  author: string;
  can_mod_post: boolean;
  send_replies: boolean;
  parent_id: string;
  score: number;
  author_fullname: string;
  approved_by: null;
  mod_note: null;
  all_awardings: any[];
  collapsed: boolean;
  body: string;
  edited: boolean;
  gildings: Gildings;
  author_flair_css_class: null;
  name: string;
  is_submitter: boolean;
  downs: number;
  author_flair_richtext: any[];
  author_patreon_flair: boolean;
  body_html: string;
  removal_reason: null;
  collapsed_reason: null;
  link_id: ID;
  associated_award: null;
  stickied: boolean;
  author_premium: boolean;
  can_gild: boolean;
  top_awarded_type: null;
  unrepliable_reason: null;
  author_flair_text_color: null;
  score_hidden: boolean;
  permalink: string;
  subreddit_type: SubredditType;
  locked: boolean;
  report_reasons: null;
  created: number;
  author_flair_text: null;
  treatment_tags: any[];
  created_utc: number;
  subreddit_name_prefixed: SubredditNamePrefixed;
  controversiality: number;
  depth: number;
  author_flair_background_color: null;
  collapsed_because_crowd_control: null;
  mod_reports: any[];
  num_reports: null;
  ups: number;
}

export interface HilariousReplies {
  kind: string;
  data: Data1;
}

export interface Data1 {
  after: null;
  dist: null;
  modhash: string;
  geo_filter: string;
  children: AmbitiousChild[];
  before: null;
}

export interface AmbitiousChild {
  kind: Kind;
  data: Data2;
}

export interface Data2 {
  subreddit_id: SubredditID;
  approved_at_utc: null;
  author_is_blocked: boolean;
  comment_type: null;
  awarders: any[];
  mod_reason_by: null;
  banned_by: null;
  author_flair_type: FlairType;
  total_awards_received: number;
  subreddit: Subreddit;
  author_flair_template_id: null;
  distinguished: null;
  likes: null;
  replies: AmbitiousReplies;
  user_reports: any[];
  saved: boolean;
  id: string;
  banned_at_utc: null;
  mod_reason_title: null;
  gilded: number;
  archived: boolean;
  collapsed_reason_code: null;
  no_follow: boolean;
  author: string;
  can_mod_post: boolean;
  created_utc: number;
  send_replies: boolean;
  parent_id: string;
  score: number;
  author_fullname: string;
  approved_by: null;
  mod_note: null;
  all_awardings: any[];
  body: string;
  edited: boolean;
  gildings: Gildings;
  author_flair_css_class: null;
  name: string;
  is_submitter: boolean;
  downs: number;
  author_flair_richtext: any[];
  author_patreon_flair: boolean;
  body_html: string;
  removal_reason: null;
  collapsed_reason: null;
  link_id: ID;
  associated_award: null;
  stickied: boolean;
  author_premium: boolean;
  can_gild: boolean;
  top_awarded_type: null;
  unrepliable_reason: null;
  author_flair_text_color: null;
  score_hidden: boolean;
  permalink: string;
  subreddit_type: SubredditType;
  locked: boolean;
  report_reasons: null;
  created: number;
  author_flair_text: null;
  treatment_tags: any[];
  collapsed: boolean;
  subreddit_name_prefixed: SubredditNamePrefixed;
  controversiality: number;
  depth: number;
  author_flair_background_color: null;
  collapsed_because_crowd_control: null;
  mod_reports: any[];
  num_reports: null;
  ups: number;
}

export interface AmbitiousReplies {
  kind: string;
  data: Data3;
}

export interface Data3 {
  after: null;
  dist: null;
  modhash: string;
  geo_filter: string;
  children: CunningChild[];
  before: null;
}

export interface CunningChild {
  kind: Kind;
  data: Data4;
}

export interface Data4 {
  subreddit_id: SubredditID;
  approved_at_utc: null;
  author_is_blocked: boolean;
  comment_type: null;
  awarders: any[];
  mod_reason_by: null;
  banned_by: null;
  author_flair_type: FlairType;
  total_awards_received: number;
  subreddit: Subreddit;
  author_flair_template_id: null;
  likes: null;
  replies: CunningReplies;
  user_reports: any[];
  saved: boolean;
  id: string;
  banned_at_utc: null;
  mod_reason_title: null;
  gilded: number;
  archived: boolean;
  collapsed_reason_code: null;
  no_follow: boolean;
  author: string;
  can_mod_post: boolean;
  created_utc: number;
  send_replies: boolean;
  parent_id: string;
  score: number;
  author_fullname: string;
  approved_by: null;
  mod_note: null;
  all_awardings: any[];
  body: string;
  edited: boolean;
  gildings: Gildings;
  downs: number;
  author_flair_css_class: null;
  name: string;
  is_submitter: boolean;
  collapsed: boolean;
  author_flair_richtext: any[];
  author_patreon_flair: boolean;
  body_html: string;
  removal_reason: null;
  collapsed_reason: null;
  distinguished: null;
  associated_award: null;
  stickied: boolean;
  author_premium: boolean;
  can_gild: boolean;
  top_awarded_type: null;
  unrepliable_reason: null;
  author_flair_text_color: null;
  score_hidden: boolean;
  permalink: string;
  subreddit_type: SubredditType;
  locked: boolean;
  report_reasons: null;
  created: number;
  author_flair_text: null;
  treatment_tags: any[];
  link_id: ID;
  subreddit_name_prefixed: SubredditNamePrefixed;
  controversiality: number;
  depth: number;
  author_flair_background_color: null;
  collapsed_because_crowd_control: null;
  mod_reports: any[];
  num_reports: null;
  ups: number;
}

export interface CunningReplies {
  kind: string;
  data: Data5;
}

export interface Data5 {
  after: null;
  dist: null;
  modhash: string;
  geo_filter: string;
  children: MagentaChild[];
  before: null;
}

export interface MagentaChild {
  kind: Kind;
  data: Data6;
}

export interface Data6 {
  subreddit_id: SubredditID;
  approved_at_utc: null;
  author_is_blocked: boolean;
  comment_type: null;
  awarders: any[];
  mod_reason_by: null;
  banned_by: null;
  author_flair_type: FlairType;
  total_awards_received: number;
  subreddit: Subreddit;
  author_flair_template_id: null;
  likes: null;
  replies: string;
  user_reports: any[];
  saved: boolean;
  id: string;
  banned_at_utc: null;
  mod_reason_title: null;
  gilded: number;
  archived: boolean;
  collapsed_reason_code: null;
  no_follow: boolean;
  author: string;
  can_mod_post: boolean;
  created_utc: number;
  send_replies: boolean;
  parent_id: string;
  score: number;
  author_fullname: string;
  approved_by: null;
  mod_note: null;
  all_awardings: any[];
  collapsed: boolean;
  body: string;
  edited: boolean;
  top_awarded_type: null;
  author_flair_css_class: null;
  name: string;
  is_submitter: boolean;
  downs: number;
  author_flair_richtext: any[];
  author_patreon_flair: boolean;
  body_html: string;
  removal_reason: null;
  collapsed_reason: null;
  distinguished: null;
  associated_award: null;
  stickied: boolean;
  author_premium: boolean;
  can_gild: boolean;
  gildings: Gildings;
  unrepliable_reason: null;
  author_flair_text_color: null;
  score_hidden: boolean;
  permalink: string;
  subreddit_type: SubredditType;
  locked: boolean;
  report_reasons: null;
  created: number;
  author_flair_text: null;
  treatment_tags: any[];
  link_id: ID;
  subreddit_name_prefixed: SubredditNamePrefixed;
  controversiality: number;
  depth: number;
  author_flair_background_color: null;
  collapsed_because_crowd_control: null;
  mod_reports: any[];
  num_reports: null;
  ups: number;
}

export enum Subreddit {
  Home = "Home",
}

export enum SubredditID {
  T52Qs0K = "t5_2qs0k",
}

export enum SubredditNamePrefixed {
  RHome = "r/Home",
}

export enum SubredditType {
  Public = "public",
}

export enum Kind {
  T1 = "t1",
  T3 = "t3",
}
