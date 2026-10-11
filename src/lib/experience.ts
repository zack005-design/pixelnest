export function supportsDiscoveryFilters(path: string) {
  return ["/", "/explore", "/search", "/visual"].includes(path);
}
export function visibleFeed<T extends { creator: number }>(
  items: T[],
  tab: string,
  follows: number[],
) {
  return tab === "Following"
    ? items.filter((pin) => follows.includes(pin.creator))
    : items;
}
export function newBoardPins(selectedPin?: string) {
  return selectedPin ? [selectedPin] : [];
}
export function safeExternalUrl(value?: string) {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) ? url.href : undefined;
  } catch {
    return undefined;
  }
}
