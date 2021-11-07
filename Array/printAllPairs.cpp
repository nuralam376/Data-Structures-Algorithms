 #include<iostream>

 using namespace std;

void printAllPairs(int *arr,int n) {
	int x,y;
	for(int i = 0; i < n; i++) {
		x = arr[i];
		for(int j = i + 1; j < n; j++) {
			y = arr[j];
			cout<<x<<", "<<y<<endl;
		}
	}
}

 int main() {
	 int arr[] = {1,2,3,4,5};
	 int n = sizeof(arr) / sizeof(int);
	 
	 for(int x : arr) {
		 cout<<x<<", ";
	 }
	 cout<<endl;

	 printAllPairs(arr, n);
	 return 0;
 }
