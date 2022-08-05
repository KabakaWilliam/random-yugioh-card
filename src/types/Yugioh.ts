export interface YugiohCard {
  id: number;
  name: string;
  type: string;
  desc: string;
  atk: number;
  race: string;
  attribute: string;
  linkval: number;
  linkmarkers: string[];
  card_sets: CardSet[];
  card_images: CardImage[];
  card_prices: CardPrice[];
}

export interface CardImage {
  image_url: string;
  image_url_small: string;
}

export interface CardPrice {
  cardmarket_price: string;
  tcgplayer_price: string;
  ebay_price: string;
  amazon_price: string;
}

export interface CardSet {
  set_name: string;
  set_code: string;
  set_rarity: string;
  set_price: string;
}
