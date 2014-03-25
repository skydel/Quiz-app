var id = 'que';
var count = 1;
function onNext() {
    if (count >= 1 && count < 20) {
        previous = '#' + id + count;
        count = count + 1;
        select = '#' + id + count;
        $(select).show();
        $(previous).hide();
        $('#next').attr("disabled", true);
    }
    else {
        $('#next').hide();
        $('#submit').show();
    }
}
function onChange() {
    $('#next').removeAttr("disabled");
}
function countResult() {
    var correctAns=0;
    var answers = ["15","8","6","5","4","1","2","opt1","b","b","c","a","a","a","c","d","c","a","d","d"];
    for (var i = 0; i < 20; i++) {
        var i2=i+1;
        var selected = id + i2;
        var text = $('input[name="' + selected + '"]:checked').val();
        if(answers[i]===text){
            correctAns++;
        }
    }
    //alert(correctAns);
    return correctAns;
}
