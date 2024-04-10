import { IHeaderConfig } from './models/header.model';

const fullConfig: IHeaderConfig = {
    logo: {
      text: 'E-Digital',
      path: '/dashboard'
    },
    items: [
      { title: 'Dashboard', path: '/dashboard' },
      { title: 'Products', path: '/products' },
    ]
};

export const mockDataHeaderComponent: {
    fullConfig: (typeof fullConfig);
} = {
    fullConfig
};
