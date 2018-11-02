(function(){
    angular.module('app.directives' , [])
        //ͷ������
        .directive('header',function(){
            return{
                restrict:'EA',
                replace:true,
                templateUrl:'templates/header.html',
                scope:{
                    title:'@',
                    rightTitle:'@'
                }
            }
        })

        //���¿���
        .directive('newPhoto',function(){
            return{
                restrict:'EA',
                replace:true,
                templateUrl:'templates/newPhoto.html',
                scope:{
                    data:'='
                }

            }
        })
        //���Ż�ɴ
        .directive('hotDress',function(){
            return{
                restrict:'EA',
                replace:true,
                templateUrl:'templates/hotDress.html'
            }
        })

        //ͷ��-����
        .directive('backHeader',function(){
            return{
                restrict:'EA',
                replace:true,
                templateUrl:'templates/backHeader.html',
                scope:{
                    title:'@',
                    rightTitle:'@',
                    callback:'&'
                },

                controller:function($scope){
                    $scope.back1 = function(){
                        if($scope.callback){
                            $scope.callback();
                        }
                    }
                }
            };
        })

        /*//weddingDress��������(���ò���汾)
        .directive("infiniteScroll", function () {
            return {
                controller: "weddingController"
            };
        })

        //photographyPackage��������
        .directive("photographyScroll", function () {
            return {
                controller: "photographyPackageController"
            };
        })*/

        /**********************/
        .directive('pageHeader',function(){
            return{
                restrict:'EA',
                replace:true,
                templateUrl:'templates/pageHeader.html',
                scope:{
                    title:'@'
                }
            };
        })


        .directive('pageFooter',function(){
            return{
                restrict:'EA',
                replace:true,
                templateUrl:'templates/pageFooter.html',
                scope:{
                    selectIndex:'='
                }
            };
        })

        .directive('chose',function(){
            return{
                restrict:'EA',
                replace:true,
                templateUrl:'templates/chose.html',
                scope:false
            };
        })

})();
