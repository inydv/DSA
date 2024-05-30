// TIME COMPLEXITY : O(n^2)
/*
BASE CASE : O(n)
WORST CASE : O(n^2)
*/

/*
Usecase?
In ith round, we get the ith largest element
*/

/*
Pseduo Code
step 1: Run loop from 1, till length of array - 1.
Step 2: Run nested loop from 0, till length of array - i.
        step 2.1: if element is greater than the ahead element then replace the elements.
*/

#include <iostream>
using namespace std;

void bubbleSort(int arr[], int size)
{
    for (int i = 1; i < size; i++)
    {
        bool swapped = false;

        for (int j = 0; j < size - i; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }

        if (!swapped)
            break;
    }
}

int main()
{
    int arr[5] = {6, 2, 8, 4, 10};
    bubbleSort(arr, 5);

    for (int i = 0; i < 5; i++)
        cout << arr[i] << " ";

    return 0;
}