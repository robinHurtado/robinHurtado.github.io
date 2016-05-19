$(function() {
	
	$.getJSON("Questions.json",function(data){    //jquery func to load a file with json format
		val = data; 
		for (i=1; i <= 5; i++) {
			document.getElementById('q'+i).innerHTML = val["question"+i];	//set the question1
		};
	}); 


	//d = document.querySelector('input[name="ch"]:checked').value;	//It is the purest way to get the value of any input type
	correct=0;
	wrong = 0;

	//se ejecuta al darle clic en next
	$("#next").click(function(){
		d = $('input[name="ch"]:checked').val();				//Jquery version
		switch(d){    											//the good choises-good Answers		
			case 'cho4':
				$("#Ques1").hide('slow');
				$("#Ques2").show('slow',function(){
				correct++
				});
				break;
			case '2true':
				$("#Ques3").show('slow',function(){
					$("#Ques2").hide('slow');
					correct++
				});
				break;
			case '3true':
				$("#Ques4").show('slow',function(){
					$("#Ques3").hide('slow');
					correct++
				});
				break;
			case '4true':
				$("#Ques5").show('slow',function(){
					$("#Ques4").hide('slow');
					correct++
				});
				break;
			case '5nod':
				correct++;
				document.getElementById('done').innerHTML = 'Great,You have Done, You have: '+ correct +
				 ' Correct Answer(s) and ' + wrong + ' Wrong Answer(s)';	
				$("#done").show('slow');
				$("#begin").show(function(){
					$("#begin").click(function(){						
						location.reload();			//reload the current document from the cache													
					}); //end click func
					$("#next").hide('slow');					
				});
				break;
			default:
				alert('Sorry Bad Choise :(');
				nextQuestion(d);
		}
		
		function nextQuestion(d) {  				//wrong choises-bad Answers			
			switch(d){
				case 'cho1':
				case 'cho2':
				case 'cho3':
					wrong++; 
					$("#Ques1").hide('slow');
					$("#Ques2").show('slow');
					break
				case '2false':
					$("#Ques3").show('slow',function(){
						$("#Ques2").hide('slow');						
						wrong++;										
					});
					break;
				case '3false':
					$("#Ques4").show('slow',function(){
						$("#Ques3").hide('slow');						
							wrong++;									
					});
					break;
				case '4false':
					$("#Ques5").show('slow',function(){
						$("#Ques4").hide('slow');
							wrong++;									
					});
					break;
				case '5go':
				case '5sw':
				case '5ja':
					wrong++;
					document.getElementById('done').innerHTML = 'Great,You have Done, You have: '+ correct 
					+ ' Correct Answer(s) and ' + wrong + ' Wrong Answer(s).';			
					$("#done").show('slow');					
					$("#begin").show(function(){
						$("#begin").click(function(){													
							location.reload();			//reload the current document from the cache	
						});
						$("#next").hide('slow');						
					});
					break;	
			}// end switch
		}
	});

});