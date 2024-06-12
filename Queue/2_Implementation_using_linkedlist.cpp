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
};

class Queue
{
    Node *front;
    Node *rear;

public:
    Queue()
    {
        front = NULL;
        rear = NULL;
    }

    bool isEmpty()
    {
        return front == NULL;
    }

    void enqueue(int data)
    {
        Node *newNode = new Node(data);
        if (rear == NULL)
        {
            front = rear = newNode;
        }
        else
        {
            rear->next = newNode;
            rear = newNode;
        }
    }

    void dequeue()
    {
        if (isEmpty())
        {
            cout << "Queue is Empty" << endl;
            return;
        }
        Node *temp = front;
        front = front->next;
        if (front == NULL)
        {
            rear = NULL;
        }
        delete temp;
    }

    int getFront()
    {
        if (isEmpty())
        {
            return -1;
        }
        else
        {
            return front->data;
        }
    }

    ~Queue()
    {
        while (front != NULL)
        {
            Node *temp = front;
            front = front->next;
            delete temp;
        }
    }
};

int main()
{
    Queue q;
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);

    cout << "Front element is: " << q.getFront() << endl;
    q.dequeue();
    cout << "Front element is: " << q.getFront() << endl;
    q.dequeue();
    cout << "Front element is: " << q.getFront() << endl;
    q.dequeue();
    cout << "Queue is empty: " << (q.isEmpty() ? "Yes" : "No") << endl;

    return 0;
}
