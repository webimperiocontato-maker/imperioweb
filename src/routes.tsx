import type { RouteRecord } from "vite-react-ssg";
import React from "react";

import AppRoot from "./AppRoot";

// Pages
import Index from "./pages/Index";
import Servicos from "./pages/Servicos";
import Portfolio from "./pages/Portfolio";
import Sobre from "./pages/Sobre";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <AppRoot />,
    children: [
      { index: true, element: <Index /> },
      { path: "servicos", element: <Servicos /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "sobre", element: <Sobre /> },
      { path: "contacto", element: <Contacto /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
