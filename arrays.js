var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];
function addElementToBeginningOfArray(array,element){
  var newarray = [element,...array];

  return newarray;
}
function destructivelyAddElementToBeginningOfArray(array,element){
  array = [element,...array];
  return array;
}
function addElementToEndOfArray(array,element){
  newaray = [...array,element];
  return newaray;
}
function destructivelyAddElementToEndOfArray(array,element){
  array = [...array,element];
  return array;
}
function accessElementInArray(array,index){
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}
function removeElementFromBeginningOfArray(array){
  return newaray = array.slice(1);

}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}
function removeElementFromEndOfArray(array){
  aray = array.slice(0,array.length - 1);
  return aray;
}
