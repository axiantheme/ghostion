/* Disqus Comment */
var disqus_identifier = '{{post.id}}';
var atPost = atPost || {};
atPost.loadDisqus = function() {
    var dsq = document.createElement('script');
    dsq.type = 'text/javascript';
    dsq.async = true;
    dsq.src = '//' + ghostionConfig.disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
};
