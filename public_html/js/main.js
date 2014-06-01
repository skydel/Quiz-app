var id = 'que';
//var count = 1;
var lang;
var langFlag;

var randomnumber=Math.floor(Math.random()*30); // total_question - number_of_question_to_display

count=randomnumber;

var counter = 0;

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
}

function onNext() {
    if ((counter<5&&langFlag===0)||(counter<10&&langFlag===1)){
        if (count >= 1 && count < 40) {
            previous = '#' + id + count;
            count = count + 1;
            select = '#' + id + count;
            $(select).show();
            $(previous).hide();
            $('#next').attr("disabled", true);
        }
        else {
            $('#next').hide();
        }
        counter++;
        $('#QueCount').html(counter+1);
    }
    else{
        saveResult();
    }
}
function onChange() {
    $('#next').removeAttr("disabled");
}

var correctAnswers=0;
function correctAns(){
    correctAnswers++;
    $('#next').removeAttr("disabled");
}

function displayFrench() {
    $('.German').hide();
    $('.French').show();
	
	lang = 'fr';
}
function displayGerman() {
    $('.French').hide();
    $('.German').show();
	
	lang = 'de';
}
function langSelector() {
    var userLang = navigator.language || navigator.userLanguage;
    if (userLang == 'fr' || userLang == 'fr-BE' || userLang == 'fr-CA' || userLang == 'fr-FR' || userLang == 'fr-LU' || userLang == 'fr-MC' || userLang == 'fr-CH') {
        langFlag=0;
        displayFrench();
    }
    else {
        langFlag=1;
        displayGerman();
    }
}

function displayMessage() {
    $("#scoreMessage").show();
    $(".controls").hide();
    $("#questForm").hide();

    langSelector();
}

function playAgain() {
    var dynamicData = 'p=' + getURLParameter("p");
    $.ajax({
        dataType: "text",
        crossDomain: true,
        type: "get",
        url: "/quiz/pa",
        data: dynamicData,
        success: function(xml) {
            $("#queMessage").hide();
            $("#scoreMessage").hide();
            $("#shortcodeMsg").show();
			if(lang == 'de'){
				$("#disclaimerGerman").show();
				
			}else{
				$("#disclaimerFrench").show();
			}
        },
        error: function(request, status, error) {

        }
    });
}

function saveResult() {

    var dynamicData = 'p=' + getURLParameter("p") + '&s=' + numberOfQuestions + '&c=' + correctAnswers; //countResult();

    var score = correctAnswers; //countResult();

    $.ajax({
        dataType: "text",
        crossDomain: true,
        type: "get",
        url: "/quiz/res",
        data: dynamicData,
        success: function(xml) {

            $("#scoreNum").html(score);
            $("#scoreMessage").show();
            $(".controls").hide();
            $("#questForm").hide();

        },
        error: function(request, status, error) {

        }
    });
}