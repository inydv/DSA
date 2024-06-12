#include <iostream>
using namespace std;

class Queue
{
    int *arr;
    int front;
    int rear;
    int size;

public:
    Queue(int size = 100)
    {
        this->size = size;
        arr = new int[size];
        front = 0;
        rear = 0;
    }

    ~Queue()
    {
        delete[] arr;
    }

    bool isEmpty()
    {
        return front == rear;
    }

    bool isFull()
    {
        return rear == size;
    }

    void enqueue(int data)
    {
        if (isFull())
        {
            cout << "Queue is full" << endl;
        }
        else
        {
            arr[rear] = data;
            rear++;
        }
    }

    void dequeue()
    {
        if (isEmpty())
        {
            cout << "Queue is Empty" << endl;
        }
        else
        {
            arr[front] = -1;
            front++;

            if (front == rear)
            {
                front = 0;
                rear = 0;
            }
        }
    }

    int getFront()
    {
        if (isEmpty())
            return -1;
        else
            return arr[front];
    }

    void display()
    {
        if (isEmpty())
        {
            cout << "Queue is empty" << endl;
        }
        else
        {
            for (int i = front; i < rear; i++)
            {
                cout << arr[i] << " ";
            }
            cout << endl;
        }
    }
};

int main()
{
    Queue q;
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.display(); // 1 2 3
    q.dequeue();
    q.display();                                       // 2 3
    cout << "Front element: " << q.getFront() << endl; // 2

    return 0;
}
