// TIME COMPLEXITY : O(nlogn)
// SPACE COMPLEXITY : O(n)

/*
AVG CASE : O(nlogn)
BEST CASE : O(nlogn)
WORST CASE : O (n^2)
*/

/*
Basic Idea:
1. Divide And Conquer Method (Recursion)
2. Find the pivot point
3. Left side elements of pivot point is less than the pivot point element
4. Right side elements of pivot point is greater than the pivot point element
*/

/*
Why Quick Sort is preferred over Merge Sort for sorting array?
allocating  and de-allocating the extra space used for merge sort.

Why Merge Sort is preferred over Quick Sort for linked list?
Quick Sort requires random access to elements in the list, which is not possible in linked lists.
*/

#include <iostream>
using namespace std;

int partition(int *arr, int start, int end)
{
    int pivot = arr[start];

    // COUNT SMALLER NUMBER OF ELEMENT THAN THE PIVOT POINT
    int count = 0;
    for (int i = start + 1; i <= end; i++)
    {
        if (arr[i] <= pivot)
            count++;
    }

    // PLACE PIVOT AT RIGHT POSITION
    int pivotIndex = start + count;
    swap(arr[pivotIndex], arr[start]);

    // HANDLE LEFT AND END PART
    int i = start, j = end;
    while (i < pivotIndex && j > pivotIndex)
    {
        while (arr[i] < pivot)
            i++;
        while (arr[j] > pivot)
            j--;

        if (i < pivotIndex && j > pivotIndex)
            swap(arr[i++], arr[j--]);
    }

    return pivotIndex;
}

void quickSort(int *arr, int start, int end)
{
    // BASE CASE
    if (start >= end)
        return;

    int p = partition(arr, start, end);

    quickSort(arr, start, p - 1);
    quickSort(arr, p + 1, end);
}

int main()
{
    int arr[5] = {6, 2, 8, 4, 10};
    quickSort(arr, 0, 5);

    for (int i = 0; i < 5; i++)
        cout << arr[i] << " ";

    return 0;
}