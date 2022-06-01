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

        var dapa = $('.ed1').serialize();

        var name =  $('#nm_d').val();

        if(name = ""){
            alert('Deu pau maluco')
        }

        else{

            $.ajax({
                type:'POST',
                dataType: 'JSON',
                data: dapa,
                url: '../php/alter.php',
                success:function(dao){
                    $('#su').append(`

                    <p>Edição Feita feito</p>

                    `)
    
                }

            })

        }
        
    })

    
    //Delete
    
    $('.delete').click(function(e){

        e.preventDefault();

        var dapa2 = $('.ed1').serialize();
        
        $.ajax({
            type:'POST',
            dataType: 'JSON',
            data: dapa2,
            url: '../php/delete.php',
            success:function(da2){
                $('#su').append(`
                <p>Secesso</p>
                `)

            }

        })


    })


})