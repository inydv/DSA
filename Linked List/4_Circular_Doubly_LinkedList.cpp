#include <iostream>
using namespace std;

class Node
{
public:
    int data;
    Node *prev;
    Node *next;

    // CONSTRUCTOR TO ADD NEW NODE
    Node(int data)
    {
        this->data = data;
        this->prev = NULL;
        this->next = NULL;
    }

    // DESTRUCTOR TO REMOVE NODE AND FREE SPACE
    ~Node()
    {
        if (this->next != NULL)
        {
            delete next;
            this->next = NULL;
        }

        if (this->prev != NULL)
        {
            delete prev;
            this->prev = NULL;
        }
    }
};

void InsertAtHead(Node *&tail, Node *&head, int value)
{
    Node *temp = new Node(value);
    if (head == NULL)
    {
        head = temp;
        tail = temp;
        head->next = head;
        head->prev = head;
    }
    else
    {
        temp->next = head;
        temp->prev = tail;
        head->prev = temp;
        tail->next = temp;
        head = temp;
    }
}

void InsertAtTail(Node *&tail, Node *&head, int value)
{
    Node *temp = new Node(value);
    if (tail == NULL)
    {
        head = temp;
        tail = temp;
        head->next = head;
        head->prev = head;
    }
    else
    {
        temp->next = head;
        temp->prev = tail;
        tail->next = temp;
        head->prev = temp;
        tail = temp;
    }
}

void InsertAtPosition(Node *&tail, Node *&head, int position, int value)
{
    if (position == 1)
    {
        InsertAtHead(tail, head, value);
        return;
    }

    Node *temp = head;
    int count = 1;

    while (count < position - 1 && temp->next != head)
    {
        temp = temp->next;
        count++;
    }

    if (temp->next == head)
    {
        InsertAtTail(tail, head, value);
        return;
    }

    Node *nodeToInsert = new Node(value);
    nodeToInsert->next = temp->next;
    temp->next->prev = nodeToInsert;
    temp->next = nodeToInsert;
    nodeToInsert->prev = temp;
}

void deleteNode(int position, Node *&head, Node *&tail)
{
    if (head == NULL)
    {
        return;
    }

    if (position == 1)
    {
        Node *temp = head;
        if (head == tail)
        {
            head = NULL;
            tail = NULL;
        }
        else
        {
            head = head->next;
            head->prev = tail;
            tail->next = head;
        }
        temp->next = NULL;
        temp->prev = NULL;
        delete temp;
    }
    else
    {
        Node *curr = head;
        Node *prev = NULL;

        int count = 1;
        while (count < position && curr->next != head)
        {
            prev = curr;
            curr = curr->next;
            count++;
        }

        if (curr == tail)
        {
            tail = prev;
        }

        prev->next = curr->next;
        curr->next->prev = prev;
        curr->next = NULL;
        curr->prev = NULL;
        delete curr;
    }
}

void print(Node *&head)
{
    if (head == NULL)
    {
        cout << "List is empty" << endl;
        return;
    }

    Node *temp = head;

    do
    {
        cout << temp->data << " ";
        temp = temp->next;
    } while (temp != head);

    cout << endl;
}

int main()
{
    Node *head = NULL;
    Node *tail = NULL;

    print(head);

    InsertAtTail(tail, head, 12);
    print(head);

    InsertAtTail(tail, head, 15);
    print(head);

    InsertAtPosition(tail, head, 3, 22);
    print(head);

    deleteNode(1, head, tail);
    print(head);

    return 0;
}