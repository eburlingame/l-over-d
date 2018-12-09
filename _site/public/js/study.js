// STATE Enums
const UNSOLVED = 0;
const ACTIVE = 1;
const SOLVED = 2;
const GAVEUP = 3;

const SEQUENTIAL = 0;
const RANDOM = 1;

QuizView = function(quizData, questionContainer, progressContainer)
{
	self = this;
	self.quizData = quizData;
	self.questionContainer = questionContainer;
	self.progressContainer = progressContainer;

	self.currentQuestion = 0;
	self.totalAnswered = 0;
	self.mode = SEQUENTIAL;
	self.questionStatus = [];
	self.totalQuestions = 0;

	self.inModal = false;
	self.modalAnswer = false;
	self.modalType = "EXIT";

	self.initQuiz = function()
	{
		self.questionContainer.show();
		self.progressContainer.show();

		self.currentQuestion = 0;
		self.totalAnswered = 0;
		self.totalQuestions = 0;

		self.quiz = new Quiz(self.quizData.name, self.quizData.questions);
		self.displayQuestion(self.currentQuestion);
		self.totalQuestions = self.quizData.questions.length;
		// Reset all the questions

		self.updateProgress();
		for (var i = 0; i < self.quizData.questions.length; i++)
			self.questionStatus[i] = UNSOLVED;
	}

	self.displayQuestion = function(num)
	{
		var html = self.buildQuestion(num);
		self.questionContainer.html(html);
		$("#question" + num)
		  .transition({
		    animation  : 'scale',
		    onComplete : function() {
		      $(".question" + num)[0].focus();
		    }
		  });

		$(".ui.tiny").keyup(self.blankKeydown);
	}

	self.buildQuestion = function(num)
	{
		var qMarkup = self.quiz.questions[num].inputMarkup;
		return self.makeQuestionMakrup(num, qMarkup);
	}

	self.buildPrettyQuestion = function(num)
	{
		var qMarkup = self.quiz.questions[num].prettyPrint;
		return self.makeAnswerMarkup(num, qMarkup);
	}
	
	self.makeQuestionMakrup = function(num, qMarkup)
	{
		return "<div style='display:none' class='ui raised segment question' id='question" + num + "''>"
			   + qMarkup
			   + "</div>";
	}

	self.makeAnswerMarkup = function(num, qMarkup)
	{
		return "<div style='display:none' class='ui raised segment question' id='questionAnswer" + num + "''>"
			   + qMarkup
			   + "</div>";
   	}

	self.resetQuiz = function()
	{
		self.currentQuestion = 0;
		self.questionContainer.html("");

		$(".question").removeClass("green");

        for (var i = 0; i < self.quiz.questions.length; i++)
        {
        	$(".question" + i).val("");
        }   
		self.initQuiz();
        console.log(self.quiz);
	}

	self.getNextQuestion = function()
	{
		if (self.mode == SEQUENTIAL)
			return self.currentQuestion + 1;
		else
		{
			var newQ = getRandomInt(0, self.totalQuestions);
			while (self.questionStatus[newQ] > UNSOLVED)
			{
				newQ = getRandomInt(0, self.totalQuestions);
			}
			return newQ;
		}
	}

	self.advanceQuestion = function()
	{
		if (self.currentQuestion + 1 < self.quiz.questions.length)
		{
			console.log("Advancing question")
	    	self.transitioning = true;
			$("#question" + self.currentQuestion)
			  .transition({
			    animation  : 'scale',
			    onComplete : function() {
					self.currentQuestion = self.getNextQuestion();
					self.updateProgress();
					self.displayQuestion(self.currentQuestion);
			    	self.transitioning = false;
			    }
			  });

			$("#questionAnswer" + self.currentQuestion)
			  .transition({
			    animation  : 'scale',
			    onComplete: function()
			    {
			    }
			  });
		}
		else if (self.quiz.completed())
		{
			self.modalType = "END";
			self.openModal();
		}
	}

	self.blankKeydown = function(event)
	{
		if (self.inModal)
			return; 
		if (self.transitioning)
			return;

		var element = event.originalEvent.srcElement;
		var className = element.className;
		var questionId = parseInt(className.replace("question", ""));
		var question = self.quiz.questions[questionId];

		if (event.keyCode == "13")
		{
			question.state = GAVEUP;
			self.displayAnswer();
		}


		var inputArray = self.getBlanksArray(className);
		var solved = question.checkInputArray(inputArray);
		if (solved)
		{
			$("#" + className).addClass('green');
			self.advanceQuestion();
			self.totalAnswered += 1;
		}
	}

	self.displayAnswer = function()
	{
		var html = self.buildPrettyQuestion(self.currentQuestion);
		self.questionContainer.prepend(html);
		$("#questionAnswer" + self.currentQuestion)
		  .transition({
		    animation  : 'scale',
		    onComplete : function() {
		      $(".question" + self.currentQuestion)[0].focus();
		    }
		  });
	}

	self.getBlanksArray = function(className)
	{
		var elements = $("." + className);
		var vals = [];
		for (var i = 0; i < elements.length; i++)
		{	
			vals.push(elements[i].value);
		}
		return vals;
	}

	self.openModal = function()
	{
		if (self.modalType == "EXIT")
		{
			$("#modalTitle").html("Would you like to exit?");
			$("#modalDescription").html("Select yes to exit");
		}
		else
		{
			$("#modalTitle").html("Great job! Would you like to go again?");
			$("#modalDescription").html("Select yes to restudy this quiz.");
		}

		$("#yesButton").on("click", self.modalYes);
		$("#noButton").on("click", self.modalNo);

		// Bind options
		$("body").keydown(function(event)
		{
			if (self.inModal)
			{
				if (event.keyCode == 37)
				{
					$("#yesButton").addClass('active');
					$("#noButton").removeClass('active');
					self.modalAnswer = false;
				}
				else if (event.keyCode == 39)
				{
					$("#yesButton").removeClass('active');
					$("#noButton").addClass('active');
					self.modalAnswer = true;
				}
				else if (event.keyCode == 13)
				{
					if (self.modalAnswer) // Yes
					{
						self.modalYes();
					}
					else
					{
						self.modalNo();
					}
				}
				self.modalOptionsUpdate();
			}
		});

		self.modalOptionsUpdate();
		self.inModal = true;
		$('.ui.basic.modal').modal({
		    blurring: true
		  }).modal('show');
	}

	self.modalYes = function()
	{
		if (self.modalType == "EXIT")
		{
			$('.ui.basic.modal').modal('hide');
			loadMenu();
		}
		else
		{
			self.resetQuiz();
			$('.ui.basic.modal').modal('hide');
		}
		$("#yesButton").off("click");
		$("#noButton").off("click");
		self.inModal = false;
	}

	self.modalNo = function()
	{
		if (self.modalType == "EXIT")
		{
			$('.ui.basic.modal').modal('hide');
		}
		else
		{
			$('.ui.basic.modal').modal('hide');
			loadMenu();
		}
		$("#yesButton").off("click");
		$("#noButton").off("click");
		self.inModal = false;
	}

	self.modalOptionsUpdate = function()
	{
		if (self.modalAnswer)
		{
			$("#yesButton").addClass('active');
			$("#noButton").removeClass('active');
		}
		else
		{
			$("#yesButton").removeClass('active');
			$("#noButton").addClass('active');
		}
	}

	self.escapeBinding = function()
	{
		$("body").keydown(function(event)
		{
			if (event.keyCode == 27)
			{
				self.modalType = "EXIT";
				self.openModal();
			}
		});
	}

	self.updateProgress = function()
	{
		// var seq = $('.ui.checkbox.sequential').checkbox('is checked');
		// var rand = $('.ui.checkbox.random').checkbox('is checked');
		// if (seq)
		// 	self.mode = SEQUENTIAL;
		// else if (rand)
		// 	self.mode = RANDOM;

		$("#questionNumber").html(self.currentQuestion + 1);
		$("#questionNumAnswered").html(self.totalAnswered);
		$("#questionTotal").html(self.totalQuestions);
		console.log(self.totalAnswered, self.totalQuestions)
		$('#quizProgress').progress({
		  percent: parseInt((self.totalAnswered / self.totalQuestions) * 100)
		});
	}

	self.escapeBinding();
}

