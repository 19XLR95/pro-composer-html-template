onLoadAndResize();

$(window).resize(onLoadAndResize);

$('#mobileMenu').css('width', '0%');
$('#mobileMenu').hide();
$('.mobileMenuItemBtn').hide();
$('#siteContent').show();

$('#menuBtn').click(
  function()
  {
    $('#mobileMenu').show();
    $('.mobileMenuItemBtn').show();
    $('#mobileMenu').animate(
      {
        width: '100%'
      }, 300, function() {
        $('#siteContent').hide();
      }
    );
  }
);

$('#mobileMenuCloseBtn').click(
  function()
  {
    $('#mobileMenu').animate(
      {
        width: '0%'
      }, 300, function() {
        $('#mobileMenu').hide();
        $('.mobileMenuItemBtn').hide();
        $('#siteContent').show();
      }
    );
  }
);

function highlightSection(element)
{
  $(element).children('.ongoingContent').animate(
    {
      backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },

    {
      duration: 300,
      queue: false
    }
  );
}

function reverseHighlight(element)
{
  $(element).children('.ongoingContent').animate(
    {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },

    {
      duration: 300,
      queue: false
    }
  );
}

function onLoadAndResize()
{
  var menuGridPos = ($('#mainBG').height() / 2) - ($('#menuGrid').height() / 2);
  $('#menuGrid').css('margin-top', menuGridPos + 'px');

  if($(window).width() <= 768)
  {
    $('#profilePic').css('border-radius', '10px 10px 10px 10px');

    $('.menuColLeft').hide();
    $('.menuColRight').hide();

    $('#menuGrid').css('min-width', 'auto');

    $('#menuBtn').show();

    $('#mobileMenu').show();
  }
  else
  {
    $('#siteContent').show();

    $('#profilePic').css('border-radius', '10px 0 0 10px');

    $('.menuColLeft').show();
    $('.menuColRight').show();

    $('#menuGrid').css('min-width', '637px');

    $('#menuBtn').hide();

    $('#mobileMenu').hide();
  }
}
