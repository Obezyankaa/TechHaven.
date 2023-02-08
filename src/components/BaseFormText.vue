<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable max-len -->
<template>
        <BaseFormField :title="title" :error="errore">
            <input class="form__input" type="type" v-model="dataValue"  :placeholder="placeholder">
        </BaseFormField>
</template>

<script>
import formFieldMixin from '@/mixins/formFieldMixin';

export default {
  props: ['type'],
  mixins: [formFieldMixin],
};
</script>
