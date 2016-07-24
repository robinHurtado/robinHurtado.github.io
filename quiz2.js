$(function() {
	
	$.getJSON("Questions.json", function(data){    //jquery func to load a file with json format
		val = data; 
		for (i=6; i <= 10; i++) {
			document.getElementById('q'+i).innerHTML = val["question"+i];	//set the question1
		};
	}); 


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
		
		function nextQuestion(ans) {  				//wrong choises-bad Answers			
			switch(ans){
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