export const formatBrandText = (text: string | null | undefined): string => {
  if (!text) {
    return "";
  }

  return text.replace(/rvn/gi, (match) => `<span class="font-chillax font-bold">${match.toUpperCase()}</span>`);
};
