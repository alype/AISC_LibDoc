---
title: Hello Child!
description: I am the page child of hello page
layout: libdoc_page.liquid
permalink: /hello-page/{{ title | slugify }}/index.html
eleventyNavigation:
    key: Hello Child
    parent: Hello Page
tags:
    - syntax-highlighting
    - blockquote
---
> Howdy! I am the page child of hello page.
> 
> ― **Child**

Let’s go back to [hello page](/content/docs/A_hello/A_hello-page.md "Go back to hello page") or go to [hello grandchild](./A1a_hello-grandchild/A1a_hello-grandchild.md "Go to hello grandchild page").

```markdown
> Howdy! I am the page child of hello page.
> 
> ― **Child**

Let’s go back to [hello page](/content/docs/A_hello/A_hello-page.md "Go back to hello page") or go to [hello grandchild](./A1a_hello-grandchild/A1a_hello-grandchild.md "Go to hello grandchild page").
```