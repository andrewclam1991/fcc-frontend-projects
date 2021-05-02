import marked from "marked";
import sanitizeHtml from "sanitize-html";

/**
 * Responsible for parsing input githum flavored markdown
 * to sanitized html
 * @param input github flavored markdown (gfm), could be dirty
 * @returns sanitized html
 */
export const parseMarkdown = (input: string) => {
  marked.setOptions({
    gfm: true,
  });
  return sanitizeHtml(marked(input));
};
