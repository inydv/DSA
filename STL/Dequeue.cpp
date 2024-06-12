#include <iostream>
#include <deque>
using namespace std;

int main()
{
    // CREATION OF QUEUE
    deque<int> q;

    // PUSH OPERATION
    q.push_front(2);
    q.push_back(3);

    // FRONT OF QUEUE
    cout << q.front();

    // BACK OF QUEUE
    cout << q.back();

    // POP OPERATION
    q.pop_front();
    q.pop_back();

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