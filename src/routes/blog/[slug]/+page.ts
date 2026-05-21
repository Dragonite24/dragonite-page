import { error } from "@sveltejs/kit";
import { getPostBySlug, getSortedPosts } from "$lib/content/posts";
import type { EntryGenerator, PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = ({ params }) => {
  const post = getPostBySlug(params.slug);

  if (!post) {
    error(404, "Post not found");
  }

  const { Component, ...meta } = post;
  return { meta, Component };
};

export const entries: EntryGenerator = () => {
  return getSortedPosts().map((post) => ({ slug: post.slug }));
};
