
#include <iostream>
using namespace std;

int binary_search(int *arr, int n, int key) {
	int start = 0;
	int end = n - 1;
	int mid;

	while(start<=end) {
		mid = (start + end) / 2;

		if(arr[mid] == key) {
			return mid;
		} else if(arr[mid] > key) {
			end = mid - 1;
		} else if(arr[mid] < key) {
			start = mid + 1;
		}
	}

	return -1;
}

int main() {

	int arr[] = {1,13, 12, 15, 27, 29, 37};
	int n = sizeof(arr) / sizeof(int);
	int key;
	cin>>key;
	int index = binary_search(arr, n, key);

	if(index != -1) {
		cout<<key<<" is present at index "<<index<<endl;
	} else {
		cout<<key<<" is not present";
	}
	return 0;
}

