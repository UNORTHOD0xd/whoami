import { describe, it, expect } from "vitest";
import { getAllPosts, getAllSlugs } from "@/lib/blog";

describe("Blog utilities", () => {
  it("should return all posts", () => {
    const posts = getAllPosts();
    expect(Array.isArray(posts)).toBe(true);
  });

  it("should return all slugs", () => {
    const slugs = getAllSlugs();
    expect(Array.isArray(slugs)).toBe(true);
  });

  it("posts should have required fields", () => {
    const posts = getAllPosts();
    posts.forEach((post) => {
      expect(post).toHaveProperty("slug");
      expect(post).toHaveProperty("title");
      expect(post).toHaveProperty("date");
      expect(post).toHaveProperty("excerpt");
      expect(post).toHaveProperty("readingTime");
    });
  });

  it("posts should be sorted by date (newest first)", () => {
    const posts = getAllPosts();
    for (let i = 0; i < posts.length - 1; i++) {
      const currentDate = new Date(posts[i].date).getTime();
      const nextDate = new Date(posts[i + 1].date).getTime();
      expect(currentDate).toBeGreaterThanOrEqual(nextDate);
    }
  });
});
