const questionList = document.querySelectorAll(".testExam__form-item");
let tableResult = document.querySelector(".testExam__submit-result");
let arrayCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
let essayList = document.querySelectorAll(".testExam__form-essay-item");
let tableText = document.querySelector(".testExam__submit-list");
let btnEnd = document.querySelector(".testExam__submit-btn");
let resultList;
let submitText;

function start() {
  handleRenderTabResult();
  handleRenderEssay();
}
start();

function handleRenderTabResult() {
  for (let i = 1; i <= questionList.length; i++) {
    let countQues;
    if (i < 10) {
      countQues = "0" + i;
    } else {
      countQues = i;
    }
    let renderQuestion = `<a href="#question${i}" class="testExam__submit-result-item">
      <span>${countQues}</span>
      <span class="testExam__submit-result-position">A</span>
  </a>`;
    tableResult.innerHTML += renderQuestion;
  }

  for (let i = 0; i < questionList.length; i++) {
    let itemRadio = questionList[i].querySelectorAll('input[type = "radio"]');

    for (let j = 0; j < itemRadio.length; j++) {
      // console.log(itemRadio[j]);
      itemRadio[j].addEventListener("change", function () {
        if (itemRadio[j].checked) {
          let positionTable = document
            .querySelectorAll(".testExam__submit-result-item")
            [i].querySelector(".testExam__submit-result-position");

          // console.log(j);
          positionTable.classList.add("active");
          positionTable.innerText = arrayCharacter[j];
        }
      });
    }
  }
}

function handleRenderEssay() {
  for (let i = 0; i < essayList.length; i++) {
    let renderEssay = `<li class="testExam__submit-item">
    <a href="#essay${i}" class="testExam__submit-link">
        <span class="testExam__submit-text">.</span>
    </a>
  </li>`;
    tableText.innerHTML += renderEssay;

    submitText = document.querySelectorAll(".testExam__submit-text");

    essayList[i].addEventListener("input", function (e) {
      submitText[i].textContent = e.target.value;
    });
  }
}

btnEnd.addEventListener("click", function () {
  resultList = document.querySelectorAll(".testExam__submit-result-item");

  let countResult = 0;
  for (i = 0; i < resultList.length; i++) {
    let checkResult = resultList[i].querySelector(
      ".testExam__submit-result-position.active"
    );
    if (checkResult) {
      countResult += 1;
    }
  }
  console.log(countResult);
  if (countResult < resultList.length) {
    Swal.fire({
      title: "",
      text: "B???n ch??a tr??? l???i h???t s??? c??u h???i! .\n  B???n c?? ch???c ch???n mu???n n???p b??i?",
      icon: "warning",
      confirmButtonColor: "#bb2d3b",
      html: "B???n ch??a tr??? l???i h???t s??? c??u h???i!",
    });
  } else {
    Swal.fire({
      title: "",
      text: " B???n c?? mu???n n???p b??i?",
      icon: "warning",
      confirmButtonColor: "#bb2d3b",
      confirmButtonText: "N???p b??i",
      showCancelButton: true,
      cancelButtonText: "H???y",
    }).then((result) => {
      // when click submit
      if (result.isConfirmed) {
        // Swal.fire("Saved!", "", "success");
      }
    });
  }
});
