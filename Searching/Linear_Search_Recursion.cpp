#include <iostream>
using namespace std;

int getIndex(int arr[], int size, int num, int index)
{
    if (index == size)
        return -1;
    else if (arr[index] == num)
        return index;
    else
        return getIndex(arr, size, num, ++index);
}

int main()
{
    int arr[5] = {1, 2, 3, 4, 5};
    int size = sizeof(arr) / sizeof(arr[0]);
    int num = 3;
    int index = 0;

    cout << "Index : " << getIndex(arr, size, num, index);

    return 0;
}