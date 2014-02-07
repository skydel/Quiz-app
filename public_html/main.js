/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var id='que';
var count =0;

function onNext(){
    previous= '#'+id+count;
    count=count+1;
    select= '#'+id+count;
    $(select).show();
    $(previous).hide();
}

