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
        // delete head will run this
        if (this->next != NULL)
        {
            delete next; // delete recursively
            this->next = NULL;
        }
    }
};

void insertAtHead(Node *&head, int key)
{
    Node *temp = new Node(key);
    temp->next = head;
    head = temp;
}

void insertAtTail(Node *&head, int key)
{
    Node *temp = new Node(key);
    if (head == NULL)
    {
        head = temp;
        return;
    }
    Node *current = head;
    while (current->next != NULL)
    {
        current = current->next;
    }
    current->next = temp;
}

void printFunc(Node *&head)
{
    Node *temp = head;

    while (temp != NULL)
    {
        cout << temp->data << " ";
        temp = temp->next;
    }

    cout << endl;
}

void deleteNode(Node *&head, int position)
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

        prev->next = curr->next;
        curr->next = NULL;
        delete curr;
    }
}

void insertAtPosition(Node *&head, int position, int key)
{
    if (position == 1)
    {
        insertAtHead(head, key);
        return;
    }

    Node *newNode = new Node(key);
    Node *temp = head;
    int count = 1;

    while (count < position - 1 && temp != NULL)
    {
        temp = temp->next;
        count++;
    }

    if (temp == NULL || temp->next == NULL)
    {
        insertAtTail(head, key);
        return;
    }

    newNode->next = temp->next;
    temp->next = newNode;
}

int main()
{
    Node *node1 = new Node(10);
    Node *node2 = new Node(20);
    Node *node3 = new Node(30);
    Node *node4 = new Node(40);
    Node *node5 = new Node(50);

    node1->next = node2;
    node2->next = node3;
    node3->next = node4;
    node4->next = node5;

    printFunc(node1);

    insertAtHead(node1, 0);
    insertAtTail(node1, 60);
    // deleteNode(node1, 4);
    // insertAtPosition(node1, 4, 30);
    printFunc(node1);

    return 0;
}
