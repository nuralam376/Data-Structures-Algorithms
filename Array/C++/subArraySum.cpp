
#include <iostream>
using namespace std;

void printSubArrays(int *arr, int n) {
	for(int i = 0; i < n; i++) {
		int largest_sum = 0;
		for(int j = i; j < n; j++) {
			int sum = 0;
			for(int k = i; k <= j; k++) {
			  cout<<arr[k]<<", ";
			  sum += arr[k];
			}
			if(largest_sum < sum) {
				largest_sum = sum;
			}
		    cout<<"Sum = "<<sum<<endl;
		}
		cout<<"Largest sum = "<<largest_sum<<endl;
	}
}

int main() {
	// your code goes here
	int arr[] = {10,20,30,40,50, 60};
	int n = sizeof(arr) / sizeof(int);
	printSubArrays(arr, n);
	return 0;
}

