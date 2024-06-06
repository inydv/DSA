#include <iostream>
using namespace std;

class Node
{
public:
    int data;
    Node *next;

    // CONSTRUCTOR TO ADD NEW NODE
    Node(int data)
    {
        this->data = data;
        this->next = NULL;
    }

    // DESTRUCTOR TO REMOVE NODE AND FREE SPACE
    ~Node()
    {
        int value = this->data;

        if (this->next != NULL)
        {
            delete next;
            this->next = NULL;
        }
    }
};

void InsertAtHead(Node *&head, int value)
{
    Node *temp = new Node(value);
    temp->next = head;
    head = temp;
}

void InsertAtTail(Node *&tail, int value)
{
    Node *temp = new Node(value);
    tail->next = temp;
    tail = temp;
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
    temp->next = nodeToInsert;
}

void deleteNode(int position, Node *&head)
{
    if (position == 1)
    {
        Node *temp = head;
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

        prev->next = current->next;
        curr->next = NULL;
        delete curr;
    }
}

void print(node *&head)
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

    // InsertAtHead(head, 12);
    InsertAtTail(head, 12);
    print(head);

    // InsertAtHead(head, 15);
    InsertAtTail(head, 15);
    print(head);

    InsertAtPosition(tail, head, 3, 22);
    print(head);

    deleteNode(1, head);
    print(head);

    return 0;
}