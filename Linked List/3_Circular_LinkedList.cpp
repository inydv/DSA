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
    if (head == NULL)
    {
        head = temp;
        head->next = head;
    }
    else
    {
        Node *tail = head;
        while (tail->next != head)
        {
            tail = tail->next;
        }
        temp->next = head;
        tail->next = temp;
        head = temp;
    }
}

void InsertAtTail(Node *&head, int value)
{
    Node *temp = new Node(value);
    if (head == NULL)
    {
        head = temp;
        head->next = head;
    }
    else
    {
        Node *tail = head;
        while (tail->next != head)
        {
            tail = tail->next;
        }
        tail->next = temp;
        temp->next = head;
    }
}

void InsertAtPosition(Node *&head, int position, int value)
{
    if (position == 1)
    {
        InsertAtHead(head, value);
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
        InsertAtTail(head, value);
        return;
    }

    Node *nodeToInsert = new Node(value);
    nodeToInsert->next = temp->next;
    temp->next = nodeToInsert;
}

void deleteNode(int position, Node *&head)
{
    if (head == NULL)
    {
        return;
    }

    if (position == 1)
    {
        Node *temp = head;
        Node *tail = head;
        while (tail->next != head)
        {
            tail = tail->next;
        }
        if (head == tail)
        {
            head = NULL;
        }
        else
        {
            head = head->next;
            tail->next = head;
        }
        temp->next = NULL;
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

        if (curr->next == head)
        {
            prev->next = head;
        }
        else
        {
            prev->next = curr->next;
        }
        curr->next = NULL;
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

    print(head);

    InsertAtHead(head, 12);
    print(head);

    InsertAtTail(head, 15);
    print(head);

    InsertAtPosition(head, 3, 22);
    print(head);

    deleteNode(1, head);
    print(head);

    return 0;
}