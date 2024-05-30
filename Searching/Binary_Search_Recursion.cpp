#include <iostream>
using namespace std;

bool binarySearch(int *arr, int start, int end, int key)
{
    // BASE CASE
    if (start > end)
        return false;

    // PROCESSING
    int mid = start + (end - start) / 2;

    if (arr[mid] == key)
        return true;

    // RECURSIVE CALL
    if (arr[mid] < key)
        return binarySearch(arr, mid + 1, end, key);
    else
        return binarySearch(arr, start, mid - 1, key);
}

int main()
{
    int arr[6] = {2, 4, 6, 8, 10, 12};
    int search = binarySearch(arr, 0, 6, 10);

    if (search == true)
        cout << "Element Found";
    else
        cout << "Element Not Found";
    return 0;
}