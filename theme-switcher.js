(() => {
  const storageKey = "portfolio-theme";
  const readThemeMeta = () => {
    const themeMetaScript = document.getElementById("theme-meta");
    if (!themeMetaScript) {
      return {};
    }

    try {
      const parsedThemeMeta = JSON.parse(themeMetaScript.textContent);
      if (parsedThemeMeta && typeof parsedThemeMeta === "object") {
        return parsedThemeMeta;
      }
    } catch (error) {
    }

    return {};
  };

  const themeMeta = Object.freeze(readThemeMeta());
  const themeEntries = Object.entries(themeMeta);

  const setThemeSelectUnavailable = () => {
    const select = document.querySelector("[data-theme-select]");
    if (!select) {
      return;
    }

    const unavailableOption = document.createElement("option");
    unavailableOption.value = "";
    unavailableOption.textContent = "Theme unavailable";
    select.replaceChildren(unavailableOption);
    select.value = "";
    select.disabled = true;
    select.setAttribute("aria-disabled", "true");
  };

  if (!themeEntries.length) {
    setThemeSelectUnavailable();
    return;
  }

  const fallbackTheme = themeEntries[0][0];
  const allowedThemes = new Set(themeEntries.map(([themeName]) => themeName));

  const root = document.documentElement;
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  const activeThemeName = document.querySelector("[data-theme-name]");

  const normalizeTheme = (themeValue) => {
    if (themeValue && allowedThemes.has(themeValue)) {
      return themeValue;
    }
    return fallbackTheme;
  };

  const syncThemeColor = (theme) => {
    const palette = themeMeta[theme];
    if (themeColorMeta && palette && palette.themeColor && themeColorMeta.content !== palette.themeColor) {
      themeColorMeta.setAttribute("content", palette.themeColor);
    }
  };

  const syncThemeName = (theme) => {
    if (!activeThemeName) {
      return;
    }

    const palette = themeMeta[theme];
    const themeLabel = palette && palette.label ? palette.label : theme;
    if (activeThemeName.textContent !== themeLabel) {
      activeThemeName.textContent = themeLabel;
    }
  };

  const applyTheme = (themeValue, persist = true) => {
    const theme = normalizeTheme(themeValue);
    if (root.dataset.theme !== theme) {
      root.dataset.theme = theme;
    }

    syncThemeColor(theme);
    syncThemeName(theme);

    if (persist) {
      try {
        localStorage.setItem(storageKey, theme);
      } catch (error) {
      }
    }

    return theme;
  };

  let storedTheme = null;
  try {
    storedTheme = localStorage.getItem(storageKey);
  } catch (error) {
  }

  let currentTheme = applyTheme(storedTheme || root.dataset.theme, false);

  const buildThemeOptions = (select) => {
    const fragment = document.createDocumentFragment();
    for (const [themeName, themeConfig] of themeEntries) {
      const option = document.createElement("option");
      option.value = themeName;
      option.textContent = themeConfig.label || themeName;
      fragment.appendChild(option);
    }
    select.replaceChildren(fragment);
  };

  const initializeThemeSelect = () => {
    const select = document.querySelector("[data-theme-select]");
    if (!select) {
      return;
    }

    buildThemeOptions(select);

    if (select.value !== currentTheme) {
      select.value = currentTheme;
    }

    select.addEventListener("change", () => {
      currentTheme = applyTheme(select.value);
      if (select.value !== currentTheme) {
        select.value = currentTheme;
      }
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeThemeSelect, { once: true });
  } else {
    initializeThemeSelect();
  }
})();
