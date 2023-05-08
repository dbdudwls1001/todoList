//유저가 값을 입력한다.
//+ 버튼클릭하면, 할일이 추가된다.
//check버튼을 누르면, 할일이 끝나면서 밑줄이 그어진다.
    //1.check 버튼을 클릭하는 순간 true false로 
    //2. true이면 끝난걸로 간주하고 밑줄 보여주기
    //3. false이면 안끝난걸로 간주하고 그대로
//delete버튼을 누르면, 할일이 삭제된다.
//진행중 끝남 탭을 누르면, 언더바가 이동한다.
//끝남탭은, 끝난 아이템만, 진행중탭은 진행중인 아이템만
//전체탭을 누르면 다시 전체아이템으로 돌아옴

let taskinput = document.getElementById("task-input");
let addbutton = document.getElementById("add-button");
let taskList = [];
addbutton.addEventListener("click", addTask);

function addTask(){
    let task = {
        taskContent : taskinput.value
        ,isComplete : false
    }
    taskList.push(task);
    console.log(taskList)
    rander()
}

function rander(){
    let resultHtml = '';
    for(let i =0; i < taskList.length; i++){
        resultHtml += `<div class="task">
        <div>${taskList[i].taskContent}</div>
        <div>
            <button>Check</button>
            <button>Delete</button>
        </div>
    </div>`;
    }

    document.getElementById("task-board").innerHTML = resultHtml;
}