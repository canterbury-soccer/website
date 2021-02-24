This is the source code behind the website for the  Canterbury Soccer Club, based in Ottawa, Ontario, Canada.

https://canterbury-soccer.com/

The website changes infrequently at best, and in an effort to reduce costs for our volunteer-run, community-based effort, we decided in November 2020 to move the source and hosting to Github.

# How to update the website

## If you just want to update the site content...
You can submit a PR for content and/or updated images.

Most of the site text lives in a single file, [_data/sitetext.yml](https://github.com/canterbury-soccer/website/blob/main/_data/sitetext.yml). Let's try to keep it that way.

Images and other assets live under the [assets](https://github.com/canterbury-soccer/website/tree/main/assets) directory.

## If you want to change the site's structure...

The site is [jekyll](https://jekyllrb.com/)-based, so start by following the [instructions for installing ruby and jekyll for your OS](https://jekyllrb.com/docs/installation/).

Once jekyll is installed, you'll need to clone the source code and install the bundled resources:

```
$ git clone git@github.com:canterbury-soccer/website.git
$ cd website
$ bundle install
```
The [jekyll-agency theme](http://jekyllthemes.org/themes/agency/) that forms the basis of the site relies on a specific version of jekyll, so you need to specify a version when calling `build` or `serve`.
```
jekyll _4.1.1_ serve
```
