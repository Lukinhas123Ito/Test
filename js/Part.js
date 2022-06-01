//All part of Jquery
$(document).ready(function(){
    //Part to insert

    $('.add').click(function(e){

        e.preventDefault();

        var da = $('.pao').serialize();
    

        var name =  $('#nm').val();

        if(name = ""){
            alert('Deu pau maluco')
        }

        else{

            $.ajax({
                type:'POST',
                dataType: 'JSON',
                data: da,
                url: '../php/insert.php',
                success:function(dao){
                    $('#res').append(`

                    <p>Castro feito</p>

                    `)
    
                }

            })

        }
        

    })

    //Seach

    $('#seach').keypress(function(e){

        e.preventDefault();

        $.ajax({

            type:'POST',
            url:'../php/seach.php',
            data:{ sea:$('#seach').val()},
            success: function(data){

                $('#table_a').html(data);

            }

        })
    })


    //Edit
    $('.edit').click(function(e){

        e.preventDefault();

        var da = $('.pao').serialize();

        $.ajax({
            type:'POST',
            dataType: 'JSON',
            data: da,
            url: '../php/alter.php',
            success:function(da2){
                $('#res').append(`
                <p>Alteração feita feito</p>
                `)

            }

        })
       
        
    })

    
    //Delete
    
    $('.delete').click(function(e){

        e.preventDefault();

        var da = $('.pao').serialize();
        
        $.ajax({
            type:'POST',
            dataType: 'JSON',
            data: da,
            url: '../php/delete.php',
            success:function(da2){
                $('#res').append(`
                <p>Alteração feita feito</p>
                `)

            }

        })


    })


})