export interface Games {
  gameID?:         string;
  steamAppID?:     string;
  cheapest?:       string;
  cheapestDealID?: string;
  external:       string;
  internalName?:   string;
  thumb:          string;
}

export interface Details {
  info:              Info;
  cheapestPriceEver: CheapestPriceEver;
  deals:             Deal[];
}

export interface CheapestPriceEver {
  price: string;
  date:  number;
}

export interface Deal {
  storeID:     string;
  dealID:      string;
  price:       string;
  retailPrice: string;
  savings:     string;
}

export interface Info {
  title:      string;
  steamAppID: string;
  thumb:      string;
}


