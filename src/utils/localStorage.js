const THEME = "THEME"

export const getTheme = () => {
  return localStorage.getItem(THEME)
}

export const setTheme = (value) => {
  const theme = localStorage.setItem(THEME, value)
  return theme ?? true
}

export const clearTheme = () => {
  return localStorage.clear(THEME)
}

