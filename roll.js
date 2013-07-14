function RollController($scope) {
    function fisherYates ( myArray ) {
        console.log('shuffle');
        var i = myArray.length, j, temp;
        if ( i === 0 ) return false;
        while ( --i ) {
            j = Math.floor( Math.random() * ( i + 1 ) );
            temp = myArray[i];
            myArray[i] = myArray[j]; 
            myArray[j] = temp;
        }
    }
    
    var index = 0,
    possibleRolls = [
        2,
        3, 3,
        4, 4, 4,
        5, 5, 5, 5,
        6, 6, 6, 6, 6,
        7, 7, 7, 7, 7, 7,
        8, 8, 8, 8, 8,
        9, 9, 9, 9,
        10, 10, 10,
        11, 11,
        12
    ];
    
    $scope.currentRoll = 0;
    
    $scope.toggle = true;
    
    $scope.roll = function() {
        $scope.currentRoll = possibleRolls[index];
        
        ++index;
        if (index >= possibleRolls.length) {
            index = 0;
            fisherYates(possibleRolls);
        }
        
        $scope.toggle = !$scope.toggle;
    };
    
    fisherYates(possibleRolls);
}