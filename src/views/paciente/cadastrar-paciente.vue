<template class="cadastropaciente">
     <div>
          <div>
               <h1 class="Titulo"> Cadastro de Paciente </h1>
          </div>

          <div style="margin-left: 400px">
               <button class="button is-link">Voltar</button>
          </div>

          <div class=" formulario">
               <div>
                    <label class="label"><p>Nome completo: </p></label>
                    <input class=" input is-link" type="text" style="width: 220px; height: 30px; ">
               </div>
          <br>
               <div>
                    <label class="label"><p>Telefone: </p></label>
                    <input class=" input is-link" type="text" style="width: 220px; height: 30px; ">
               </div>
          <br>
               <div>
                    <label class="label"><p>Celular: </p></label>
                    <input class=" input is-link" type="text" style="width: 220px; height: 30px; ">
               </div>
          <br>
               <div>
                    <label class="label"><p>Nacionalidade: </p></label>
                    <input class=" input is-link" type="text" style="width: 220px; height: 30px; ">
               </div>
          <br>
               <div>
                    <label class="label"><p>CPF: </p></label>
                    <input class=" input is-link" type="text" style="width: 220px; height: 30px; ">
               </div>
          <br>
               <div>
                    <label class="label"><p>RG: </p></label>
                    <input class=" input is-link" type="text" style="width: 220px; height: 30px; ">
               </div>
          <br>
               <div>
                    <label class="label"><p>Sexo: </p></label>
                    <input class=" input is-link" type="text" style="width: 220px; height: 30px; ">
               </div>
          <br>
               <div>
                    <label class="label"><p>Tipo de Atendimento: </p></label>
                    <input class=" input is-link" type="text" style="width: 220px; height: 30px; ">
               </div>
          <br>
               <div>
                    <label class="label"><p>E-mail: </p></label>
                    <input class=" input is-link" type="text" style="width: 220px; height: 30px; ">
               </div>
          <br>
               <div>
                    <label class="label"><p>Número do Cartão/Convênio: </p></label>
                    <input class=" input is-link" type="text" style="width: 220px; height: 30px; ">
               </div>
          <br>
               <div>
                    <label class="label"><p>Data Vencimento: </p></label>
                    <input class=" input is-link" type="date" style="width: 220px; height: 30px; ">
               </div>
          <br>
               <div>
                    <label class="label"><p>Convênio:</p></label>
                    <input class=" input is-link" type="text" style="width: 220px; height: 30px; ">
               </div>
          <br>
               <div>
                    <label class="label"><p>Login: </p></label>
                    <input class=" input is-link" type="text" style="width: 220px; height: 30px; ">
               </div>
          <br>
               <div>
                    <label class="label"><p>Senha: </p></label>
                    <input class=" input is-link" type="text" style="width: 220px; height: 30px; ">
               </div>

               <div class="margembutton">
                    <button class="button is-primary">Salvar</button>
               </div>
          </div>
     </div>
</template>

<style lang="scss">
@import "~bulma/bulma.sass";

.Titulo{
    margin-left: 0px;
    font-size: 28px;
    border-radius: 30px;
}

.pesquisa-bar{
    display: flex;
}

.formulariomedico{
    width: 700px;
    height: 1000px;
}

.sombra{
    box-shadow: 12px 6px 6px rgba(102, 157, 96, 0.559);
}

.margembutton{
    display: flex;
    bottom: 0;
    right: 0;
    margin-top: 15px;
    margin-bottom: 4px;
    margin-left: 66px;
    padding-bottom: 30px;
}

p{
  font-weight: bold;
}

.table tr{
    border: solid 1px #42b983;
}

.table th{
    border: solid 1px #42b983;
}

.table td{
    border: solid 1px #42b983;
}

</style>
