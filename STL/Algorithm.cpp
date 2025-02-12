#include <iostream>
#include <algorithm>
using namespace std;

int main()
{
    vector<string> cars = {"Volvo", "BMW", "Ford", "Mazda"};
    vector<int> numbers = {1, 7, 3, 5, 9, 2};

    // Sort cars alphabetically
    sort(cars.begin(), cars.end());
    sort(numbers.begin(), numbers.end());

    // Sort numbers numerically in reverse order
    sort(numbers.rbegin(), numbers.rend());

    // Sort numbers numerically, starting from the fourth element (only sort 5, 9, and 2)
    sort(numbers.begin() + 3, numbers.end());

    // Search for the number 3
    auto it = find(numbers.begin(), numbers.end(), 3);

    // Find the first value that is greater than 5 in the sorted vector
    // upper_bound() function is typically used on sorted data structures
    sort(numbers.begin(), numbers.end());
    auto it = upper_bound(numbers.begin(), numbers.end(), 5);

    // Find the smallest number
    auto it = min_element(numbers.begin(), numbers.end());

    // Find the largest number
    auto it = max_element(numbers.begin(), numbers.end());
    
    // Copy elements from numbers to copiedNumbers
    vector<int> copiedNumbers(6);
    copy(numbers.begin(), numbers.end(), copiedNumbers.begin());

    // Fill all elements in the numbers vector with the value 35
    vector<int> numbers(6);
    fill(numbers.begin(), numbers.end(), 35);

    return 0;
}