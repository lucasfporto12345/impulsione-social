import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('../pages/home/page'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Suporte = lazy(() => import('../pages/suporte/page'));
const SeguidoresInstagram = lazy(() => import('../pages/seguidores-instagram/page'));
const SeguidoresTiktok = lazy(() => import('../pages/seguidores-tiktok/page'));
const SeguidoresFacebook = lazy(() => import('../pages/seguidores-facebook/page'));
const SeguidoresKwai = lazy(() => import('../pages/seguidores-kwai/page'));
const InscritosYoutube = lazy(() => import('../pages/inscritos-youtube/page'));
const SeguidoresTwitter = lazy(() => import('../pages/seguidores-twitter/page'));
const CurtidasInstagram = lazy(() => import('../pages/curtidas-instagram/page'));
const CurtidasTikTokPage = lazy(() => import('../pages/curtidas-tiktok/page'));
const CurtidasFacebookPage = lazy(() => import('../pages/curtidas-facebook/page'));
const CurtidasKwaiPage = lazy(() => import('../pages/curtidas-kwai/page'));
const CurtidasYoutubePage = lazy(() => import('../pages/curtidas-youtube/page'));
const CurtidasTwitterPage = lazy(() => import('../pages/curtidas-twitter/page'));
const VisualizacoesInstagramPage = lazy(() => import('../pages/visualizacoes-instagram/page'));
const VisualizacoesFacebookPage = lazy(() => import('../pages/visualizacoes-facebook/page'));
const VisualizacoesYoutubePage = lazy(() => import('../pages/visualizacoes-youtube/page'));
const VisualizacoesTwitterPage = lazy(() => import('../pages/visualizacoes-twitter/page'));
const VisualizacoesKwaiPage = lazy(() => import('../pages/visualizacoes-kwai/page'));
const VisualizacoesTiktokPage = lazy(() => import('../pages/visualizacoes-tiktok/page'));
const PrincipalTikTok = lazy(() => import('../pages/principal-tiktok/page'));
const HomeTesteAB = lazy(() => import('../pages/home-teste-ab/page'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/suporte',
    element: <Suporte />,
  },
  {
    path: '/seguidores-instagram',
    element: <SeguidoresInstagram />,
  },
  {
    path: '/seguidores-tiktok',
    element: <SeguidoresTiktok />,
  },
  {
    path: '/seguidores-facebook',
    element: <SeguidoresFacebook />,
  },
  {
    path: '/seguidores-kwai',
    element: <SeguidoresKwai />,
  },
  {
    path: '/inscritos-youtube',
    element: <InscritosYoutube />,
  },
  {
    path: '/seguidores-twitter',
    element: <SeguidoresTwitter />,
  },
  {
    path: '/curtidas-instagram',
    element: <CurtidasInstagram />,
  },
  {
    path: '/curtidas-tiktok',
    element: <CurtidasTikTokPage />,
  },
  {
    path: '/curtidas-facebook',
    element: <CurtidasFacebookPage />,
  },
  {
    path: '/curtidas-kwai',
    element: <CurtidasKwaiPage />,
  },
  {
    path: '/curtidas-youtube',
    element: <CurtidasYoutubePage />,
  },
  {
    path: '/curtidas-twitter',
    element: <CurtidasTwitterPage />,
  },
  {
    path: '/visualizacoes-instagram',
    element: <VisualizacoesInstagramPage />,
  },
  {
    path: '/visualizacoes-facebook',
    element: <VisualizacoesFacebookPage />,
  },
  {
    path: '/visualizacoes-youtube',
    element: <VisualizacoesYoutubePage />,
  },
  {
    path: '/visualizacoes-twitter',
    element: <VisualizacoesTwitterPage />,
  },
  {
    path: '/visualizacoes-kwai',
    element: <VisualizacoesKwaiPage />,
  },
  {
    path: '/visualizacoes-tiktok',
    element: <VisualizacoesTiktokPage />,
  },
  {
    path: '/principal-tiktok',
    element: <PrincipalTikTok />,
  },
  {
    path: '/home-teste-ab',
    element: <HomeTesteAB />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
