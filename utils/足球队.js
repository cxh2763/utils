//五个足球队，两两比赛一次，赢3分，平都1分，输0分 得分一共有多少种比分情况
function getScores() {
  const result = [];
  const team = ['A', 'B', 'C', 'D', 'E'];
  const Contest = []
  const ContestResult = [0, 1, 3];
  //结果是-1表示未开赛  是 0 表示左边队伍输了  是 1 表示平了   是3表示左边的队伍赢了 
  //比赛一共有十场
  for (let i = 0; i < 5; i++) {
    for (let j = i + 1; j < 5; j++) {
      Contest.push({
        name: team[i] + team[j],
        result: -1
      })
    }
  }
  console.log(Contest)
  let Socre = {
    'A': 0,
    'B': 0,
    'C': 0,
    'D': 0,
    'E': 0,
  }
  //n 代表进行了几场比赛
  function start(n) {
    if (n === 10) {
      console.log(Socre)
      result.push(JSON.stringify(Socre))
      return;
    }
    const team1 = Contest[n].name.split('')[0];
    const team2 = Contest[n].name.split('')[1];
    for (let i = 0; i < 3; i++) {
      Contest[n].result = ContestResult[i]
      Socre[team1] += ContestResult[i];
      if (Contest[n].result === 1) {
        Socre[team2] += 1;
      } else if (Contest[n].result === 0) {
        Socre[team2] += 3;
      }
      start(n + 1);
      Socre[team1] -= ContestResult[i];
      if (Contest[n].result === 1) {
        Socre[team2] -= 1;
      } else if (Contest[n].result === 0) {
        Socre[team2] -= 3;
      }
      Contest[n].result = -1;
    }
  }
  start(0);
  console.log(result.length, result)
}
getScores()