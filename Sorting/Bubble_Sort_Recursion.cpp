#include <iostream>
using namespace std;

void bubbleSort(int *arr, int size)
{
    // BASE CASE
    if (size == 0 || size == 1)
        return;

    // PROCESSING
    for (int i = 0; i < size; i++)
    {
        if (arr[i] > arr[i + 1])
        {
            swap(arr[i], arr[i + 1]);
        }
    }

    bubbleSort(arr, size - 1);
}

int main()
{
    int arr[5] = {6, 2, 8, 4, 10};
    bubbleSort(arr, 5);

    for (int i = 0; i < 5; i++)
        cout << arr[i] << " ";

    return 0;
}