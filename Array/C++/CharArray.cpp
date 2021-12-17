 #include<iostream>
 #include<cstring>
 using namespace std;

 int main() {
	 char arr[] = {'a', 'b', 'c', '\0'};
	 cout<<arr<<endl;
	 cout<<strlen(arr)<<endl;
	 cout<<sizeof(arr)<<endl;

	 char str[100];

	 cin>>str;
	 cout<<str<<endl;
	 return 0;
 }
