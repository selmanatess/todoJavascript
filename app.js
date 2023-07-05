const yenigorev = document.querySelector(".input-gorev");
const yeniGorevEkleBtn = document.querySelector(".btn-gorev-ekle");
const gorevListesi = document.querySelector(".gorev-listesi");
yeniGorevEkleBtn.addEventListener("click", gorevEkle);
gorevListesi.addEventListener("click", gorevSilTamamla);
document.addEventListener("DOMContentLoaded", localStorageOku);

function gorevSilTamamla(e) {
  const tıklanılanEleman = e.target;
  if (tıklanılanEleman.classList.contains("gorev-btn-tamamlandi")) {
    tıklanılanEleman.parentElement.classList.toggle("gorev-tamamlandi");
  }
  if (tıklanılanEleman.classList.contains("gorev-btn-sil")) {
    tıklanılanEleman.parentElement.classList.toggle("kaybol");
const silinecekGorev=tıklanılanEleman.parentElement.children[0].innerText;

    localStorageSil(silinecekGorev);
  }
}

function gorevEkle(e) {
  e.preventDefault();

  gorevItemOlustur(yenigorev.value);
  localStorageKaydet(yenigorev.value);
  yenigorev.value = "";
}
function localStorageKaydet(yeniGorev) {
  let gorevler;
  if (localStorage.getItem("gorevler") === null) {
    gorevler = [];
  } else {
    gorevler = JSON.parse(localStorage.getItem("gorevler"));
  }
  gorevler.push(yeniGorev);
  localStorage.setItem("gorevler", JSON.stringify(gorevler));
}
function localStorageOku() {
  let gorevler;
  if (localStorage.getItem("gorevler") === null) {
    gorevler = [];
  } else {
    gorevler = JSON.parse(localStorage.getItem("gorevler"));
  }


  gorevler.forEach((element) =>gorevItemOlustur(element));

}
function gorevItemOlustur(gorev) {
  console.log(yenigorev);
  const gorevDiv = document.createElement("div");
  gorevDiv.classList.add("gorev-item");
  gorevDiv.classList.add("gorev-btn-tamamlandi");
  const gorevli = document.createElement("li");
  gorevli.classList.add("gorev-tanim");
  gorevli.innerText = gorev;
  gorevDiv.appendChild(gorevli);
  //ule ye kelenilecek div
  gorevListesi.appendChild(gorevDiv);
  const gorevtamambtn = document.createElement("button");
  gorevtamambtn.classList.add("gorev-btn");
  gorevtamambtn.classList.add("gorev-btn-tamamlandi");
  gorevtamambtn.innerHTML = '<i class="fa-solid fa-square-check"></i>';
  gorevDiv.appendChild(gorevtamambtn);

  const gorevsilbtn = document.createElement("button");
  gorevsilbtn.classList.add("gorev-btn");
  gorevsilbtn.classList.add("gorev-btn-sil");
  gorevsilbtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  gorevDiv.appendChild(gorevsilbtn);
}
function localStorageSil(gorev){
  let gorevler;
  if (localStorage.getItem("gorevler") === null) {
    gorevler = [];
  } else {
    gorevler = JSON.parse(localStorage.getItem("gorevler"));
  }
  const silinecekelemanIndex=gorevler.indexOf(gorev);
  gorevler.splice(silinecekelemanIndex,1);
  localStorage.setItem('gorevler',JSON.stringify(gorevler));
}