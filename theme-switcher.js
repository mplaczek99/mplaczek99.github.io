(() => {
  const storageKey = "portfolio-theme";
  const fallbackTheme = "tokyo-night";
  const themeMeta = Object.freeze({
    "tokyo-night": { themeColor: "#1a1b26" },
    "aurora-fog": { themeColor: "#132430" },
    "ember-forge": { themeColor: "#241717" },
    "deep-forest": { themeColor: "#13231d" }
  });
  const allowedThemes = new Set(Object.keys(themeMeta));

  const root = document.documentElement;
  const select = document.querySelector("[data-theme-select]");
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  const activeThemeName = document.querySelector("[data-theme-name]");

  const normalizeTheme = (themeValue) => {
    if (themeValue && allowedThemes.has(themeValue)) {
      return themeValue;
    }
    return fallbackTheme;
  };

  const applyTheme = (themeValue, persist = true) => {
    const theme = normalizeTheme(themeValue);
    if (root.dataset.theme !== theme) {
      root.dataset.theme = theme;
    }

    if (select && select.value !== theme) {
      select.value = theme;
    }

    if (activeThemeName && activeThemeName.textContent !== theme) {
      activeThemeName.textContent = theme;
    }

    const palette = themeMeta[theme];
    if (themeColorMeta && palette && themeColorMeta.content !== palette.themeColor) {
      themeColorMeta.setAttribute("content", palette.themeColor);
    }

    if (persist) {
      try {
        localStorage.setItem(storageKey, theme);
      } catch (error) {
      }
    }
  };

  let storedTheme = null;
  try {
    storedTheme = localStorage.getItem(storageKey);
  } catch (error) {
  }

  const initialTheme = normalizeTheme(storedTheme || root.dataset.theme);
  applyTheme(initialTheme, false);

  if (!select) {
    return;
  }

  select.addEventListener("change", () => {
    applyTheme(select.value);
  });
})();
