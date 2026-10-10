import type { Article } from "../data/site";

export function articleReadingTime(article: Pick<Article, "title" | "excerpt" | "sections">): string {
  const text = [
    article.title,
    article.excerpt,
    ...article.sections.flatMap((section) => [
      section.title,
      ...section.copy,
      ...(section.table ? [section.table.caption, ...section.table.columns, ...section.table.rows.flat()] : []),
      ...(section.example ? [section.example.label, section.example.code] : []),
      ...(section.figure ? [section.figure.caption] : []),
    ]),
  ].join(" ");
  const minutes = Math.max(1, Math.ceil(text.trim().split(/\s+/u).length / 200));
  return `ca. ${minutes} ${minutes === 1 ? "Minute" : "Minuten"}`;
}
