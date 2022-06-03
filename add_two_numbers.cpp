/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        
        ListNode* c = new ListNode();
        
        ListNode* head1=l1;
        ListNode* head2=l2;
        int val = 0;
        
        int carry = 0;
        
        bool isL1End = false, isL2End = false;
            
        while (!isL1End || !isL2End){
            
            if(head1!=NULL){
                val = val + head1->val;
                
                if(head1->next!=NULL){
                    head1 = head1->next;
                 }else{
                   isL1End=true; 
                }
            }
            if(head2!=NULL){
                val = val + head2->val;
                
                if(head2->next!=NULL){
                    head2 = head2->next; 
                }else{
                   isL2End=true; 
                }
            }
            ListNode* temp = new ListNode();
            
            
            head3->val = 
            
            // if(){
            //     break;
            // }
        }
        return c->next;
    }
};