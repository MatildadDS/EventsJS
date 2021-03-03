window.onload = function () {

    // document.getElementById('id1').addEventListener('click', fonction1 );
    // function fonction1(){

    // 	alert('Vous avez cliqué dans la div 1 ! ');
    // }

    //Autre syntaxe : 
    document.getElementById('id1').addEventListener('click', function () {

        alert('Vous avez cliqué dans la div 1 ! ');
    });

    //-------------------------------------------------------------------------
    document.getElementById('id2').addEventListener('dblclick', function () {

        alert("Vous avez double cliqué dans la div 2 !");
    });

    //-------------------------------------------------------------------------
    document.getElementById('id3').addEventListener('mouseover', function () {

        alert('Vous avez passé la souris dans la div 3 !');
    });

    //-------------------------------------------------------------------------
    document.getElementById('id4').addEventListener('mouseout', function () {

        alert('Vous avez sorti la souris de la div 4 !');
    });

    //-------------------------------------------------------------------------
    document.getElementById('id55').addEventListener('blur', function () {

        alert('Vous avez quitté l\'input de la div 5 !');
    });

    //-------------------------------------------------------------------------
    // document.getElementById('id66').addEventListener('focus', function(){

    // 	alert('Vous avez sélectionné l\'input de la div 6 !');
    // } );

    //-------------------------------------------------------------------------
    document.getElementById('id77').addEventListener('submit', function () {

        alert('Vous avez submit dans la div 7 !');
    });

}