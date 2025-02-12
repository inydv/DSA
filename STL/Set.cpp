// Are sorted automatically in ascending order.
// Are unique, meaning equal or duplicate values are ignored.
// Can be added or removed, but the value of an existing element cannot be changed.
// Cannot be accessed by index numbers, because the order is based on sorting and not indexing.

#include <iostream>
#include <set>
using namespace std;

int main()
{
    set<string> cars;
    set<string> cars = {"Volvo", "BMW", "Ford", "Mazda"};
    set<int, greater<int>> numbers = {1, 7, 3, 2, 5, 9};

    // Push / Pop
    cars.insert("Tesla");
    cars.erase("Volvo");

    // Size of an filled element
    cout << "Size : " << cars.size();

    // Loop
    for (int i : cars)
    {
        cout << i << "";
    }

    // Empty vector
    v.clear();

    // Check empty or not
    cars.empty();

    return 0;
}