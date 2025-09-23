---
title: Pense-bête
description: Pour se rappeller des possibilités du site
layout: libdoc_page.liquid
permalink: /codes/index.html
tags:
    - Code
    - Meta
---

## Alerte

{% alertAlt 'warning', 'Attention !' %}
Ceci est une alerte
{% endalertAlt %}

```liquid
{% raw %}
{% alert 'Ceci est une alerte sur une seule ligne', '<TYPE>', '<TITLE>' %}
{% alertAlt '<TYPE>', '<TITLE>' %}
    Ceci est une alerte  
    sur deux lignes
{% endalertAlt %}
{% endraw %}
```

## Inline HTML

### Abbreviations

```html
<abbr title="Administrateur d'Infrastructure Sécurisée et Cloud">AISC</abbr>
```

## Documentation

* [LibDoc’s homepage](https://eleventy-libdoc.netlify.app) <br>The website containing LibDocs’s presentation and comprehensive documentation.
    * [Front matter](https://eleventy-libdoc.netlify.app/front-matter/) <br>Documentation of all front matter settings related to a LibDoc page.
    * [Primary navigation](https://eleventy-libdoc.netlify.app/primary-navigation/) <br>Detailed features of LibDoc’s primary navigation.
    * [SEO](https://eleventy-libdoc.netlify.app/configuration/seo/) <br>How LibDoc’s configuration and pages parameters are applied for Search Engine Optimization.
    * [Credits](https://eleventy-libdoc.netlify.app/configuration/credits/) LibDoc could not work without these resources.