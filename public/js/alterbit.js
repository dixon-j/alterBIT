$(document).ready(function(){

  $('#submit').click(function () {
  if (!confirm("Are you sure ?")) {
    return false;
  };
});

// $("#search").autocomplete({
//     minLength: 2,
//     typeAhead: true,
//     source: '/autocomplete',
//     select: function (event, ui) {
//         window.location.href =  '/'+ui.item.category+'/'+ui.item.id;
//     }
// });

  function split(val) {
    return val.split(/,\s*/);
  }
  function extractLast(term) {
    return split(term).pop();
  }

// $("#alternative")
// .autocomplete({
//   minLength: 2,
//   typeAhead: true,
//   source: function (request, response) {
//     $.getJSON("autocomplete", {
//       term: extractLast(request.term)
//     }, response);
//   },
//   search: function () {
//     // custom minLength
//     var term = extractLast(this.value);
//     if (term.length < 2) {
//       return false;
//     }
//   },
//   focus: function () {
//     // prevent value inserted on focus
//     return false;
//   },
//   select: function (event, ui) {
//     var terms = split(this.value);
//     // remove the current input
//     terms.pop();
//     // add the selected item
//     terms.push(ui.item.value);
//     // add placeholder to get the comma-and-space at the end
//     terms.push("");
//     this.value = terms.join(", ");
//     return false;
//   }
// });

$( ".search-mess" ).dialog({
  draggable:false,
  resizable:false,
  modal:true,
  buttons: [
              {
                text: "Add another",
                click: function() {
                  $( this ).dialog( "close" );
                }
              },
              {
                text: "Okay",
                click: function() {
                  window.location.href = "/";
                }
              }
            ]
});


$( ".message" ).dialog({
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

$("#add").click(function() {
    $( ".admin" ).dialog({
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
});

$( "#accord" ).accordion({
  collapsible: true,
  heightStyle: "content",
  active:false,
  animate: 500
});

$( "#accord1" ).accordion({
  collapsible: true,
  heightStyle: "content",
  active:false,
  animate: 500
});


tags=[];

$('#category-select').selectmenu({
  change: function(event,ui){
    $.getJSON("/category?category="+ui.item.value ,function(data){
      $('#alternatives').css('display','block');
      $('.card-sugg,.cat-tag').remove();
      tags=[];
      for(i=0;i<data.tags.length;i++){
        $('.src-tags').append('<a href="" class="cat-tag" style="display:none">'+data.tags[i]+'</a>');
        $('.cat-tag').fadeIn("slow");
      }
      for(i=0;i<data.terms.length;i++){
       $('.alter').append('<div class="col-3 card-sugg"><h3>'+data.terms[i].name+'</h3><p>'+data.terms[i].description.substr(0,100)+'</p><input class="alt-sel" type="button" value="Select" ></div>');
      }

       $('html,body').animate({
         scrollTop: $("#cat-label").offset().top
      },
        'slow');
    });
  }
});

$('body').on('click','.cat-tag',function(event){
  event.preventDefault();
  $category=$('#category-select').val();
  tags.push(this.innerHTML);
  console.log(tags);
  $.getJSON("/category?category=" + $category,"tag="+this.innerHTML,function(data){
    $('.card-sugg,.cat-tag').remove();
    for (i = 0; i < data.tags.length; i++) {
      $('.src-tags').append('<a href="" class="cat-tag" style="display:none">' + data.tags[i] + '</a>');
      $('.cat-tag').fadeIn("slow");
    }
    $('.cat-tag').each(function(){
      if($.inArray(this.innerHTML,tags)>=0){
        console.log($(this).html());
        $(this).css("color","black");
      }
    });
    for (i = 0; i < data.terms.length; i++) {
      $('.alter').append('<div class="col-3 card-sugg"><h3>' + data.terms[i].name + '</h3><p>' + data.terms[i].description.substr(0, 100) + '</p><input class="alt-sel" type="button" value="Select" ></div>');
    }
  });
});

$( ".controlgroup" ).controlgroup();
});

$('body').on('click',".alt-sel",function() {
  $(this).parent().css('background-color',' #f2f4f4 ');
 if($(this).attr("value","Select")){
   $(this).attr("value","Unselect");
 }
});
