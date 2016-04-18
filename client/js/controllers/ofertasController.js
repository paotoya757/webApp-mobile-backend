/**
 * Created by peter on 1/03/2016.
 */

angular.module('WebAppLugar')
  .controller('ofertasCtrl',['$scope', '$location', '$firebaseArray',
    function ( $scope, $location, $firebaseArray ){

      //--------------------------------------------------------------------------------------
      // Variables
      //--------------------------------------------------------------------------------------

      var ref = new Firebase( 'https://incandescent-heat-3185.firebaseio.com/ofertas');
      $scope.ofertas = $firebaseArray( ref );

      $scope.ofertas.$add(
        {
          id:17 ,
          numInteresados: 19 ,
          clientes:[]
        }
      );


      //--------------------------------------------------------------------------------------
      // Model ( 1 , 2 , 3 )
      // ofertas >> { "id" , "numInteresados" , clientes:[ {nombre , celular} }
      //--------------------------------------------------------------------------------------

      //--------------------------------------------------------------------------------------
      // Functions
      //--------------------------------------------------------------------------------------

      $scope.$watch( '$scope.ofertas' , function(){
        var data = [];
        var colors = [];
        for( var i = 0 ; i<$scope.ofertas.length ; i++) {
          var oferta = $scope.ofertas[i];
          data[i] = {label: oferta.id, value: oferta.numInteresados};
          $scope.colors[i] = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        }

        Morris.Donut({element: 'donut-chart',
          data: data ,
          colors: colors
        });
      } );


    }]);
