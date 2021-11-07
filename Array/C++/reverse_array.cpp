 #include<iostream>

 using namespace std;

void reverse_array(int *arr, int n) {
	int start = 0;
	int end = n - 1;

	while(start < end) {
		swap(arr[start], arr[end]);
		start += 1;
		end -= 1;
	}
}

 int main() {
	 int arr[] = {1,2,3,4,5};
	 int n = sizeof(arr) / sizeof(int);
	 reverse_array(arr, n);

	 for(int i = 0; i < n; i++) {
		 cout<<arr[i]<<", "; 
	 }
	 return 0;
 }
