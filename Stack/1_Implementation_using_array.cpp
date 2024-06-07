#include <iostream>
using namespace std;

class Stack
{
public:
    int *arr;
    int top;
    int size;

    Stack(int size)
    {
        this->size = size;
        arr = new int[size];
        top = -1;
    }

    void push(int element)
    {
        // CHECK SPACE AVAILABLE OR NOT
        if (size - top > 1)
        {
            top++;
            arr[top] = element;
        }
        else
        {
            cout << "Stack Overflow";
        }
    }

    void pop()
    {
        // CHECK SINGLE ELEMENT AVAILABLE OR NOT
        if (top >= 0)
        {
            top--;
        }
        else
        {
            cout << "Stack Underflow";
        }
    }

    int top()
    {
        if (top >= 0)
        {
            return arr[top];
        }
        else
        {
            cout << "Stack is Empty" << endl;
        }
    }

    bool isEmpty()
    {
        if (top == = -1)
        {
            return true;
        }

        return false;
    }
};

int main()
{
    Stack st(5);

    st.push(22);
    st.push(33);
    st.push(44);

    cout << st.top() << endl;

    st.pop();

    cout << st.top() << endl;

    return 0;
}