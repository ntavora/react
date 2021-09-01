

export interface globalObject{
  onActionEvent():any;
  contentZones?:ContentZones[];
  listeners?:any[]
}

export interface ContentZones{
  name:string;
  selector:string;  
}

export interface Product {
  
  _id: string,
  price: any,
  quantity: number,    
  
}

export interface cart {
  complete: {
      Product: Product
  }
}
export interface PageType{
  name:string;
  action:string;
  isMatch?():any;
  contentZones?:ContentZones[];
  listeners?:any[];
  itemAction?: any;
}

export interface SiteMap {
 
  global:globalObject;
  pageTypes?: PageType[];
}

export function init(account: string, dataset: string, trackerUrl: string, cookieDomain: string): void {
  window.Evergage.init({
    account: account,
    dataset: dataset,
    trackerUrl: trackerUrl,
    cookieDomain: cookieDomain
  })
}

export function initSitemap(config: any): void {
  window.Evergage.initSitemap(config);
}
