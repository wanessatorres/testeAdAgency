$(document).ready(function () {
	$("#form_estudantes").submit(function(){
		var formData = $("#form_estudantes").serialize();
		var nome = $("#nome").val()+" "+$("#sobrenome").val();
		$.ajax({
                url: "recebe_form.php",
                type: 'POST',
                data: "form="+formData,
                success: function (data) {
                    if(data == "OK"){
                        alert("Seja bem vindo " + nome);
                    }else{
                        alert("Erro no cadastro de convidado");
                    }
                }
            });
		 return false;
	});	
	$("#email2").blur(function(){
		var email = "";
		if($("#email").val() != ""){
			var email = $("#email").val();
			if($(this).val() != email){
				alert("E-mails são diferentes, preencher corretamente");
				$(this).val("");
			}
		}
	});
	$("#email").blur(function(){
		var email2 = "";
		if($("#email2").val() != ""){
			var email2 = $("#email2").val();
			if($(this).val() != email2){
				alert("E-mails são diferentes, preencher corretamente");
				$(this).val("");
			}
		}

	});
});