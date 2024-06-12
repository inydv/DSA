#include <iostream>
using namespace std;

class Node
{
public:
    int data;
    Node *next;

    Node(int data)
    {
        this->data = data;
        this->next = NULL;
    }

    ~Node()
    {
        if (this->next != NULL)
        {
            delete next; // delete recursively
            this->next = NULL;
        }
    }
};

class Stack
{
private:
    Node *topNode;

public:
    Stack()
    {
        topNode = NULL;
    }

    void push(int element)
    {
        Node *newNode = new Node(element);
        newNode->next = topNode;
        topNode = newNode;
    }

    void pop()
    {
        if (topNode != NULL)
        {
            Node *temp = topNode;
            topNode = topNode->next;
            delete temp;
        }
        else
        {
            cout << "Stack Underflow" << endl;
        }
    }

    int top()
    {
        if (topNode != NULL)
        {
            return topNode->data;
        }
        else
        {
            cout << "Stack is Empty" << endl;
            return -1; // Return a default value
        }
    }

    bool isEmpty()
    {
        return topNode == NULL;
    }

    ~Stack()
    {
        while (topNode != NULL)
        {
            Node *temp = topNode;
            topNode = topNode->next;
            delete temp;
        }
    }
};

int main()
{
    Stack st;

    st.push(22);
    st.push(33);
    st.push(44);

    cout << st.top() << endl;

    st.pop();

    cout << st.top() << endl;

    return 0;
}
