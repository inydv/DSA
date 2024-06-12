#include <iostream>
using namespace std;

class CircularQueue
{
    int *arr;
    int front;
    int rear;
    int size;

public:
    CircularQueue(int s = 100)
    {
        size = s;
        arr = new int[size];
        front = -1;
        rear = -1;
    }

    ~CircularQueue()
    {
        delete[] arr;
    }

    bool isEmpty()
    {
        return front == -1;
    }

    bool isFull()
    {
        return (front == 0 && rear == size - 1) || (rear == (front - 1) % (size - 1));
    }

    void enqueue(int data)
    {
        if (isFull())
        {
            cout << "Queue is full" << endl;
            return;
        }

        if (isEmpty())
        {
            front = rear = 0;
        }
        else if (rear == size - 1 && front != 0)
        {
            rear = 0;
        }
        else
        {
            rear++;
        }
        arr[rear] = data;
    }

    void dequeue()
    {
        if (isEmpty())
        {
            cout << "Queue is empty" << endl;
            return;
        }

        if (front == rear)
        {
            front = rear = -1;
        }
        else if (front == size - 1)
        {
            front = 0;
        }
        else
        {
            front++;
        }
    }

    int frontElement()
    {
        if (isEmpty())
        {
            cout << "Queue is empty" << endl;
            return -1;
        }
        return arr[front];
    }
};

int main()
{
    CircularQueue q(5);

    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    q.enqueue(5);

    cout << "Front element is: " << q.frontElement() << endl;

    q.dequeue();
    q.enqueue(6);

    cout << "Front element is: " << q.frontElement() << endl;

    q.dequeue();
    cout << "Front element is: " << q.frontElement() << endl;

    return 0;
}
