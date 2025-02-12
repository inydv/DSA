#include <iostream>
#include <deque>
using namespace std;

int main()
{
    deque<string> cars;
    deque<string> cars = {"Volvo", "BMW", "Ford", "Mazda"};

    // Push / Pop
    cars.push_front("Volvo");
    cars.push_back("Volvo");
    cars.pop_front();
    cars.pop_back();

    // Get / Front / Back Element
    cout << "First Element : " << cars.at(0);
    cout << "First Element : " << cars.front();
    cout << "Last Element : " << cars.back();

    // Size of an filled element
    cout << "Size : " << cars.size();

    // Loop
    for (int i : cars)
    {
        cout << i << "";
    }

    // Check empty or not
    cars.empty();

    return 0;
}