#include <iostream>
#include <queue>
using namespace std;

int main()
{
    // CREATION OF QUEUE
    queue<int> q;

    // PUSH OPERATION
    q.push(2);

    // FRONT OF QUEUE
    cout << q.front();

    // BACK OF QUEUE
    cout << q.back();

    // POP OPERATION
    q.pop();

    // CHECK WHEATHER QUEUE IS EMPTY OR NOT
    if (q.empty())
    {
        cout << "Queue is empty";
    }
    else
    {
        cout << "Queue is not empty";
    }

    // SIZE OF STACK
    cout << "Size of Queue : " << s.size();

    return 0;
}