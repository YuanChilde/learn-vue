<template>
    <div>
        <a-form :form="form">
            <a-form-item
                    :label-col="formItemLayout.labelCol"
                    :wrapper-col="formItemLayout.wrapperCol"
                    label="姓名"
            >
                <a-input
                        v-decorator="[
          'username',
          {rules: [{ required: true, message: '请输入姓名' }]}
        ]"
                        placeholder="姓名"
                />
            </a-form-item>
            <a-form-item
                    :label-col="formItemLayout.labelCol"
                    :wrapper-col="formItemLayout.wrapperCol"
                    label="昵称"
            >
                <a-input
                        v-decorator="[
          'nickname',
          {rules: [{ required: checkNick, message: '请输入昵称' }]}
        ]"
                        placeholder="昵称"
                />
            </a-form-item>
            <a-form-item
                    :label-col="formTailLayout.labelCol"
                    :wrapper-col="formTailLayout.wrapperCol"
            >
                <a-checkbox
                        :checked="checkNick"
                        @change="handleChange"
                >
                    昵称必填
                </a-checkbox>
            </a-form-item>
            <a-form-item
                    :label-col="formTailLayout.labelCol"
                    :wrapper-col="formTailLayout.wrapperCol"
            >
                <a-button
                        type="primary"
                        @click="check"
                >
                    打勾
                </a-button>
            </a-form-item>
        </a-form>

        <span>

      <input :value="value"
              @input="$emit('balabala', $event.target.value)">
    </span>
    </div>
</template>

<script>
    const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 8 },
    };
    const formTailLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 8, offset: 4 },
    };
    export default {
        data () {
            return {
                checkNick: false,
                formItemLayout,
                formTailLayout,
                form: this.$form.createForm(this),
            };
        },
        props: ["value"],
        model: {
            prop: 'value',
            event: 'balabala'
        },
        methods: {
            check () {
                this.form.validateFields(
                    (err,values) => {
                        if (!err) {
                            console.info('success');
                            console.log(values);
                        }
                    },
                );
            },
            handleChange  (e) {
                this.checkNick = e.target.checked;
                this.$nextTick(() => {
                    this.form.validateFields(['nickname'], { force: true }, (errors, values)=> errors);
                });
            },
        },
    }
</script>

<style scoped>

</style>
