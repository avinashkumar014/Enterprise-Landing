import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";

/** Resolves the absolute origin of the current request (SSR-safe). */
export const getRequestOrigin = createServerFn({ method: "GET" }).handler(() => {
  const request = getRequest();
  const host = request?.headers.get("host") ?? "localhost:8080";
  const proto =
    request?.headers.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  return `${proto}://${host}`;
});