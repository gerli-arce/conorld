import { useEffect, useState } from "react";

export const useApp = () => {
  var defaultOptions = {
    appMode: "dark",
    appTheme: "theme-teal",
    appCover: "",
    appHeaderNone: false,
    appSidebarNone: false,
    appSidebarCollapsed: false,
    appContentNone: false,
    appContentClass: "",
    appContentFullHeight: false,
    appBoxedLayout: false,
    appFooter: false,
    appTopNav: false,
  };

  const [appHeaderNone, setAppHeaderNone] = useState(
    defaultOptions.appHeaderNone
  );
  const [appSidebarNone, setAppSidebarNone] = useState(
    defaultOptions.appSidebarNone
  );
  const [appSidebarCollapsed, setAppSidebarCollapsed] = useState(
    defaultOptions.appSidebarCollapsed
  );
  const [appContentNone, setAppContentNone] = useState(
    defaultOptions.appContentNone
  );
  const [appContentClass, setAppContentClass] = useState(
    defaultOptions.appContentClass
  );
  const [appContentFullHeight, setAppContentFullHeight] = useState(
    defaultOptions.appContentFullHeight
  );
  const [appBoxedLayout, setAppBoxedLayout] = useState(
    defaultOptions.appBoxedLayout
  );

  var handleSetAppTheme = (value) => {
    if (value) {
      var newTheme = value;
      for (var x = 0; x < document.body.classList.length; x++) {
        if (
          document.body.classList[x].indexOf("theme-") > -1 &&
          document.body.classList[x] !== newTheme
        ) {
          document.body.classList.remove(document.body.classList[x]);
        }
      }

      if (localStorage && value) {
        localStorage.appTheme = value;
      }

      document.body.classList.add(newTheme);
      document.dispatchEvent(new Event("theme-reload"));
    }
  };

  var handleSetAppMode = (value) => {
    if (value) {
      document.documentElement.setAttribute("data-bs-theme", value);
    }
  };

  var handleSetAppCover = (value) => {
    if (value) {
      var htmlElm = document.querySelector("html");
      for (var x = 0; x < document.documentElement.classList.length; x++) {
        var targetClass = document.documentElement.classList[x];
        if (targetClass.search("bg-cover-") > -1) {
          htmlElm.classList.remove(targetClass);
        }
      }
      htmlElm.classList.add(value);

      if (localStorage && value) {
        localStorage.appCover = value;
      }
    }
  };

  const [appFooter, setAppFooter] = useState(defaultOptions.appFooter);
  const [appTopNav, setAppTopNav] = useState(defaultOptions.appTopNav);

  const providerValue = {
    setAppHeaderNone,
    setAppSidebarNone,
    setAppSidebarCollapsed,
    setAppContentNone,
    setAppContentClass,
    setAppContentFullHeight,
    setAppBoxedLayout,
    setAppFooter,
    setAppTopNav,
  };

  useEffect(() => {
    if (defaultOptions.appMode) {
      handleSetAppMode(defaultOptions.appMode);
    }
    if (defaultOptions.appTheme) {
      handleSetAppTheme(defaultOptions.appTheme);
    }
    if (defaultOptions.appCover) {
      handleSetAppCover(defaultOptions.appCover);
    }

    if (localStorage) {
      if (typeof localStorage.appMode !== "undefined") {
        handleSetAppMode(localStorage.appMode);
      }
      if (typeof localStorage.appTheme !== "undefined") {
        handleSetAppTheme(localStorage.appTheme);
      }
      if (typeof localStorage.appCover !== "undefined") {
        handleSetAppCover(localStorage.appCover);
      }
    }

    // eslint-disable-next-line
  }, []);

  return {
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
  };
};
