#include <iostream>
#include <queue>
using namespace std;

int main()
{
    queue<string> cars;
    queue<string> cars = {"Volvo", "BMW", "Ford", "Mazda"};

    // Push / Pop
    cars.push("Volvo");
    cars.pop();

    // Front / Back Element
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