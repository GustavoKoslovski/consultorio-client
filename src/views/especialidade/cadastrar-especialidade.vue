<template class="cadastroespecialidade">
    <div>
       <div style="display: inline">
                        <div class="column is-size-3" v-if="model==='detalhar'" >
                            <h1>Detalhes do especialidade</h1>
                        </div>
                        <div class="column is-size-3" v-if="model!='detalhar' && model!= 'editar'" >
                            <h1>Cadastro de especialidade</h1> 
                        </div>
                        <div class="column is-size-3" v-if="model==='editar'" >
                            <h1>Edição de especialidade</h1> 
                        </div>

         <div class="columns" v-if="notification.ativo">
        <div class="column is-12">
            <div :class="notification.classe">
                <button @click="onClickFecharNotificacao()" class="delete" ></button>
                {{ notification.mensagem }}
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column is-12 is-size-3">
            <label class="label">
                <input v-model="especialidade.ativo" checked type="checkbox" :disabled="model==='detalhar'">
                Ativar Especialidade
            </label>
        </div>
    </div>
        <div class=" formulario">
                <div>
                    <label class="label"><p>Nome: </p></label>
                    <input class=" input is-link" type="text" v-model=" especialidade.nome " placeholder="Nome da Especialidade" style="width: 220px; height: 30px;" :disabled="model==='detalhar'">
                </div>
                <div class="margembutton">
                     <div class="linha4 column" style="display:flex; margin-top:10px;">
                        <div class="opcoes column" v-if="model!='detalhar' && model!= 'editar'">
                            <a href="/especialidade-list" class="button is-link">Voltar</a>
                            <button class="button is-primary" @click="onClickCadastrar()" >Salvar</button>
                        </div>
                        <div class="opcoes column" v-if="model==='detalhar'">
                            <a href="/especialidade-list" class="button is-link">Voltar</a>
                            <button class="button is-warning" @click="onClickPaginaEditar(especialidade.id)">Editar</button>
                            <button class="button is-danger" @click="onClickDeletar">Excluir</button>
                        </div>
                        <div class="opcoes column" v-if="model==='editar'">
                            <a href="/especialidade-list" class="button is-link">Voltar</a>
                            <button class="button is-primary" @click="onClickSalvarAlteracao()">Salvar Alterações</button>
                        </div>
                    </div>
                </div>
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

.formulario{
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

<script lang="ts">
    import { Vue } from 'vue-class-component';
    import { Especialidade } from '@/model/especialidade.model'
    import { Notification } from '@/model/notification.model'
    import { EspecialidadeClient } from '@/client/especialidade.client'
    import { Prop } from 'vue-property-decorator'

    export default class EspecialidadeForm extends Vue {
        public especialidadeClient!: EspecialidadeClient
        public especialidade : Especialidade = new Especialidade()
        public notification : Notification = new Notification()
    
         @Prop({ type: Number, required: false })
        private readonly id!: number

        @Prop({ type: String, default: false })
        readonly model!: string

        public mounted(): void {
            this.especialidadeClient = new EspecialidadeClient()
            this.carregarEspecialidade()

            console.log(this.id)
            console.log(this.model)
        }
        
        public onClickCadastrar(): void {
            
            this.especialidadeClient.cadastrar(this.especialidade)
                .then(
                success => {
                    this.notification = this.notification.new(true, 'notification is-success', 'especialidade cadastrado com sucesso!')
                    this.onClickLimpar()
                }, error => {
                    this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
                    
                })
        }

        public onClickDeletar(): void {
            this.especialidadeClient.desativar(this.especialidade).then(sucess => {
            this.notification = this.notification.new(true, 'notification is-success', 'especialidade foi Desativado com sucesso!')
            }, error => {
            this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
            })
        }

        public onClickPaginaEditar(idEspecialidade: number){
            this.$router.push({ name: 'especialidade-editar', params: { id: idEspecialidade, model: 'editar' } })
            console.log("ta chamando")
        }

        public onClickSalvarAlteracao(): void {
            this.especialidadeClient.editar(this.especialidade).then(success => {
            this.notification = this.notification.new(true, 'notification is-success', 'especialidade foi Editado com sucesso!')
            }, error => {
            this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
            })
        }


        public carregarEspecialidade(): void{

                this.especialidadeClient.findById(this.id).then(value => {
                this.especialidade = value
                console.log("especialidade" + value)
                }).catch(error => {
                    console.log(error)
                })
            
        }

        public onClickFecharNotificacao(): void {
            this.notification = new Notification()
        }

        public onClickLimpar(): void {
            this.especialidade = new Especialidade()
        }

    }
</script>