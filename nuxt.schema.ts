import { field, group } from "@nuxthq/studio/theme";

export default defineNuxtSchema({
  appConfig: {
    content: group({
      title: "Content",
      description: "Content configuration",
      icon: "fluent:content-view-16-filled",
      fields: {
        workBackground: field({
          type: "object",
          title: "Work Background",
          description: "All your jobs per year",
          fields: {
            startYear: field({
              type: "number",
              title: "Start Year",
            }),
            endYear: field({
              type: "number",
              title: "End Year",
            }),
            title: field({
              type: "string",
              title: "Job Title",
            }),
            location: field({
              type: "string",
              title: "Location",
            }),
            desctiption: field({
              type: "default",
              title: "Desctiption",
            }),
          },
        }),
        // primary: field({
        //   type: "string",
        //   title: "Primary",
        //   description: "Primary color of your UI.",
        //   icon: "fluent:content-view-16-filled",
        //   default: "sky",
        //   required: ["sky", "mint", "rose", "amber"],
        // }),
      },
    }),
  },
});
