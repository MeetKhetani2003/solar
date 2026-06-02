import { allSchemas } from "@/lib/schemas";

/**
 * JsonLd — Server Component
 * Injects all structured data (JSON-LD) schemas into the page <head>.
 * Renders a single <script> tag per schema object for maximum compatibility.
 */
export default function JsonLd() {
  return (
    <>
      {allSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
