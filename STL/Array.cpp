// STATIC ARRAY
#include <iostream>
#include <array>
using namespace std;

int main()
{
    int basic[3] = {1, 2, 3};
    array<int, 3> a = {1, 2, 3};

    int size = a.size();

    cout << "Element at 2nd Index : " << a.at(2);
    cout << "Empty or not : " << a.empty();

    cout << "First Element : " << a.front();
    cout << "Last Element : " << a.back();

    return 0;
}