 #include<iostream>
 #include<vector>
using namespace std;

int largestElement(vector<int> arr) {
	int largest_element = arr[0];

    for(int i = 0; i < arr.size(); i++) {
		if (arr[i] > largest_element) {
			largest_element = arr[i];
		}
	}
	return largest_element; 
}

int main() {
	vector<int> arr = {1,2,3,4,5};
	cout<<largestElement(arr)<<endl;
	return 0;
}
