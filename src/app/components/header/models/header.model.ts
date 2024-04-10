
export interface INavItem {
    path: string;
    title: string;
    child?: INavItem[];
}

export interface IHeaderConfig {
    logo?: {
        url?: string;
        text: string;
        path: string;
    }
    items: INavItem[];
}