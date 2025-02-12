// DYNAMIC ARRAY (IF EXCEED THE SIZE THEN DOUBLES ITSELF)
#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> v;
    vector<int> a(5, 1); // ARRAY WITH SIZE 5 AND FILL WITH 1
    vector<int> last(a); // CREATE ARRAY WITH ALL THE VALUE OF a
    vector<string> cars = {"Volvo", "BMW", "Ford", "Mazda"};

    // Push / Pop
    v.push_back(2);
    v.pop_back();

    // Get / Front / Back Element
    cout << "Element at 2nd Index : " << v.at(2);
    cout << "First Element : " << v.front();
    cout << "Last Element : " << v.back();

    // Size of an filled element
    cout << "Size : " << v.size();

    // Capacity of an vector
    cout << "Capacity : " << v.capacity();

    // Loop
    for (int i : v)
    {
        cout << i << "";
    }

    // Empty vector
    v.clear();

    // Check empty or not
    v.empty();

    return 0;
}