import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
// import schemas from "@/sanity/schemas";


const config = defineConfig({
    projectId: "2lk8t9xd",
    dataset: "production",
    title: 'Admin dashboard',
    apiVersion: '2023-11-08',
    basePath: '/content',
    plugins: [
        deskTool(),
    ],
    schema: {
        types: [],
    },
});

export default config;