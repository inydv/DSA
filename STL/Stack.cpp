#include <iostream>
#include <stack>
using namespace std;

int main()
{
    stack<string> cars;
    stack<string> cars = {"Volvo", "BMW", "Ford", "Mazda"};

    // Push / Pop
    cars.push("Volvo");
    cars.pop();

    // Get top
    cout << cars.top(); // Outputs "Mazda"

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