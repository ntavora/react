

export interface globalObject {
    onActionEvent: (actionEvent: any) => any;
    contentZones: ContentZones[];
    listeners: any[];
}

export interface ContentZones {
    name: string;
    selector: string;
}

export interface Product {

    _id: () => any; 
    sku: { _id: any; 
    }; 
    name: any; 
    description: any; 
    url: any; 
    imageUrl: any; 
    inventoryCount: number; 
    price: any;

}


export interface Catalog {
    Product: Product 
}

export interface cart {
    complete: {
        Product: Product
    }
}
export interface PageType {
    name: string; 
    isMatch: () => any; 
    catalog: Catalog;
}
