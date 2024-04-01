import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schema";
import { documentInternationalization } from '@sanity/document-internationalization'

export default defineConfig({
  name: "MyPro",
  title: "MyPro",
  projectId: "bxls77uv",
  dataset: "production",
  plugins: [
    structureTool(),
    visionTool(),
    documentInternationalization({
      // Required configuration
      supportedLanguages: [
        { id: 'ar', title: 'Arabic' },
        { id: 'en', title: 'English' }
      ],
      schemaTypes: ['property'],
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
