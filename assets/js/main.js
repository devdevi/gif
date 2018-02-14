$('#search_btn').click(function(event) {
  console.log('Entro');
  $('#myGif').empty();
  var gif = $('#textarea1').val();
  $('#titleMargin').hide();
  ajaxGif(gif);
  $('#textarea1').val('');
});

function ajaxGif(gif) {
  $.ajax({
  	url: 'https://api.giphy.com/v1/gifs/search?',
    type: 'GET',
    datatype: 'json',
    data: {
      q: gif,
      api_key: '2MDlExiyLnzP1YyQ2suDZfXL63sfFTwM'
    }
  }).done(function(response) {
    console.log(response);
    dibujarGifs(response.data);
  })
	 .fail(function() {
      console.log('error');
    });
};

function dibujarGifs(data) {
  var gif = '';
  var url = '';
  data.forEach(function(element) {
    gif = element.images.downsized_large.url;
    url = element.bitly_gif_url;
    $('#myGif').append(
      '<div class="col s3">' +
      '<div class="card small">' +
      '<div class="card-image">' +
      '<img src="' + gif + '">' +
      '</div>' +
      '<div class="card-action">' +
      '<a href="' + url + '" target="_blank">This is a link</a>' +
      '</div></div></div>'
    );
  });
};
