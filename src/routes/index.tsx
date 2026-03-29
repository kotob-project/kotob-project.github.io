import { Home } from '../pages/Home'; // TOPページの中身をここに移したと想定
import { Download } from '../pages/Download';
import { Contributors } from '../pages/Contributors';

type Route = {
    path: string,
    element: React.JSX.Element;
    isActive?: boolean;
}

const routes: Route[] = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/download",
        element: <Download />
    },
    {
        path: "/contributors",
        element: <Contributors />
    }
];

export { routes };