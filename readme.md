Steemget
====

### What is Steemget?

Steemget is small js library that allow you to include article from Steemit on your website. It similar to facebook widgets.



### How to use it?

To include your article from Steemit on your web page, just copy and paste code snipped show below, just before close body tag.

```html
<body>


    ...

    <div id="steemit-article" ></div>

    ....


    <script src="https://cdn.jsdelivr.net/npm/steemget@0.1.0/js/script.js"></script>
    <script>
        new Steemget({
          author: 'piotr-galas',
          permalink: 'o-continuous-integration'
        })
    </script>
</body>

```

Content of article will be placed inside of `<div id="steemit-article" ></div>`
You need also provide your username and article permalink. E.g. above options are related to:
 [https://steemit.com/polish/@piotr-galas/o-continuous-integration](https://steemit.com/polish/@piotr-galas/o-continuous-integration)
 
### Options:

| key                       | value             | default     |
|---------------------------|-------------------|-------------|
| **author**                | author of article |  no default |
| **permalink**             | end part of link to article |  no default |
| **relCanonical**          | `true` or `false` (if true then it append relCanonical). It is to tell google about duplicated content    |  true       |
| **errorMessage**          | error message when article not found | Content not find,  are you sure that there is article in..  |


### Run project locally

Todo

### Contributions

Todo

