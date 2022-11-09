#include <iostream>
#include <string> // for string class
using namespace std;
class Solution {
public:
    Solution(){}
    bool isMatch(string s, string p) {
        map<pair<int,int>, bool> dp;
        return dfs(0, 0, s, p, dp);
    }
    bool dfs(int i, int j, string& s, string& p, map<pair<int,int>, bool>& dp){
        if(dp.find({i,j})!=dp.end())
            return dp[{i,j}];
        if(i>=s.length() && j>=p.length())
            return true;
        else if(j>=p.length())
            return false;

        bool match = i<s.length() && (s[i]==p[j]||p[j]=='.');
        if(j+1<p.length() && p[j+1]=='*'){
            dp[{i,j}] = dfs(i, j+2, s, p, dp) || (match && dfs(i+1, j, s, p, dp));
            return dp[{i,j}];
        } else if(match){
            dp[{i,j}] = dfs(i+1, j+1, s, p, dp);
            return dp[{i,j}];
        }
        dp[{i,j}] = false;
        return dp[{i,j}];
    }
};
int main(){
    Solution s;
    cout<<true;//s.isMatch("aa", "a");
    cout<<true;//s.isMatch("aa", "a*");
    return 0;
}

