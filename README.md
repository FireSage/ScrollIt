ScrollIt
========

An easy to use jQuery plugin for animated scrolling to any target element within the an HTML container.

##Aim

Instructions to using ScrollIt:
* Include the jQuery library
<pre><code>
  &lt;script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"&gt;&lt;/script&gt;
</code></pre>

* Download and import the scrollIt plugin
<pre><code>
	&lt;script src="scrollit.js"&gt;&lt;/script&gt;
</code></pre>

* Add the data-scrollit='true' attribute to the elements which should trigger scrolling
<pre><code>
&lt;a data-scrollIt="true"&gt;hello 1&lt;/a&gt;
</code></pre>

* For links put the target element's id in the href attribute 
<pre><code>
	&lt;a href="#hello1" data-scrollIt="true"&gt;hello 1&lt;/a&gt;
</code></pre>

* For other elements use the data-scrollit-id attribute to store the target
<pre><code>
</code></pre>

* apply the scrollit function to the container which should be scrolled
<pre><code>
	&lt;script&gt;
		$(function(){
			$('#container').scrollIt();
		});
	&lt;/script&gt;
</code></pre>
