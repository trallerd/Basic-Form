const elements = {
    nightMode: true,
    constainer: document.querySelector(".form-box"),
    colorPopup: document.querySelector(".conteudo"),
    popup: document.getElementById("confirma-popup"),
    lembrete: document.getElementById("lembrete"),
    conteudoPopup: document.getElementById("cont-popup"),

    form: {
        nome: document.getElementById("nome"),
        email: document.getElementById("email"),
        telefone: document.getElementById("tel"),
        senha: document.getElementById("senha"),
        confirmaSenha: document.getElementById("confirma-senha"),
    },
    buttons: {
        fechaPopup: document.getElementsByClassName("fecha")[0],
        btnSend: document.getElementById("send"),
        nightMode: document.getElementById("night-mode"),
    },
};

function constroeString() {
    var a = elements.form.nome.value;
    var b = elements.form.email.value;
    var c = elements.form.telefone.value;
    var d = elements.form.senha.value;
    var e = elements.form.confirmaSenha.value;

    var str = `<h2>Seus Dados Cadastrados:</h2><br>Nome: ${a} <br>Email: ${b} <br>Telefone: ${c} <br>Senha: ${d} <br>Confirmação de senha: ${e} <br>`;
    return str;
}

const sendEmail = () => {
    Email.send({
        Host: "",
        Username: "Email: from",
        Password: "password",
        To: "EMAIL: send",
        From: "email: from",
        Subject: "Seus Dados Cadastrados",
        Body: constroeString(),
    }).then((message) => (elements.conteudoPopup.innerHTM = message));
};

function validaForm() {
    var a = elements.form.nome.value;
    var b = elements.form.email.value;
    var c = elements.form.telefone.value;
    var d = elements.form.senha.value;
    var e = elements.form.confirmaSenha.value;

    if (a != "" && b != "" && c != "" && d != "" && e != "") {
        if (d == e) {
            modal(true);
        } else {
            modal(false);
        }
    } else {
        modal(false);
    }
}
const modal = (acerto) => {
    if (acerto) {
        sendEmail();
        elements.colorPopup.style.backgroundColor = "#50884bc0";
        elements.conteudoPopup.innerHTML =
            "Email enviado com sucesso!";
    } else {
        elements.conteudoPopup.innerHTML =
            "Nem todos os campos foram preenchidos ou as senhas não correspondem. Tente Novamente!";
        elements.colorPopup.style.backgroundColor = "#E84a5f";
    }
    showModal();
};
const showModal = () => {
    elements.lembrete.style.display = "none";
    elements.popup.style.display = "block";
    elements.constainer.style.display = "none";
};

const light = () => {
    elements.nightMode = false;
    elements.buttons.nightMode.title = "Night Mode Off";
    document.body.style.backgroundColor = "#fff";
    document.h1.style.backgroundColor = "#99b898";
    elements.constainer.style.backgroundColor = "#2a363b";
};
const night = () => {
    elements.nightMode = true;
    elements.buttons.nightMode.title = "Night Mode On";
    document.body.style.backgroundColor = "#2a363b";
    document.h1.style.backgroundColor = "#E84a5f";
    elements.constainer.style.backgroundColor = "#99b898";
};

const limpar = () => {
    elements.form.nome.value = "";
    elements.form.email.value = "";
    elements.form.telefone.value = "";
    elements.form.senha.value = "";
    elements.form.confirmaSenha.value = "";
};

elements.buttons.btnSend.addEventListener("click", () => {
    validaForm();
});
elements.buttons.nightMode.addEventListener("click", () => {
    if (elements.nightMode) {
        light();
    } else {
        night();
    }
});
elements.buttons.fechaPopup.addEventListener(
    "click",
    () => {
        window.history.pushState("", "", "/");
        elements.popup.style.display = "none";
        elements.constainer.style.display = "block";
        limpar();
    },
    500
);