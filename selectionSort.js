var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

var selectionSort = function(array) {
    for(var i = 0; i < array.length; i++) {
        var lowestIndex = indexOfMinimum(array, i);
        swap(array, i, lowestIndex);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
println("Array after sorting:  " + array);

Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);
var array2 = [11, 2, 14, 29, 28, 16, 32, 45, 58];
selectionSort(array2);
println("Array2 after sorting: " + array2);
Program.assertEqual(array2, [2,11,14,16,28,29,32,45,58]);

