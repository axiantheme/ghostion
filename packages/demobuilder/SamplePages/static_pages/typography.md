## Creating Beautiful Content with Ghostion

Powered by Foundation 5, typography in Ghostion theme is meant to make your life easier by providing clean, attractive, simple default styles for all of the most basic typographical elements.

Ghost uses **Markdown** for writing. Essentially, it's a shorthand way to manage your post formatting as you write. Writing in Markdown is really easy. In the left hand panel of Ghost, you simply write as you normally would. Where appropriate, you can use shortcuts to style your content. 

![Typography](http://ghostdemo.axiantheme.com/ghostion/demo/typography.jpg)

<br>

#### Heading

Ghostion includes styles for all of the header elements that are balanced and based on a modular scale.

# h1. This is a very large header.
## h2. This is a large header.
### h3. This is a medium header.
#### h4. This is a moderate header.
##### h5. This is a small header.
###### h6. This is a tiny header.

<br />

#### Paragraph

This is a paragraph. Paragraphs are preset with a font size, line height and spacing to match the overall vertical rhythm.

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

<br />

#### Strong and Emphasize 

Wrap ``**`` around type to make it **bold**! You can also use `*` to *italicize* your words.

``**strong**`` or ``__strong__`` **( Cmd + B or Ctrl + B (Windows) )**

``*emphasize*`` or ``_emphasize_`` **( Cmd + I or Ctrl + I (Windows) )**

**Sometimes I want a lot of text to be bold. Like, seriously, a _LOT_ of text**

<br />

#### Lists

Lists are helpful for, well, lists of things.

**Ordered lists** are created using "1." + Space:

1. Ordered list item
2. Ordered list item
3. Ordered list item

**Unordered list** are created using "*" + Space:

* Unordered list item
* Unordered list item
* Unordered list item 

Or using "-" + Space:

- Unordered list item
- Unordered list item
- Unordered list item

<br />

#### Blockquotes

> Sometimes other people say smart things, and you may want to mention that through a blockquote callout. We've got you covered. Right angle brackets **&gt;** are used for block quotes.

<br />

#### Links and Email

Want to link to a source? No problem. If you paste in url, like http://ghost.org - it'll automatically be linked up. But if you want to customise your anchor text, you can do that too! 

Simple inline link ``http://www.axiantheme.com`` http://www.axiantheme.com, another inline link ``[Ghostion](http://ghostion.ghostdemo.axiantheme.com)`` [Ghostion](http://ghostion.ghostdemo.axiantheme.com), and one more inline link with title ``[DigitalOcean](https://www.digitalocean.com/?refcode=3bb89a8961ff "The Best Hosting for Ghost")`` [DigitalOcean](https://www.digitalocean.com/?refcode=3bb89a8961ff "The Best Hosting for Ghost"). 

An email <example@example.com> link.

<br />

#### Strikethrough

Wrap with 2 tilde characters **&#126;&#126;Strikethrough&#126;&#126;** :

~~Strikethrough~~

<br />

#### Images

Images work too! Already know the URL of the image you want to include in your article? Simply paste it in like the following to make it show up.

``![Ghostion](http://ghostdemo.axiantheme.com/ghostion/demo/sample_image.jpg)``

![Ghostion](http://ghostdemo.axiantheme.com/ghostion/demo/sample_image.jpg)

An inline image ![Ghostion Icon](http://ghostdemo.axiantheme.com/ghostion/demo/ghostion_icon.jpg "Ghostion Icon"), title is optional. with the following code:

``![Ghostion Icon](http://ghostdemo.axiantheme.com/ghostion/demo/ghostion_icon.jpg "Ghostion Icon")``

A ![Ghostion Icon][1] reference style image, with this code ``![Ghostion Icon][1]``.

``[1]: http://ghostdemo.axiantheme.com/ghostion/demo/ghostion_icon.jpg "Ghostion Icon"``
[1]: http://ghostdemo.axiantheme.com/ghostion/demo/ghostion_icon.jpg "Ghostion Icon"

<br />
<br />

#### Codes

Got a streak of geek? We've got you covered there, too. You can write inline ``<code>`` blocks really easily with double backticks. 

Want to show off something more comprehensive? 4 spaces of indentation or start with a line containing 3 or more backticks, and ends with the first line with the same number of backticks

```
.awesome-ghostion {
    display: block;
    width: 100%;
}
```

Ghostion supports syntax highlighting, powered by [Highlight.js](http://highlightjs.org/)

```
h1, h2, h3, h4, h5, h6 {
	color: darken($base_text_color, 10%);
	font-family: $base_font_family;
	font-weight: bold;
}
a {
	color: $primary_color;
	@include transition(color 0.2s ease-in);
	&:hover, &:focus {
		color: shade($primary_color, 15%);
	}
}
```

<br />

#### Advanced Usage

There's one fantastic secret about Markdown. If you want, you can write plain old HTML and it'll still work! Very flexible.

<span class="label">Regular Label</span> <span class="secondary radius label">Secondary Radius Label</span> <span class="alert round label">Alert Round Label</span> <span class="success label">Success Label</span>

<input type="text" placeholder="This is Input" />

<textarea placeholder="This is TextArea"></textarea>

<a href="#" class="button tiny">Tiny Button</a> <a href="#" class="button small">Small Button</a> <a href="#" class="button">Default Button</a> <a href="#" class="button large">Large Button</a>

<a href="#" class="button secondary">Secondary Button</a> <a href="#" class="button success">Success Button</a> <a href="#" class="button alert">Alert Button</a>

<a href="#" class="button radius">Radius Button</a> <a href="#" class="button round">Round Button</a> <a href="#" class="button disabled">Disabled Button</a>
