// Input Restricted Queue - inserted from one end (rear)
// Output Restricted Queue - inserted from both ends but can only be removed from one end, typically the front

#include <iostream>
    using namespace std;

class Deque
{
    int *arr;
    int front;
    int rear;
    int size;

public:
    Deque(int s = 100)
    {
        size = s;
        arr = new int[size];
        front = -1;
        rear = -1;
    }

    ~Deque()
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

    void insertFront(int data)
    {
        if (isFull())
        {
            cout << "Deque is full" << endl;
            return;
        }

        if (isEmpty())
        {
            front = rear = 0;
        }
        else if (front == 0)
        {
            front = size - 1;
        }
        else
        {
            front--;
        }
        arr[front] = data;
    }

    void insertRear(int data)
    {
        if (isFull())
        {
            cout << "Deque is full" << endl;
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

    void deleteFront()
    {
        if (isEmpty())
        {
            cout << "Deque is empty" << endl;
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

    void deleteRear()
    {
        if (isEmpty())
        {
            cout << "Deque is empty" << endl;
            return;
        }

        if (front == rear)
        {
            front = rear = -1;
        }
        else if (rear == 0)
        {
            rear = size - 1;
        }
        else
        {
            rear--;
        }
    }

    int getFront()
    {
        if (isEmpty())
        {
            cout << "Deque is empty" << endl;
            return -1;
        }
        return arr[front];
    }

    int getRear()
    {
        if (isEmpty())
        {
            cout << "Deque is empty" << endl;
            return -1;
        }
        return arr[rear];
    }
};

int main()
{
    Deque dq(5);

    dq.insertRear(1);
    dq.insertRear(2);
    dq.insertRear(3);
    dq.insertRear(4);
    dq.insertRear(5);

    cout << "Front element is: " << dq.getFront() << endl;
    cout << "Rear element is: " << dq.getRear() << endl;

    dq.deleteFront();
    dq.insertFront(6);

    cout << "Front element is: " << dq.getFront() << endl;
    cout << "Rear element is: " << dq.getRear() << endl;

    dq.deleteRear();
    cout << "Front element is: " << dq.getFront() << endl;
    cout << "Rear element is: " << dq.getRear() << endl;

    return 0;
}
