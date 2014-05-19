var id = 'que';
//var count = 1;
var lang;

var randomnumber=Math.floor(Math.random()*26);

count=randomnumber;

var counter = 0;

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
}

function onNext() {
    if (counter<5){
        if (count >= 1 && count < 30) {
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
    }
    else{
        saveResult();
    }
}
function onChange() {
    $('#next').removeAttr("disabled");
}
/*
function countResult() {
    var correctAns = 0;
    var answers = ["15", "8", "6", "5", "4", "1", "2", "opt1", "b", "b", "c", "a", "a", "a", "c", "d", "c", "a", "d", "d"];
    for (var i = 0; i < 20; i++) {
        var i2 = i + 1;
        var selected = id + i2;
        var text = $('input[name="' + selected + '"]:checked').val();
        if (answers[i] === text) {
            correctAns++;
        }
    }
    //alert(correctAns);
    return correctAns;
}
*/

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
        displayFrench();
    }
    else {
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