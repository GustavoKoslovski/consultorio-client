<template class="paciente">
  <div>
    <div>
      <h1 class="Titulolist"> Lista de Pacientes </h1>
    </div>
        <div class=" column is-9 pesquisa-bar"> 
          <input class="input is-success" type="text" placeholder="Buscar...">
          <button class="button is-link margem">Buscar</button>
          <router-link to="/cadastropaciente"><button class="button is-primary margem">+</button></router-link>
        </div>

        <div class=" field column column is-12" style="width: 850px; margin-top: 15px;">
          <table class="table is-bordered is-fullwidth sombra centro">
            <thead>
              <tr>
                <th style="text-align: center;"> ID</th>
                <th style="text-align: center;"> Nome</th>
                <th style="text-align: center;"> CPF</th>
                <th style="text-align: center;"> Tipo de atendimento</th>
                <th style="text-align: center;"> Opção</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><p>01</p></td> 
                <td>Joao Soares</td>
                <td>333.213.542-03</td>
                <td>Convênio</td>
                <td><button class="button is-link is-focused"><p>Detalhes</p></button></td>
              </tr>
              <tr>
                <td><p>02</p></td> 
                <td>Carlos Miranda</td>
                <td>313.553.672-02</td>
                <td>Particular</td>
                <td><button class="button is-link is-focused"><p>Detalhes</p></button></td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
</template>

<style lang="scss">
@import "~bulma/bulma.sass";

.Titulolist{
    margin-left: 0px;
    font-size: 28px;
    border-radius: 30px;
}

.pesquisa-bar{
    display: flex;
}

.sombra{
    box-shadow: 12px 6px 6px rgba(102, 157, 96, 0.559);
}

p{
  font-weight: bold;
}

.centro{
  text-align: center;
}

.margem{
    margin-left: 10px;
}

tbody tr:hover{
  background-color:  rgba(53, 53, 53, 0.177);
}

.table tr{
    border: solid 1px rgb(1, 139, 47);
}

.table th{
    border: solid 1px rgb(1, 139, 47);
}

.table td{
    border: solid 1px rgb(1, 139, 47);
}

</style>
