
#include <iostream>
using namespace std;

void printArray(int * arr, int n) {
	cout<<endl<<"In Function: "<<endl;
	
	// int n = sizeof(arr)/ sizeof(int);  // 2

	for(int i = 0; i < n; i++) {
		cout<<arr[i]<<" ";
	}
}

int main() {
	int arr[] = {1,2,3,4,5,6};
	
	int n = sizeof(arr) / sizeof(int);

    arr[0] = 100;
	printArray(arr, n);
	
	cout<<endl<< "In Main: "<<endl;

	for(int i = 0; i < n; i++){
		cout<<arr[i]<<" ";
	}

	
	return 0;
}

