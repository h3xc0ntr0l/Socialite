$(function() {
  $('#horiz').affix({
    offset:{
      top: calculateHeight('#horiz')
    }
  });
  $('#smr').affix({
    offset:{
      top: calculateHeight('#smr')
    }
  });
  
  function calculateHeight(id){
    var height, win;
    height = $(id).outerHeight();
    win = $(window).outerHeight();
    return ((win - height)/4);
  }
    
});