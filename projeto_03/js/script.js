window.onload = function(){
    
    var map;

    function initializing(){
        var mapProp = {
            center: new google.maps.LatLng(-25.444673, -49.242527),
            scrollWheel: false,
            zoom: 12,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        } //função declarando proporções do mapa

        map = new google.maps.Map(document.getElementById("mapa"),mapProp);
        //var map recebendo parametros do objeto mapProp
    }

    function addMarker(lat,long,icon,content,click){ // função addMarker com paramentros latitude, longitude, conteúdo(icone) e evento
        var latLng = {'lat':lat,'lng':long}; // LatLng(objeto) recebendo valores

        var marker = new google.maps.Marker({ // marker instanciando objeto google.maps e passando valores para o objeto
            position:latLng, //poscição (obj LatLng) passada quando chamamos a função
            map:map, // propriedade mapa definida na função initializing
            icon:icon // recebe icone passado ao chamar função
        });

        var infoWindow = new google.maps.InfoWindow({ // mensagem exibida acima do icone
            content:content, // texto escrito
            maxWidth:1000, // largura maxima
            pixelOffset: new google.maps.Size(0,20) // posição da infoWindow
        });
        
        if(click == true){

        google.maps.event.addListener(marker,'click',function(){ //evento de click
            infoWindow.open(map,marker); // se clicar, o infoWindow será mostrado na tela
        }); 
        }else{
            infoWindow.open(map,marker); // se a condição for falsa, o infoWindow será apenas mostrado na tela
        }
    }

    initializing(); // chamando função
    var conteudo = '<p style="color: rgb(12,10,87); font-size: 14px; padding: 5px 5px;">Meu Endereço Aqui!</p>' //tag HTML
    addMarker(-25.441105, -49.276855,'images/menu.png',conteudo,true); // chamando add marker e passando parametros

    setTimeout(function(){ //executa a função depois do tempo especificado
        map.panTo({'lat':-23.550520,'lng':-46.633309}); // irá mudar a posição do mapa para a latitude e longitudo especificada
        map.setZoom(5);
        prompt("Digite o seu nome");
    },4000) // 4 segundos
}