
import { AppSettings } from "./config/app-settings.js";
import { useApp } from "./hooks/useApp.js";
import { useSessionLogin } from "./hooks/useSession.js";
import { useLayoutEffect } from "react";
import { RoutesApp } from "./routes/RoutesApp.jsx";
import { Navigate } from "react-router-dom";

function App() {

  const {
    session,
    providerValue,
    appHeaderNone,
    appSidebarNone,
    appSidebarCollapsed,
    appContentNone,
    appContentClass,
    appContentFullHeight,
    appBoxedLayout,
    appFooter,
    appTopNav,
  } = useApp();

  

  return (
    <AppSettings.Provider value={providerValue}>
      <div
        className={
          "app " +
          (appBoxedLayout ? "app-boxed-layout " : "") +
          (appContentFullHeight ? "app-content-full-height " : "") +
          (appHeaderNone ? "app-without-header " : "") +
          (appSidebarNone ? "app-without-sidebar " : "") +
          (appSidebarCollapsed ? "app-sidebar-collapsed " : "") +
          (appFooter ? "app-footer-fixed " : "") +
          (appTopNav ? "app-with-top-nav " : "")
        }
      >
        {session.isAuth? (<Navigate to="/dashboard"/>):(<Navigate to="/login"/>) }
        <RoutesApp
          appContentClass={appContentClass}
          appHeaderNone={appHeaderNone}
          appTopNav={appTopNav}
          appSidebarNone={appSidebarNone}
          appContentNone={appContentNone}
          appFooter={appFooter}
        />
      </div>
    </AppSettings.Provider>
  );
}

export default App;
