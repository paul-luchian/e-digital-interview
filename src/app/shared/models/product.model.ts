
export interface IProduct {
    rating: number;
    name: string;
    size: string;
    picture: string;
    savings?: string;
    oldPrice?: string;
    price: string;
    isFav: boolean;
    _id: string;
    url: string;
}

export interface IProducts {
    totalNoProducts: number;
    products: IProduct[];
}