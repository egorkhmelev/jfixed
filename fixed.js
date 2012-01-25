// $('block selector').fixedIn('container selector').withClass('fixed');

jQuery(document).ready(function(){
  var sidebar = jQuery('.bpe-side');
  if( sidebar ){
    var sidebarOffsetTop = sidebar.offset().top,
    sidebarParent = jQuery('.b-post-list-entry'),
    sidebarFixed = false;
  }
  
  jQuery(window).scroll(function () {
    if( !sidebar ){
      return;
    }

    var sidebarBottom = Math.max( 0, sidebarParent.height() - sidebar.height() - 10 ),
        scrollTop = jQuery( document ).scrollTop(),
        sidebarBiggerThanWindow = sidebar.outerHeight() < jQuery( window ).height();

    if( ( scrollTop - sidebarOffsetTop ) >= sidebarBottom ){
      sidebarFixed = false;
      sidebar.removeClass('fixed').css({ top: sidebarBottom });
    }
    else {
      if( scrollTop >= sidebarOffsetTop && !sidebarFixed && sidebarBiggerThanWindow ){
        sidebarFixed = true;
        sidebar.addClass('fixed').css({ top: 0 });
      }
      else if( scrollTop < sidebarOffsetTop && sidebarFixed ){
        sidebarFixed = false;
        sidebar.removeClass('fixed').css({ top: 0 });
      }
    }
  });
});
