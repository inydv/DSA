// TIME COMPLEXITY : O(n^2)
/*
BASE CASE : O(n)
WORST CASE : O(n^2)
*/

/*
Like?
Like an Card, we store first card(element) then arrange others according to it.
*/

#include <iostream>
using namespace std;

void insertionSort(int arr[], int size)
{
    for (int i = 1; i < size; i++)
    {
        int temp = arr[i];
        int j = i - 1;

        while (j >= 0 && arr[j] > temp)
        {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        arr[j + 1] = temp;
    }
}

int main()
{
    int arr[5] = {6, 2, 8, 4, 10};
    insertionSort(arr, 5);

    for (int i = 0; i < 5; i++)
        cout << arr[i] << " ";

    return 0;
}