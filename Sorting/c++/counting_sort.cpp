 #include<iostream>
 #include<vector>

 using namespace std;


 void counting_sort(int *arr, int n) {
	 int largest = -1;

	 for(int i = 0; i < n; i++) {
		 largest = max(n, arr[i]);
	 }
	 vector<int> freq(largest + 1, 0);
	 
	 for(int i = 0; i < n; i++) {
		 freq[arr[i]]++;
	 }

	 int j = 0;

	 for (int i = 0; i <= largest; i++) {
		 while(freq[i] > 0) {
			 arr[j] = i;
			 freq[i]--;
			 j++;
		 }
	 }
 }

 int main() {
	 int arr[] = {9,2,1,8,17,19,5, 2};
	 int n = sizeof(arr) / sizeof(int);
	 counting_sort(arr, n);

	 for(int i = 0; i < n; i++) {
		 cout<<arr[i]<<" ";
	 }
	 return 0;
 }
