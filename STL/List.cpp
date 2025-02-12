#include <iostream>
#include <list>
using namespace std;

int main()
{
    list<string> cars;
    list<string> cars = {"Volvo", "BMW", "Ford", "Mazda"};

    // Push / Pop
    cars.push_front("Tesla");
    cars.push_back("VW");
    cars.pop_front();
    cars.pop_back();

    // Get / Front / Back Element
    cout << cars.front(); // Outputs Volvo
    cout << cars.back();  // Outputs Mazda

    // Size of an filled element
    cout << "Size : " << cars.size();

    // Loop
    for (string car : cars)
    {
        cout << car << "\n";
    }

    // Empty vector
    v.clear();

    // Check empty or not
    v.empty();

    return 0;
}