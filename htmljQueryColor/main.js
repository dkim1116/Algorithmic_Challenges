$(function () {
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  var words = $('p').detach().text().split(' ');
  for (var i = 0; i < words.length; i++) {
    if (words[i] === '\n') {
      var pTag = $('<p></p>');
      pTag.appendTo('body');
    }

    var span = $('<span></span');
    span.text(words[i]);
    span.appendTo(pTag);
  }

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!
  setInterval(
    function () {
      var span = $('span');
      span.each(function (tag, list) {
        console.log(tag);
        tag.css({ color: Math.floor(Math.random() * 16777215).toString(16) });
      });
    }, 1000);
});
