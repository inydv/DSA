// TIME COMPLEXITY : O(n)

#include <iostream>
using namespace std;

bool search(int arr[], int size, int key)
{
    for (int i = 0; i < size; i++)
    {
        if (arr[i] == key)
            return 1;
    }

    return 0;
}

int main()
{
    int arr[10] = {5, 2, 3, 8, 9, 5, 6, 4, 2, 55};
    bool found = search(arr, 10, 55);

    if (found)
        cout << "Key is present";
    else
        cout << "Key is not present";

    return 0;
}