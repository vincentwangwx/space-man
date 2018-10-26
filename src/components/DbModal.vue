<template>
    <el-dialog title="Edit" v-model="dialogFormVisible" :close-on-click-modal="false" :show-close="false">
        <el-form :model="form">
            <el-form-item label="item_id" :label-width="formLabelWidth">
                <el-input :disabled="true" v-model="form.id" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="username" :label-width="formLabelWidth">
                <el-input :disabled="itemDisabled" v-model="form.username" auto-complete="off"></el-input>
            </el-form-item>

            <el-form-item label="email" :label-width="formLabelWidth">
                <el-input :disabled="itemDisabled" v-model="form.email" auto-complete="off"></el-input>
            </el-form-item>

            <el-form-item label="phone" :label-width="formLabelWidth">
                <el-input :disabled="itemDisabled" v-model="form.phone" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="sex" :label-width="formLabelWidth">
                <el-input :disabled="itemDisabled" v-model="form.sex" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="zone" :label-width="formLabelWidth">
                <el-input :disabled="itemDisabled" v-model="form.zone" auto-complete="off"></el-input>
            </el-form-item>

        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button :plain="true" type="danger" @click="canclemodal">Cancel</el-button>
            <el-button :disabled="itemDisabled" :plain="true" @click="updateForm(form)">Save</el-button>
        </div>
    </el-dialog>
</template>


<script>

    export default {
        data(){
            return {
                formLabelWidth: '120px',
            }
        },
        props: ['dialogFormVisible', 'form','itemDisabled'],

        methods: {
            updateForm: function (formName) {
                let itemId = formName.id;
                let phone = formName.phone;
                let zone = formName.zone;
                let username = formName.username;
                let email = formName.email;
                let sex = formName.sex;
                var _this = this;
                if(!itemId){
                    this.$axios.put(this.global.serverPath+'/persons/', {
                    phone: phone,
                    zone: zone,
                    username:username,
                    email:email,
                    sex:sex
                    })
                    .then(function (response) {
                        console.log(response);
                        _this.$parent.getCustomers();
                        _this.form = response.data;
                        
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                }else{
                    this.$axios.put(this.global.serverPath+'/persons/detail/' + itemId, {
                    phone: phone,
                    zone: zone,
                    username:username,
                    email:email,
                    sex:sex
                    })
                    .then(function (response) {
                        console.log(response);
                        _this.$emit('refreshData');
                        //this.$parent.getCustomers();
                        //this.form = response.data;
                        
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                }
                //this.props.dialogFormVisible = false;
                
                this.$emit('canclemodal');
                //location.reload();
            },
            canclemodal: function () {
                this.$emit('canclemodal');
            }
        }

    }

</script>