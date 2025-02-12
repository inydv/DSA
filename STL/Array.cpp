// STATIC ARRAY
#include <iostream>
#include <array>
using namespace std;

int main()
{
    // Initialization
    array<int, 3> a = {1, 2, 3};
    
    // Get / Front / Back Element
    cout << "Element at 2nd Index : " << a.at(2);
    cout << "First Element : " << a.front();
    cout << "Last Element : " << a.back();

    // Size of an filled element
    int size = a.size();

    // Loop
    for (int i : a)
        cout << a[i];

    // Check empty or not
    cout << "Empty or not : " << a.empty();

    return 0;
}