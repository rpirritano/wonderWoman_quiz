$(document).ready(function() {
 //quiz question array
 var questions = [{
 	question: "which of Wonder Woman's accessories was firged from the magic girdle of Aphrodite?", 
 	choices: ["Her lasso", "Her bracelets", "Her tiara", "Her earrings"],
 	qNum : 0,
 	correct : 0,
 	fact: "Wonder Woman's magic lasso was forged by the god Hephaestus from the magic girdle of the Aphrodite which her mother, Queen Hippolyta, had inherited.  As a result, Wonder Woman's lasso is unbreakable and has the power to force those ensnared by it to tell the truth."
 	},
 	{
 	question: "Which of Wonder Woman's accessories allows her to breath in outer space?",
 	choices: ["Her tiara", "Her bracelets", "Her magic lasso", "Her earrings"],
 	qNum : 1,
 	correct : 3,
 	fact: "Wonder Woman's earrings provide her with oxygen, allowing her to breath in outer space"
 	},
 	{
 	question:  "What is the name of Wonder Woman's mother?",
 	choices : ["Antilope", "Hippoyta", "Aphrodite", "Kilowag"],
 	qNum : 2,
 	correct : 1,
 	fact : "Queen Hippolyta"
 	}
	question:  "What is the name of the Island that Wonder Woman is from?",
 	choices : ["NoMan Island", "Island de Mujeres", "Paradise Island", "Amazon Island"],
 	qNum : 3,
 	correct : 2,
 	fact : "Paradise Island, which is located in the Bermuda Triangle"
 	}
	question:  "What is Wonder Woman's secret identity?",
 	choices : ["Linda Lane", "Diane Lane", "Deanna Carter", "Diana Prince"],
 	qNum : 4,
 	correct : 3,
 	fact : "Diana Prince"
 	}
 }]

//global variables
var numberCorrect = 0;
var currentQuestion = 0;

$("#question_wrapper").on("click", "#submit", function () {
	updateIcon();
	currentQuestion++;
	nextQuestion();
});

$("#question_wrapper").on("click", "#retry_button", function () {
	numberCorrect = 0;
	currentQuestion = 0;
	var firstQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" class = "option" name="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" class="option" name="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" class="option" name="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" class="option" name="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><input type="button" id="retry_button" value="Try Again!"></div>';
    $("#question_wrapper").html(firstQuestion);
    });


    function updateIcon() {
    var answer = $("input[type='radio']:checked").val();
    if (answer == questions[currentQuestion].correct) {
            numberCorrect++;    
        }

    }

    function nextQuestion() {
        if (currentQuestion < 5) {
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
            var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" class="option" name="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" class="option" name="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" class="option" name="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" class="option" name="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><input type="button" id="retry_button" value="Try Again!"></div>';
            $("#question_wrapper").html(newQuestion);
            
        }
        else {
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
            $("#submit").remove();
            $("#retry_button").css("display", "inline");
            var finalScore = '<span id="final" class="fin">Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+' question.'
             $("#answer_holder").html(finalScore);
            
            
        }
    }

});