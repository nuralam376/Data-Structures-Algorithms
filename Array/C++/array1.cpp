
#include <iostream>
using namespace std;

int main() {
	int marks[100];
	int n;

	cin>>n;

	for(int i = 0; i < n; i++) {
		cin>>marks[i];
	}

	for(int i = 0; i < n; i++) {
		cout<<marks[i]<<" , ";
	}
	return 0;
}

