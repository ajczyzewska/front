$(document).on('scroll', function(){
const windowHeight = $(window).height();
const scrollValue = $(this).scrollTop();

// Article 2 
const article2 = $('.art2')
const article2OffsetFromTop = article2.offset().top;
const article2Height = article2.outerHeight();

// Article 3
const article3 = $('.art3')
const article3OffsetFromTop = article3.offset().top;
const article3Height = article3.outerHeight();

// Article 4
const article4 = $('.art4')
const article4OffsetFromTop = article4.offset().top;
const article4Height = article4.outerHeight();

if(scrollValue>article2OffsetFromTop+article2Height){
    article2.addClass('active');
}
if (scrollValue>article3OffsetFromTop+article3Height-windowHeight){
    console.log('artykul 3')
    article3.addClass('active');
}
if (scrollValue>article4OffsetFromTop+article4Height-windowHeight){
    article4.addClass('active');
}
});

