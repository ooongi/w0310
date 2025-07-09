function selectDomain(select) {
    const domainInput = document.getElementById("email-domain");
    if (select.value) {
        domainInput.value = select.value;
        domainInput.readOnly = true;
        select.style.display = "none"; // select 숨기기
    }
}

function submitForm() {
    const id = document.getElementById("email-id");
    const domain = document.getElementById("email-domain");
    const select = document.getElementById("domain-select");

    const fullEmail = `${id.value.trim()}@${domain.value.trim()}`;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(fullEmail)) {
        alert("유효한 이메일 형식이 아닙니다.");
        return false;
    }

    alert(`입력한 이메일: ${fullEmail}`);

    // 초기화
    id.value = "";
    domain.value = "";
    domain.readOnly = false;
    select.selectedIndex = 0;
    select.style.display = "inline-block"; // select 다시 보이기

    return false; // form 제출 방지
}
