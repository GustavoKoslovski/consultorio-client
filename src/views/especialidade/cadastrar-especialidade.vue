<template class="cadastroespecialidade">
    <div>
        <div>
            <h1 class="Titulo"> Cadastro de Especialidade </h1>
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
                <input v-model="especialidade.ativo" checked type="checkbox">
                Ativar Especialidade
            </label>
        </div>
    </div>

        <div style="margin-left: 400px">
            <li><router-link to="/especialidade"><button class="button is-link">Voltar</button></router-link></li>
        </div>

        <div class=" formulario">
                <div>
                    <label class="label"><p>Nome: </p></label>
                    <input class=" input is-link" type="text" v-model=" especialidade.nome " placeholder="Nome da Especialidade" style="width: 220px; height: 30px; ">
                </div>
                <div class="margembutton">
                    <button class="button is-primary" @click="onClickCadastrar()" >Salvar</button>
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

    export default class EspecialidadeForm extends Vue {
        public especialidadeClient!: EspecialidadeClient
        public especialidade : Especialidade = new Especialidade()
        public notification : Notification = new Notification()
    
        public mounted(): void {
            this.especialidadeClient = new EspecialidadeClient()
        }
        
        public onClickCadastrar(): void {
            this.especialidadeClient.cadastrar(this.especialidade)
                .then(
                success => {
                    this.notification = this.notification.new(true, 'notification is-success', 'Especialidade Cadastrada com sucesso!!!')
                    this.onClickLimpar()
                }, error => {
                    this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
                    this.onClickLimpar()
                })
        }
        public onClickFecharNotificacao(): void {
            this.notification = new Notification()
        }
        public onClickLimpar(): void {
            this.especialidade = new Especialidade()
        }
        // private created(): void { }
    }
</script>