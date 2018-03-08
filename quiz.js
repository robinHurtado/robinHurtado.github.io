$(function() {

	$.getJSON("Questions.json", function(data){    //jquery func to load a file with json format
		val = data;
		for (i=1; i <= 5; i++) {
			document.getElementById('q'+i).innerHTML = val["question"+i];	//set the question1
		};
	});

	$("#begin").hide();

//d = document.querySelector('input[name="ch"]:checked').value;	//It is the purest way to get the value of any input type

	correct=0;	//counter of wrong answers
	wrong= 0;	//counter of wrong answers
	name=0; //variable to get the 'check' radio

	//Execute when click on next button
	$("#next").click(function(){
		answer = $('input[name="ch'+name+'"]:checked').val();				//Jquery version
		name++;
		switch(answer){    				//the Good Answers
			case '1corr':
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
			case '3corr':
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
			case '5corr':
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
		/* Function to handle the wrong Answers	*/
		function nextQuestion(ans) {
			switch(ans){
				case '1incorr':
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
				case '3incorr':
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
				case '5incorr':
				case '5incorr':
				case '5incorr':
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