import test from "node:test";
import assert from "node:assert/strict";
import {
  supportsDiscoveryFilters,
  visibleFeed,
  newBoardPins,
  safeExternalUrl,
} from "../src/lib/experience.ts";
import { readRoute, routeHref } from "../src/lib/navigation.ts";

test("discovery filters cannot hide saved boards, profile Pins, or related Pins", () => {
  for (const path of ["/board/quiet-spaces", "/profile", "/pin/p100", "/liked"])
    assert.equal(supportsDiscoveryFilters(path), false);
  for (const path of ["/", "/explore", "/search", "/visual"])
    assert.equal(supportsDiscoveryFilters(path), true);
});
test("Following counts and results use only followed creators", () => {
  const pins = [
    { id: "one", creator: 0 },
    { id: "two", creator: 1 },
  ];
  assert.deepEqual(visibleFeed(pins, "Following", [1]), [pins[1]]);
  assert.deepEqual(visibleFeed(pins, "Following", []), []);
  assert.deepEqual(visibleFeed(pins, "All", []), pins);
});
test("creating a board from Save includes the selected Pin", () => {
  assert.deepEqual(newBoardPins("p100"), ["p100"]);
  assert.deepEqual(newBoardPins(), []);
});
test("external sources accept only HTTP or HTTPS URLs", () => {
  assert.equal(
    safeExternalUrl("https://example.com/photo"),
    "https://example.com/photo",
  );
  for (const url of [
    "javascript:alert(1)",
    "data:text/html,hello",
    "file:///secret",
    "broken",
    "",
  ])
    assert.equal(safeExternalUrl(url), undefined);
});
test("shared Pins preserve the repository base path and refresh route", () => {
  const shared = routeHref(
    "/pin/p100",
    "https://example.com/webpage/?old=1#/search",
  );
  assert.equal(shared, "https://example.com/webpage/#/pin/p100");
  assert.equal(readRoute({ hash: new URL(shared).hash }).pathname, "/pin/p100");
});
