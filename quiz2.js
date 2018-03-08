$(function() {
	
	$.getJSON("Questions.json", function(data){    //jquery func to load a file with json format
		val = data; 
		for (i=6; i <= 10; i++) {
			document.getElementById('q'+i).innerHTML = val["question"+i];	//set the question1
		};
	}); 

	$("#begin").hide();

	//d = document.querySelector('input[name="ch"]:checked').value;	//It is the purest way to get the value of any input type
	correct=0;
	wrong= 0;
	name=0;

	//se ejecuta al darle clic en next
	$("#next").click(function(){		
		answer = $('input[name="ch'+name+'"]:checked').val();			//Jquery version
		name++;
		switch(answer){    								//the good choises-good Answers		
			case '6true':
				$("#Ques6").hide('slow');
				$("#Ques7").show('slow',function(){
					correct++
				});
				break;
			case '7corr':
				$("#Ques8").show('slow',function(){
					$("#Ques7").hide('slow');
					correct++
				});
				break;
			case '8corr':
				$("#Ques9").show('slow',function(){
					$("#Ques8").hide('slow');
					correct++
				});
				break;
			case '9corr':
				$("#Ques10").show('slow',function(){
					$("#Ques9").hide('slow');
					correct++
				});
				break;
			case '10corr':
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
				//document.getElementById('done').innerHTML = 'Sorry Bad Choise :(';				
				nextQuestion(answer);
		}
		
		/* Function to handle the wrong Answers */
		function nextQuestion(ans) {  							
			switch(ans){
				case '6false':
					wrong++; 
					$("#Ques6").hide('slow');
					$("#Ques7").show('slow');
					break
				case '7Incorr':
					$("#Ques8").show('slow',function(){
						$("#Ques7").hide('slow');						
						wrong++;										
					});
					break;
				case '8Incorr':
					$("#Ques9").show('slow',function(){
						$("#Ques8").hide('slow');						
							wrong++;									
					});
					break;
				case '9Incorr':
					$("#Ques10").show('slow',function(){
						$("#Ques9").hide('slow');
							wrong++;									
					});
					break;
				case '10Incorr':				
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