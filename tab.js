var 버튼 = $('.tab-button');

function tabOpen(i){
    버튼.removeClass('orange');
    버튼.eq(i).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(i).addClass('show');
}

$('.list').click(function(e){
    tabOpen(e.target.dataset.id)

})




// 버튼.eq(0).on('click',function(){
//     버튼.removeClass('orange');
//     버튼.eq(0).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(0).addClass('show');
// });

// 버튼.eq(1).on('click',function(){
//     버튼.removeClass('orange');
//     버튼.eq(1).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');
// });

// 버튼.eq(2).on('click',function(){
//     버튼.removeClass('orange');
//     버튼.eq(2).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show');
// });






// for (let  i = 0; i < $('.tab-button').length; i++){
    
// 버튼.eq(i).on('click',function(){
//     tabOpen(i)
// });

// }