import { RouteProps } from 'react-router-dom';
import MainPage from 'pages/MainPage/UI/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { PageNotFound } from 'pages/PageNotFound';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PAGE_NOT_FOUND = 'page_not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    // MUST BE LAST
    [AppRoutes.PAGE_NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PAGE_NOT_FOUND]: {
        path: RoutePath.page_not_found,
        element: <PageNotFound />,
    },
};
