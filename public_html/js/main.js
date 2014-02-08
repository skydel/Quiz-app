/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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
    else{
        $('#next').hide();
        $('#submit').show();
    }
}
function onChange(){
    $('#next').removeAttr("disabled");
}

