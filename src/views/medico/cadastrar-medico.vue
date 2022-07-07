<template class="cadastromedico">
    <div>
       <div style="display: inline">
                        <div class="column is-size-3" v-if="model==='detalhar'" >
                            <h1>Detalhes do medico</h1>
                        </div>
                        <div class="column is-size-3" v-if="model!='detalhar' && model!= 'editar'" >
                            <h1>Cadastro de medico</h1> 
                        </div>
                        <div class="column is-size-3" v-if="model==='editar'" >
                            <h1>Edição de medico</h1> 
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
                <input v-model="medico.ativo" checked type="checkbox" :disabled="model==='detalhar'">
                Ativar medico
            </label>
        </div>
    </div>
        <div class=" formulario">
                <div>
                    <label class="label"><p>Nome: </p></label>
                    <input class=" input is-link" type="text" v-model=" medico.nome " placeholder="Nome da medico" style="width: 220px; height: 30px;" :disabled="model==='detalhar'">
                </div>
                <div class="">
                         <label class="label">telefone:</label>
                         <input class="input is-link" type="text" v-model="medico.telefone" placeholder="" :disabled="model==='detalhar'">
                    </div>  
                    <div class="">
                         <label class="label">celular:</label>
                         <input class="input is-link" type="text" v-model="medico.celular" placeholder="" :disabled="model==='detalhar'">
                    </div>  
                    <div class="">
                         <label class="label">nacionalidade:</label>
                         <input class="input is-link" type="text" v-model="medico.nacionalidade" placeholder="" :disabled="model==='detalhar'">
                    </div>  
                    <div class="">
                         <label class="label">cpf:</label>
                         <input class="input is-link" type="text" v-model="medico.cpf" placeholder="" :disabled="model==='detalhar'">
                    </div>  
                    <div class="">
                         <label class="label">rg:</label>
                         <input class="input is-link" type="text" v-model="medico.rg" placeholder="" :disabled="model==='detalhar'">
                    </div> 
                    <div class="">
                         <label class="label">email:</label>
                         <input class="input is-link" type="text" v-model="medico.email" placeholder="" :disabled="model==='detalhar'">
                    </div>
                    <div class="">
                         <label class="label">crm:</label>
                         <input class="input is-link" type="text" v-model="medico.crm" placeholder="" :disabled="model==='detalhar'">
                    </div>   
                    <div class="">
                         <label class="label">consultorio:</label>
                         <input class="input is-link" type="text" v-model="medico.consultorio" placeholder="" :disabled="model==='detalhar'">
                    </div>
                    <div class="">
                         <label class="label">% De Participação:</label>
                         <input class="input is-link" type="text" v-model="medico.porcentagemParticipacao" placeholder="" :disabled="model==='detalhar'">
                    </div>   
                    <div class="">
                         <label class="label">valor da consulta:</label>
                         <input class="input is-link" type="text" v-model="medico.valorConsulta" placeholder="" :disabled="model==='detalhar'">
                    </div>        
                    <div class="">
                         <label class="label">login:</label>
                         <input class="input is-link" type="text" v-model="medico.login" placeholder="" :disabled="model==='detalhar'">
                    </div>   
                    <div class="">
                         <label class="label">senha:</label>
                         <input class="input is-link" type="text" v-model="medico.senha" placeholder="" :disabled="model==='detalhar'">
                    </div>
                    <div class="">
                         <label class="label">sexo:</label>
                         <input class="input is-link" type="text" v-model="medico.sexo" placeholder="" :disabled="model==='detalhar'">
                    </div>                                     
                <div class="margembutton">
                     <div class="linha4 column" style="display:flex; margin-top:10px;">
                        <div class="opcoes column" v-if="model!='detalhar' && model!= 'editar'">
                            <a href="/medico-list" class="button is-link">Voltar</a>
                            <button class="button is-primary" @click="onClickCadastrar()" >Salvar</button>
                        </div>
                        <div class="opcoes column" v-if="model==='detalhar'">
                            <a href="/medico-list" class="button is-link">Voltar</a>
                            <button class="button is-warning" @click="onClickPaginaEditar(medico.id)">Editar</button>
                            <button class="button is-danger" @click="onClickDeletar">Excluir</button>
                        </div>
                        <div class="opcoes column" v-if="model==='editar'">
                            <a href="/medico-list" class="button is-link">Voltar</a>
                            <button class="button is-primary" @click="onClickSalvarAlteracao()">Salvar Alterações</button>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    </div>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component'
    import { Prop } from 'vue-property-decorator'

    import { Medico } from '@/model/medico.model'
    import { Notification } from '@/model/notification.model'
    import { MedicoClient } from '@/client/medico.client'

  
    export default class medicoForm extends Vue {

        public medicoClient!: MedicoClient
        public medico : Medico = new Medico()
        public notification : Notification = new Notification()
    
        @Prop({ type: Number, required: false })
        private readonly id!: number

        @Prop({ type: String, default: false })
        readonly model!: string

        public mounted(): void {
            this.medicoClient = new MedicoClient()
            this.carregarmedico()

            console.log(this.id)
            console.log(this.model)
        }
        
        public onClickCadastrar(): void {
            
            this.medicoClient.cadastrar(this.medico)
                .then(
                success => {
                    this.notification = this.notification.new(true, 'notification is-success', 'medico cadastrado com sucesso!')
                    this.onClickLimpar()
                }, error => {
                    this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
                    
                })
        }

        public onClickDeletar(): void {
            this.medicoClient.desativar(this.medico).then(sucess => {
            this.notification = this.notification.new(true, 'notification is-success', 'medico foi Desativado com sucesso!')
            }, error => {
            this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
            })
        }

        public onClickPaginaEditar(idMedico: number){
            this.$router.push({ name: 'medico-editar', params: { id: idMedico, model: 'editar' } })
            console.log("ta chamando")
        }

        public onClickSalvarAlteracao(): void {
            this.medicoClient.editar(this.medico).then(success => {
            this.notification = this.notification.new(true, 'notification is-success', 'medico foi Editado com sucesso!')
            }, error => {
            this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
            })
        }
        public carregarmedico(): void{
                this.medicoClient.findById(this.id).then(value => {
                this.medico = value
                console.log("medico" + value)
                }).catch(error => {
                    console.log(error)
                })
            
        }

        public onClickFecharNotificacao(): void {
            this.notification = new Notification()
        }

        public onClickLimpar(): void {
            this.medico = new Medico()
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

