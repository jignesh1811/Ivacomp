import { Routes } from '@angular/router';
import { AppLayout } from '@/layout/components/app.layout';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            // {
            //     path: '',
            //     loadComponent: () => import('@/pages/auth/login2').then((c) => c.Login2) 
            // },
            {
                path: '',
                loadComponent: () => import('@/pages/home/home').then((c) => c.Home)
            },
            {
                path: 'productcertification',
                loadComponent: () => import('@/pages/productcertification/productcertification').then((c) => c.ProductCertification)
            },
            {
                path: 'managementcertification',
                loadComponent: () => import('@/pages/managementcertification/managementcertification').then((c) => c.ManagementCertification)
            },
            {
                path: 'trainings',
                loadComponent: () => import('@/pages/trainings/trainings').then((c) => c.Trainings)
            },
            {
                path: 'consultants',
                loadComponent: () => import('@/pages/consultants/consultants').then((c) => c.Consultants)
            },
            {
                path: 'lobbyist',
                loadComponent: () => import('@/pages/lobbyist/lobbyist').then((c) => c.Lobbyist)
            },
            {
                path: 'auditors',
                loadComponent: () => import('@/pages/auditors/auditors').then((c) => c.Auditors)
            },
            
            {
                path: 'dashboard',
                loadComponent: () => import('@/pages/dashboards/ecommercedashboard').then((c) => c.EcommerceDashboard),
                data: { breadcrumb: 'E-Commerce Dashboard' }
            },
            {
                path: 'dashboard-banking',
                loadComponent: () => import('@/pages/dashboards/bankingdashboard').then((c) => c.BankingDashboard),
                data: { breadcrumb: 'Banking Dashboard' }
            },
            {
                path: 'uikit',
                data: { breadcrumb: 'UI Kit' },
                loadChildren: () => import('@/pages/uikit/uikit.routes')
            },
            {
                path: 'documentation',
                data: { breadcrumb: 'Documentation' },
                loadComponent: () => import('@/pages/documentation/documentation').then((c) => c.Documentation)
            },
            {
                path: 'pages',
                loadChildren: () => import('@/pages/pages.routes'),
                data: { breadcrumb: 'Pages' }
            },
            {
                path: 'apps',
                loadChildren: () => import('@/apps/apps.routes'),
                data: { breadcrumb: 'Apps' }
            },

            {
                path: 'blocks',
                data: { breadcrumb: 'Free Blocks' },
                loadComponent: () => import('@/pages/blocks/blocks').then((c) => c.Blocks)
            },
            {
                path: 'ecommerce',
                loadChildren: () => import('@/pages/ecommerce/ecommerce.routes'),
                data: { breadcrumb: 'E-Commerce' }
            },
            {
                path: 'profile',
                loadChildren: () => import('@/pages/usermanagement/usermanagement.routes'),
                data: { breadcrumb: 'User Management' }
            }
        ]
    },
    { path: 'landing', loadComponent: () => import('@/pages/landing/landing').then((c) => c.Landing) },
    { path: 'notfound', loadComponent: () => import('@/pages/notfound/notfound').then((c) => c.Notfound) },
    { path: 'notfound2', loadComponent: () => import('@/pages/notfound/notfound2').then((c) => c.Notfound2) },
    {
        path: 'auth',
        loadChildren: () => import('@/pages/auth/auth.routes')
    },
    { path: '**', redirectTo: '/notfound' }
];
