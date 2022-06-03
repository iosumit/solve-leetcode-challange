#include<iostream.h>
void main(){
    bool x= isPalindrome(121);
    cout<<x;
}
bool isPalindrome(int x) {
        if(x<0)
            return false;
        
        int temp = x;
        int rev = 0;
        int rem = 0;
        
        do {
            rem = temp%10;
            rev = (rev * 10) + rem;
            temp = temp/10;
                
        } while(temp>0);
            
        if(temp==rev)
            return true;
        else
            return false;
    }