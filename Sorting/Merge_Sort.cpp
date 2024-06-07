// TIME COMPLEXITY : O(nlogn)
// SPACE COMPLEXITY : O(n)

/*
Basic Idea:
Divide And Conquer Method (Recursion)
*/

/*
APPLICATION:
1. sorting linked list
2. Inversion count problems
3. Finding the median of an array
*/

#include <iostream>
using namespace std;

void merge(int *arr, int start, int end)
{
    int mid = start + (end - start) / 2;

    // LENGTH OF TWO SEPRATED ARRAY
    int length1 = mid - start + 1;
    int length2 = end - mid;

    // COPY THE TWO SEPRATED ARRAY
    int *first = new int[length1];
    int *second = new int[length2];

    // COPY VALUES TO ARRAY 1
    int mainArrayIndex = start;
    for (int i = 0; i < length1; i++)
    {
        first[i] = arr[mainArrayIndex++];
    }

    // COPY VALUES TO ARRAY 2
    mainArrayIndex = mid + 1;
    for (int i = 0; i < length2; i++)
    {
        second[i] = arr[mainArrayIndex++];
    }

    // MERGE TWO SORTED ARRAY
    int index1 = 0;
    int index2 = 0;
    mainArrayIndex = start;

    while (index1 < length1 && index2 < length2)
    {
        if (first[index1] < second[index2])
        {
            arr[mainArrayIndex++] = first[index1++];
        }
        else
        {
            arr[mainArrayIndex++] = second[index2++];
        }
    }

    while (index1 < length1)
    {
        arr[mainArrayIndex++] = first[index1++];
    }

    while (index2 < length2)
    {
        arr[mainArrayIndex++] = second[index2++];
    }

    delete[] first;
    delete[] second;
}

void mergeSort(int *arr, int start, int end)
{
    // BASE CASE
    if (start >= end)
        return;

    int mid = start + (end - start) / 2;

    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);

    merge(arr, start, end);
}

int main()
{
    int arr[5] = {6, 2, 8, 4, 10};
    mergeSort(arr, 0, 5);

    for (int i = 0; i < 5; i++)
        cout << arr[i] << " ";

    return 0;
}