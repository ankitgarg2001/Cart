#include<bits/stdc++.h>
using namespace std;

vector<bool> visited;
vector<int> dfs(vector<vector<int>>& graph,int i,vector<int>& ans){
	visited[i]=true;
	ans.push_back(i);
	for(int nb: graph[i]){
		if(!visited[nb] and nb!=i){
			dfs(graph,nb,ans);
		}
	}
}

vector<int> killProcess(vector<int>& pid,vector<int>& ppid,int kill){
	int n = pid.size();
	vector<vector<int>> graph(10000);
	visited.resize(10000);
	for(int i=0;i<pid.size();i++){
		graph[ppid[i]].push_back(pid[i]);
	}
	// for(int i=0;i<11;i++){
	// 	cout<<i<<": ";
	// 	for(int j=0;j<graph[i].size();j++)
	// 		cout<<graph[i][j]<<" ";
	// 	cout<<endl;
	// }
	vector<int> ans;
	dfs(graph,kill,ans);
	return ans;	
}

int main(){
	int n;int kill;cin>>n>>kill;
	vector<int> pid(n);
	vector<int> ppid(n);
	for(int i=0;i<n;i++)
		cin>>pid[i];
	for(int i=0;i<n;i++)
		cin>>ppid[i];
	vector<int> ans = killProcess(pid,ppid,kill);
	sort(ans.begin(),ans.end());
	for(int i=0;i<ans.size();i++)
		cout<<ans[i]<<" ";
	return 0;
}