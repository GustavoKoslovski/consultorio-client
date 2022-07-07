 <template class="medico">
  <div>
    <div>
        <h1 class="Titulolist"> Lista de medicos </h1>
    </div>

      <div class=" column is-9 pesquisa-bar"> 
        <input class="input is-success" type="text" placeholder="Buscar...">
        <button class="button is-link margem " >Buscar</button>
        <router-link to="/cadastromedico"><button class="button is-primary margem">+</button></router-link>
      </div>
  
      <div class=" field column column is-10" style="width: 850px; margin-top: 15px;">
        <table class="table is-bordered is-fullwidth sombra centro">
          <thead>
            <tr>
              <th style="text-align: center;"> ID</th>
              <th style="text-align: center;"> Status</th>
              <th style="text-align: center;"> Nome</th>
              <th style="text-align: center;"> Especialidade</th>
              <th style="text-align: center;"> Opção</th>
            </tr>
          </thead>
           <tbody>
         <tr v-for="item in medicoList" :key="item.id">
        <th style="text-align: center;">{{ item.id }}</th>
        
        <th style="text-align: center;"> 
          <span v-if="item.ativo" class="tag is-success"> Ativo </span>
          <span v-if="!item.ativo" class="tag is-danger"> Inativo </span>
        </th>
        
        <th style="text-align: center;">{{ item.nome }}</th>
        <th style="text-align: center;">{{ item.especialidade }}</th>
        <button class="button is-warning"> 
              <router-link to="/cadastrar-medico" @click="onClickPaginaDetalhar(item.id)">Detalhar</router-link>
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
  
  import { Medico } from '@/model/medico.model'
  import { MedicoClient } from '@/client/medico.client'
  
  export default class medicoList extends Vue {
    public pageRequest: PageRequest = new PageRequest()
    public pageResponse: PageResponse<Medico> = new PageResponse()
    public medicoList: Medico[] = []
    public medicoClient!: MedicoClient
    public mounted(): void {
      this.medicoClient = new MedicoClient()
      this.listarmedico()
    }
    public listarmedico(): void {
      this.medicoClient.findByFiltrosPaginado(this.pageRequest)
        .then(
          success => {
            this.pageResponse = success
            this.medicoList = this.pageResponse.content
          },
          error => console.log(error)
        )
    }
 public onClickPaginaDetalhar(idmedico: number){
      this.$router.push({ name: 'medico-detalhar', params: { id: idmedico, model: 'detalhar' } })
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

