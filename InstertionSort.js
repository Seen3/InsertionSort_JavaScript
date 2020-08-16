//This is insertion sort
function insSort(arr)
{
  let position,value;//making variables
  for (let i=0;i<arr.length;i++)
  {
    value=arr[i]; //taking elements to compare
    position=i;   
    while(position>0 && arr[position-1]>value) //comparing
    {
      arr[position]=arr[position-1]; //swap
      position=position-1;           //check for elements before it
    }
    arr[position]=value; //replacing the value
  }
  return arr;
}
