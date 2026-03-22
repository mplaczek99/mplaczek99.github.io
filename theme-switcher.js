(() => {
  const storageKey = "portfolio-theme";
  const fallbackTheme = "tokyo-night";
  const themeMeta = {
    "tokyo-night": { themeColor: "#1a1b26" },
    "aurora-fog": { themeColor: "#132430" },
    "ember-forge": { themeColor: "#241717" },
    "deep-forest": { themeColor: "#13231d" }
  };

  const root = document.documentElement;
  const select = document.querySelector("[data-theme-select]");
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  const activeThemeName = document.querySelector("[data-theme-name]");

  if (!select) {
    return;
  }

  const allowedThemes = new Set(Array.from(select.options, (option) => option.value));

  const normalizeTheme = (themeValue) => {
    if (themeValue && allowedThemes.has(themeValue)) {
      return themeValue;
    }
    return fallbackTheme;
  };

  const applyTheme = (themeValue, persist = true) => {
    const theme = normalizeTheme(themeValue);
    root.dataset.theme = theme;
    select.value = theme;

    if (activeThemeName) {
      activeThemeName.textContent = theme;
    }

    const palette = themeMeta[theme] || themeMeta[fallbackTheme];
    if (themeColorMeta && palette) {
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

  select.addEventListener("change", (event) => {
    applyTheme(event.target.value);
  });
})();
