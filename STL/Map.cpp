// Accessible by keys (not index), and each key is unique.
// Automatically sorted in ascending order by their keys.

#include <iostream>
#include <map>
using namespace std;

int main()
{
    map<string, int> people;
    map<string, int> people = {{"John", 32}, {"Adele", 45}, {"Bo", 29}};

    // Push / Pop
    people["Anja"] = 30;
    people.insert({"Jenny", 22});
    people.erase("John");

    // Trying to add two elements with equal keys
    people.insert({"Jenny", 22});
    people.insert({"Jenny", 30});

    // Access
    cout << "John is: " << people["John"] << "\n";
    cout << "Adele is: " << people.at("Adele") << "\n";

    // Size of an filled element
    cout << "Size : " << people.size();
    cout << people.count("John"); // Outputs 1 (John exists)

    // Loop
    for (auto person : people)
    {
        cout << person.first << " is: " << person.second << "\n";
    }

    // Empty vector
    people.clear();

    // Check empty or not
    people.empty();

    return 0;
}