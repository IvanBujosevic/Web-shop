$(document).ready(function(){
    $('#filtriranje').hide();
    $('#searching').hide();
    ispis_filter();

    let tog = false;
    for(let i = 0; i < data.length; i++){
        $('#shop').append('<div class="proizvod"><h2>'+data[i].name+data[i].cena +'</h2></div>');
    }
    $('#slider').on('click', function(){
        if(tog == false){
            $('#prozorce').animate({left: '0%'});
            tog = true;
        }else{
            $('#prozorce').animate({left: '8%'});
            tog = false;
        }
        
    })
    $('#filter').on('click', function(){
        $('#searching').hide();
        $('#filtriranje').hide();
       let o = $(this).offset();
        let os = $('#shop').offset();
        let hs = $('#shop').height();
        let ws = $('#shop').width();
        let h = $(this).css('height');
        let w =$(this).css('width');
        $('#filtriranje').css({'height': h, 'width': w, 'background-color': 'aqua', 'position': 'absolute', 'overflow-y': 'scroll'}).offset(o).show().animate({'left': os.left, 'top': os.top}, 'slow', function(){
            $('#filtriranje').animate({'height': hs+'px', 'width': ws+'px'});
            
            
        });
        $('.proizvod').remove();
    })
    $('#search').on('click', function(){
        $('#searching').hide();
        $('#filtriranje').hide();
        let o = $(this).offset();
         let os = $('#shop').offset();
         let hs = $('#shop').height();
         let ws = $('#shop').width();
         let h = $(this).css('height');
         let w =$(this).css('width');
         $('#conteiner').append('<div id = "searching"></div>');
         $('#searching').css({'height': h, 'width': w, 'background-color': 'green', 'position': 'absolute', 'overflow-y': 'scroll'}).offset(o).show().animate({'left': os.left, 'top': os.top}, 'slow', function(){
             $('#searching').animate({'height': hs+'px', 'width': ws+'px'});
             
         });
         $('.proizvod').remove();
     })
     function ispis_filter(){
        let kej = Object.keys(data[0]);
        for(let i = 0; i < kej.length; i++){
            
            $('#filtriranje').append('<h2 class = "kategorija">'+kej[i]+'</h2>');
            for(let j = 0; j < data.length; j++){
                
                //$('#filtriranje').append('<h4 class = "'+i+'kat">'+data[j][kej[i]]+'<h4>');
                $('#filtriranje').append('<h4 class = "'+[kej[i]]+'">'+data[j][kej[i]]+'<h4>');
                
                
            }
        }
        $('#filtriranje').children('h4').hide();
        $('.kategorija').on('click', function(){
            $('#filtriranje').children('h4').hide();
            $('.'+$(this).text()).show();
        })
        
        
     }
})