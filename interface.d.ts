//OPENLIBRARY TYPE
export interface Books {
  query: string;
  works: Work[];
}

export interface Work {
  key:                   string;
  title:                 string;
  edition_count:         number;
  first_publish_year:    number;
  has_fulltext:          boolean;
  public_scan_b:         boolean;
  ia?:                   string[];
  ia_collection_s?:      string;
  lending_edition_s?:    string;
  lending_identifier_s?: string;
  cover_edition_key?:    string;
  cover_i?:              number;
  language?:             string[];
  author_key?:           string[];
  author_name?:          string[];
  availability?:         Availability;
  subtitle?:             string;
  id_librivox?:          string[];
  id_project_gutenberg?: string[];
}

export interface Availability {
  status:                Status;
  available_to_browse:   boolean;
  available_to_borrow:   boolean;
  available_to_waitlist: boolean;
  is_printdisabled:      boolean;
  is_readable:           boolean;
  is_lendable:           boolean;
  is_previewable:        boolean;
  identifier:            string;
  isbn:                  null | string;
  oclc:                  null;
  openlibrary_work:      string;
  openlibrary_edition:   string;
  last_loan_date:        Date | null;
  num_waitlist:          null | string;
  last_waitlist_date:    Date | null;
  is_restricted:         boolean;
  is_browseable:         boolean;
  __src__:               Src;
}

export enum Src {
  CoreModelsLendingGetAvailability = "core.models.lending.get_availability",
}

export enum Status {
  BorrowAvailable = "borrow_available",
  BorrowUnavailable = "borrow_unavailable",
  Open = "open",
  Private = "private",
}

// GOOGLE BOOKS TYPE

export interface GBooks {
  kind:       string;
  totalItems: number;
  items:      GBook[];
}

export interface GBook {
  kind:       Kind;
  id:         string;
  etag:       string;
  selfLink:   string;
  volumeInfo: VolumeInfo;
  saleInfo:   SaleInfo;
  accessInfo: AccessInfo;
  searchInfo: SearchInfo;
}

export interface AccessInfo {
  country:                Country;
  viewability:            Viewability;
  embeddable:             boolean;
  publicDomain:           boolean;
  textToSpeechPermission: TextToSpeechPermission;
  epub:                   Epub;
  pdf:                    Epub;
  webReaderLink:          string;
  accessViewStatus:       AccessViewStatus;
  quoteSharingAllowed:    boolean;
}

export enum AccessViewStatus {
  None = "NONE",
  Sample = "SAMPLE",
}

export enum Country {
  Sg = "SG",
}

export interface Epub {
  isAvailable:   boolean;
  acsTokenLink?: string;
}

export enum TextToSpeechPermission {
  Allowed = "ALLOWED",
}

export enum Viewability {
  NoPages = "NO_PAGES",
  Partial = "PARTIAL",
}

export enum Kind {
  BooksVolume = "books#volume",
}

export interface SaleInfo {
  country:      Country;
  saleability:  Saleability;
  isEbook:      boolean;
  listPrice?:   SaleInfoListPrice;
  retailPrice?: SaleInfoListPrice;
  buyLink?:     string;
  offers?:      Offer[];
}

export interface SaleInfoListPrice {
  amount:       number;
  currencyCode: CurrencyCode;
}

export enum CurrencyCode {
  Sgd = "SGD",
}

export interface Offer {
  finskyOfferType: number;
  listPrice:       OfferListPrice;
  retailPrice:     OfferListPrice;
}

export interface OfferListPrice {
  amountInMicros: number;
  currencyCode:   CurrencyCode;
}

export enum Saleability {
  ForSale = "FOR_SALE",
  NotForSale = "NOT_FOR_SALE",
}

export interface SearchInfo {
  textSnippet: string;
}

export interface VolumeInfo {
  title:                string;
  subtitle?:            string;
  authors:              string[];
  publisher?:           string;
  publishedDate?:       string;
  description:          string;
  industryIdentifiers?: IndustryIdentifier[];
  readingModes:         ReadingModes;
  pageCount?:           number;
  printType:            PrintType;
  categories?:          string[];
  averageRating?:       number;
  ratingsCount?:        number;
  maturityRating:       MaturityRating;
  allowAnonLogging:     boolean;
  contentVersion:       string;
  panelizationSummary:  PanelizationSummary;
  imageLinks:           ImageLinks;
  language:             string;
  previewLink:          string;
  infoLink:             string;
  canonicalVolumeLink:  string;
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail:      string;
}

export interface IndustryIdentifier {
  type:       Type;
  identifier: string;
}

export enum Type {
  Isbn10 = "ISBN_10",
  Isbn13 = "ISBN_13",
}

export enum MaturityRating {
  NotMature = "NOT_MATURE",
}

export interface PanelizationSummary {
  containsEpubBubbles:  boolean;
  containsImageBubbles: boolean;
}

export enum PrintType {
  Book = "BOOK",
}

export interface ReadingModes {
  text:  boolean;
  image: boolean;
}

interface IIsModalOpen{
  isDescOpen: boolean;
  isQROpen: boolean;
}

interface ICatItem {
  image: StaticImageData,
  title: string,
  link: string,
}

interface ILibData {
  name: string;
  disabledFriendly: boolean;
  crowdLevel?: number;
}

//LIBRARY TYPE

export interface LibraryResponse {
  html_attributions: any[];
  results:         Library[];
  status:            string;
}

export interface Library {
  business_status:       string;
  geometry:              Geometry;
  icon:                  string;
  icon_background_color: string;
  icon_mask_base_uri:    string;
  name:                  string;
  opening_hours:         OpeningHours;
  photos?:               Photo[];
  place_id:              string;
  plus_code:             PlusCode;
  rating:                number;
  reference:             string;
  scope:                 string;
  types:                 Type[];
  user_ratings_total:    number;
  vicinity:              string;
}

export interface Geometry {
  location: Location;
  viewport: Viewport;
}

export interface Location {
  lat: number;
  lng: number;
}

export interface Viewport {
  northeast: Location;
  southwest: Location;
}

export interface OpeningHours {
  open_now: boolean;
}

export interface Photo {
  height:            number;
  html_attributions: string[];
  photo_reference:   string;
  width:             number;
}

export interface PlusCode {
  compound_code: string;
  global_code:   string;
}

export enum Type {
  Establishment = "establishment",
  Library = "library",
  PointOfInterest = "point_of_interest",
}


//GEOCODING

export interface GeocodeResponse {
  plus_code: PlusCode;
  results:   Address[];
  status:    string;
}

export interface PlusCode {
  compound_code: string;
  global_code:   string;
}

export interface Address {
  address_components: AddressComponent[];
  formatted_address:  string;
  geometry:           Geometry;
  place_id:           string;
  plus_code?:         PlusCode;
  types:              string[];
}

export interface AddressComponent {
  long_name:  string;
  short_name: string;
  types:      string[];
}

export interface Geometry {
  location:      Location;
  location_type: string;
  viewport:      Bounds;
  bounds?:       Bounds;
}

export interface Bounds {
  northeast: Location;
  southwest: Location;
}

export interface Location {
  lat: number;
  lng: number;
}
