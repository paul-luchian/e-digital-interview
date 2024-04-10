import { IHeaderConfig } from './components/header/models/header.model';

const headerConfig: IHeaderConfig = {
    logo: {
        text: 'E-Digital',
        path: '/dashboard'
    },
    items: [
        { title: 'Dashboard', path: '/dashboard' },
        { title: 'Products', path: '/products' },
    ]
};

export const mockDataAppComponent: {
    headerConfig: (typeof headerConfig);
} = {
    headerConfig
};
