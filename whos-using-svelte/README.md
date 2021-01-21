## Add your company logo

* Fork this repo, and clone your fork
* Create a branch called e.g. `add-myorganisation-logo`
* Make changes to `WhosUsingSvelte.js` file
* Add the logo to the `organisations` directory (preferably SVG)
* Add a new entry in **alphabetical order** Create a pull request. Thanks!

### JSON format
`href`, `src`, `alt` are required.

`style` and `picture` are optional.
```javascript
{
    href: "https://your-company.com",
    src: "organisations/yourCompanyLogo.svg",
    alt: "Your Company logo",
    // optional
    style: "optional styling",
    picture: [
        {
            type: "image/webp",
            srcset: "organisations/yourCompanyLogo.webp"
        },
        ...
    ]
}
```