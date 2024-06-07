#include <iostream>
#include <stack>
using namespace std;

int main()
{
    // CREATION OF STACK
    stack<int> s;

    // PUSH OPERATION
    s.push(2);

    // POP OPERATION
    s.pop();

    // PRINT TOP ELEMENT
    cout << s.top();

    // CHECK WHEATHER STACK IS EMPTY OR NOT
    if (s.empty())
    {
        cout << "Stack is empty";
    }
    else
    {
        cout << "Stack is not empty";
    }

    // SIZE OF STACK
    cout << "Size of stack : " << s.size();

    return 0;
}