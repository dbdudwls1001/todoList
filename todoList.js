//유저가 값을 입력한다.
//+버튼을 클릭한다.할일이 추가된다.
//delete를 클릭하면, 값이 사라진다.
//check를 클릭하면, 값에 줄이 처진다.
    //check 버튼을 클릭하는 순간 true 를 false
    //true이면 끝난걸로 간주하고 밑줄 보여주기
    //false이면 안끝난걸로 간주하고 그대로 둔다.
//진행중 끝남 탭을 누르면, 언더바가 이동한다.
//끝남탭은, 끝난 아이템만, 진행중탭은 진행중인 아이템만, 
//전체탭을 누르면 전체가 나오게

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList = [];                                              //목록을 만드는 리스트를 만들어 준다.

addButton.addEventListener("click", addTask);

function addTask() {                      
    let task = {    
        id:randemIdGenarate()                                //taskInputValue를 담는다, task에 벨류와 isComleta를 성공 실패 여부도 같이 넣는다.    
        ,taskContent:taskInput.value
        ,isComlete:false
    }
    taskList.push(task)                              //taskContent를 리스트에 추가한다.
    console.log(taskList);
    rander();
}

function rander() {
    let resultHtml = '';
    for (let i = 0; i < taskList.length; i++) {
        resultHtml += `<div class="task">
        <div>${taskList[i].taskContent}</div>
        <div>
            <button onclick="toggleComplete('${taskList[i].id}')">Check</button>       
            <button onclick="">Delete</button>
        </div>
    </div>`
    }                                                                    // button에 onclick 이벤트를 넣어 처리한다.
    document.getElementById("task-board").innerHTML = resultHtml;        //resultHtml를 붙여 넣는다.
}

function toggleComplete(id){
    console.log(id);   
}

function randemIdGenarate(){                                        
    return '_' + Math.random().toString(36).substr(2, 16);                //랜덤 아이디 가져오는 코드
}