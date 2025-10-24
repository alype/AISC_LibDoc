// START IMPORT REQUIRE WORKAROUND
// To make 11ty --serve work with JSON imports
// https://github.com/11ty/eleventy/issues/3128#issuecomment-1878745864
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
// END IMPORT REQUIRE WORKAROUND

// START JSON IMPORT WORKAROUND
// import userConfig from "../settings.json" with { "type": "json" };
const userConfig = require("../settings.json");
// END JSON IMPORT WORKAROUND

export default {
    lang: userConfig.lang ?? "fr",
    siteTitle: userConfig.siteTitle ?? "Ma documentation AISC",
    siteDescription: userConfig.siteDescription ?? "Ma documentation AISC",
    siteLogoUrl: userConfig.siteLogoUrl ?? "",
    siteLogoMaxHeight: userConfig.siteLogoMaxHeight ?? 60,
    author: userConfig.author ?? "Alype",
    faviconUrl: userConfig.faviconUrl ?? "/assets/myfavicon.png",
    ogImageUrl: userConfig.ogImageUrl ?? "",
    customLinks: userConfig.customLinks ?? [],
    blogTitle: userConfig.blogTitle ?? "Logs",
    blogDescription: userConfig.blogDescription ?? false,
    blogAuthor: userConfig.blogAuthor ?? false,
    blogSlug: userConfig.blogSlug ?? "logs",
    displayTagsListLink: userConfig.displayTagsListLink ?? true,
    tocEnabled: userConfig.tocEnabled ?? true,
    tocHtmlTags: userConfig.tocHtmlTags ?? ["h2", "h3", "h4"],
    tocMinTags: userConfig.tocMinTags ?? 1,
    htmlBasePathPrefix: userConfig.htmlBasePathPrefix ?? "",
    sandboxRunSwitch: userConfig.sandboxRunSwitch ?? true,
    searchEnabled: userConfig.searchEnabled ?? true,
    hljsLanguages: userConfig.hljsLanguages ?? [
        "xml",
        "javascript",
        "json",
        "yaml",
        "liquid",
        "markdown",
        "css",
        "html"
    ],
    roundedImagesCorners: userConfig.roundedImagesCorners ?? true,
    editThisPageRootUrl: userConfig.editThisPageRootUrl ?? false,
    imgBgColorLightMode: userConfig.imgBgColorLightMode ?? "transparent",
    imgBgColorDarkMode: userConfig.imgBgColorDarkMode ?? "transparent",
    productionUrl: userConfig.productionUrl ?? ""
};