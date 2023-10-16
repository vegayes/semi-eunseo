// 1) 체크박스 확인
function checkAllList(e) {

    let checkCount = 0;
    document.getElementsByName("favorite-check").forEach(function(v, i) {
      if(v.checked === false){
        checkCount++;
      }
    });

    if(checkCount>0) {
      document.getElementById("favorite-check-All").checked = false;
    } else if(checkCount === 0) {
      document.getElementById("favorite-check-All").checked = true;
    }
}


//2-1)전체선택시 전체선택/ 다시 누르면 전체 해제
document.getElementById("favorite-check-All").addEventListener("click" ,function(){

    var commentAll = document.getElementById("favorite-check-All");
    var commentChecks = document.getElementsByName("favorite-check");

    for(var i = 0; i<commentChecks.length; i++){
        commentChecks[i].checked = commentAll.checked;
    }

});


//2-2)선택이 하나라도 없으면 전체 선택 취소
document.getElementsByName("favorite-check").forEach(function(v) {
    v.addEventListener('click', checkAllList);
});