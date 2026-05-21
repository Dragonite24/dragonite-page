import { site } from "$lib/config/site";

export interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  type?: "website" | "article";
  publishedTime?: string;
  tags?: string[];
  noindex?: boolean;
}

function absoluteUrl(path: string): string {
  const base = site.url.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function buildSeoMeta(props: SeoProps = {}) {
  const title = props.title ? `${props.title} · ${site.name}` : site.title;
  const description = props.description ?? site.description;
  const canonical = props.canonical ? absoluteUrl(props.canonical) : site.url;
  const image = props.image ? absoluteUrl(props.image) : undefined;
  const type = props.type ?? "website";

  return {
    title,
    description,
    canonical,
    image,
    type,
    publishedTime: props.publishedTime,
    tags: props.tags,
    noindex: props.noindex ?? false,
    siteName: site.name,
    locale: site.locale,
    twitterHandle: undefined,
  };
}

export function formatIsoDate(date: string): string {
  return new Date(date).toISOString();
}

export function formatDisplayDate(date: string): string {
  return new Intl.DateTimeFormat(site.locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}
