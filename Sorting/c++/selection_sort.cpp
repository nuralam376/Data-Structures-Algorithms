
#include <iostream>
using namespace std;

void selection_sort(int *arr, int n) {
   for(int i = 0; i <= n - 2; i++) {
	   int min_postion = i;

	   for(int j = i; j < n; j++) {
		   if(arr[j] < arr[min_postion]) {
			   min_postion = j;
		   }
	   }
	   swap(arr[min_postion], arr[i]);
   }
}

int main() {
	int arr[] = {-2,1,-12,4,3,2,8};
	int n = sizeof(arr) / sizeof(int);
	selection_sort(arr, n);

	for(int i = 0; i < n; i++) {
		cout<<arr[i]<<" ";
	}
	return 0;
}

