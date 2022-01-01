
#include <iostream>
using namespace std;

int main() {
	// your code goes here
	char temp = cin.get();
	char sentences[100];
	int len = 0;

	while(temp!='#') {
		sentences[len++] = temp;
		temp = cin.get();
	}
	sentences[len] = '\0';
	cout<<sentences;

	return 0;
}

