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
    if (head == NULL)
    {
        Node *temp = new Node(value);
        head = temp;
        tail = temp;
    }
    else
    {
        Node *temp = new Node(value);
        temp->next = head;
        head->prev = temp;
        head = temp;
    }
}

void InsertAtTail(Node *&tail, Node *&head, int value)
{
    if (tail == NULL)
    {
        Node *temp = new Node(value);
        tail = temp;
        head = temp;
    }
    else
    {
        Node *temp = new Node(value);
        tail->next = temp;
        temp->prev = tail;
        tail = temp;
    }
}

void InsertAtPosition(Node *&tail, Node *&head, int position, int value)
{
    if (position == 1)
    {
        InsertAtHead(head, value);
        return;
    }

    Node *temp = head;
    int count = 1;

    while (count < position - 1)
    {
        temp = temp->next;
        count++;
    }

    if (temp->next == NULL)
    {
        InsertAtTail(tail, d);
        return;
    }

    Node *nodeToInsert = new Node(value);
    nodeToInsert->next = temp->next;
    temp->next->prev = nodeToInsert;
    temp->next = nodeToInsert;
    nodeToInsert->prev = temp;
}

void deleteNode(int position, Node *&head)
{
    if (position == 1)
    {
        Node *temp = head;
        temp->next->prev = NULL;
        head = head->next;
        temp->next = NULL;
        delete temp;
    }
    else
    {
        Node *curr = head;
        Node *prev = NULL;

        int count = 1;

        while (count < position)
        {
            prev = curr;
            curr = curr->next;
            count++;
        }

        curr->prev = NULL;
        prev->next = current->next;
        curr->next = NULL;
        delete curr;
    }
}

void print(Node *&head)
{
    Node *temp = head;

    while (temp != NULL)
    {
        cout << temp->data << " ";
        temp = temp->next;
    }

    cout << endl;
}

int main()
{
    Node *node1 = new Node(10);
    Node *head = node1;
    Node *tail = node1;

    print(head);

    // InsertAtHead(tail, head, 12);
    InsertAtTail(tail, head, 12);
    print(head);

    // InsertAtHead(tail, head, 15);
    InsertAtTail(tail, head, 15);
    print(head);

    InsertAtPosition(tail, head, 3, 22);
    print(head);

    deleteNode(1, head);
    print(head);

    return 0;
}