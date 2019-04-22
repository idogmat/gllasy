

$(function() {
	    $( "#slider-range" ).slider({
	      // orientation: "vertical",
	      // step: 100,
	      range: true,
	      min: 0,
	      max: 4000,
	      values: [ 500, 3000 ],
	      slide: function( event, ui ) {
	        $( "#amount" ).val("ОТ " + ui.values[ 0 ] );
	        $( "#amount_1" ).val("ДО " + ui.values[ 1 ] );
	      }
	    });
	    $( "#amount" ).val("ОТ " + $( "#slider-range" ).slider( "values", 0 ) );
	    $( "#amount_1" ).val("ДО " + $( "#slider-range" ).slider( "values", 1 ) );

	    // Изменение местоположения ползунка при вводиде данных в первый элемент input
		  $("input#amount").change(function(){
		  	var value1=$("input#amount").val();
		  	var value2=$("input#amount_1").val();
		      if(parseInt(value1) > parseInt(value2)){
		  		value1 = value2;
		  		$("input#amount").val(value1);
		  	}
		  	$("#slider-range").slider("values",0,value1);	
		  });
		      
		  // Изменение местоположения ползунка при вводиде данных в второй элемент input 	
		  $("input#amount_1").change(function(){
		  	var value1=$("input#amount").val();
		  	var value2=$("input#amount_1").val();

		  	if(parseInt(value1) > parseInt(value2)){
		  		value2 = value1;
		  		$("input#amount_1").val(value2);
		  	}
		  	$("#slider-range").slider("values",1,value2);
		  });

		  // фильтрация ввода в поля
			jQuery('#amount, #amount_1').keypress(function(event){
				var key, keyChar;
				if(!event) var event = window.event;
				
				if (event.keyCode) key = event.keyCode;
				else if(event.which) key = event.which;
			
				if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
				keyChar=String.fromCharCode(key);
				
				if(!/\d/.test(keyChar))	return false;
			
			});

	  });
	var link = document.querySelector(".btn-modal-cart");
  var popup = document.querySelector(".modal-cart");
  
  
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
    
  });


  var submit = popup.querySelector(".button-us");
  var input = popup.querySelector("[name=enter]");
  var input2 = popup.querySelector("[name=exit]");

submit.addEventListener("click", function (e) {
    if(input.value === "" || input2.value === "") {
        e.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    }
});

 window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });

var opMap = document.querySelector('.where-map');
var popupMap = document.querySelector('.iframe-div');
var closeMap = document.querySelector('.iframe-map-close');


	if(opMap)
		opMap.addEventListener('click', function(event) {
		event.preventDefault();
		popupMap.offsetWidth = popupMap.offsetWidth;
		popupMap.classList.toggle('modal-show');
	});

	if(closeMap)
		closeMap.addEventListener('click', function(event) {
	    event.preventDefault();
	    popupMap.classList.toggle('modal-show-off');
	});

 window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      event.preventDefault();
      if (popupMap.classList.contains("modal-show")) {
        popupMap.classList.remove("modal-show");
        popupMap.classList.remove("modal-show-off");
      }
    }
  });