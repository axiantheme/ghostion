![Documentation](http://ghostdemo.axiantheme.com/ghostion/demo/ghostion_doc.jpg)

<br>

<br>

# Ghostion Theme Documentation

## Getting Started with Ghostion Theme

#### AxianTheme - http://www.axiantheme.com/

<br>

<br>

## A. General Basic Usage

### 1. The File Structure of Ghostion Theme

### 2. Ghostion Theme Installation

### 3. Changing the Logo

### 4. Initial Configuration

### 5. Basic CSS Customization

<br>

## B. DemoBuilder

### 1. GhostData

### 2. SamplePages

<br>

## C. Ghostion Customization for Developer

### 1. Development Files Structure

### 2. Ghostion Theme Command Line Usage


<div style="page-break-after: always;"></div>

## Getting Started with Ghostion Theme

Getting started with Ghostion theme is very easy. Whether you are just a blogger without coding knowledge or even master of HTML, CSS or JavaScript, we've got you covered.

### A. General Basic Usage

The following steps will guide you how to configure Ghostion for your blog and customize it without needing to get your hand dirty to touch the SCSS and the theme file structure.

#### 1. The File Structure of Ghostion Theme

Ghostion is a lightweight and speed optimized theme for Ghost. Ghostion theme gets Grade A for both PageSpeed and YSlow reported by [GTmetrix](http://gtmetrix.com/reports/ghostion.axiantheme.com/bSAyuxfk).

Below is the file structure of Ghostion theme:

```
├── assets
│   ├── css
│   │   ├── ghostion.custom.css
│   │   └── ghostion.min.css
│   ├── fonts
│   │   └── fontawesome
│   │       ├── fontawesome-webfont.eot
│   │       ├── fontawesome-webfont.svg
│   │       ├── fontawesome-webfont.ttf
│   │       └── fontawesome-webfont.woff
│   ├── img
│   │   └── showcase_pattern.png
│   └── js
│       ├── ghostion.min.js
│       └── jquery-2.1.0.min.js
├── partials
│   ├── all_page
│   │   ├── at_footer.hbs
│   │   ├── at_header.hbs
│   │   └── at_off_canvas.hbs
│   ├── home_page
│   │   ├── at_mainbody.hbs
│   │   ├── at_showcase.hbs
│   │   └── at_top.hbs
│   ├── pagination.hbs
│   ├── post_page
│   │   ├── at_mainbody.hbs
│   │   └── at_showcase.hbs
│   ├── static_page
│   │   ├── at_mainbody.hbs
│   │   └── at_showcase.hbs
│   └── widgets
│       ├── at_disqus.hbs
│       └── at_search.hbs
├── default.hbs
├── index.hbs
├── page.hbs
├── post.hbs
└── README.md
```

#### 2. Ghostion Theme Installation

This documentation is intended to help you properly install and configure Ghostion for your Ghost blog. Check the following step-by-step instructions on how to perform a manual Ghostion theme installation.

1. Download **Ghostion** master file from [GitHub](https://github.com/axiantheme/ghostion/archive/master.zip).
2. Unzip the files and go to ``ghostion-master/releases/themes`` directory. You will see **ghostion.zip** inside this directory.
3. Unzip **ghostion.zip** and copy the folder into your Ghost theme directory ``/content/themes``.
4. At the moment, Ghost won't notice that you've added a new folder to ``content/themes`` directory, so you'll need to restart it.
5. After restart, login to your Ghost dashboard and navigate to **Settings - General**.
6. Select **ghostion** name in the **Theme** options dropdown.
7. Click **Save**. That's all.
8. Visit the frontend of your blog and marvel at the new **Ghostion** theme.

#### 3. Changing the Logo

We provide the editable logo source in ``ghostion-master/releases/sources``. You can edit the logo with Adobe Fireworks / Photoshop, or you can also use your own logo. Then, you can upload the new logo via your Ghost dashboard **Settings - General - Blog Logo**.

#### 4. Initial Configuration

There are 4 variables you might want to set for your Ghostion blog. Inside your Ghostion theme folder, find ``/ghostion/default.hbs``. You will see the following content at the bottom.

```
/*** CONFIGURATION VARIABLES: EDIT THE VALUES BELOW FOR THEME CONFIGURATION ***/
var ghostionConfig = {
	site_url: 						"ghostion.ghostdemo.axiantheme.com",
	google_fonts_family: 			"Open+Sans:400,400italic,700,700italic",
	google_analytics_tracking_id: 	"UA-45630355-2",
	disqus_shortname: 				"ghostion"
};
```

###### site&#95;url

Put your site url here without ``http://``, for example: ``www.my-ghost-blog.com``.


###### google&#95;fonts&#95;family

Ghostion supports [Google Fonts](http://www.google.com/fonts) and you can change the default OpenSans font with any font you like, for example: ``Noto+Sans:400,400italic,700,700italic``.


###### google&#95;analytics&#95;tracking&#95;id

Put your [Google Analitycs](https://support.google.com/analytics/answer/1032385) account identifier here.

###### disqus&#95;shortname

Replace ``ghostion`` with your own [Disqus](http://help.disqus.com/customer/portal/articles/466208) unique identifier

Your initial configuration is done and you are ready to use Ghostion on your Ghost blog now.

#### 5. Basic CSS Customization

You can skip this step if you are happy with the default color or style of Ghostion. However, if you would like to do some minor change, you can use the custom stylesheet.

The following guide will take you through the steps needed to load the custom stylesheet:

1 - Inside your Ghostion theme folder, find the following code in ``/ghostion/default.hbs``.

```
	{{! Remove the <!-- --> below to load the custom stylesheet }}
	<!-- <link rel="stylesheet" href="/assets/css/ghostion.custom.css" /> -->
```

2 -  Remove the ``<!-- -->`` block to make your theme load the ``ghostion.custom.css`` file.

3 -  Inside your Ghostion theme folder, find ``/ghostion/assets/css/ghostion.custom.css``. You can add your custom rules and properties in that stylesheet.

For example, if you want to change the ``showcase`` background color, in your **ghostion.custom.css** you can put the following code.

```
#at_showcase .at_showcase_overlay {background-color: #D53F35;}
```

<div style="page-break-after: always;"></div>

### B. DemoBuilder

If you want to replicate the Ghostion demo site, there are 2 ways to do this, by using **GhostData** or **SamplePages**. We provide the data source we use on Ghostion demo side inside ``ghostion-master/releases/demobuilder`` directory. Unzip **ghostion_demobuilder.zip** and you will see two folders inside, **GhostData** and **SamplePages**.

#### 1. GhostData

Inside the **GhostData** folder, you will see **GhostData.json** which contains the Ghostion demo blog settings and data, including the posts and the user.

Please note that, GhostData must be installed on **new** Ghost installation, and not over an existing Ghost blog as it will remove your previous posts and all other configurations.

To import **GhostData.json** to your **new** Ghost installation, please follow these steps:

1 - Navigate to ``http://www.my-blog-site.com/ghost/debug/``. Please replace **www.my-blog-site.com** with your actual site url. You might need to login with your administrator details.

![GhostData](http://ghostdemo.axiantheme.com/ghostion/demo/ghostdata.jpg)

2 - Press the red **Delete** button. This will delete all posts and tags from your Ghost database.

3 - Now, browse **GhostData.json** and press **Import** button, to load all Ghostion demo data and configurations.

#### 2. SamplePages

Inside the **SamplePages** folder, you will find **static&#95;pages** and **post&#95;pages** folders. The **static&#95;pages** folder contains all MarkDown files for the Ghostion demo Static Pages and **post&#95;pages** folder contains the demo content for the regular blog posts.

```
├── post_pages
│   ├── article_1.md
│   ├── article_2.md
│   ├── article_3.md
│   ├── article_4.md
│   ├── article_5.md
│   └── article_6.md
└── static_pages
    ├── about.md
    ├── documentation.md
    ├── faq.md
    └── typography.md
```

You just need to copy and paste the MarkDown content to your Ghost blog via administrator dashboard. You can use this method on your existing site because there is no existing data removal in this process.

<div style="page-break-after: always;"></div>

### C. Ghostion Customization for Developer

If you are theme developer or would like to heavily customized Ghostion theme, this section is for you. We provide our custom **command line tool** ``ghostion.sh`` to speed up your customization.

The following steps will guide you how to start developing and customizing Ghostion theme.

#### 1. Development Files Structure

All the scss and JavaScript source files are located inside ``ghostion-master/dev/src`` directory. Generally, what you would like to add, edit, or remove are:

* the JavaScripts located at ``ghostion-master/dev/src/js`` directory
* the theme main scss files in ``ghostion-master/dev/src/scss/theme`` directory

```
├── dest
│   ├── css
│   │   └── ghostion.css
│   └── js
│       └── ghostion.js
└── src
    ├── framework
    ├── js
    │   ├── disqus.js
    │   ├── fitvids.js
    │   ├── ghosthunter.js
    │   ├── google_analytics.js
    │   ├── google_fonts.js
    │   ├── highlight.js
    │   └── init.js
    └── scss
        ├── bourbon
        ├── fontawesome
        ├── highlight
        ├── theme
        │   ├── _ghost.scss
        │   ├── _style.scss
        │   ├── _variables.scss
        │   └── _widgets.scss
        └── ghostion.scss
```

###### _ghost.scss

Contains all the styles for the Ghost core structure.

###### _style.scss

Contains all the styles for the theme core structure.

###### _variables.scss

Contains all the variables including the base primary color, background color, etc.

###### _widget.scss

Contains all the styles for Disqus, Search, and FitVids widgets.

#### 2. Ghostion Theme Command Line Usage

We are using [Gulp](http://gulpjs.com/) as our task runner to watch and build the theme. With Gulp, it is not only easy to write tasks for, but also much easier to read and maintain. Gulp uses node.js streams, making it faster to build as it doesn’t need to write temporary files/folders to disk.

The Gulp configuration file is written on ``ghostion-master/gulpfile.js``. You can read more about getting started with Gulp [here](http://markgoodyear.com/2014/01/getting-started-with-gulp/).

Let's start!

<div style="page-break-after: always;"></div>

1 - The command line script is located in the root of ``ghostion-master`` directory. In your terminal or command line app, type ``sh ghostion.sh -h`` or ``sh ghostion.sh --help``. You will see the following in the screen.

```
sh ghostion.sh -i or sh ghostion.sh --install
Installing all necessary Gulp plugins required to develop Ghostion theme

sh ghostion.sh -d or sh ghostion.sh --develop
Starting Ghostion theme development. Gulp will be watching scss and js file changes

sh ghostion.sh -r or sh ghostion.sh --release
Releasing Ghostion theme, documentation, demobuilder, and source files

sh ghostion.sh -h or sh ghostion.sh --help
Ghostion theme command line usage help overview
```

2 - To start customizing the scss or JavaScript files, in your terminal or command line app, type ``sh ghostion.sh -d`` or ``sh ghostion.sh --develop``.

Now Gulp will be watching any scss and js files change and re-compile them each time any change is detected and saved.

```
$ sh ghostion.sh -d
[AxianTheme] Starting Ghostion Development: Watching scss and js Files Change ...
[gulp] Using file /ghostion-master/gulpfile.js
[gulp] Working directory changed to /ghostion-master
[gulp] Running 'develop'...
[gulp] Running 'scss'...
[gulp] Running 'concat'...
[gulp] Running 'watch'...
[gulp] Finished 'watch' in 53 ms
[gulp] Finished 'develop' in 69 ms
[gulp] Finished 'concat' in 1.73 s
[gulp] Finished 'scss' in 3.94 s
```

The compiled files are located at ``ghostion-master/dev/dest`` directory, **ghostion.css** and **ghostion.js**. These files are full complete expanded codes and still not minified yet.

3 - If you want to customize the Ghostion theme core files, go to ``ghostion-master/packages/theme`` directory. You will find all the theme files including **index.hbs**, **default.hbs**, and the **partials** files.

For more information about Ghost core theme customization, please check the [Ghost Theme Documentation](http://docs.ghost.org/themes/).

4 - After you finish your customization, now it's the time to build and release the package. In your terminal or command line app, press ``cmd + c`` or ``ctrl + c (windows)``, and then type ``sh ghostion.sh -d`` or ``sh ghostion.sh --develop``.

```
$ sh ghostion.sh -r
[AxianTheme] Releasing Ghostion Theme Files
[gulp] Using file /ghostion-master/gulpfile.js
[gulp] Working directory changed to /ghostion-master
[gulp] Running 'zip'...
...
...
[gulp] Finished 'zip' in 827 ms
[gulp] Running 'release'...
[gulp] Running 'clean_releases'...
[gulp] Finished 'clean_releases' in 903 μs
[gulp] Running 'move_zip'...
[gulp] Finished 'move_zip' in 1.51 ms
[gulp] Running 'clean_tmp'...
[gulp] Finished 'clean_tmp' in 469 μs
[gulp] Finished 'release' in 4.99 ms
[AxianTheme] Ghostion Theme Files Released Successfully
```

**ghostion.css** and **ghostion.js** inside ``ghostion-master/dev/dest`` directory will be minified to **ghostion.min.css** and **ghostion.min.js** inside``ghostion-master/packages/themes/assets/css`` and ``ghostion-master/packages/themes/assets/js`` directories.

<div style="page-break-after: always;"></div>

The DemoBuilder, Documentation, and the source files will be packaged and moved to ``ghostion-master/releases`` directory.

```
├── demobuilder
│   └── ghostion_demobuilder.zip
├── documentation
│   └── ghostion_documentation.zip
├── sources
│   └── ghostion_sources.zip
└── theme
    └── ghostion.zip
```

**ghostion.zip** file inside ``ghostion-master/releases/theme`` directory is your new customized Ghostion theme which is ready to unzipped and installed on your Ghost site.

If you found a bug or have any questions not documented here, please send us an email at <support@axiantheme.com> or tweet us [@axiantheme](https://twitter.com/axiantheme). We will do our best to help you.
