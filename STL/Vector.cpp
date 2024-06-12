// DYNAMIC ARRAY (IF EXCEED THE SIZE THEN DOUBLES ITSELF)
#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> v;
    vector<int> a(5, 1); // ARRAY WITH SIZE 5 AND FILL WITH 1
    vector<int> last(a); // CREATE ARRAY WITH ALL THE VALUE OF a

    cout << "Capacity : " << v.capacity(); // Length of an Array

    v.push_back(2);

    cout << "Size : " << v.size(); // Inserted Element

    cout << "Element at 2nd Index : " << v.at(2);
    cout << "First Element : " << v.front();
    cout << "Last Element : " << v.back();

    v.pop_back();

    for (int i : v)
    {
        cout << i << "";
    }

    v.clear();

    return 0;
}