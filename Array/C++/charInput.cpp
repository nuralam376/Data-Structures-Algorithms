
#include <iostream>
using namespace std;

int main() {
	// your code goes here
	char temp = cin.get();

	while(temp!='#') {
		cout<<temp;
		temp = cin.get();
	}

	return 0;
}

