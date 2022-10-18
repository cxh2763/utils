const checkStatus = {
  all: 'all',
  part: 'part',
  no: 'no',
};


const unmarkData = [
  {
    id: "1",
    name: "组织1",
    status: checkStatus.no,
    children: [
      {
        id: "1-1",
        name: "组织1-子组件1",
        status: checkStatus.no,
        children: [{
          id: "1-1-1",
          name: "组织1-子组件1-孙组织1",
          status: checkStatus.no,
        }]
      }, {
        id: "1-2",
        name: "组织1-子组件2",
        status: checkStatus.no,
      }
    ]
  }
];



function func(unmarkData, s) {
  //对象扁平化
  function getMap(arr, map, parent) {
    arr.forEach(item => {
      map[item.id] = item;
      if (parent) {
        map[item.id].parent = parent;
      }
      if (item.children) {
        getMap(item.children, map, item.id)
      }
    });
  }
  const map = {}
  getMap(unmarkData, map, '');
  for (const item of s) {
    if (map[item]) {
      map[item].status = checkStatus.all;
      map[item].children && map[item].children.forEach((it) => {
        it.status = checkStatus.all;
      })
      if (map[map[item].parent].status === checkStatus.no) {
        map[map[item].parent].status = checkStatus.part;
      }
    }
  }
  for (const key in map) {
    let isAll = true;
    map[key].children && map[key].children.forEach((item) => {
      if (map[item.id].status !== checkStatus.all) {
        isAll = false;
      }
    })
    if (isAll) {
      map[key].status = checkStatus.all;
    }
  }
  console.log(map);
}

func(unmarkData, ['1-1', '1-2']);


data = [

  { id: '01', lable: '项目经理', pid: '' },

  { id: '02', lable: '产品leader', pid: '01' },

  { id: '03', lable: 'UIleader', pid: '01' },

  { id: '04', lable: '技术leader', pid: '01' },

  { id: '05', lable: '测试leader', pid: '01' },

  { id: '06', lable: '运维leader', pid: '01' },

  { id: '07', lable: '产品经理', pid: '02' },

  { id: '08', lable: '产品经理', pid: '02' },

  { id: '09', lable: 'UI设计师', pid: '03' },

  { id: '10', lable: '前端工程师', pid: '04' },

  { id: '11', lable: '后端工程师', pid: '04' },

  { id: '12', lable: '后端工程师', pid: '04' },

  { id: '13', lable: '测试工程师', pid: '05' },

  { id: '14', lable: '测试工程师', pid: '05' },

  { id: '15', lable: '运维工程师', pid: '06' }

]
//数组转换成树状结构
function getTree(data) {
  let map = {};
  for (const it of data) {
    map[it.id] = it;
  }
  let tree = [];
  for (const it of data) {
    if (!map[it.pid]) {
      tree.push(it);  //根节点，
    } else {
      if (!map[it.pid].children) {
        map[it.pid].children = [];
      }
      map[it.pid].children.push(it);
    }
  }
  console.log(tree);
}
getTree(data);