// TIME COMPLEXITY : O(log n)

/*
Using Creteria?
Value should be in the montonic function (sorted in the ASC/DESC order)
*/

/*
Pseduo Code
step 1: Find Middle Key.
Step 2: Check whether middle key is greater than the searching key or not.
step 3: If greater than the middle point then start point is middle point + 1 and find the new middle key and so on.
        If lesser than the middle point then end point is middle point - 1 and find the new middle key and so on.
        if searching key is equal to middle key then we get the answer.
*/

#include <iostream>
using namespace std;

int search(int arr[], int size, int key)
{
    int start = 0;
    int end = size - 1;
    int mid = (start + end) / 2;

    while (start <= end)
    {
        if (arr[mid] == key)
            return mid;
        if (key > arr[mid])
            start = mid + 1;
        else
            end = mid - 1;

        mid = (start + end) / 2;
    }

    return -1;
}

int main()
{
    int arr[6] = {2, 4, 6, 8, 10, 12};
    int index = search(arr, 6, 10);

    if (index == -1)
        cout << "Element Not Found";
    else
        cout << "Index if 10 : " << index;

    return 0;
}

/*
What if start = 2^31 - 1 and end = 2^31 - 1?
mid = (start + end)/2;
mid will be beyond the range of integer.

To solve this,
mid = start + (end - start)/2  ----> Use This

mid = start + end/2 - start/2
mid = start/2 + end/2
mid = (start + end)/2
*/