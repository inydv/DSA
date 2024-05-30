// TIME COMPLEXITY : O(n^2)

/*
Usecase?
When size of the array is small
*/

/*
Pseduo Code
step 1: Run loop till length of array - 1.
Step 2: Run nested loop from i + 1, till last element of array.
        step 2.1: if element is less than the ith element then store in variable.
step 3: replace the elements.
*/

#include <iostream>
using namespace std;

void selectionSort(int arr[], int size)
{
    for (int i = 0; i < size - 1; i++)
    {
        int minIndex = i;

        for (int j = i + 1; j < size; j++)
        {
            if (arr[minIndex] > arr[j])
                minIndex = j;
        }

        swap(arr[minIndex], arr[i]);
    }
}

int main()
{
    int arr[5] = {6, 2, 8, 4, 10};
    selectionSort(arr, 5);

    for (int i = 0; i < 5; i++)
        cout << arr[i] << " ";

    return 0;
}