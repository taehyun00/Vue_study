<template>
  <input
    v-if="FieldType == ''"
    type="text"
    :value="Value"
    :placeholder="PlaceHolder"
    :class="Input"
    @input="handlePlainInputChange"
  />


  <input
    v-else
    type="text"
    :value="RenderContent"
    :placeholder="PlaceHolder"
    :class="Input"
    @input="handleContentChange"
  />
</template>

<script>
import { ref } from "vue"

export default {
  name: "TheInput",
  props: {
    PlaceHolder: {
      type: String,
      default: "입력해주세요"
    },
    Value: {
      type: String,
      default: ""
    },
    FieldType: {
      type: String,
      default: ""   
    }
  },
  emits: ['update:Value', 'change'],
  setup(props, { emit }) {
    const Input = ref("Input")
    const Content = ref("")      
    const RenderContent = ref("") 


    const handlePlainInputChange = (e) => {
      const value = e.target.value
      emit('update:Value', value)
      emit('change', value)
    }


    const handleContentChange = (e) => {
      const typedValue = e.target.value
      RenderContent.value = "•".repeat(typedValue.length)

      if (e.inputType === "deleteContentBackward") {

        Content.value = Content.value.slice(0, -1)
      } else {
        const lastChar = typedValue[typedValue.length - 1]
        if (lastChar) {
          Content.value = Content.value + lastChar
        }
      }

      emit('update:Value', Content.value)
      emit('change', Content.value)
    }

    return {
      Input,
      RenderContent,
      handlePlainInputChange,
      handleContentChange
    }
  }
}
</script>

<style>
.Input {
  border: none;
  border-bottom: 1px solid #BBBBBB;
  background-color: #3E3E3E;
  width: 100%;
  padding: 12px 0px;

  font-family: "JR";
  font-size: 20px;
  color: #BBBBBB;
  outline: none;
}
.Input::placeholder {
  color: #BBBBBB;
}
</style>
