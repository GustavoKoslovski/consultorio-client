 <template class="especialidade">
  <div>
    <div>
        <h1 class="Titulolist"> Lista de Especialidades </h1>
    </div>

      <div class=" column is-9 pesquisa-bar"> 
        <input class="input is-success" type="text" placeholder="Buscar...">
        <button class="button is-link margem " >Buscar</button>
        <router-link to="/cadastroespecialidade"><button class="button is-primary margem">+</button></router-link>
      </div>
  
      <div class=" field column column is-10" style="width: 850px; margin-top: 15px;">
        <table class="table is-bordered is-fullwidth sombra centro">
          <thead>
            <tr>
              <th style="text-align: center;"> ID</th>
              <th style="text-align: center;"> Status</th>
              <th style="text-align: center;"> Nome</th>
              <th style="text-align: center;"> Opção</th>
            </tr>
          </thead>
           <tbody>
         <tr v-for="item in especialidadeList" :key="item.id">
        <th style="text-align: center;">{{ item.id }}</th>
        
        <th style="text-align: center;"> 
          <span v-if="item.ativo" class="tag is-success"> Ativo </span>
          <span v-if="!item.ativo" class="tag is-danger"> Inativo </span>
        </th>
        
        <th style="text-align: center;">{{ item.nome }}</th>
        <button class="button is-warning"> 
              <router-link to="/cadastrar-especialidade" @click="onClickPaginaDetalhar(item.id)">Detalhar</router-link>
            </button>
         </tr>
        </tbody>
         
        </table>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue } from 'vue-class-component';
  
  import { PageRequest } from '@/model/page/page-request'
  import { PageResponse } from '@/model/page/page-response'
  
  import { Especialidade } from '@/model/especialidade.model'
  import { EspecialidadeClient } from '@/client/especialidade.client'
  
  export default class EspecialidadeList extends Vue {
    public pageRequest: PageRequest = new PageRequest()
    public pageResponse: PageResponse<Especialidade> = new PageResponse()
    public especialidadeList: Especialidade[] = []
    public especialidadeClient!: EspecialidadeClient
    public mounted(): void {
      this.especialidadeClient = new EspecialidadeClient()
      this.listarEspecialidade()
    }
    public listarEspecialidade(): void {
      this.especialidadeClient.findByFiltrosPaginado(this.pageRequest)
        .then(
          success => {
            this.pageResponse = success
            this.especialidadeList = this.pageResponse.content
          },
          error => console.log(error)
        )
    }
 public onClickPaginaDetalhar(idEspecialidade: number){
      this.$router.push({ name: 'especialidade-detalhar', params: { id: idEspecialidade, model: 'detalhar' } })
    }

  }
</script>

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

