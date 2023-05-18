$(function(){
    //Swiper
    var swiper = new Swiper('.swiper', {
        autoHeight: true,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        slidesPerView: 1,
        // spaceBetween: 30,
        breakpoints: {
            // 1600: {
            //     slidesPerView: 1,
            //     spaceBetween: 30,
            // },
            // 1260: {
            //     slidesPerView: 1,
            //     spaceBetween: 30,
            // },
            1000: {
                slidesPerView: 1,
                spaceBetween: 0,
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });
})

$(function(){
    $(".gameType .top li").click(function(){
        $(this)
        .addClass("active");
       
        $(this).siblings()
        .removeClass("active");
        var val = $(this).find("p").text();
        var log = $(this).index();

        $(".gType").text(val);

        if( log == 0) 
        {
            $(".gtContent .gameBlock")
            .removeClass("display");

            $(".gtContent .gameBlock.hot")
            .addClass("display");
        }
        if( log == 1) 
        {
            $(".gtContent .gameBlock")
            .removeClass("display");

            $(".gtContent .gameBlock.all")
            .addClass("display");
        }
        if(log == 2) 
        {
            $(".gtContent .gameBlock")
            .removeClass("display");

            $(".gtContent .gameBlock.sport")
            .addClass("display");
        }
        if(log == 3) 
        {
            $(".gtContent .gameBlock")
            .removeClass("display");

            $(".gtContent .gameBlock.live")
            .addClass("display");
        }
        if(log == 4) 
        {
            $(".gtContent .gameBlock")
            .removeClass("display");

            $(".gtContent .gameBlock.slot")
            .addClass("display");
        }
        if(log == 5) 
        {
            $(".gtContent .gameBlock")
            .removeClass("display");

            $(".gtContent .gameBlock.fish")
            .addClass("display");
        }
        if(log == 6) 
        {
            $(".gtContent .gameBlock")
            .removeClass("display");

            $(".gtContent .gameBlock.board")
            .addClass("display");
        }
    })
})

$(function(){
    $("footer ul li").click(function(){
        $(this)
        .addClass("active");

        $(this).siblings()
        .removeClass("active")
    })
})

// $(function(){
//     var w = $(window).innerWidth();
//     var midX = $(".gameType .midLine").offset().top;
//     var n = $(".gameType .top li .lideco");
//     var h= $(n).prop("scrollHeight");
//     var nA = $(".gameType .top li.active .lideco");

//     if(w >= 1350)
//     {
//         $(n).offset({
//             top : midX + 50,
//         })
//         $(nA).offset({
//             top : midX - (h - 3),
//         })

//         $(n,nA)
//         .css({
//             "width" : "7.9%",
//             "height" : "0",
//             "padding-top" : "10%",
//         })
//     }
//     else
//     {
//         $(n,nA)
//         .css({
//             "width" : "9px",
//             "height" : "11px",
//             "padding-top" : "0"
//         })

//         $(nA).offset({
//             top : midX - 8.5,
//         })
//     }

//     $(".gameType .top li").click(function(){
//         var w = $(window).innerWidth();
//         var midX = $(".gameType .midLine").offset().top;
//         var n = $(this).find(".lideco");
//         var h= $(n).prop("scrollHeight");

//         $(this)
//         .siblings().find(".lideco")
//         .offset({
//             top : midX + 50,
//         })

//         if(w >= 1350)
//         {
//             $(n).offset({
//                 top : midX - (h - 3),
//             })
//         }
//         else
//         {
//             $(n)
//             .css({
//                 "width" : "9px",
//                 "height" : "11px",
//                 "padding-top" : "0"
//             })

//             $(n).offset({
//                 top : midX - 8.5,
//             })
//         }
//     })

//     $(window).resize(function(){
//         var w = $(window).innerWidth();
//         var midX = $(".gameType .midLine").offset().top;
//         var n = $(".gameType .top li .lideco");
//         var h= $(n).prop("scrollHeight");
//         var nA = $(".gameType .top li.active .lideco");

//         if(w >= 1350)
//         {
//             $(n).offset({
//                 top : midX + 50,
//             })
//             $(nA).offset({
//                 top : midX - (h - 3),
//             })

//             $(n,nA)
//             .css({
//                 "width" : "7.9%",
//                 "height" : "0",
//                 "padding-top" : "10%",
//             })
//         }
//         else
//         {
//             $(n,nA)
//             .css({
//                 "width" : "9px",
//                 "height" : "11px",
//                 "padding" : "0"
//             })

//             $(n).offset({
//                 top : midX + 50,
//             })

//             $(nA).offset({
//                 top : midX - 8.5,
//             })
//         }
//     })
// })

