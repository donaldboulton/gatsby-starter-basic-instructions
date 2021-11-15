import Prism from "prismjs"

(function () {

	if (typeof Prism === 'undefined' || typeof document === 'undefined' || !document.querySelector) {
		return;
	}
  Prism.plugins.toolbar.registerButton('hello-world', {
    text: 'Hello World!', // required
    onClick: function (env) { // optional
      alert('This code snippet is written in ' + env.language + '.')
    }
  })

	Prism.plugins.toolbar.registerButton('download-file', function (env) {
		var pre = env.element.parentNode;
		if (!pre || !/pre/i.test(pre.nodeName) || !pre.hasAttribute('data-src') || !pre.hasAttribute('data-download-link')) {
			return;
		}
		var src = pre.getAttribute('data-src');
		var a = document.createElement('a');
		a.textContent = pre.getAttribute('data-download-link-label') || 'Download';
		a.setAttribute('download', '');
		a.href = src;
		return a;
	});
  
  Prism.plugins.toolbar.registerButton('select-code', function (env) {
    var button = document.createElement('button')
    button.innerHTML = 'Select Code'
    button.addEventListener('click', function () {
      // Source: http://stackoverflow.com/a/11128179/2757940
      if (document.body.createTextRange) { // ms
        var range = document.body.createTextRange()
        range.moveToElementText(env.element)
        range.select()
      } else if (window.getSelection) { // moz, opera, webkit
        var selection = window.getSelection()
        var range = document.createRange()
        range.selectNodeContents(env.element)
        selection.removeAllRanges()
        selection.addRange(range)
      }
    });
    return button
})

}());

  