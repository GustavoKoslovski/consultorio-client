<template class="cadastrosecretaria">
     <div>
          <div>
               <h1 class="Titulo"> Cadastro de Secretaria </h1>
          </div>
          <div class=" formulario">
               <div class="control column is-half">
                            <label class="label">Nome:</label>
                            <input class="input nome" type="text" v-model="secretaria.nome" placeholder="" :disabled="model==='detalhar'">
                        </div>
                        <div class="control column is-half">
                            <label class="label">telefone:</label>
                            <input class="input nome" type="text" v-model="secretaria.telefone" placeholder="" :disabled="model==='detalhar'">
                        </div>  
                        <div class="control column is-half">
                            <label class="label">celular:</label>
                            <input class="input nome" type="text" v-model="secretaria.celular" placeholder="" :disabled="model==='detalhar'">
                        </div>  
                        <div class="control column is-half">
                            <label class="label">nacionalidade:</label>
                            <input class="input nome" type="text" v-model="secretaria.nacionalidade" placeholder="" :disabled="model==='detalhar'">
                        </div>  
                        <div class="control column is-half">
                            <label class="label">cpf:</label>
                            <input class="input nome" type="text" v-model="secretaria.cpf" placeholder="" :disabled="model==='detalhar'">
                        </div>  
                        <div class="control column is-half">
                            <label class="label">rg:</label>
                            <input class="input nome" type="text" v-model="secretaria.rg" placeholder="" :disabled="model==='detalhar'">
                        </div> 
                        <div class="control column is-half">
                            <label class="label">email:</label>
                            <input class="input nome" type="text" v-model="secretaria.email" placeholder="" :disabled="model==='detalhar'">
                        </div>
                        <div class="control column is-half">
                            <label class="label">salario:</label>
                            <input class="input nome" type="text" v-model="secretaria.salario" placeholder="" :disabled="model==='detalhar'">
                        </div>   
                        <div class="control column is-half">
                            <label class="label">Data de contratação:</label>
                            <input class="input nome" type="date" v-model="secretaria.dataContratacao" placeholder="" :disabled="model==='detalhar'">
                        </div>
                        <div class="control column is-half">
                            <label class="label">Pis:</label>
                            <input class="input nome" type="text" v-model="secretaria.pis" placeholder="" :disabled="model==='detalhar'">
                        </div>   
                       
                        <div class="control column is-half">
                            <label class="label">login:</label>
                            <input class="input nome" type="text" v-model="secretaria.login" placeholder="" :disabled="model==='detalhar'">
                        </div>   
                        <div class="control column is-half">
                            <label class="label">senha:</label>
                            <input class="input nome" type="text" v-model="secretaria.senha" placeholder="" :disabled="model==='detalhar'">
                        </div>
                        <div class="control column is-half">
                            <label class="label">sexo:</label>
                            <input class="input nome" type="text" v-model="secretaria.sexo" placeholder="" :disabled="model==='detalhar'">
                        </div>                                     
               <div class="margembutton">
                     <div class="linha4 column" style="display:flex; margin-top:10px;">
                        <div class="opcoes column" v-if="model!='detalhar' && model!= 'editar'">
                            <a href="/secretaria-list" class="button is-link">Voltar</a>
                            <button class="button is-primary" @click="onClickCadastrar()" >Salvar</button>
                        </div>
                        <div class="opcoes column" v-if="model==='detalhar'">
                            <a href="/secretaria-list" class="button is-link">Voltar</a>
                            <button class="button is-warning" @click="onClickPaginaEditar(secretaria.id)">Editar</button>
                            <button class="button is-danger" @click="onClickDeletar">Excluir</button>
                        </div>
                        <div class="opcoes column" v-if="model==='editar'">
                            <a href="/secretaria-list" class="button is-link">Voltar</a>
                            <button class="button is-primary" @click="onClickSalvarAlteracao()">Salvar Alterações</button>
                        </div>
                    </div>
               </div>
          </div>
     </div>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component'
    import { Prop } from 'vue-property-decorator'

    import { Secretaria } from '@/model/secretaria.model'
    import { Notification } from '@/model/notification.model'
    import { SecretariaClient } from '@/client/secretaria.client'

  
    export default class SecretariaForm extends Vue {

        public secretariaClient!: SecretariaClient
        public secretaria : Secretaria = new Secretaria()
        public notification : Notification = new Notification()
    
        @Prop({ type: Number, required: false })
        private readonly id!: number

        @Prop({ type: String, default: false })
        readonly model!: string

        public mounted(): void {
            this.secretariaClient = new SecretariaClient()
            this.carregarsecretaria()

            console.log(this.id)
            console.log(this.model)
        }
        
        public onClickCadastrar(): void {
            
            this.secretariaClient.cadastrar(this.secretaria)
                .then(
                success => {
                    this.notification = this.notification.new(true, 'notification is-success', 'secretaria cadastrado com sucesso!')
                    this.onClickLimpar()
                }, error => {
                    this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
                    
                })
        }

        public onClickDeletar(): void {
            this.secretariaClient.desativar(this.secretaria).then(sucess => {
            this.notification = this.notification.new(true, 'notification is-success', 'secretaria foi Desativado com sucesso!')
            }, error => {
            this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
            })
        }

        public onClickPaginaEditar(idSecretaria: number){
            this.$router.push({ name: 'secretaria-editar', params: { id: idSecretaria, model: 'editar' } })
            console.log("ta chamando")
        }

        public onClickSalvarAlteracao(): void {
            this.secretariaClient.editar(this.secretaria).then(success => {
            this.notification = this.notification.new(true, 'notification is-success', 'secretaria foi Editado com sucesso!')
            }, error => {
            this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
            })
        }
        public carregarsecretaria(): void{
                this.secretariaClient.findById(this.id).then(value => {
                this.secretaria = value
                console.log("secretaria" + value)
                }).catch(error => {
                    console.log(error)
                })
            
        }

        public onClickFecharNotificacao(): void {
            this.notification = new Notification()
        }

        public onClickLimpar(): void {
            this.secretaria = new Secretaria()
        }

    }
</script>

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

.formulariosecretaria{
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
