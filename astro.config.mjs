import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://lakshyajeet.jalal.uk.in",
	base: "/",
	trailingSlash: "always",
	integrations: [tailwind(), icon()],
});
