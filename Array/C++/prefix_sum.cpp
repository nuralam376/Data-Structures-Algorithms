 #include<iostream>
using namespace std;

int prefix_sum(int *arr, int n) {
	int largest_sum = 0;
	int prefix[100] = {0};
	prefix[0] = arr[0];

	for(int i = 1; i < n; i++) {
		prefix[i] = prefix[i - 1] + arr[i];
	}

	for(int i = 0; i < n; i++) {
		for(int j = i; j < n; j++) {
		  int subArraySum = i > 0 ? prefix[j] - prefix[i - 1] : prefix[j];
		  largest_sum = max(largest_sum, subArraySum);
		}
	}
	return largest_sum;
}

int main() {
	int arr[] = {-2,3,4,-1,5,-12,6,1,3};
	int n = sizeof(arr) / sizeof(int);
	int sum = prefix_sum(arr, n);
	cout<<"Sum = "<<sum;
	return 0;
}
