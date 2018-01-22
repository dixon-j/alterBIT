$("#search").autocomplete({
    source: '/autocomplete',
    select: function (event, ui) {
        window.location.href = "/entity/" + ui.item.id;
    }
});

$( ".search-mess" ).dialog({
  draggable:false,
  resizable:false,
  modal:true,
  buttons: [
              {
                text: "Okay",
                click: function() {
                  $( this ).dialog( "close" );
                }
              }
            ]
});