Steemget
====

### What is Steemget?

Steemget is small js library that allow you to include article from Steemit on your website. It similar to facebook widgets.



### How to use it?

To include your article from Steemit on your web page, copy and paste code snipped show below, just before close body tag.

```html
<body>


    ...

    <div id="steemit-article" ></div>

    ....


    <script>
      document.addEventListener("DOMContentLoaded", function() {
        new Steemget({
          author: 'piotr-galas',
          permalink: 'o-continuous-integration'
        })
      });
    </script>

    <script src="https://cdn.jsdelivr.net/npm/steemget@0.1.2/js/app.js"></script>
</body>

```

Content of article will be placed inside of `<div id="steemit-article" ></div>`
You need also provide your username and article permalink like example above.

------
Example above will show: [https://steemit.com/polish/@piotr-galas/o-continuous-integration](https://steemit.com/polish/@piotr-galas/o-continuous-integration)
 
### Options:

| key                       | value             | default     |
|---------------------------|-------------------|-------------|
| **author**                | author of article |  no default |
| **permalink**             | end part of link to article |  no default |
| **relCanonical**          | `true` or `false` (if true then it append relCanonical). It is to tell google about duplicated content    |  `true`       |
| **errorMessage**          | error message when article not found | Content not find,  are you sure that there is article in..  |


### Run project locally

To run project locally you need to have node.js and npm installed

- `git clone git@github.com:piotr-galas/steemget.git`
- `cd steemget`
- `npm install`
- `npm start`

Browser should open automatically. 

Do not modify `css/app.css` directly. This file is generated from scss located in dev and will be override every time you modify one of .scss file.


### Contributing

Bug reports and pull requests are welcome. This project is intended to be a safe, welcoming space for collaboration.

### Features todo:

 - allow to modify some minor css from object configuration
 - add optional link to article in steemit
 - add optional widget with number of likes, estimated value in USD 
 - prepare web page with documentation for this package

### License

This package is available as open source under the terms of the MIT License.



